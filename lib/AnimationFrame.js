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
	 * Create single request animation frame object
	 * @type {AnimationFrame}
	 */
	
	
	root.AnimationFrame = root.AnimationFrame || new AnimationFrame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YWFlNzQ3ZDdiNGQyYWQ3ZjAwOD9hYzUyKiIsIndlYnBhY2s6Ly8vLi9saWIvQW5pbWF0aW9uRnJhbWUudHM/NWJiMioiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBLHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsV0FBVTtBQUNWOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0MiLCJmaWxlIjoiLi9saWIvQW5pbWF0aW9uRnJhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkFuaW1hdGlvbkZyYW1lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFuaW1hdGlvbkZyYW1lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFuaW1hdGlvbkZyYW1lXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhhYWU3NDdkN2I0ZDJhZDdmMDA4IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJvb3QgPSB2b2lkIDA7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJvb3QgPSBnbG9iYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdCA9IHt9O1xuICAgIH1cbn0gZWxzZSB7XG4gICAgcm9vdCA9IHdpbmRvdztcbn1cbi8qKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gKi9cbnJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2Ygcm9vdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAocm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcm9vdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcm9vdC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcm9vdC5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJvb3QubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHx8IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByb290LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0oKTtcbi8qKlxuICogQmluZCBwb2x5ZmlsbFxuICovXG5mdW5jdGlvbiBiaW5kKGIpIHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnkgYmluZCB2YXJpYWJsZSB0aGF0IG5vdCBhIGZ1bmN0aW9uLCB0aGVuIHRocm93IGVycm9yXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIC0gd2hhdCBpcyB0cnlpbmcgdG8gYmUgYm91bmQgaXMgbm90IGNhbGxhYmxlXCIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBsZXQgQXJyYXkgc2xpY2UgZnVuY3Rpb25cbiAgICAgKi9cbiAgICB2YXIgYSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICB2YXIgZiA9IGEuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBlID0gdGhpcztcbiAgICBmdW5jdGlvbiBjKCkge1xuICAgICAgICAvKlxuICAgICAgICAgaWYgKFxuICAgICAgICAgdHlwZW9mIHJvb3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIHR5cGVvZiByb290LmNvbnNvbGUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgIHR5cGVvZiByb290LmNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICkge1xuICAgICAgICAgcm9vdC5jb25zb2xlLmxvZyhcIkJpbmQgcG9seWZpbGxcIik7XG4gICAgICAgICB9XG4gICAgICAgICAqL1xuICAgIH1cbiAgICBmdW5jdGlvbiBkKCkge1xuICAgICAgICByZXR1cm4gZS5hcHBseSh0aGlzIGluc3RhbmNlb2YgYyA/IHRoaXMgOiBiIHx8IHJvb3QsIGYuY29uY2F0KGEuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyZWQgdGhpcyBwcm90b3R5cGUgYXMgcHJvdG90eXBlIHRvIGJpbmQgaW1wbGVtZW50YXRpb24gZnVuY3Rpb25zXG4gICAgICovXG4gICAgYy5wcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcbiAgICBkLnByb3RvdHlwZSA9IG5ldyBjKCk7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGJpbmQgcG9seWZpbGxcbiAgICAgKi9cbiAgICByZXR1cm4gZDtcbn1cbkZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgYmluZDtcbi8qKlxuICogT2JqZWN0LmtleXMgcG9seWZpbGxcbiAqL1xuZnVuY3Rpb24ga2V5cygpIHtcbiAgICB2YXIgaGFzRG9Ob3RFbnVtQnVnID0gIXsgdG9TdHJpbmc6IG51bGwgfS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInRvU3RyaW5nXCIpO1xuICAgIHZhciBkb05vdEVudW1zID0gW1widG9TdHJpbmdcIiwgXCJ0b0xvY2FsZVN0cmluZ1wiLCBcInZhbHVlT2ZcIiwgXCJoYXNPd25Qcm9wZXJ0eVwiLCBcImlzUHJvdG90eXBlT2ZcIiwgXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLCBcImNvbnN0cnVjdG9yXCJdO1xuICAgIHZhciBkb05vdEVudW1zTGVuZ3RoID0gZG9Ob3RFbnVtcy5sZW5ndGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKSkgIT09IFwib2JqZWN0XCIgJiYgKHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIiB8fCBvYmogPT09IG51bGwpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc0RvTm90RW51bUJ1Zykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb05vdEVudW1zTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgZG9Ob3RFbnVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9Ob3RFbnVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn1cbk9iamVjdC5rZXlzID0gT2JqZWN0LmtleXMgfHwga2V5cygpO1xuLyoqXG4gKiBSZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBjYWxsIHN0YWNrIGNsYXNzXG4gKi9cblxudmFyIEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuc2VyaWFsSUQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3Vic2NyaWJlZCBtZXRob2RzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhcmFsbGVsU3RhY2sgPSB7fTtcbiAgICAgICAgdGhpcy5zZXJpYWxTdGFjayA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFjayA9IHRoaXMucGFyYWxsZWxTdGFjaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0IHJlcXVlc3RBbmltYXRpb25GcmFtZSB3YXRjaGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndhdGNoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSBtZXRob2QgdG8gd2F0Y2hcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gSURcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHJvb3Q7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgICB2YXIgSUQgPSBhcmd1bWVudHNbM107XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYWxsZWxTdWJzY3JpYmUoe1xuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgSUQ6IElEXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGFyYWxsZWwgY2FsbGJhY2sgc3Vic2NyaWJlXG4gICAgICogQHBhcmFtIF9wYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnBhcmFsbGVsU3Vic2NyaWJlID0gZnVuY3Rpb24gcGFyYWxsZWxTdWJzY3JpYmUoX3BhcmFtcykge1xuICAgICAgICBfcGFyYW1zID0gdGhpcy5wcmVwYXJlUGFyYW1zKF9wYXJhbXMpO1xuICAgICAgICBpZiAoX3BhcmFtcykge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGQgbWV0aG9kIHRvIHRoZSBzdGFja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnBhcmFsbGVsU3RhY2tbX3BhcmFtcy5JRF0gPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IF9wYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgY29udGV4dDogX3BhcmFtcy5jb250ZXh0LFxuICAgICAgICAgICAgICAgIHBhcmFtczogX3BhcmFtcy5wYXJhbXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiBzdWJzY3JpcHRpb24gSURcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIF9wYXJhbXMuSUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNlcmlhbCBjYWxsYmFjayBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0gX3BhcmFtc1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuc2VyaWFsU3Vic2NyaWJlID0gZnVuY3Rpb24gc2VyaWFsU3Vic2NyaWJlKF9wYXJhbXMpIHtcbiAgICAgICAgX3BhcmFtcyA9IHRoaXMucHJlcGFyZVBhcmFtcyhfcGFyYW1zKTtcbiAgICAgICAgaWYgKF9wYXJhbXMpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWRkIG1ldGhvZCB0byB0aGUgc3RhY2tcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXJpYWxTdGFja1tfcGFyYW1zLklEXSA9IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogX3BhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBfcGFyYW1zLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBfcGFyYW1zLnBhcmFtc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJuIHN1YnNjcmlwdGlvbiBJRFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gX3BhcmFtcy5JRDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVW5zdWJzY3JpYmUgbWV0aG9kIGJ5IElEXG4gICAgICogQHBhcmFtIElEXG4gICAgICovXG5cblxuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKElEKSB7XG4gICAgICAgIHRoaXMucGFyYWxsZWxVbnN1YnNjcmliZShJRCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQYXJhbGxlbCBjYWxsYmFjayB1bnN1YnNjcmliZVxuICAgICAqIEBwYXJhbSBJRFxuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUucGFyYWxsZWxVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHBhcmFsbGVsVW5zdWJzY3JpYmUoSUQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBJRCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiByZXF1aXJlZCBtZXRob2QgZXhpc3QgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFsbGVsU3RhY2tbSURdKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogTnVsbGlmeSBtZXRob2QgaW4gdGhlIHN0YWNrIGFuZCBkZXN0cm95IGl0XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxlbFN0YWNrW0lEXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFsbGVsU3RhY2tbSURdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXJpYWwgY2FsbGJhY2sgdW5zdWJzY3JpYmUgbWV0aG9kIGJ5IElEXG4gICAgICogQHBhcmFtIElEXG4gICAgICovXG5cblxuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5zZXJpYWxVbnN1YnNjcmliZSA9IGZ1bmN0aW9uIHNlcmlhbFVuc3Vic2NyaWJlKElEKSB7XG4gICAgICAgIGlmICh0eXBlb2YgSUQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgcmVxdWlyZWQgbWV0aG9kIGV4aXN0IGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJpYWxTdGFja1tJRF0pIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBOdWxsaWZ5IG1ldGhvZCBpbiB0aGUgc3RhY2sgYW5kIGRlc3Ryb3kgaXRcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFN0YWNrW0lEXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlcmlhbFN0YWNrW0lEXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJlcGFyZSBzdWJzY3JpcHRpb24gcGFyYW1zXG4gICAgICogQHBhcmFtIF9wYXJhbXNcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUucHJlcGFyZVBhcmFtcyA9IGZ1bmN0aW9uIHByZXBhcmVQYXJhbXMoX3BhcmFtcykge1xuICAgICAgICBpZiAoKHR5cGVvZiBfcGFyYW1zID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoX3BhcmFtcykpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByZXBhcmUgcGFyYW1zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF9wYXJhbXMuY29udGV4dCA9IF9wYXJhbXMuY29udGV4dCB8fCByb290O1xuICAgICAgICAgICAgX3BhcmFtcy5jYWxsYmFjayA9IF9wYXJhbXMuY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9wYXJhbXMucGFyYW1zID0gX3BhcmFtcy5wYXJhbXMgfHwgW107XG4gICAgICAgICAgICBfcGFyYW1zLklEID0gX3BhcmFtcy5JRCB8fCBcIngtXCIgKyBkLmdldFRpbWUoKSArIFwiLVwiICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWU2KTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2sgcGFyYW1zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChfdHlwZW9mKF9wYXJhbXMuY29udGV4dCkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIF9wYXJhbXMuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9wYXJhbXMucGFyYW1zKSA9PT0gXCJvYmplY3RcIiAmJiBBcnJheS5pc0FycmF5KF9wYXJhbXMucGFyYW1zKSAmJiB0eXBlb2YgX3BhcmFtcy5JRCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcGFyYW1zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdhdGNoIGFuZCBjYWxsIG1ldGhvZHNcbiAgICAgKi9cblxuXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gd2F0Y2goKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFsbGVsV2F0Y2goKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV2F0Y2goKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY2FsbCB3YXRjaGVyXG4gICAgICAgICAqL1xuICAgICAgICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLndhdGNoLmJpbmQodGhpcykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2F0Y2ggYW5kIGNhbGwgbWV0aG9kc1xuICAgICAqL1xuXG5cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUucGFyYWxsZWxXYXRjaCA9IGZ1bmN0aW9uIHBhcmFsbGVsV2F0Y2goKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHN0YWNrIGV4aXN0LCBpdCBpcyBhbiBvYmplY3QgYW5kIGl0IGlzIGNvbnRhaW5zIG1ldGhvZHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyYWxsZWxTdGFjayAmJiBfdHlwZW9mKHRoaXMucGFyYWxsZWxTdGFjaykgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModGhpcy5wYXJhbGxlbFN0YWNrKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogTG9vcCBhbGwgbWV0aG9kcyBpbiBzdGFja1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcmFsbGVsSUQgaW4gdGhpcy5wYXJhbGxlbFN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBQcm9jZXNzIG9ubHkgbWV0aG9kcyB3aXRob3V0IGV4dGVuZGVkIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFsbGVsU3RhY2suaGFzT3duUHJvcGVydHkocGFyYWxsZWxJRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgSUQgZXhpc3QgYW5kIGl0IGlzIGEgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFsbGVsSUQgJiYgdHlwZW9mIHBhcmFsbGVsSUQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEdldCBzdWJzY3JpYmVkIG1ldGhvZCBwYXJhbXMgYnkgSURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmpDYWxsID0gdGhpcy5wYXJhbGxlbFN0YWNrW3BhcmFsbGVsSURdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgcGFyYW1zIGV4aXN0LCBpdCBpcyBhbiBvYmplY3QsIGFuZCBpdCBpcyBjb250YWlucyBjYWxsIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGNhbGxiYWNrLCBhbmQgcGFyYW1ldGVycyB3aGljaCBpcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iakNhbGwgJiYgKHR5cGVvZiBvYmpDYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQ2FsbCkpID09PSBcIm9iamVjdFwiICYmIG9iakNhbGwuY29udGV4dCAmJiBvYmpDYWxsLmNhbGxiYWNrICYmIG9iakNhbGwucGFyYW1zICYmIF90eXBlb2Yob2JqQ2FsbC5jb250ZXh0KSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqQ2FsbC5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiICYmIEFycmF5LmlzQXJyYXkob2JqQ2FsbC5wYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENhbGwgc3Vic2NyaWJlZCBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqQ2FsbC5jYWxsYmFjay5hcHBseShvYmpDYWxsLmNvbnRleHQsIG9iakNhbGwucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXYXRjaCBhbmQgY2FsbCBtZXRob2RzXG4gICAgICovXG5cblxuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5zZXJpYWxXYXRjaCA9IGZ1bmN0aW9uIHNlcmlhbFdhdGNoKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBzdGFjayBleGlzdCwgaXQgaXMgYW4gb2JqZWN0IGFuZCBpdCBpcyBjb250YWlucyBtZXRob2RzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLnNlcmlhbFN0YWNrICYmIF90eXBlb2YodGhpcy5zZXJpYWxTdGFjaykgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2tleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNlcmlhbFN0YWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoX2tleXMgJiYgX2tleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJpYWxJRCA+PSBfa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsSUQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBfc2VyaWFsSUQgPSBfa2V5c1t0aGlzLnNlcmlhbElEXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxJRCsrO1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogUHJvY2VzcyBvbmx5IG1ldGhvZHMgd2l0aG91dCBleHRlbmRlZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJpYWxTdGFjay5oYXNPd25Qcm9wZXJ0eShfc2VyaWFsSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIElEIGV4aXN0IGFuZCBpdCBpcyBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3NlcmlhbElEICYmIHR5cGVvZiBfc2VyaWFsSUQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBHZXQgc3Vic2NyaWJlZCBtZXRob2QgcGFyYW1zIGJ5IElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iakNhbGwgPSB0aGlzLnNlcmlhbFN0YWNrW19zZXJpYWxJRF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgcGFyYW1zIGV4aXN0LCBpdCBpcyBhbiBvYmplY3QsIGFuZCBpdCBpcyBjb250YWlucyBjYWxsIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICogY2FsbGJhY2ssIGFuZCBwYXJhbWV0ZXJzIHdoaWNoIGlzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iakNhbGwgJiYgKHR5cGVvZiBvYmpDYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQ2FsbCkpID09PSBcIm9iamVjdFwiICYmIG9iakNhbGwuY29udGV4dCAmJiBvYmpDYWxsLmNhbGxiYWNrICYmIG9iakNhbGwucGFyYW1zICYmIF90eXBlb2Yob2JqQ2FsbC5jb250ZXh0KSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqQ2FsbC5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiICYmIEFycmF5LmlzQXJyYXkob2JqQ2FsbC5wYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDYWxsIHN1YnNjcmliZWQgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpDYWxsLmNhbGxiYWNrLmFwcGx5KG9iakNhbGwuY29udGV4dCwgb2JqQ2FsbC5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9O1xuXG4gICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lO1xufSgpO1xuLyoqXG4gKiBDcmVhdGUgc2luZ2xlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIG9iamVjdFxuICogQHR5cGUge0FuaW1hdGlvbkZyYW1lfVxuICovXG5cblxucm9vdC5BbmltYXRpb25GcmFtZSA9IHJvb3QuQW5pbWF0aW9uRnJhbWUgfHwgbmV3IEFuaW1hdGlvbkZyYW1lKCk7XG4vKipcbiAqIEV4cG9ydCBzaW5nbGUgQW5pbWF0aW9uRnJhbWUgaW5zdGFuY2VcbiAqL1xudmFyIF9BbmltYXRpb25GcmFtZSA9IHJvb3QuQW5pbWF0aW9uRnJhbWU7XG5leHBvcnRzLmRlZmF1bHQgPSBfQW5pbWF0aW9uRnJhbWU7XG5cbm1vZHVsZS5leHBvcnRzID0gX0FuaW1hdGlvbkZyYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL0FuaW1hdGlvbkZyYW1lLnRzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMiXSwic291cmNlUm9vdCI6IiJ9