"use strict";
/**
 * Import interfaces
 */
import IWindow from "../interfaces/IWindow";
/**
 * Declare window interface
 */
declare var window: IWindow;
declare var global: any;
declare var module: any;

/**
 * Import interface
 */
import IAnimationFrame from "../interfaces/IAnimationFrame";


let root;

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
        if (
            typeof root !== "undefined" &&
            typeof root.console === "object" &&
            typeof root.console.log === "function"
        ) {
            root.console.log("Bind polyfill");
        }
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
    /**
     * Callback list
     */
    private stack: any;

    /**
     * Create request animation frame
     */
    constructor() {
        /**
         * Subscribed methods
         */
        this.stack = {};
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
        try {
            /**
             * If context and callback passed and they are object and function
             */
            if (
                typeof context === "object" &&
                typeof callback === "function"
            ) {
                /**
                 * Create UID
                 */
                let d = new Date();
                let localID = ID || "x-" + d.getTime() + "-" + Math.round(Math.random() * 1e6);
                /**
                 * Add method to the stack
                 */
                this.stack[localID] = {
                    context,
                    callback,
                    params,
                };
                /**
                 * Write to console count of the subscribed methods
                 */
                if (
                    typeof root !== "undefined" &&
                    typeof root.console === "object" &&
                    typeof root.console.info === "function"
                ) {
                    root.console.info("AnimationFrame stack " + Object.keys(this.stack).length);
                }
                /**
                 * Return UID
                 */
                return localID;
            }
        } catch (e) {
            if (
                typeof root !== "undefined" &&
                typeof root.console === "object" &&
                typeof root.console.error === "function"
            ) {
                root.console.error(e);
            }
        }
        /**
         * If something goes wrong return false
         */
        return false;
    }

    /**
     * Unsubscribe method by ID
     * @param ID
     */
    public unsubscribe(ID: string): void {
        /**
         * If required method exist in the stack
         */
        if (this.stack[ID]) {
            /**
             * Nullify method in the stack and destroy it
             */
            this.stack[ID] = false;
            delete this.stack[ID];
            /**
             * Write to console count of the subscribed methods
             */
            if (
                typeof root !== "undefined" &&
                typeof root.console === "object" &&
                typeof root.console.info === "function"
            ) {
                root.console.info("AnimationFrame stack " + Object.keys(this.stack).length);
            }
        }
    }

    /**
     * Watch and call methods
     */
    private watch(): void {
        try {
            /**
             * If stack exist, it is an object and it is contains methods
             */
            if (
                this.stack &&
                typeof this.stack === "object" &&
                Object.keys(this.stack).length > 0
            ) {
                /**
                 * Loop all methods in stack
                 */
                for (let ID in this.stack) {
                    /**
                     * Process only methods without extended properties
                     */
                    if (this.stack.hasOwnProperty(ID)) {
                        try {

                            /**
                             * If ID exist and it is a string
                             */
                            if (
                                ID &&
                                typeof ID === "string"
                            ) {
                                /**
                                 * Get subscribed method params by ID
                                 */
                                let objCall = this.stack[ID];
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
                            if (
                                typeof root !== "undefined" &&
                                typeof root.console === "object" &&
                                typeof root.console.error === "function"
                            ) {
                                root.console.error(e);
                            }
                        }
                    }
                }
            }
        } catch (e) {
            if (
                typeof root !== "undefined" &&
                typeof root.console === "object" &&
                typeof root.console.error === "function"
            ) {
                root.console.error(e);
            }
        }
        /**
         * Recall watcher
         */
        root.requestAnimationFrame(this.watch.bind(this));
    }
}
/**
 * Create single request animation frame object
 * @type {AnimationFrame}
 */
root.AnimationFrame = root.AnimationFrame || new AnimationFrame();
/**
 * Export single AnimationFrame instance
 */
export default root.AnimationFrame;
module.exports = root.AnimationFrame;
