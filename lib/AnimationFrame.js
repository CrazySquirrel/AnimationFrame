(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AnimationFrame", [], factory);
	else if(typeof exports === 'object')
		exports["AnimationFrame"] = factory();
	else
		root["AnimationFrame"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },

/***/ 5:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var root = void 0;
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
	root.requestAnimationFrame = function () {
	    return typeof root !== "undefined" && (root.requestAnimationFrame || root.webkitRequestAnimationFrame || root.mozRequestAnimationFrame || root.oRequestAnimationFrame || root.msRequestAnimationFrame) || function (callback) {
	        root.setTimeout(callback, 1000 / 60);
	    };
	}();
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
	    var a = Array.prototype.slice;
	    var f = a.call(arguments, 1);
	    var e = this;
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
	    var hasDoNotEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
	    var doNotEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
	    var doNotEnumsLength = doNotEnums.length;
	    return function (obj) {
	        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" && (typeof obj !== "function" || obj === null)) {
	            throw new TypeError("Object.keys called on non-object");
	        }
	        var result = [];
	        for (var prop in obj) {
	            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
	                result.push(prop);
	            }
	        }
	        if (hasDoNotEnumBug) {
	            for (var i = 0; i < doNotEnumsLength; i++) {
	                if (Object.prototype.hasOwnProperty.call(obj, doNotEnums[i])) {
	                    result.push(doNotEnums[i]);
	                }
	            }
	        }
	        return result;
	    };
	}
	Object.keys = Object.keys || keys();
	/**
	 * Request animation frame call stack class
	 */
	
	var AnimationFrame = function () {
	    /**
	     * Create request animation frame
	     */
	    function AnimationFrame() {
	        _classCallCheck(this, AnimationFrame);
	
	        this.version = "1.0.20";
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
	
	
	    AnimationFrame.prototype.subscribe = function subscribe() {
	        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : root;
	        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	            return null;
	        };
	        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	        var ID = arguments[3];
	
	        return this.parallelSubscribe({
	            context: context,
	            callback: callback,
	            params: params,
	            ID: ID
	        });
	    };
	    /**
	     * Parallel callback subscribe
	     * @param _params
	     * @return {boolean|string}
	     */
	
	
	    AnimationFrame.prototype.parallelSubscribe = function parallelSubscribe(_params) {
	        _params = this.prepareParams(_params);
	        if (_params) {
	            /**
	             * Add method to the stack
	             */
	            this.parallelStack[_params.ID] = {
	                callback: _params.callback,
	                context: _params.context,
	                params: _params.params
	            };
	            /**
	             * Return subscription ID
	             */
	            return _params.ID;
	        } else {
	            return false;
	        }
	    };
	    /**
	     * Serial callback subscribe
	     * @param _params
	     * @return {boolean|string}
	     */
	
	
	    AnimationFrame.prototype.serialSubscribe = function serialSubscribe(_params) {
	        _params = this.prepareParams(_params);
	        if (_params) {
	            /**
	             * Add method to the stack
	             */
	            this.serialStack[_params.ID] = {
	                callback: _params.callback,
	                context: _params.context,
	                params: _params.params
	            };
	            /**
	             * Return subscription ID
	             */
	            return _params.ID;
	        } else {
	            return false;
	        }
	    };
	    /**
	     * Unsubscribe method by ID
	     * @param ID
	     */
	
	
	    AnimationFrame.prototype.unsubscribe = function unsubscribe(ID) {
	        this.parallelUnsubscribe(ID);
	    };
	    /**
	     * Parallel callback unsubscribe
	     * @param ID
	     */
	
	
	    AnimationFrame.prototype.parallelUnsubscribe = function parallelUnsubscribe(ID) {
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
	    };
	    /**
	     * Serial callback unsubscribe method by ID
	     * @param ID
	     */
	
	
	    AnimationFrame.prototype.serialUnsubscribe = function serialUnsubscribe(ID) {
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
	    };
	    /**
	     * Prepare subscription params
	     * @param _params
	     * @return {boolean}
	     */
	
	
	    AnimationFrame.prototype.prepareParams = function prepareParams(_params) {
	        if ((typeof _params === "undefined" ? "undefined" : _typeof(_params)) === "object") {
	            var d = new Date();
	            /**
	             * Prepare params
	             */
	            _params.context = _params.context || root;
	            _params.callback = _params.callback || function () {
	                return null;
	            };
	            _params.params = _params.params || [];
	            _params.ID = _params.ID || "x-" + d.getTime() + "-" + Math.round(Math.random() * 1e6);
	            /**
	             * Check params
	             */
	            if (_typeof(_params.context) === "object" && typeof _params.callback === "function" && _typeof(_params.params) === "object" && Array.isArray(_params.params) && typeof _params.ID === "string") {
	                return _params;
	            } else {
	                return false;
	            }
	        } else {
	            return false;
	        }
	    };
	    /**
	     * Watch and call methods
	     */
	
	
	    AnimationFrame.prototype.watch = function watch() {
	        try {
	            this.parallelWatch();
	        } catch (e) {}
	        try {
	            this.serialWatch();
	        } catch (e) {}
	        /**
	         * Recall watcher
	         */
	        root.requestAnimationFrame(this.watch.bind(this));
	    };
	    /**
	     * Watch and call methods
	     */
	
	
	    AnimationFrame.prototype.parallelWatch = function parallelWatch() {
	        try {
	            /**
	             * If stack exist, it is an object and it is contains methods
	             */
	            if (this.parallelStack && _typeof(this.parallelStack) === "object" && Object.keys(this.parallelStack).length > 0) {
	                /**
	                 * Loop all methods in stack
	                 */
	                for (var parallelID in this.parallelStack) {
	                    /**
	                     * Process only methods without extended properties
	                     */
	                    if (this.parallelStack.hasOwnProperty(parallelID)) {
	                        try {
	                            /**
	                             * If ID exist and it is a string
	                             */
	                            if (parallelID && typeof parallelID === "string") {
	                                /**
	                                 * Get subscribed method params by ID
	                                 */
	                                var objCall = this.parallelStack[parallelID];
	                                /**
	                                 * If params exist, it is an object, and it is contains call context,
	                                 * callback, and parameters which is array
	                                 */
	                                if (objCall && (typeof objCall === "undefined" ? "undefined" : _typeof(objCall)) === "object" && objCall.context && objCall.callback && objCall.params && _typeof(objCall.context) === "object" && typeof objCall.callback === "function" && Array.isArray(objCall.params)) {
	                                    /**
	                                     * Call subscribed method
	                                     */
	                                    objCall.callback.apply(objCall.context, objCall.params);
	                                }
	                            }
	                        } catch (e) {}
	                    }
	                }
	            }
	        } catch (e) {}
	    };
	    /**
	     * Watch and call methods
	     */
	
	
	    AnimationFrame.prototype.serialWatch = function serialWatch() {
	        try {
	            /**
	             * If stack exist, it is an object and it is contains methods
	             */
	            if (this.serialStack && _typeof(this.serialStack) === "object") {
	                var _keys = Object.keys(this.serialStack);
	                if (_keys && _keys.length > 0) {
	                    if (this.serialID >= _keys.length) {
	                        this.serialID = 0;
	                    }
	                    var _serialID = _keys[this.serialID];
	                    this.serialID++;
	                    /**
	                     * Process only methods without extended properties
	                     */
	                    if (this.serialStack.hasOwnProperty(_serialID)) {
	                        /**
	                         * If ID exist and it is a string
	                         */
	                        if (_serialID && typeof _serialID === "string") {
	                            /**
	                             * Get subscribed method params by ID
	                             */
	                            var objCall = this.serialStack[_serialID];
	                            /**
	                             * If params exist, it is an object, and it is contains call context,
	                             * callback, and parameters which is array
	                             */
	                            if (objCall && (typeof objCall === "undefined" ? "undefined" : _typeof(objCall)) === "object" && objCall.context && objCall.callback && objCall.params && _typeof(objCall.context) === "object" && typeof objCall.callback === "function" && Array.isArray(objCall.params)) {
	                                /**
	                                 * Call subscribed method
	                                 */
	                                objCall.callback.apply(objCall.context, objCall.params);
	                            }
	                        }
	                    }
	                }
	            }
	        } catch (e) {}
	    };
	
	    return AnimationFrame;
	}();
	/**
	 * Check version
	 */
	
	
	function version_lt(v1, v2) {
	    if (typeof v1 === "string" && typeof v2 === "string") {
	        v1 = v1.trim().split(".");
	        v2 = v2.trim().split(".");
	        for (var i = 0; i < v1.length; i++) {
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
	if (!root.AnimationFrame || !root.AnimationFrame.version || version_lt(root.AnimationFrame.version, "1.0.20")) {
	    Object.defineProperty(root, "AnimationFrame", {
	        configurable: true,
	        enumerable: false,
	        get: function get() {
	            if (!root._AnimationFrame) {
	                root.AnimationFrame = new AnimationFrame();
	            }
	            return root._AnimationFrame;
	        },
	        set: function set() {
	            if (!root._AnimationFrame) {
	                /**
	                 * root._AnimationFrame was empty and can be set
	                 */
	                root._AnimationFrame = new AnimationFrame();
	            } else if (!root._AnimationFrame.version || version_lt(root._AnimationFrame.version, "1.0.20")) {
	                /**
	                 * In root._AnimationFrame was previous version and it should migrate
	                 */
	                var newAnimationFrame = new AnimationFrame();
	                /**
	                 * Migrate subscriptions
	                 */
	                if (_typeof(root._AnimationFrame.parallelStack) === "object") {
	                    /**
	                     * Migrate parallel subscriptions
	                     */
	                    for (var ID in root._AnimationFrame.parallelStack) {
	                        if (root._AnimationFrame.parallelStack.hasOwnProperty(ID)) {
	                            newAnimationFrame.parallelSubscribe({
	                                callback: root._AnimationFrame.parallelStack[ID].callback,
	                                context: root._AnimationFrame.parallelStack[ID].context,
	                                params: root._AnimationFrame.parallelStack[ID].params,
	                                ID: ID
	                            });
	                            root._AnimationFrame.parallelUnsubscribe(ID);
	                        }
	                    }
	                } else if (_typeof(root._AnimationFrame.stack) === "object") {
	                    /**
	                     * Migrate serial subscriptions
	                     */
	                    for (var _ID in root._AnimationFrame.stack) {
	                        if (root._AnimationFrame.stack.hasOwnProperty(_ID)) {
	                            newAnimationFrame.subscribe(root._AnimationFrame.stack[_ID].context, root._AnimationFrame.stack[_ID].callback, root._AnimationFrame.stack[_ID].params, root._AnimationFrame.stack[_ID].ID);
	                            root._AnimationFrame.unsubscribe(_ID);
	                        }
	                    }
	                }
	                if (_typeof(root._AnimationFrame.serialStack) === "object") {
	                    /**
	                     * Migrate serial subscriptions
	                     */
	                    for (var _ID2 in root._AnimationFrame.serialStack) {
	                        if (root._AnimationFrame.serialStack.hasOwnProperty(_ID2)) {
	                            newAnimationFrame.serialSubscribe({
	                                callback: root._AnimationFrame.serialStack[_ID2].callback,
	                                context: root._AnimationFrame.serialStack[_ID2].context,
	                                params: root._AnimationFrame.serialStack[_ID2].params,
	                                ID: _ID2
	                            });
	                            root._AnimationFrame.serialUnsubscribe(_ID2);
	                        }
	                    }
	                }
	                /**
	                 * Set new AnimationFrame
	                 */
	                root._AnimationFrame = newAnimationFrame;
	            }
	        }
	    });
	}
	root.AnimationFrame = new AnimationFrame();
	/**
	 * Export single AnimationFrame instance
	 */
	var _AnimationFrame = root.AnimationFrame;
	exports.default = _AnimationFrame;
	
	module.exports = _AnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

/******/ })
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI5MzJmYzZhMzE4ZTZhYTJkYjE/ZmFjMyoqIiwid2VicGFjazovLy8uL2xpYi9BbmltYXRpb25GcmFtZS50cz9jNjczKiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUEscUdBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDIiwiZmlsZSI6Ii4vbGliL0FuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJBbmltYXRpb25GcmFtZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBbmltYXRpb25GcmFtZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBbmltYXRpb25GcmFtZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MjkzMmZjNmEzMThlNmFhMmRiMSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByb290ID0gdm9pZCAwO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByb290ID0gZ2xvYmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3QgPSB7fTtcbiAgICB9XG59IGVsc2Uge1xuICAgIHJvb3QgPSB3aW5kb3c7XG59XG4vKipcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICovXG5yb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHJvb3QgIT09IFwidW5kZWZpbmVkXCIgJiYgKHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJvb3Qud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJvb3QubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJvb3Qub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByb290Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCk7XG4vKipcbiAqIEJpbmQgcG9seWZpbGxcbiAqL1xuZnVuY3Rpb24gYmluZChiKSB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ5IGJpbmQgdmFyaWFibGUgdGhhdCBub3QgYSBmdW5jdGlvbiwgdGhlbiB0aHJvdyBlcnJvclxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZVwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbGV0IEFycmF5IHNsaWNlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgdmFyIGEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgdmFyIGYgPSBhLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gYygpIHtcbiAgICAgICAgLypcbiAgICAgICAgIGlmIChcbiAgICAgICAgIHR5cGVvZiByb290ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICB0eXBlb2Ygcm9vdC5jb25zb2xlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICB0eXBlb2Ygcm9vdC5jb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICApIHtcbiAgICAgICAgIHJvb3QuY29uc29sZS5sb2coXCJCaW5kIHBvbHlmaWxsXCIpO1xuICAgICAgICAgfVxuICAgICAgICAgKi9cbiAgICB9XG4gICAgZnVuY3Rpb24gZCgpIHtcbiAgICAgICAgcmV0dXJuIGUuYXBwbHkodGhpcyBpbnN0YW5jZW9mIGMgPyB0aGlzIDogYiB8fCByb290LCBmLmNvbmNhdChhLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcmVkIHRoaXMgcHJvdG90eXBlIGFzIHByb3RvdHlwZSB0byBiaW5kIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIGMucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgYygpO1xuICAgIC8qKlxuICAgICAqIFJldHVybiBiaW5kIHBvbHlmaWxsXG4gICAgICovXG4gICAgcmV0dXJuIGQ7XG59XG5GdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGJpbmQ7XG4vKipcbiAqIE9iamVjdC5rZXlzIHBvbHlmaWxsXG4gKi9cbmZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdmFyIGhhc0RvTm90RW51bUJ1ZyA9ICF7IHRvU3RyaW5nOiBudWxsIH0ucHJvcGVydHlJc0VudW1lcmFibGUoXCJ0b1N0cmluZ1wiKTtcbiAgICB2YXIgZG9Ob3RFbnVtcyA9IFtcInRvU3RyaW5nXCIsIFwidG9Mb2NhbGVTdHJpbmdcIiwgXCJ2YWx1ZU9mXCIsIFwiaGFzT3duUHJvcGVydHlcIiwgXCJpc1Byb3RvdHlwZU9mXCIsIFwicHJvcGVydHlJc0VudW1lcmFibGVcIiwgXCJjb25zdHJ1Y3RvclwiXTtcbiAgICB2YXIgZG9Ob3RFbnVtc0xlbmd0aCA9IGRvTm90RW51bXMubGVuZ3RoO1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpICE9PSBcIm9iamVjdFwiICYmICh0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIgfHwgb2JqID09PSBudWxsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5rZXlzIGNhbGxlZCBvbiBub24tb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNEb05vdEVudW1CdWcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9Ob3RFbnVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGRvTm90RW51bXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvTm90RW51bXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5PYmplY3Qua2V5cyA9IE9iamVjdC5rZXlzIHx8IGtleXMoKTtcbi8qKlxuICogUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgY2FsbCBzdGFjayBjbGFzc1xuICovXG5cbnZhciBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBbmltYXRpb25GcmFtZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjEuMC4yMFwiO1xuICAgICAgICB0aGlzLnNlcmlhbElEID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN1YnNjcmliZWQgbWV0aG9kc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wYXJhbGxlbFN0YWNrID0ge307XG4gICAgICAgIHRoaXMuc2VyaWFsU3RhY2sgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhY2sgPSB0aGlzLnBhcmFsbGVsU3RhY2s7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2F0Y2hlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy53YXRjaCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgbWV0aG9kIHRvIHdhdGNoXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIElEXG4gICAgICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiByb290O1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgICAgICAgdmFyIElEID0gYXJndW1lbnRzWzNdO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFsbGVsU3Vic2NyaWJlKHtcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgIElEOiBJRFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhcmFsbGVsIGNhbGxiYWNrIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSBfcGFyYW1zXG4gICAgICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gICAgICovXG5cblxuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5wYXJhbGxlbFN1YnNjcmliZSA9IGZ1bmN0aW9uIHBhcmFsbGVsU3Vic2NyaWJlKF9wYXJhbXMpIHtcbiAgICAgICAgX3BhcmFtcyA9IHRoaXMucHJlcGFyZVBhcmFtcyhfcGFyYW1zKTtcbiAgICAgICAgaWYgKF9wYXJhbXMpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIG1ldGhvZCB0byB0aGUgc3RhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5wYXJhbGxlbFN0YWNrW19wYXJhbXMuSURdID0ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBfcGFyYW1zLmNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IF9wYXJhbXMuY29udGV4dCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IF9wYXJhbXMucGFyYW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm4gc3Vic2NyaXB0aW9uIElEXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBfcGFyYW1zLklEO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXJpYWwgY2FsbGJhY2sgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIF9wYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnNlcmlhbFN1YnNjcmliZSA9IGZ1bmN0aW9uIHNlcmlhbFN1YnNjcmliZShfcGFyYW1zKSB7XG4gICAgICAgIF9wYXJhbXMgPSB0aGlzLnByZXBhcmVQYXJhbXMoX3BhcmFtcyk7XG4gICAgICAgIGlmIChfcGFyYW1zKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZCBtZXRob2QgdG8gdGhlIHN0YWNrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2VyaWFsU3RhY2tbX3BhcmFtcy5JRF0gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IF9wYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgY29udGV4dDogX3BhcmFtcy5jb250ZXh0LFxuICAgICAgICAgICAgICAgIHBhcmFtczogX3BhcmFtcy5wYXJhbXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiBzdWJzY3JpcHRpb24gSURcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIF9wYXJhbXMuSUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIG1ldGhvZCBieSBJRFxuICAgICAqIEBwYXJhbSBJRFxuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShJRCkge1xuICAgICAgICB0aGlzLnBhcmFsbGVsVW5zdWJzY3JpYmUoSUQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGFyYWxsZWwgY2FsbGJhY2sgdW5zdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gSURcbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnBhcmFsbGVsVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBwYXJhbGxlbFVuc3Vic2NyaWJlKElEKSB7XG4gICAgICAgIGlmICh0eXBlb2YgSUQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgcmVxdWlyZWQgbWV0aG9kIGV4aXN0IGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbGxlbFN0YWNrW0lEXSkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE51bGxpZnkgbWV0aG9kIGluIHRoZSBzdGFjayBhbmQgZGVzdHJveSBpdFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYWxsZWxTdGFja1tJRF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5wYXJhbGxlbFN0YWNrW0lEXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VyaWFsIGNhbGxiYWNrIHVuc3Vic2NyaWJlIG1ldGhvZCBieSBJRFxuICAgICAqIEBwYXJhbSBJRFxuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuc2VyaWFsVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzZXJpYWxVbnN1YnNjcmliZShJRCkge1xuICAgICAgICBpZiAodHlwZW9mIElEID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHJlcXVpcmVkIG1ldGhvZCBleGlzdCBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VyaWFsU3RhY2tbSURdKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogTnVsbGlmeSBtZXRob2QgaW4gdGhlIHN0YWNrIGFuZCBkZXN0cm95IGl0XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxTdGFja1tJRF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXJpYWxTdGFja1tJRF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByZXBhcmUgc3Vic2NyaXB0aW9uIHBhcmFtc1xuICAgICAqIEBwYXJhbSBfcGFyYW1zXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnByZXBhcmVQYXJhbXMgPSBmdW5jdGlvbiBwcmVwYXJlUGFyYW1zKF9wYXJhbXMpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgX3BhcmFtcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9wYXJhbXMpKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcmVwYXJlIHBhcmFtc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfcGFyYW1zLmNvbnRleHQgPSBfcGFyYW1zLmNvbnRleHQgfHwgcm9vdDtcbiAgICAgICAgICAgIF9wYXJhbXMuY2FsbGJhY2sgPSBfcGFyYW1zLmNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfcGFyYW1zLnBhcmFtcyA9IF9wYXJhbXMucGFyYW1zIHx8IFtdO1xuICAgICAgICAgICAgX3BhcmFtcy5JRCA9IF9wYXJhbXMuSUQgfHwgXCJ4LVwiICsgZC5nZXRUaW1lKCkgKyBcIi1cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlNik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIHBhcmFtc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoX3R5cGVvZihfcGFyYW1zLmNvbnRleHQpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBfcGFyYW1zLmNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfcGFyYW1zLnBhcmFtcykgPT09IFwib2JqZWN0XCIgJiYgQXJyYXkuaXNBcnJheShfcGFyYW1zLnBhcmFtcykgJiYgdHlwZW9mIF9wYXJhbXMuSUQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BhcmFtcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXYXRjaCBhbmQgY2FsbCBtZXRob2RzXG4gICAgICovXG5cblxuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbGxlbFdhdGNoKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdhdGNoKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWNhbGwgd2F0Y2hlclxuICAgICAgICAgKi9cbiAgICAgICAgcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy53YXRjaC5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdhdGNoIGFuZCBjYWxsIG1ldGhvZHNcbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnBhcmFsbGVsV2F0Y2ggPSBmdW5jdGlvbiBwYXJhbGxlbFdhdGNoKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBzdGFjayBleGlzdCwgaXQgaXMgYW4gb2JqZWN0IGFuZCBpdCBpcyBjb250YWlucyBtZXRob2RzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFsbGVsU3RhY2sgJiYgX3R5cGVvZih0aGlzLnBhcmFsbGVsU3RhY2spID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHRoaXMucGFyYWxsZWxTdGFjaykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIExvb3AgYWxsIG1ldGhvZHMgaW4gc3RhY2tcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbGxlbElEIGluIHRoaXMucGFyYWxsZWxTdGFjaykge1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogUHJvY2VzcyBvbmx5IG1ldGhvZHMgd2l0aG91dCBleHRlbmRlZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbGxlbFN0YWNrLmhhc093blByb3BlcnR5KHBhcmFsbGVsSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIElEIGV4aXN0IGFuZCBpdCBpcyBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbGxlbElEICYmIHR5cGVvZiBwYXJhbGxlbElEID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBHZXQgc3Vic2NyaWJlZCBtZXRob2QgcGFyYW1zIGJ5IElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqQ2FsbCA9IHRoaXMucGFyYWxsZWxTdGFja1twYXJhbGxlbElEXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIHBhcmFtcyBleGlzdCwgaXQgaXMgYW4gb2JqZWN0LCBhbmQgaXQgaXMgY29udGFpbnMgY2FsbCBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBjYWxsYmFjaywgYW5kIHBhcmFtZXRlcnMgd2hpY2ggaXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpDYWxsICYmICh0eXBlb2Ygb2JqQ2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iakNhbGwpKSA9PT0gXCJvYmplY3RcIiAmJiBvYmpDYWxsLmNvbnRleHQgJiYgb2JqQ2FsbC5jYWxsYmFjayAmJiBvYmpDYWxsLnBhcmFtcyAmJiBfdHlwZW9mKG9iakNhbGwuY29udGV4dCkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iakNhbGwuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiAmJiBBcnJheS5pc0FycmF5KG9iakNhbGwucGFyYW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDYWxsIHN1YnNjcmliZWQgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakNhbGwuY2FsbGJhY2suYXBwbHkob2JqQ2FsbC5jb250ZXh0LCBvYmpDYWxsLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV2F0Y2ggYW5kIGNhbGwgbWV0aG9kc1xuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuc2VyaWFsV2F0Y2ggPSBmdW5jdGlvbiBzZXJpYWxXYXRjaCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgc3RhY2sgZXhpc3QsIGl0IGlzIGFuIG9iamVjdCBhbmQgaXQgaXMgY29udGFpbnMgbWV0aG9kc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJpYWxTdGFjayAmJiBfdHlwZW9mKHRoaXMuc2VyaWFsU3RhY2spID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9rZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXJpYWxTdGFjayk7XG4gICAgICAgICAgICAgICAgaWYgKF9rZXlzICYmIF9rZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VyaWFsSUQgPj0gX2tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbElEID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgX3NlcmlhbElEID0gX2tleXNbdGhpcy5zZXJpYWxJRF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsSUQrKztcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFByb2Nlc3Mgb25seSBtZXRob2RzIHdpdGhvdXQgZXh0ZW5kZWQgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VyaWFsU3RhY2suaGFzT3duUHJvcGVydHkoX3NlcmlhbElEKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBJZiBJRCBleGlzdCBhbmQgaXQgaXMgYSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9zZXJpYWxJRCAmJiB0eXBlb2YgX3NlcmlhbElEID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogR2V0IHN1YnNjcmliZWQgbWV0aG9kIHBhcmFtcyBieSBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmpDYWxsID0gdGhpcy5zZXJpYWxTdGFja1tfc2VyaWFsSURdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIHBhcmFtcyBleGlzdCwgaXQgaXMgYW4gb2JqZWN0LCBhbmQgaXQgaXMgY29udGFpbnMgY2FsbCBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGNhbGxiYWNrLCBhbmQgcGFyYW1ldGVycyB3aGljaCBpcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpDYWxsICYmICh0eXBlb2Ygb2JqQ2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iakNhbGwpKSA9PT0gXCJvYmplY3RcIiAmJiBvYmpDYWxsLmNvbnRleHQgJiYgb2JqQ2FsbC5jYWxsYmFjayAmJiBvYmpDYWxsLnBhcmFtcyAmJiBfdHlwZW9mKG9iakNhbGwuY29udGV4dCkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iakNhbGwuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiAmJiBBcnJheS5pc0FycmF5KG9iakNhbGwucGFyYW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQ2FsbCBzdWJzY3JpYmVkIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqQ2FsbC5jYWxsYmFjay5hcHBseShvYmpDYWxsLmNvbnRleHQsIG9iakNhbGwucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfTtcblxuICAgIHJldHVybiBBbmltYXRpb25GcmFtZTtcbn0oKTtcbi8qKlxuICogQ2hlY2sgdmVyc2lvblxuICovXG5cblxuZnVuY3Rpb24gdmVyc2lvbl9sdCh2MSwgdjIpIHtcbiAgICBpZiAodHlwZW9mIHYxID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2MiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2MSA9IHYxLnRyaW0oKS5zcGxpdChcIi5cIik7XG4gICAgICAgIHYyID0gdjIudHJpbSgpLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2MS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdjFbaV0gPSB2MVtpXSB8fCAwO1xuICAgICAgICAgICAgdjJbaV0gPSB2MltpXSB8fCAwO1xuICAgICAgICAgICAgaWYgKHYxW2ldID4gdjJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHYxW2ldIDwgdjJbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIENyZWF0ZSBzaW5nbGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWUgb2JqZWN0XG4gKiBAdHlwZSB7QW5pbWF0aW9uRnJhbWV9XG4gKi9cbmlmICghcm9vdC5BbmltYXRpb25GcmFtZSB8fCAhcm9vdC5BbmltYXRpb25GcmFtZS52ZXJzaW9uIHx8IHZlcnNpb25fbHQocm9vdC5BbmltYXRpb25GcmFtZS52ZXJzaW9uLCBcIjEuMC4yMFwiKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyb290LCBcIkFuaW1hdGlvbkZyYW1lXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBpZiAoIXJvb3QuX0FuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5BbmltYXRpb25GcmFtZSA9IG5ldyBBbmltYXRpb25GcmFtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvb3QuX0FuaW1hdGlvbkZyYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgIGlmICghcm9vdC5fQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiByb290Ll9BbmltYXRpb25GcmFtZSB3YXMgZW1wdHkgYW5kIGNhbiBiZSBzZXRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByb290Ll9BbmltYXRpb25GcmFtZSA9IG5ldyBBbmltYXRpb25GcmFtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghcm9vdC5fQW5pbWF0aW9uRnJhbWUudmVyc2lvbiB8fCB2ZXJzaW9uX2x0KHJvb3QuX0FuaW1hdGlvbkZyYW1lLnZlcnNpb24sIFwiMS4wLjIwXCIpKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSW4gcm9vdC5fQW5pbWF0aW9uRnJhbWUgd2FzIHByZXZpb3VzIHZlcnNpb24gYW5kIGl0IHNob3VsZCBtaWdyYXRlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIG5ld0FuaW1hdGlvbkZyYW1lID0gbmV3IEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogTWlncmF0ZSBzdWJzY3JpcHRpb25zXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKF90eXBlb2Yocm9vdC5fQW5pbWF0aW9uRnJhbWUucGFyYWxsZWxTdGFjaykgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1pZ3JhdGUgcGFyYWxsZWwgc3Vic2NyaXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgSUQgaW4gcm9vdC5fQW5pbWF0aW9uRnJhbWUucGFyYWxsZWxTdGFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QuX0FuaW1hdGlvbkZyYW1lLnBhcmFsbGVsU3RhY2suaGFzT3duUHJvcGVydHkoSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QW5pbWF0aW9uRnJhbWUucGFyYWxsZWxTdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogcm9vdC5fQW5pbWF0aW9uRnJhbWUucGFyYWxsZWxTdGFja1tJRF0uY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHJvb3QuX0FuaW1hdGlvbkZyYW1lLnBhcmFsbGVsU3RhY2tbSURdLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcm9vdC5fQW5pbWF0aW9uRnJhbWUucGFyYWxsZWxTdGFja1tJRF0ucGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJRDogSURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290Ll9BbmltYXRpb25GcmFtZS5wYXJhbGxlbFVuc3Vic2NyaWJlKElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihyb290Ll9BbmltYXRpb25GcmFtZS5zdGFjaykgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1pZ3JhdGUgc2VyaWFsIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9JRCBpbiByb290Ll9BbmltYXRpb25GcmFtZS5zdGFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QuX0FuaW1hdGlvbkZyYW1lLnN0YWNrLmhhc093blByb3BlcnR5KF9JRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBbmltYXRpb25GcmFtZS5zdWJzY3JpYmUocm9vdC5fQW5pbWF0aW9uRnJhbWUuc3RhY2tbX0lEXS5jb250ZXh0LCByb290Ll9BbmltYXRpb25GcmFtZS5zdGFja1tfSURdLmNhbGxiYWNrLCByb290Ll9BbmltYXRpb25GcmFtZS5zdGFja1tfSURdLnBhcmFtcywgcm9vdC5fQW5pbWF0aW9uRnJhbWUuc3RhY2tbX0lEXS5JRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5fQW5pbWF0aW9uRnJhbWUudW5zdWJzY3JpYmUoX0lEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX3R5cGVvZihyb290Ll9BbmltYXRpb25GcmFtZS5zZXJpYWxTdGFjaykgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIE1pZ3JhdGUgc2VyaWFsIHN1YnNjcmlwdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9JRDIgaW4gcm9vdC5fQW5pbWF0aW9uRnJhbWUuc2VyaWFsU3RhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb290Ll9BbmltYXRpb25GcmFtZS5zZXJpYWxTdGFjay5oYXNPd25Qcm9wZXJ0eShfSUQyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FuaW1hdGlvbkZyYW1lLnNlcmlhbFN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByb290Ll9BbmltYXRpb25GcmFtZS5zZXJpYWxTdGFja1tfSUQyXS5jYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogcm9vdC5fQW5pbWF0aW9uRnJhbWUuc2VyaWFsU3RhY2tbX0lEMl0uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiByb290Ll9BbmltYXRpb25GcmFtZS5zZXJpYWxTdGFja1tfSUQyXS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElEOiBfSUQyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5fQW5pbWF0aW9uRnJhbWUuc2VyaWFsVW5zdWJzY3JpYmUoX0lEMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2V0IG5ldyBBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHJvb3QuX0FuaW1hdGlvbkZyYW1lID0gbmV3QW5pbWF0aW9uRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnJvb3QuQW5pbWF0aW9uRnJhbWUgPSBuZXcgQW5pbWF0aW9uRnJhbWUoKTtcbi8qKlxuICogRXhwb3J0IHNpbmdsZSBBbmltYXRpb25GcmFtZSBpbnN0YW5jZVxuICovXG52YXIgX0FuaW1hdGlvbkZyYW1lID0gcm9vdC5BbmltYXRpb25GcmFtZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9BbmltYXRpb25GcmFtZTtcblxubW9kdWxlLmV4cG9ydHMgPSBfQW5pbWF0aW9uRnJhbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvQW5pbWF0aW9uRnJhbWUudHNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyJdLCJzb3VyY2VSb290IjoiIn0=