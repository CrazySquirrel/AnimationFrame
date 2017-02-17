"use strict";
/**
 * Import interfaces
 */
import IWindow from "../interfaces/IWindow";
/**
 * Declare window interface
 */
declare let window: IWindow;
declare let global: any;
declare let module: any;
declare let require: any;

const VERSION = "1.0.22";

/**
 * Import interface
 */
import IAnimationFrame from "../interfaces/IAnimationFrame";

let root: any;

if (typeof window === "undefined") {
  if (typeof global !== "undefined") {
    root = global;
  } else {
    root = {};
  }
} else {
  root = window;
}

/**
 * requestAnimationFrame polyfill
 */
root.requestAnimationFrame = (() => {
  return (
          typeof root !== "undefined" &&
          (
              root.requestAnimationFrame ||
              root.webkitRequestAnimationFrame ||
              root.mozRequestAnimationFrame ||
              root.oRequestAnimationFrame ||
              root.msRequestAnimationFrame
          )
      ) ||
      (
          (callback) => {
            root.setTimeout(callback, 1000 / 60);
          }
      );
})();
/**
 * Bind polyfill
 */
function bind(b) {
  /**
   * If try bind variable that not a function, then throw error
   */
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }
  /**
   * let Array slice function
   */
  let a = Array.prototype.slice;
  let f = a.call(arguments, 1);
  let e = this;

  function c() {
    /*
     if (
     typeof root !== "undefined" &&
     typeof root.console === "object" &&
     typeof root.console.log === "function"
     ) {
     root.console.log("Bind polyfill");
     }
     */
  }

  function d() {
    return e.apply(this instanceof c ? this : b || root, f.concat(a.call(arguments)));
  }

  /**
   * Registered this prototype as prototype to bind implementation functions
   */
  c.prototype = this.prototype;
  d.prototype = new c();
  /**
   * Return bind polyfill
   */
  return d;
}
Function.prototype.bind = Function.prototype.bind || bind;
/**
 * Object.keys polyfill
 */
function keys() {
  let hasDoNotEnumBug = !({toString: null}).propertyIsEnumerable("toString");
  let doNotEnums = [
    "toString",
    "toLocaleString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "constructor",
  ];
  let doNotEnumsLength = doNotEnums.length;

  return (
      (obj) => {
        if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
          throw new TypeError("Object.keys called on non-object");
        }

        let result = [];

        for (let prop in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDoNotEnumBug) {
          for (let i = 0; i < doNotEnumsLength; i++) {
            if (Object.prototype.hasOwnProperty.call(obj, doNotEnums[i])) {
              result.push(doNotEnums[i]);
            }
          }
        }
        return result;
      }
  );
}
Object.keys = Object.keys || keys();
/**
 * Request animation frame call stack class
 */
class AnimationFrame implements IAnimationFrame {

  public version: string;

  public parallelStack: any;
  public serialStack: any;
  public stack: any;

  private serialID: number;

  /**
   * Create request animation frame
   */
  constructor() {
    this.version = VERSION;

    this.serialID = 0;
    /**
     * Subscribed methods
     */
    this.parallelStack = {};
    this.serialStack = {};
    /**
     * Backward compatibility
     */
    this.stack = this.parallelStack;
    /**
     * Start requestAnimationFrame watcher
     */
    this.watch();
  }

  /**
   * Subscribe method to watch
   * @param context
   * @param callback
   * @param params
   * @param ID
   * @return {boolean|string}
   */
  public subscribe(context: Object = root,
                   callback: Function = () => {
                     return null;
                   },
                   params: Array<any> = [],
                   ID?: string): boolean|string {
    return this.parallelSubscribe({
      context,
      callback,
      params,
      ID,
    });
  }

  /**
   * Parallel callback subscribe
   * @param _params
   * @return {boolean|string}
   */
  public parallelSubscribe(_params): boolean|string {
    _params = this.prepareParams(_params);
    if (_params) {
      /**
       * Add method to the stack
       */
      this.parallelStack[_params.ID] = {
        callback: _params.callback,
        context: _params.context,
        params: _params.params,
      };
      /**
       * Return subscription ID
       */
      return _params.ID;
    } else {
      return false;
    }
  }

  /**
   * Serial callback subscribe
   * @param _params
   * @return {boolean|string}
   */
  public serialSubscribe(_params): boolean|string {
    _params = this.prepareParams(_params);
    if (_params) {
      /**
       * Add method to the stack
       */
      this.serialStack[_params.ID] = {
        callback: _params.callback,
        context: _params.context,
        params: _params.params,
      };
      /**
       * Return subscription ID
       */
      return _params.ID;
    } else {
      return false;
    }
  }

  /**
   * Unsubscribe method by ID
   * @param ID
   */
  public unsubscribe(ID: string): void {
    this.parallelUnsubscribe(ID);
  }

  /**
   * Parallel callback unsubscribe
   * @param ID
   */
  public parallelUnsubscribe(ID: string): void {
    if (typeof ID === "string") {
      /**
       * If required method exist in the stack
       */
      if (this.parallelStack[ID]) {
        /**
         * Nullify method in the stack and destroy it
         */
        this.parallelStack[ID] = false;
        delete this.parallelStack[ID];
      }
    }
  }

  /**
   * Serial callback unsubscribe method by ID
   * @param ID
   */
  public serialUnsubscribe(ID: string): void {
    if (typeof ID === "string") {
      /**
       * If required method exist in the stack
       */
      if (this.serialStack[ID]) {
        /**
         * Nullify method in the stack and destroy it
         */
        this.serialStack[ID] = false;
        delete this.serialStack[ID];
      }
    }
  }

  /**
   * Prepare subscription params
   * @param _params
   * @return {boolean}
   */
  private prepareParams(_params): boolean|string {
    if (
        typeof _params === "object"
    ) {
      let d = new Date();
      /**
       * Prepare params
       */
      _params.context = _params.context || root;
      _params.callback = _params.callback || (() => {
            return null;
          });
      _params.params = _params.params || [];
      _params.ID = _params.ID || "x-" + d.getTime() + "-" + Math.round(Math.random() * 1e6);
      /**
       * Check params
       */
      if (
          typeof _params.context === "object" &&
          typeof _params.callback === "function" &&
          typeof _params.params === "object" &&
          Array.isArray(_params.params) &&
          typeof _params.ID === "string"
      ) {
        return _params;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * Watch and call methods
   */
  private watch(): void {
    try {
      this.parallelWatch();
    } catch (e) {
      /**
       * TODO: add logger
       */
    }
    try {
      this.serialWatch();
    } catch (e) {
      /**
       * TODO: add logger
       */
    }
    /**
     * Recall watcher
     */
    root.requestAnimationFrame(this.watch.bind(this));
  }

  /**
   * Watch and call methods
   */
  private parallelWatch(): void {
    try {
      /**
       * If stack exist, it is an object and it is contains methods
       */
      if (
          this.parallelStack &&
          typeof this.parallelStack === "object" &&
          Object.keys(this.parallelStack).length > 0
      ) {
        /**
         * Loop all methods in stack
         */
        for (let parallelID in this.parallelStack) {
          /**
           * Process only methods without extended properties
           */
          if (this.parallelStack.hasOwnProperty(parallelID)) {
            try {

              /**
               * If ID exist and it is a string
               */
              if (
                  parallelID &&
                  typeof parallelID === "string"
              ) {
                /**
                 * Get subscribed method params by ID
                 */
                let objCall = this.parallelStack[parallelID];
                /**
                 * If params exist, it is an object, and it is contains call context,
                 * callback, and parameters which is array
                 */
                if (
                    objCall &&
                    typeof objCall === "object" &&
                    objCall.context &&
                    objCall.callback &&
                    objCall.params &&
                    typeof objCall.context === "object" &&
                    typeof objCall.callback === "function" &&
                    Array.isArray(objCall.params)
                ) {
                  /**
                   * Call subscribed method
                   */
                  objCall.callback.apply(objCall.context, objCall.params);
                }
              }

            } catch (e) {
              /**
               * TODO: add logger
               */
            }
          }
        }
      }
    } catch (e) {
      /**
       * TODO: add logger
       */
    }
  }

  /**
   * Watch and call methods
   */
  private serialWatch(): void {
    try {
      /**
       * If stack exist, it is an object and it is contains methods
       */
      if (
          this.serialStack &&
          typeof this.serialStack === "object"
      ) {
        let keys = Object.keys(this.serialStack);
        if (
            keys &&
            keys.length > 0
        ) {
          if (this.serialID >= keys.length) {
            this.serialID = 0;
          }

          let _serialID = keys[this.serialID];

          this.serialID++;
          /**
           * Process only methods without extended properties
           */
          if (this.serialStack.hasOwnProperty(_serialID)) {
            /**
             * If ID exist and it is a string
             */
            if (
                _serialID &&
                typeof _serialID === "string"
            ) {
              /**
               * Get subscribed method params by ID
               */
              let objCall = this.serialStack[_serialID];
              /**
               * If params exist, it is an object, and it is contains call context,
               * callback, and parameters which is array
               */
              if (
                  objCall &&
                  typeof objCall === "object" &&
                  objCall.context &&
                  objCall.callback &&
                  objCall.params &&
                  typeof objCall.context === "object" &&
                  typeof objCall.callback === "function" &&
                  Array.isArray(objCall.params)
              ) {
                /**
                 * Call subscribed method
                 */
                objCall.callback.apply(objCall.context, objCall.params);
              }
            }
          }
        }
      }
    } catch (e) {
      /**
       * TODO: add logger
       */
    }
  }
}
/**
 * Check version
 */
function version_lt(v1, v2) {
  if (
      typeof v1 === "string" &&
      typeof v2 === "string"
  ) {
    v1 = v1.trim().split(".");
    v2 = v2.trim().split(".");
    for (let i = 0; i < v1.length; i++) {
      v1[i] = v1[i] || 0;
      v2[i] = v2[i] || 0;
      if (v1[i] > v2[i]) {
        return false;
      } else if (v1[i] < v2[i]) {
        return true;
      }
    }
  }
  return false;
}
/**
 * Create single request animation frame object
 * @type {AnimationFrame}
 */
if (
    !root.AnimationFrame || !root.AnimationFrame.version ||
    version_lt(root.AnimationFrame.version, VERSION)
) {
  Object.defineProperty(root, "AnimationFrame", {
    configurable: true,
    enumerable: false,
    get: () => {
      if (!root._AnimationFrame) {
        root.AnimationFrame = new AnimationFrame();
      }
      return root._AnimationFrame;
    },
    set: () => {
      if (!root._AnimationFrame) {
        /**
         * root._AnimationFrame was empty and can be set
         */
        root._AnimationFrame = new AnimationFrame();
      } else if (
          !root._AnimationFrame.version ||
          version_lt(root._AnimationFrame.version, VERSION)
      ) {
        /**
         * In root._AnimationFrame was previous version and it should migrate
         */
        let newAnimationFrame = new AnimationFrame();
        /**
         * Migrate subscriptions
         */
        if (typeof root._AnimationFrame.parallelStack === "object") {
          /**
           * Migrate parallel subscriptions
           */
          for (let ID in root._AnimationFrame.parallelStack) {
            if (root._AnimationFrame.parallelStack.hasOwnProperty(ID)) {
              newAnimationFrame.parallelSubscribe({
                callback: root._AnimationFrame.parallelStack[ID].callback,
                context: root._AnimationFrame.parallelStack[ID].context,
                params: root._AnimationFrame.parallelStack[ID].params,
                ID,
              });
              root._AnimationFrame.parallelUnsubscribe(ID);
            }
          }
        } else if (typeof root._AnimationFrame.stack === "object") {
          /**
           * Migrate serial subscriptions
           */
          for (let ID in root._AnimationFrame.stack) {
            if (root._AnimationFrame.stack.hasOwnProperty(ID)) {
              newAnimationFrame.subscribe(
                  root._AnimationFrame.stack[ID].context,
                  root._AnimationFrame.stack[ID].callback,
                  root._AnimationFrame.stack[ID].params,
                  root._AnimationFrame.stack[ID].ID
              );
              root._AnimationFrame.unsubscribe(ID);
            }
          }
        }
        if (typeof root._AnimationFrame.serialStack === "object") {
          /**
           * Migrate serial subscriptions
           */
          for (let ID in root._AnimationFrame.serialStack) {
            if (root._AnimationFrame.serialStack.hasOwnProperty(ID)) {
              newAnimationFrame.serialSubscribe({
                callback: root._AnimationFrame.serialStack[ID].callback,
                context: root._AnimationFrame.serialStack[ID].context,
                params: root._AnimationFrame.serialStack[ID].params,
                ID,
              });
              root._AnimationFrame.serialUnsubscribe(ID);
            }
          }
        }
        /**
         * Set new AnimationFrame
         */
        root._AnimationFrame = newAnimationFrame;
      }
    },
  });
}
root.AnimationFrame = new AnimationFrame();
/**
 * Export single AnimationFrame instance
 */
let _AnimationFrame = root.AnimationFrame;
export default _AnimationFrame;
module.exports = _AnimationFrame;
