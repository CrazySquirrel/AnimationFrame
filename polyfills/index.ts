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
declare let require: any;

let _package = require("../package.json");

const VERSION = _package.version;

class Root implements IWindow {
}

let root: IWindow;

if (typeof window === "undefined") {
  if (typeof global !== "undefined") {
    root = global;
  } else {
    root = new Root();
  }
} else {
  root = window;
}

/**
 * Promise polyfill
 */
if (!root.Promise) {
  root.Promise = require("promise-polyfill");
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
      return root._AnimationFrame;
    },
    set: (v) => {
      if (!root._AnimationFrame) {
        /**
         * root._AnimationFrame was empty and can be set
         */
        root._AnimationFrame = v;
      } else if (
          !root._AnimationFrame.version ||
          version_lt(root._AnimationFrame.version, v.version)
      ) {
        /**
         * Saved old animation frame
         */
        root._oldAnimationFrame = root._AnimationFrame;
        /**
         * Stop old watchers
         */
        root._oldAnimationFrame.parallelWatch = () => {
        };
        root._oldAnimationFrame.serialWatch = () => {
        };
        root._oldAnimationFrame.watch = () => {
        };
        /**
         * Overridable subscription methods
         */
        root._oldAnimationFrame.subscribe = v.subscribe;
        root._oldAnimationFrame.parallelSubscribe = v.parallelSubscribe;
        root._oldAnimationFrame.serialSubscribe = v.serialSubscribe;
        /**
         * Freeze old stacks
         */
        if (root._oldAnimationFrame.parallelStack) {
          Object.preventExtensions(root._oldAnimationFrame.parallelStack);
        }
        if (root._oldAnimationFrame.stack) {
          Object.preventExtensions(root._oldAnimationFrame.stack);
        }
        if (root._oldAnimationFrame.serialStack) {
          Object.preventExtensions(root._oldAnimationFrame.serialStack);
        }
        /**
         * In root._AnimationFrame was previous version and it should migrate
         */
        root._AnimationFrame = v;
        /**
         * Migrate subscriptions
         */
        if (typeof root._oldAnimationFrame.parallelStack === "object") {
          /**
           * Migrate parallel subscriptions
           */
          for (let ID in root._oldAnimationFrame.parallelStack) {
            if (root._oldAnimationFrame.parallelStack.hasOwnProperty(ID)) {
              root._AnimationFrame.parallelSubscribe({
                callback: root._oldAnimationFrame.parallelStack[ID].callback,
                context: root._oldAnimationFrame.parallelStack[ID].context,
                params: root._oldAnimationFrame.parallelStack[ID].params,
                ID,
              });
              root._oldAnimationFrame.parallelUnsubscribe(ID);
              delete root._oldAnimationFrame.parallelStack[ID];
            }
          }
        } else if (typeof root._oldAnimationFrame.stack === "object") {
          /**
           * Migrate serial subscriptions
           */
          for (let ID in root._oldAnimationFrame.stack) {
            if (root._oldAnimationFrame.stack.hasOwnProperty(ID)) {
              root._AnimationFrame.subscribe(
                  root._oldAnimationFrame.stack[ID].context,
                  root._oldAnimationFrame.stack[ID].callback,
                  root._oldAnimationFrame.stack[ID].params,
                  root._oldAnimationFrame.stack[ID].ID
              );
              root._oldAnimationFrame.unsubscribe(ID);
              delete root._oldAnimationFrame.stack[ID];
            }
          }
        }
        if (typeof root._oldAnimationFrame.serialStack === "object") {
          /**
           * Migrate serial subscriptions
           */
          for (let ID in root._oldAnimationFrame.serialStack) {
            if (root._oldAnimationFrame.serialStack.hasOwnProperty(ID)) {
              root._AnimationFrame.serialSubscribe({
                callback: root._oldAnimationFrame.serialStack[ID].callback,
                context: root._oldAnimationFrame.serialStack[ID].context,
                params: root._oldAnimationFrame.serialStack[ID].params,
                ID,
              });
              root._oldAnimationFrame.serialUnsubscribe(ID);
              delete root._oldAnimationFrame.serialStack[ID];
            }
          }
        }
      }
    },
  });
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

export default root;
