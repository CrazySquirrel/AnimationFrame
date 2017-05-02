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

let _package = require("../package.json");

const VERSION = _package.version;

/**
 * Import interface
 */
import IAnimationFrame from "../interfaces/IAnimationFrame";

import root from "../polyfills/index";

/**
 * Request animation frame call stack class
 */
class AnimationFrame implements IAnimationFrame {

  public version: string;

  public parallelStack: any;
  public serialStack: any;
  public stack: any;

  public errorHandler: any;

  public serialID: number;

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
     * No error handler
     */
    this.errorHandler = null;
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
  public subscribe(context: any = root,
                   callback: Function = () => {
                     return null;
                   },
                   params: Array<any> = [],
                   ID?: string): boolean|string {
    try {
      return this.parallelSubscribe({
        context,
        callback,
        params,
        ID,
      });
    } catch (e) {
      this._errorHandler(e);
      try {
        return root._AnimationFrame.parallelSubscribe({
          context,
          callback,
          params,
          ID,
        });
      } catch (e) {
        this._errorHandler(e);
        return false;
      }
    }
  }

  /**
   * Parallel callback subscribe
   * @param params
   * @return {boolean|string}
   */
  public parallelSubscribe(params: any): boolean|string {
    try {
      let _params: any = this.prepareParams(params);
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
    } catch (e) {
      this._errorHandler(e);
      try {
        return root._AnimationFrame.parallelSubscribe(params);
      } catch (e) {
        this._errorHandler(e);
        return false;
      }
    }
  }

  /**
   * Serial callback subscribe
   * @param params
   * @return {boolean|string}
   */
  public serialSubscribe(params: any): boolean|string {
    try {
      let _params: any = this.prepareParams(params);
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
    } catch (e) {
      this._errorHandler(e);
      try {
        return root._AnimationFrame.serialSubscribe(params);
      } catch (e) {
        this._errorHandler(e);
        return false;
      }
    }
  }

  /**
   * Unsubscribe method by ID
   * @param ID
   */
  public unsubscribe(ID: string): boolean {
    try {
      return this.parallelUnsubscribe(ID);
    } catch (e) {
      this._errorHandler(e);
      try {
        return root._AnimationFrame.parallelUnsubscribe(ID);
      } catch (e) {
        this._errorHandler(e);
        return false;
      }
    }
  }

  /**
   * Parallel callback unsubscribe
   * @param ID
   */
  public parallelUnsubscribe(ID: string): boolean {
    try {
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
          return true;
        }
      }
      return false;
    } catch (e) {
      this._errorHandler(e);
      try {
        return root._AnimationFrame.parallelUnsubscribe(ID);
      } catch (e) {
        this._errorHandler(e);
        return false;
      }
    }
  }

  /**
   * Serial callback unsubscribe method by ID
   * @param ID
   */
  public serialUnsubscribe(ID: string): boolean {
    try {
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
          return true;
        }
      }
      return false;
    } catch (e) {
      this._errorHandler(e);
      try {
        return root._AnimationFrame.serialUnsubscribe(ID);
      } catch (e) {
        this._errorHandler(e);
        return false;
      }
    }
  }

  /**
   * Generate ID
   */
  public getID(): string {
    return "x-" + (new Date()).getTime() + "-" + Math.round(Math.random() * 1e6);
  }

  /**
   * Prepare subscription params
   * @param _params
   * @return {boolean}
   */
  public prepareParams(_params: any): boolean|string {
    if (
        typeof _params === "object"
    ) {
      /**
       * Prepare params
       */
      _params.context = _params.context || root;
      _params.callback = _params.callback || (() => {
            return null;
          });
      _params.params = _params.params || [];
      _params.ID = _params.ID || this.getID();
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
  public watch(): void {
    try {
      try {
        this.parallelWatch();
      } catch (e) {
        this._errorHandler(e);
      }
      try {
        this.serialWatch();
      } catch (e) {
        this._errorHandler(e);
      }
      /**
       * Recall watcher
       */
      root.requestAnimationFrame(this.watch.bind(this));
    } catch (e) {
      this._errorHandler(e);
    }
  }

  /**
   * Watch and call methods
   */
  public parallelWatch(): void {
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
              this._errorHandler(e);
            }
          }
        }
      }
    } catch (e) {
      this._errorHandler(e);
    }
  }

  /**
   * Watch and call methods
   */
  public serialWatch(): void {
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
      this._errorHandler(e);
    }
  }

  /**
   * Error Handler
   */
  public _errorHandler(e): void {
    if (this.errorHandler) {
      this.errorHandler(e);
    }
  }
}
/**
 * Export single AnimationFrame instance
 */
root.AnimationFrame = new AnimationFrame();
let _AnimationFrame: IAnimationFrame = root.AnimationFrame;
export default _AnimationFrame;
module.exports = _AnimationFrame;
