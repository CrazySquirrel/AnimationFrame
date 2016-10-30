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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(2);
	var AnimationFrame = __webpack_require__(3);
	AnimationFrame.subscribe(undefined, function () {
	    document.body.innerText = new Date().getTime().toString();
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
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
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(4);
	
	
	/***/ },
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */
	/***/ function(module, exports) {
	
		"use strict";
		/**
		 * requestAnimationFrame polyfill
		 */
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		window.requestAnimationFrame = function () {
		    return window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame) || function (callback) {
		        window.setTimeout(callback, 1000 / 60);
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
		        if (typeof window !== "undefined" && _typeof(window.console) === "object" && typeof window.console.log === "function") {
		            window.console.log("Bind polyfill");
		        }
		    }
		    function d() {
		        return e.apply(this instanceof c ? this : b || window, f.concat(a.call(arguments)));
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
		    AnimationFrame.prototype.subscribe = function (context, callback, params, ID) {
		        if (context === void 0) {
		            context = window;
		        }
		        if (callback === void 0) {
		            callback = function callback() {
		                return null;
		            };
		        }
		        if (params === void 0) {
		            params = [];
		        }
		        try {
		            /**
		             * If context and callback passed and they are object and function
		             */
		            if ((typeof context === "undefined" ? "undefined" : _typeof(context)) === "object" && typeof callback === "function") {
		                /**
		                 * Create UID
		                 */
		                var d = new Date();
		                var localID = ID || "x-" + d.getTime() + "-" + Math.round(Math.random() * 1e6);
		                /**
		                 * Add method to the stack
		                 */
		                this.stack[localID] = {
		                    context: context,
		                    callback: callback,
		                    params: params
		                };
		                /**
		                 * Write to console count of the subscribed methods
		                 */
		                if (typeof window !== "undefined" && _typeof(window.console) === "object" && typeof window.console.info === "function") {
		                    window.console.info("AnimationFrame stack " + Object.keys(this.stack).length);
		                }
		                /**
		                 * Return UID
		                 */
		                return localID;
		            }
		        } catch (e) {
		            if (typeof window !== "undefined" && _typeof(window.console) === "object" && typeof window.console.error === "function") {
		                window.console.error(e);
		            }
		        }
		        /**
		         * If something goes wrong return false
		         */
		        return false;
		    };
		    /**
		     * Unsubscribe method by ID
		     * @param ID
		     */
		    AnimationFrame.prototype.unsubscribe = function (ID) {
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
		            if (typeof window !== "undefined" && _typeof(window.console) === "object" && typeof window.console.info === "function") {
		                window.console.info("AnimationFrame stack " + Object.keys(this.stack).length);
		            }
		        }
		    };
		    /**
		     * Watch and call methods
		     */
		    AnimationFrame.prototype.watch = function () {
		        try {
		            /**
		             * If stack exist, it is an object and it is contains methods
		             */
		            if (this.stack && _typeof(this.stack) === "object" && Object.keys(this.stack).length > 0) {
		                /**
		                 * Loop all methods in stack
		                 */
		                for (var ID in this.stack) {
		                    /**
		                     * Process only methods without extended properties
		                     */
		                    if (this.stack.hasOwnProperty(ID)) {
		                        try {
		                            /**
		                             * If ID exist and it is a string
		                             */
		                            if (ID && typeof ID === "string") {
		                                /**
		                                 * Get subscribed method params by ID
		                                 */
		                                var objCall = this.stack[ID];
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
		                        } catch (e) {
		                            if (typeof window !== "undefined" && _typeof(window.console) === "object" && typeof window.console.error === "function") {
		                                window.console.error(e);
		                            }
		                        }
		                    }
		                }
		            }
		        } catch (e) {
		            if (typeof window !== "undefined" && _typeof(window.console) === "object" && typeof window.console.error === "function") {
		                window.console.error(e);
		            }
		        }
		        /**
		         * Recall watcher
		         */
		        window.requestAnimationFrame(this.watch.bind(this));
		    };
		    return AnimationFrame;
		}();
		/**
		 * Create single request animation frame object
		 * @type {AnimationFrame}
		 */
		window.AnimationFrame = window.AnimationFrame || new AnimationFrame();
		module.exports = window.AnimationFrame;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZGZmZjU3ODY4MDE4NTQzMmVmYiIsIndlYnBhY2s6Ly8vLi9saWIvQW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSx3QyIsImZpbGUiOiIuL2xpYi9BbmltYXRpb25GcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQW5pbWF0aW9uRnJhbWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQW5pbWF0aW9uRnJhbWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQW5pbWF0aW9uRnJhbWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRmZmY1Nzg2ODAxODU0MzJlZmIiLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gKi9cblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cgJiYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSkgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCk7XG4vKipcbiAqIEJpbmQgcG9seWZpbGxcbiAqL1xuZnVuY3Rpb24gYmluZChiKSB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ5IGJpbmQgdmFyaWFibGUgdGhhdCBub3QgYSBmdW5jdGlvbiwgdGhlbiB0aHJvdyBlcnJvclxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZVwiKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbGV0IEFycmF5IHNsaWNlIGZ1bmN0aW9uXG4gICAgICovXG4gICAgdmFyIGEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgdmFyIGYgPSBhLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgZnVuY3Rpb24gYygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coXCJCaW5kIHBvbHlmaWxsXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGQoKSB7XG4gICAgICAgIHJldHVybiBlLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBjID8gdGhpcyA6IGIgfHwgd2luZG93LCBmLmNvbmNhdChhLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcmVkIHRoaXMgcHJvdG90eXBlIGFzIHByb3RvdHlwZSB0byBiaW5kIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIGMucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgZC5wcm90b3R5cGUgPSBuZXcgYygpO1xuICAgIC8qKlxuICAgICAqIFJldHVybiBiaW5kIHBvbHlmaWxsXG4gICAgICovXG4gICAgcmV0dXJuIGQ7XG59XG5GdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGJpbmQ7XG4vKipcbiAqIE9iamVjdC5rZXlzIHBvbHlmaWxsXG4gKi9cbmZ1bmN0aW9uIGtleXMoKSB7XG4gICAgdmFyIGhhc0RvTm90RW51bUJ1ZyA9ICF7IHRvU3RyaW5nOiBudWxsIH0ucHJvcGVydHlJc0VudW1lcmFibGUoXCJ0b1N0cmluZ1wiKTtcbiAgICB2YXIgZG9Ob3RFbnVtcyA9IFtcInRvU3RyaW5nXCIsIFwidG9Mb2NhbGVTdHJpbmdcIiwgXCJ2YWx1ZU9mXCIsIFwiaGFzT3duUHJvcGVydHlcIiwgXCJpc1Byb3RvdHlwZU9mXCIsIFwicHJvcGVydHlJc0VudW1lcmFibGVcIiwgXCJjb25zdHJ1Y3RvclwiXTtcbiAgICB2YXIgZG9Ob3RFbnVtc0xlbmd0aCA9IGRvTm90RW51bXMubGVuZ3RoO1xuICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpICE9PSBcIm9iamVjdFwiICYmICh0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIgfHwgb2JqID09PSBudWxsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5rZXlzIGNhbGxlZCBvbiBub24tb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNEb05vdEVudW1CdWcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9Ob3RFbnVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGRvTm90RW51bXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvTm90RW51bXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG5PYmplY3Qua2V5cyA9IE9iamVjdC5rZXlzIHx8IGtleXMoKTtcbi8qKlxuICogUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgY2FsbCBzdGFjayBjbGFzc1xuICovXG52YXIgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJzY3JpYmVkIG1ldGhvZHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhY2sgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXJ0IHJlcXVlc3RBbmltYXRpb25GcmFtZSB3YXRjaGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLndhdGNoKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSBtZXRob2QgdG8gd2F0Y2hcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gSURcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAgICAgKi9cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNvbnRleHQsIGNhbGxiYWNrLCBwYXJhbXMsIElEKSB7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB3aW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcGFyYW1zID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgY29udGV4dCBhbmQgY2FsbGJhY2sgcGFzc2VkIGFuZCB0aGV5IGFyZSBvYmplY3QgYW5kIGZ1bmN0aW9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRleHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb250ZXh0KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDcmVhdGUgVUlEXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbElEID0gSUQgfHwgXCJ4LVwiICsgZC5nZXRUaW1lKCkgKyBcIi1cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlNik7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQWRkIG1ldGhvZCB0byB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrW2xvY2FsSURdID0ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBXcml0ZSB0byBjb25zb2xlIGNvdW50IG9mIHRoZSBzdWJzY3JpYmVkIG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUuaW5mbyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmluZm8oXCJBbmltYXRpb25GcmFtZSBzdGFjayBcIiArIE9iamVjdC5rZXlzKHRoaXMuc3RhY2spLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFJldHVybiBVSURcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxJRDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc29tZXRoaW5nIGdvZXMgd3JvbmcgcmV0dXJuIGZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVbnN1YnNjcmliZSBtZXRob2QgYnkgSURcbiAgICAgKiBAcGFyYW0gSURcbiAgICAgKi9cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoSUQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHJlcXVpcmVkIG1ldGhvZCBleGlzdCBpbiB0aGUgc3RhY2tcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLnN0YWNrW0lEXSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBOdWxsaWZ5IG1ldGhvZCBpbiB0aGUgc3RhY2sgYW5kIGRlc3Ryb3kgaXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zdGFja1tJRF0gPSBmYWxzZTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YWNrW0lEXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV3JpdGUgdG8gY29uc29sZSBjb3VudCBvZiB0aGUgc3Vic2NyaWJlZCBtZXRob2RzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIF90eXBlb2Yod2luZG93LmNvbnNvbGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuY29uc29sZS5pbmZvID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5pbmZvKFwiQW5pbWF0aW9uRnJhbWUgc3RhY2sgXCIgKyBPYmplY3Qua2V5cyh0aGlzLnN0YWNrKS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXYXRjaCBhbmQgY2FsbCBtZXRob2RzXG4gICAgICovXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBzdGFjayBleGlzdCwgaXQgaXMgYW4gb2JqZWN0IGFuZCBpdCBpcyBjb250YWlucyBtZXRob2RzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YWNrICYmIF90eXBlb2YodGhpcy5zdGFjaykgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModGhpcy5zdGFjaykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIExvb3AgYWxsIG1ldGhvZHMgaW4gc3RhY2tcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBJRCBpbiB0aGlzLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBQcm9jZXNzIG9ubHkgbWV0aG9kcyB3aXRob3V0IGV4dGVuZGVkIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YWNrLmhhc093blByb3BlcnR5KElEKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJZiBJRCBleGlzdCBhbmQgaXQgaXMgYSBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSUQgJiYgdHlwZW9mIElEID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBHZXQgc3Vic2NyaWJlZCBtZXRob2QgcGFyYW1zIGJ5IElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqQ2FsbCA9IHRoaXMuc3RhY2tbSURdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgcGFyYW1zIGV4aXN0LCBpdCBpcyBhbiBvYmplY3QsIGFuZCBpdCBpcyBjb250YWlucyBjYWxsIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGNhbGxiYWNrLCBhbmQgcGFyYW1ldGVycyB3aGljaCBpcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iakNhbGwgJiYgKHR5cGVvZiBvYmpDYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQ2FsbCkpID09PSBcIm9iamVjdFwiICYmIG9iakNhbGwuY29udGV4dCAmJiBvYmpDYWxsLmNhbGxiYWNrICYmIG9iakNhbGwucGFyYW1zICYmIF90eXBlb2Yob2JqQ2FsbC5jb250ZXh0KSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqQ2FsbC5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiICYmIEFycmF5LmlzQXJyYXkob2JqQ2FsbC5wYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENhbGwgc3Vic2NyaWJlZCBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqQ2FsbC5jYWxsYmFjay5hcHBseShvYmpDYWxsLmNvbnRleHQsIG9iakNhbGwucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIF90eXBlb2Yod2luZG93LmNvbnNvbGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlY2FsbCB3YXRjaGVyXG4gICAgICAgICAqL1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMud2F0Y2guYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWU7XG59KCk7XG4vKipcbiAqIENyZWF0ZSBzaW5nbGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWUgb2JqZWN0XG4gKiBAdHlwZSB7QW5pbWF0aW9uRnJhbWV9XG4gKi9cbndpbmRvdy5BbmltYXRpb25GcmFtZSA9IHdpbmRvdy5BbmltYXRpb25GcmFtZSB8fCBuZXcgQW5pbWF0aW9uRnJhbWUoKTtcbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkFuaW1hdGlvbkZyYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL0FuaW1hdGlvbkZyYW1lLnRzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YTEwNzU2YWQ5NzFkMWJiODgwNyIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLXR5cGVzY3JpcHQtZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLXR5cGVzY3JpcHQtZXhhbXBsZS9pbmRleC5odG1sIiwid2VicGFjazovLy8uL2xpYi9BbmltYXRpb25GcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNORCwwQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNELHFDQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0dBQXFHLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLDRDQUEyQyxjQUFjLG16Z0IiLCJmaWxlIjoiLi9kaXN0L3NpbXBsZS1qYXZhc2NyaXB0LWV4YW1wbGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkFuaW1hdGlvbkZyYW1lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFuaW1hdGlvbkZyYW1lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFuaW1hdGlvbkZyYW1lXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRhMTA3NTZhZDk3MWQxYmI4ODA3IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmh0bWxcIik7XG52YXIgQW5pbWF0aW9uRnJhbWUgPSByZXF1aXJlKFwiLi4vLi4vbGliL0FuaW1hdGlvbkZyYW1lLmpzXCIpO1xuQW5pbWF0aW9uRnJhbWUuc3Vic2NyaWJlKHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpbXBsZS10eXBlc2NyaXB0LWV4YW1wbGUvaW5kZXgudHNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NpbXBsZS10eXBlc2NyaXB0LWV4YW1wbGUvaW5kZXguaHRtbFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQW5pbWF0aW9uRnJhbWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQW5pbWF0aW9uRnJhbWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQW5pbWF0aW9uRnJhbWVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuXG4vKioqLyB9LFxuLyogMSAqLyxcbi8qIDIgKi8sXG4vKiAzICovLFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKlxuXHQgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcblx0ICovXG5cdFxuXHR2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cdFxuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdyAmJiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB8fCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0ICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0ICAgIH07XG5cdH0oKTtcblx0LyoqXG5cdCAqIEJpbmQgcG9seWZpbGxcblx0ICovXG5cdGZ1bmN0aW9uIGJpbmQoYikge1xuXHQgICAgLyoqXG5cdCAgICAgKiBJZiB0cnkgYmluZCB2YXJpYWJsZSB0aGF0IG5vdCBhIGZ1bmN0aW9uLCB0aGVuIHRocm93IGVycm9yXG5cdCAgICAgKi9cblx0ICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIC0gd2hhdCBpcyB0cnlpbmcgdG8gYmUgYm91bmQgaXMgbm90IGNhbGxhYmxlXCIpO1xuXHQgICAgfVxuXHQgICAgLyoqXG5cdCAgICAgKiBsZXQgQXJyYXkgc2xpY2UgZnVuY3Rpb25cblx0ICAgICAqL1xuXHQgICAgdmFyIGEgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cdCAgICB2YXIgZiA9IGEuY2FsbChhcmd1bWVudHMsIDEpO1xuXHQgICAgdmFyIGUgPSB0aGlzO1xuXHQgICAgZnVuY3Rpb24gYygpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKFwiQmluZCBwb2x5ZmlsbFwiKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBmdW5jdGlvbiBkKCkge1xuXHQgICAgICAgIHJldHVybiBlLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBjID8gdGhpcyA6IGIgfHwgd2luZG93LCBmLmNvbmNhdChhLmNhbGwoYXJndW1lbnRzKSkpO1xuXHQgICAgfVxuXHQgICAgLyoqXG5cdCAgICAgKiBSZWdpc3RlcmVkIHRoaXMgcHJvdG90eXBlIGFzIHByb3RvdHlwZSB0byBiaW5kIGltcGxlbWVudGF0aW9uIGZ1bmN0aW9uc1xuXHQgICAgICovXG5cdCAgICBjLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXHQgICAgZC5wcm90b3R5cGUgPSBuZXcgYygpO1xuXHQgICAgLyoqXG5cdCAgICAgKiBSZXR1cm4gYmluZCBwb2x5ZmlsbFxuXHQgICAgICovXG5cdCAgICByZXR1cm4gZDtcblx0fVxuXHRGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGJpbmQ7XG5cdC8qKlxuXHQgKiBPYmplY3Qua2V5cyBwb2x5ZmlsbFxuXHQgKi9cblx0ZnVuY3Rpb24ga2V5cygpIHtcblx0ICAgIHZhciBoYXNEb05vdEVudW1CdWcgPSAheyB0b1N0cmluZzogbnVsbCB9LnByb3BlcnR5SXNFbnVtZXJhYmxlKFwidG9TdHJpbmdcIik7XG5cdCAgICB2YXIgZG9Ob3RFbnVtcyA9IFtcInRvU3RyaW5nXCIsIFwidG9Mb2NhbGVTdHJpbmdcIiwgXCJ2YWx1ZU9mXCIsIFwiaGFzT3duUHJvcGVydHlcIiwgXCJpc1Byb3RvdHlwZU9mXCIsIFwicHJvcGVydHlJc0VudW1lcmFibGVcIiwgXCJjb25zdHJ1Y3RvclwiXTtcblx0ICAgIHZhciBkb05vdEVudW1zTGVuZ3RoID0gZG9Ob3RFbnVtcy5sZW5ndGg7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgIGlmICgodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaikpICE9PSBcIm9iamVjdFwiICYmICh0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIgfHwgb2JqID09PSBudWxsKSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3RcIik7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuXHQgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcblx0ICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3ApO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChoYXNEb05vdEVudW1CdWcpIHtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb05vdEVudW1zTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBkb05vdEVudW1zW2ldKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvTm90RW51bXNbaV0pO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9O1xuXHR9XG5cdE9iamVjdC5rZXlzID0gT2JqZWN0LmtleXMgfHwga2V5cygpO1xuXHQvKipcblx0ICogUmVxdWVzdCBhbmltYXRpb24gZnJhbWUgY2FsbCBzdGFjayBjbGFzc1xuXHQgKi9cblx0dmFyIEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgLyoqXG5cdCAgICAgKiBDcmVhdGUgcmVxdWVzdCBhbmltYXRpb24gZnJhbWVcblx0ICAgICAqL1xuXHQgICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWUoKSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogU3Vic2NyaWJlZCBtZXRob2RzXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdGhpcy5zdGFjayA9IHt9O1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFN0YXJ0IHJlcXVlc3RBbmltYXRpb25GcmFtZSB3YXRjaGVyXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdGhpcy53YXRjaCgpO1xuXHQgICAgfVxuXHQgICAgLyoqXG5cdCAgICAgKiBTdWJzY3JpYmUgbWV0aG9kIHRvIHdhdGNoXG5cdCAgICAgKiBAcGFyYW0gY29udGV4dFxuXHQgICAgICogQHBhcmFtIGNhbGxiYWNrXG5cdCAgICAgKiBAcGFyYW0gcGFyYW1zXG5cdCAgICAgKiBAcGFyYW0gSURcblx0ICAgICAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuXHQgICAgICovXG5cdCAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNvbnRleHQsIGNhbGxiYWNrLCBwYXJhbXMsIElEKSB7XG5cdCAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuXHQgICAgICAgICAgICBjb250ZXh0ID0gd2luZG93O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoY2FsbGJhY2sgPT09IHZvaWQgMCkge1xuXHQgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuXHQgICAgICAgICAgICBwYXJhbXMgPSBbXTtcblx0ICAgICAgICB9XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIElmIGNvbnRleHQgYW5kIGNhbGxiYWNrIHBhc3NlZCBhbmQgdGhleSBhcmUgb2JqZWN0IGFuZCBmdW5jdGlvblxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaWYgKCh0eXBlb2YgY29udGV4dCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNvbnRleHQpKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKiBDcmVhdGUgVUlEXG5cdCAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcblx0ICAgICAgICAgICAgICAgIHZhciBsb2NhbElEID0gSUQgfHwgXCJ4LVwiICsgZC5nZXRUaW1lKCkgKyBcIi1cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlNik7XG5cdCAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAqIEFkZCBtZXRob2QgdG8gdGhlIHN0YWNrXG5cdCAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgIHRoaXMuc3RhY2tbbG9jYWxJRF0gPSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcblx0ICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG5cdCAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcblx0ICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAqIFdyaXRlIHRvIGNvbnNvbGUgY291bnQgb2YgdGhlIHN1YnNjcmliZWQgbWV0aG9kc1xuXHQgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUuaW5mbyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuaW5mbyhcIkFuaW1hdGlvbkZyYW1lIHN0YWNrIFwiICsgT2JqZWN0LmtleXModGhpcy5zdGFjaykubGVuZ3RoKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICogUmV0dXJuIFVJRFxuXHQgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxJRDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIHNvbWV0aGluZyBnb2VzIHdyb25nIHJldHVybiBmYWxzZVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIFVuc3Vic2NyaWJlIG1ldGhvZCBieSBJRFxuXHQgICAgICogQHBhcmFtIElEXG5cdCAgICAgKi9cblx0ICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChJRCkge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIElmIHJlcXVpcmVkIG1ldGhvZCBleGlzdCBpbiB0aGUgc3RhY2tcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpZiAodGhpcy5zdGFja1tJRF0pIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIE51bGxpZnkgbWV0aG9kIGluIHRoZSBzdGFjayBhbmQgZGVzdHJveSBpdFxuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgdGhpcy5zdGFja1tJRF0gPSBmYWxzZTtcblx0ICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhY2tbSURdO1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogV3JpdGUgdG8gY29uc29sZSBjb3VudCBvZiB0aGUgc3Vic2NyaWJlZCBtZXRob2RzXG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUuaW5mbyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5pbmZvKFwiQW5pbWF0aW9uRnJhbWUgc3RhY2sgXCIgKyBPYmplY3Qua2V5cyh0aGlzLnN0YWNrKS5sZW5ndGgpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblx0ICAgIC8qKlxuXHQgICAgICogV2F0Y2ggYW5kIGNhbGwgbWV0aG9kc1xuXHQgICAgICovXG5cdCAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIElmIHN0YWNrIGV4aXN0LCBpdCBpcyBhbiBvYmplY3QgYW5kIGl0IGlzIGNvbnRhaW5zIG1ldGhvZHNcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGlmICh0aGlzLnN0YWNrICYmIF90eXBlb2YodGhpcy5zdGFjaykgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModGhpcy5zdGFjaykubGVuZ3RoID4gMCkge1xuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKiBMb29wIGFsbCBtZXRob2RzIGluIHN0YWNrXG5cdCAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIElEIGluIHRoaXMuc3RhY2spIHtcblx0ICAgICAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAgICAgKiBQcm9jZXNzIG9ubHkgbWV0aG9kcyB3aXRob3V0IGV4dGVuZGVkIHByb3BlcnRpZXNcblx0ICAgICAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGFjay5oYXNPd25Qcm9wZXJ0eShJRCkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgSUQgZXhpc3QgYW5kIGl0IGlzIGEgc3RyaW5nXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChJRCAmJiB0eXBlb2YgSUQgPT09IFwic3RyaW5nXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBHZXQgc3Vic2NyaWJlZCBtZXRob2QgcGFyYW1zIGJ5IElEXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iakNhbGwgPSB0aGlzLnN0YWNrW0lEXTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBJZiBwYXJhbXMgZXhpc3QsIGl0IGlzIGFuIG9iamVjdCwgYW5kIGl0IGlzIGNvbnRhaW5zIGNhbGwgY29udGV4dCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBjYWxsYmFjaywgYW5kIHBhcmFtZXRlcnMgd2hpY2ggaXMgYXJyYXlcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqQ2FsbCAmJiAodHlwZW9mIG9iakNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmpDYWxsKSkgPT09IFwib2JqZWN0XCIgJiYgb2JqQ2FsbC5jb250ZXh0ICYmIG9iakNhbGwuY2FsbGJhY2sgJiYgb2JqQ2FsbC5wYXJhbXMgJiYgX3R5cGVvZihvYmpDYWxsLmNvbnRleHQpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmpDYWxsLmNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXkuaXNBcnJheShvYmpDYWxsLnBhcmFtcykpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIENhbGwgc3Vic2NyaWJlZCBtZXRob2Rcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakNhbGwuY2FsbGJhY2suYXBwbHkob2JqQ2FsbC5jb250ZXh0LCBvYmpDYWxsLnBhcmFtcyk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBfdHlwZW9mKHdpbmRvdy5jb25zb2xlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygd2luZG93LmNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuZXJyb3IoZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVjYWxsIHdhdGNoZXJcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMud2F0Y2guYmluZCh0aGlzKSk7XG5cdCAgICB9O1xuXHQgICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lO1xuXHR9KCk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgc2luZ2xlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIG9iamVjdFxuXHQgKiBAdHlwZSB7QW5pbWF0aW9uRnJhbWV9XG5cdCAqL1xuXHR3aW5kb3cuQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuQW5pbWF0aW9uRnJhbWUgfHwgbmV3IEFuaW1hdGlvbkZyYW1lKCk7XG5cdG1vZHVsZS5leHBvcnRzID0gd2luZG93LkFuaW1hdGlvbkZyYW1lO1xuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBMlpHWm1aalUzT0RZNE1ERTROVFF6TW1WbVlpSXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZRVzVwYldGMGFXOXVSbkpoYldVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4MVFrRkJaVHRCUVVObU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096dEJRM1JEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHhSMEZCYjBjc2JVSkJRVzFDTEVWQlFVVXNiVUpCUVcxQ0xEaElRVUU0U0RzN1FVRkZNVkU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTmtKQlFUUkNMR2xDUVVGcFFqdEJRVU0zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUV5UWl4elFrRkJjMEk3UVVGRGFrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZuUWp0QlFVTm9RanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERCQ1FVRjVRanRCUVVONlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVTTdRVUZEUkR0QlFVTkJPMEZCUTBFc1YwRkJWVHRCUVVOV08wRkJRMEU3UVVGRFFTeDNReUlzSW1acGJHVWlPaUl1TDJ4cFlpOUJibWx0WVhScGIyNUdjbUZ0WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRndpUVc1cGJXRjBhVzl1Um5KaGJXVmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lRVzVwYldGMGFXOXVSbkpoYldWY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVFXNXBiV0YwYVc5dVJuSmhiV1ZjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoMGFHbHpMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlCY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcFhHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc1Y2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OUxGeHVJRngwWEhSY2RHbGtPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzYjJGa1pXUTZJR1poYkhObFhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExteHZZV1JsWkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01DazdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ05tUm1abVkxTnpnMk9EQXhPRFUwTXpKbFptSWlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiaThxS2x4dUlDb2djbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzWEc0Z0tpOWNibHh1ZG1GeUlGOTBlWEJsYjJZZ1BTQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2RIbHdaVzltSUZONWJXSnZiQzVwZEdWeVlYUnZjaUE5UFQwZ1hDSnplVzFpYjJ4Y0lpQS9JR1oxYm1OMGFXOXVJQ2h2WW1vcElIc2djbVYwZFhKdUlIUjVjR1Z2WmlCdlltbzdJSDBnT2lCbWRXNWpkR2x2YmlBb2IySnFLU0I3SUhKbGRIVnliaUJ2WW1vZ0ppWWdkSGx3Wlc5bUlGTjViV0p2YkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2lBOVBUMGdVM2x0WW05c0lDWW1JRzlpYWlBaFBUMGdVM2x0WW05c0xuQnliM1J2ZEhsd1pTQS9JRndpYzNsdFltOXNYQ0lnT2lCMGVYQmxiMllnYjJKcU95QjlPMXh1WEc1M2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjNhVzVrYjNjZ0ppWWdLSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnZkh3Z2QybHVaRzkzTG5kbFltdHBkRkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCOGZDQjNhVzVrYjNjdWJXOTZVbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUh4OElIZHBibVJ2ZHk1dlVtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSHg4SUhkcGJtUnZkeTV0YzFKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTa2dmSHdnWm5WdVkzUnBiMjRnS0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnSUNBZ0lIZHBibVJ2ZHk1elpYUlVhVzFsYjNWMEtHTmhiR3hpWVdOckxDQXhNREF3SUM4Z05qQXBPMXh1SUNBZ0lIMDdYRzU5S0NrN1hHNHZLaXBjYmlBcUlFSnBibVFnY0c5c2VXWnBiR3hjYmlBcUwxeHVablZ1WTNScGIyNGdZbWx1WkNoaUtTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTV1lnZEhKNUlHSnBibVFnZG1GeWFXRmliR1VnZEdoaGRDQnViM1FnWVNCbWRXNWpkR2x2Yml3Z2RHaGxiaUIwYUhKdmR5Qmxjbkp2Y2x4dUlDQWdJQ0FxTDF4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5QWhQVDBnWENKbWRXNWpkR2x2Ymx3aUtTQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWENKR2RXNWpkR2x2Ymk1d2NtOTBiM1I1Y0dVdVltbHVaQ0F0SUhkb1lYUWdhWE1nZEhKNWFXNW5JSFJ2SUdKbElHSnZkVzVrSUdseklHNXZkQ0JqWVd4c1lXSnNaVndpS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nYkdWMElFRnljbUY1SUhOc2FXTmxJR1oxYm1OMGFXOXVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2RtRnlJR0VnUFNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YzJ4cFkyVTdYRzRnSUNBZ2RtRnlJR1lnUFNCaExtTmhiR3dvWVhKbmRXMWxiblJ6TENBeEtUdGNiaUFnSUNCMllYSWdaU0E5SUhSb2FYTTdYRzRnSUNBZ1puVnVZM1JwYjI0Z1l5Z3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnSmlZZ1gzUjVjR1Z2WmloM2FXNWtiM2N1WTI5dWMyOXNaU2tnUFQwOUlGd2liMkpxWldOMFhDSWdKaVlnZEhsd1pXOW1JSGRwYm1SdmR5NWpiMjV6YjJ4bExteHZaeUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjNhVzVrYjNjdVkyOXVjMjlzWlM1c2IyY29YQ0pDYVc1a0lIQnZiSGxtYVd4c1hDSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHWjFibU4wYVc5dUlHUW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJsTG1Gd2NHeDVLSFJvYVhNZ2FXNXpkR0Z1WTJWdlppQmpJRDhnZEdocGN5QTZJR0lnZkh3Z2QybHVaRzkzTENCbUxtTnZibU5oZENoaExtTmhiR3dvWVhKbmRXMWxiblJ6S1NrcE8xeHVJQ0FnSUgxY2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXZHBjM1JsY21Wa0lIUm9hWE1nY0hKdmRHOTBlWEJsSUdGeklIQnliM1J2ZEhsd1pTQjBieUJpYVc1a0lHbHRjR3hsYldWdWRHRjBhVzl1SUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FxTDF4dUlDQWdJR011Y0hKdmRHOTBlWEJsSUQwZ2RHaHBjeTV3Y205MGIzUjVjR1U3WEc0Z0lDQWdaQzV3Y205MGIzUjVjR1VnUFNCdVpYY2dZeWdwTzF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnliaUJpYVc1a0lIQnZiSGxtYVd4c1hHNGdJQ0FnSUNvdlhHNGdJQ0FnY21WMGRYSnVJR1E3WEc1OVhHNUdkVzVqZEdsdmJpNXdjbTkwYjNSNWNHVXVZbWx1WkNBOUlFWjFibU4wYVc5dUxuQnliM1J2ZEhsd1pTNWlhVzVrSUh4OElHSnBibVE3WEc0dktpcGNiaUFxSUU5aWFtVmpkQzVyWlhseklIQnZiSGxtYVd4c1hHNGdLaTljYm1aMWJtTjBhVzl1SUd0bGVYTW9LU0I3WEc0Z0lDQWdkbUZ5SUdoaGMwUnZUbTkwUlc1MWJVSjFaeUE5SUNGN0lIUnZVM1J5YVc1bk9pQnVkV3hzSUgwdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVW9YQ0owYjFOMGNtbHVaMXdpS1R0Y2JpQWdJQ0IyWVhJZ1pHOU9iM1JGYm5WdGN5QTlJRnRjSW5SdlUzUnlhVzVuWENJc0lGd2lkRzlNYjJOaGJHVlRkSEpwYm1kY0lpd2dYQ0oyWVd4MVpVOW1YQ0lzSUZ3aWFHRnpUM2R1VUhKdmNHVnlkSGxjSWl3Z1hDSnBjMUJ5YjNSdmRIbHdaVTltWENJc0lGd2ljSEp2Y0dWeWRIbEpjMFZ1ZFcxbGNtRmliR1ZjSWl3Z1hDSmpiMjV6ZEhKMVkzUnZjbHdpWFR0Y2JpQWdJQ0IyWVhJZ1pHOU9iM1JGYm5WdGMweGxibWQwYUNBOUlHUnZUbTkwUlc1MWJYTXViR1Z1WjNSb08xeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvYjJKcUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnb2RIbHdaVzltSUc5aWFpQTlQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JRndpZFc1a1pXWnBibVZrWENJZ09pQmZkSGx3Wlc5bUtHOWlhaWtwSUNFOVBTQmNJbTlpYW1WamRGd2lJQ1ltSUNoMGVYQmxiMllnYjJKcUlDRTlQU0JjSW1aMWJtTjBhVzl1WENJZ2ZId2diMkpxSUQwOVBTQnVkV3hzS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lrOWlhbVZqZEM1clpYbHpJR05oYkd4bFpDQnZiaUJ1YjI0dGIySnFaV04wWENJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFpoY2lCeVpYTjFiSFFnUFNCYlhUdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdjSEp2Y0NCcGJpQnZZbW9wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFMQ0J3Y205d0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RDNXdkWE5vS0hCeWIzQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNob1lYTkViMDV2ZEVWdWRXMUNkV2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWkc5T2IzUkZiblZ0YzB4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltb3NJR1J2VG05MFJXNTFiWE5iYVYwcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkQzV3ZFhOb0tHUnZUbTkwUlc1MWJYTmJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lIMDdYRzU5WEc1UFltcGxZM1F1YTJWNWN5QTlJRTlpYW1WamRDNXJaWGx6SUh4OElHdGxlWE1vS1R0Y2JpOHFLbHh1SUNvZ1VtVnhkV1Z6ZENCaGJtbHRZWFJwYjI0Z1puSmhiV1VnWTJGc2JDQnpkR0ZqYXlCamJHRnpjMXh1SUNvdlhHNTJZWElnUVc1cGJXRjBhVzl1Um5KaGJXVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EzSmxZWFJsSUhKbGNYVmxjM1FnWVc1cGJXRjBhVzl1SUdaeVlXMWxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1puVnVZM1JwYjI0Z1FXNXBiV0YwYVc5dVJuSmhiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCVGRXSnpZM0pwWW1Wa0lHMWxkR2h2WkhOY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhZMnNnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlGTjBZWEowSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQjNZWFJqYUdWeVhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZGhkR05vS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZOMVluTmpjbWxpWlNCdFpYUm9iMlFnZEc4Z2QyRjBZMmhjYmlBZ0lDQWdLaUJBY0dGeVlXMGdZMjl1ZEdWNGRGeHVJQ0FnSUNBcUlFQndZWEpoYlNCallXeHNZbUZqYTF4dUlDQWdJQ0FxSUVCd1lYSmhiU0J3WVhKaGJYTmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ1NVUmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZITjBjbWx1WjMxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCYm1sdFlYUnBiMjVHY21GdFpTNXdjbTkwYjNSNWNHVXVjM1ZpYzJOeWFXSmxJRDBnWm5WdVkzUnBiMjRnS0dOdmJuUmxlSFFzSUdOaGJHeGlZV05yTENCd1lYSmhiWE1zSUVsRUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoamIyNTBaWGgwSUQwOVBTQjJiMmxrSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuUmxlSFFnUFNCM2FXNWtiM2M3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLR05oYkd4aVlXTnJJRDA5UFNCMmIybGtJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYkd4aVlXTnJJRDBnWm5WdVkzUnBiMjRnWTJGc2JHSmhZMnNvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNod1lYSmhiWE1nUFQwOUlIWnZhV1FnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0dGeVlXMXpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nU1dZZ1kyOXVkR1Y0ZENCaGJtUWdZMkZzYkdKaFkyc2djR0Z6YzJWa0lHRnVaQ0IwYUdWNUlHRnlaU0J2WW1wbFkzUWdZVzVrSUdaMWJtTjBhVzl1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dvZEhsd1pXOW1JR052Ym5SbGVIUWdQVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJjSW5WdVpHVm1hVzVsWkZ3aUlEb2dYM1I1Y0dWdlppaGpiMjUwWlhoMEtTa2dQVDA5SUZ3aWIySnFaV04wWENJZ0ppWWdkSGx3Wlc5bUlHTmhiR3hpWVdOcklEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCRGNtVmhkR1VnVlVsRVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdRZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCc2IyTmhiRWxFSUQwZ1NVUWdmSHdnWENKNExWd2lJQ3NnWkM1blpYUlVhVzFsS0NrZ0t5QmNJaTFjSWlBcklFMWhkR2d1Y205MWJtUW9UV0YwYUM1eVlXNWtiMjBvS1NBcUlERmxOaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb2dRV1JrSUcxbGRHaHZaQ0IwYnlCMGFHVWdjM1JoWTJ0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlXTnJXMnh2WTJGc1NVUmRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWlhoME9pQmpiMjUwWlhoMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmphem9nWTJGc2JHSmhZMnNzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQmhjbUZ0Y3pvZ2NHRnlZVzF6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaUJYY21sMFpTQjBieUJqYjI1emIyeGxJR052ZFc1MElHOW1JSFJvWlNCemRXSnpZM0pwWW1Wa0lHMWxkR2h2WkhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQW1KaUJmZEhsd1pXOW1LSGRwYm1SdmR5NWpiMjV6YjJ4bEtTQTlQVDBnWENKdlltcGxZM1JjSWlBbUppQjBlWEJsYjJZZ2QybHVaRzkzTG1OdmJuTnZiR1V1YVc1bWJ5QTlQVDBnWENKbWRXNWpkR2x2Ymx3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVqYjI1emIyeGxMbWx1Wm04b1hDSkJibWx0WVhScGIyNUdjbUZ0WlNCemRHRmpheUJjSWlBcklFOWlhbVZqZEM1clpYbHpLSFJvYVhNdWMzUmhZMnNwTG14bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFJRkpsZEhWeWJpQlZTVVJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYkc5allXeEpSRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdKaVlnWDNSNWNHVnZaaWgzYVc1a2IzY3VZMjl1YzI5c1pTa2dQVDA5SUZ3aWIySnFaV04wWENJZ0ppWWdkSGx3Wlc5bUlIZHBibVJ2ZHk1amIyNXpiMnhsTG1WeWNtOXlJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1NXWWdjMjl0WlhSb2FXNW5JR2R2WlhNZ2QzSnZibWNnY21WMGRYSnVJR1poYkhObFhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJuTjFZbk5qY21saVpTQnRaWFJvYjJRZ1lua2dTVVJjYmlBZ0lDQWdLaUJBY0dGeVlXMGdTVVJjYmlBZ0lDQWdLaTljYmlBZ0lDQkJibWx0WVhScGIyNUdjbUZ0WlM1d2NtOTBiM1I1Y0dVdWRXNXpkV0p6WTNKcFltVWdQU0JtZFc1amRHbHZiaUFvU1VRcElIdGNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFbG1JSEpsY1hWcGNtVmtJRzFsZEdodlpDQmxlR2x6ZENCcGJpQjBhR1VnYzNSaFkydGNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlXTnJXMGxFWFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCT2RXeHNhV1o1SUcxbGRHaHZaQ0JwYmlCMGFHVWdjM1JoWTJzZ1lXNWtJR1JsYzNSeWIza2dhWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGamExdEpSRjBnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbk4wWVdOclcwbEVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb2dWM0pwZEdVZ2RHOGdZMjl1YzI5c1pTQmpiM1Z1ZENCdlppQjBhR1VnYzNWaWMyTnlhV0psWkNCdFpYUm9iMlJ6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JRjkwZVhCbGIyWW9kMmx1Wkc5M0xtTnZibk52YkdVcElEMDlQU0JjSW05aWFtVmpkRndpSUNZbUlIUjVjR1Z2WmlCM2FXNWtiM2N1WTI5dWMyOXNaUzVwYm1adklEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjNhVzVrYjNjdVkyOXVjMjlzWlM1cGJtWnZLRndpUVc1cGJXRjBhVzl1Um5KaGJXVWdjM1JoWTJzZ1hDSWdLeUJQWW1wbFkzUXVhMlY1Y3loMGFHbHpMbk4wWVdOcktTNXNaVzVuZEdncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCWFlYUmphQ0JoYm1RZ1kyRnNiQ0J0WlhSb2IyUnpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1FXNXBiV0YwYVc5dVJuSmhiV1V1Y0hKdmRHOTBlWEJsTG5kaGRHTm9JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaUJKWmlCemRHRmpheUJsZUdsemRDd2dhWFFnYVhNZ1lXNGdiMkpxWldOMElHRnVaQ0JwZENCcGN5QmpiMjUwWVdsdWN5QnRaWFJvYjJSelhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVdOcklDWW1JRjkwZVhCbGIyWW9kR2hwY3k1emRHRmpheWtnUFQwOUlGd2liMkpxWldOMFhDSWdKaVlnVDJKcVpXTjBMbXRsZVhNb2RHaHBjeTV6ZEdGamF5a3ViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFJRXh2YjNBZ1lXeHNJRzFsZEdodlpITWdhVzRnYzNSaFkydGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJKUkNCcGJpQjBhR2x6TG5OMFlXTnJLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpQlFjbTlqWlhOeklHOXViSGtnYldWMGFHOWtjeUIzYVhSb2IzVjBJR1Y0ZEdWdVpHVmtJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlXTnJMbWhoYzA5M2JsQnliM0JsY25SNUtFbEVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaUJKWmlCSlJDQmxlR2x6ZENCaGJtUWdhWFFnYVhNZ1lTQnpkSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9TVVFnSmlZZ2RIbHdaVzltSUVsRUlEMDlQU0JjSW5OMGNtbHVaMXdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkhaWFFnYzNWaWMyTnlhV0psWkNCdFpYUm9iMlFnY0dGeVlXMXpJR0o1SUVsRVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdiMkpxUTJGc2JDQTlJSFJvYVhNdWMzUmhZMnRiU1VSZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb2dTV1lnY0dGeVlXMXpJR1Y0YVhOMExDQnBkQ0JwY3lCaGJpQnZZbXBsWTNRc0lHRnVaQ0JwZENCcGN5QmpiMjUwWVdsdWN5QmpZV3hzSUdOdmJuUmxlSFFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FxSUdOaGJHeGlZV05yTENCaGJtUWdjR0Z5WVcxbGRHVnljeUIzYUdsamFDQnBjeUJoY25KaGVWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzlpYWtOaGJHd2dKaVlnS0hSNWNHVnZaaUJ2WW1wRFlXeHNJRDA5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnWENKMWJtUmxabWx1WldSY0lpQTZJRjkwZVhCbGIyWW9iMkpxUTJGc2JDa3BJRDA5UFNCY0ltOWlhbVZqZEZ3aUlDWW1JRzlpYWtOaGJHd3VZMjl1ZEdWNGRDQW1KaUJ2WW1wRFlXeHNMbU5oYkd4aVlXTnJJQ1ltSUc5aWFrTmhiR3d1Y0dGeVlXMXpJQ1ltSUY5MGVYQmxiMllvYjJKcVEyRnNiQzVqYjI1MFpYaDBLU0E5UFQwZ1hDSnZZbXBsWTNSY0lpQW1KaUIwZVhCbGIyWWdiMkpxUTJGc2JDNWpZV3hzWW1GamF5QTlQVDBnWENKbWRXNWpkR2x2Ymx3aUlDWW1JRUZ5Y21GNUxtbHpRWEp5WVhrb2IySnFRMkZzYkM1d1lYSmhiWE1wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlFTmhiR3dnYzNWaWMyTnlhV0psWkNCdFpYUm9iMlJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMkpxUTJGc2JDNWpZV3hzWW1GamF5NWhjSEJzZVNodlltcERZV3hzTG1OdmJuUmxlSFFzSUc5aWFrTmhiR3d1Y0dGeVlXMXpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmlCZmRIbHdaVzltS0hkcGJtUnZkeTVqYjI1emIyeGxLU0E5UFQwZ1hDSnZZbXBsWTNSY0lpQW1KaUIwZVhCbGIyWWdkMmx1Wkc5M0xtTnZibk52YkdVdVpYSnliM0lnUFQwOUlGd2lablZ1WTNScGIyNWNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VZMjl1YzI5c1pTNWxjbkp2Y2lobEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JRjkwZVhCbGIyWW9kMmx1Wkc5M0xtTnZibk52YkdVcElEMDlQU0JjSW05aWFtVmpkRndpSUNZbUlIUjVjR1Z2WmlCM2FXNWtiM2N1WTI5dWMyOXNaUzVsY25KdmNpQTlQVDBnWENKbWRXNWpkR2x2Ymx3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkMmx1Wkc5M0xtTnZibk52YkdVdVpYSnliM0lvWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FxSUZKbFkyRnNiQ0IzWVhSamFHVnlYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtIUm9hWE11ZDJGMFkyZ3VZbWx1WkNoMGFHbHpLU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQnlaWFIxY200Z1FXNXBiV0YwYVc5dVJuSmhiV1U3WEc1OUtDazdYRzR2S2lwY2JpQXFJRU55WldGMFpTQnphVzVuYkdVZ2NtVnhkV1Z6ZENCaGJtbHRZWFJwYjI0Z1puSmhiV1VnYjJKcVpXTjBYRzRnS2lCQWRIbHdaU0I3UVc1cGJXRjBhVzl1Um5KaGJXVjlYRzRnS2k5Y2JuZHBibVJ2ZHk1QmJtbHRZWFJwYjI1R2NtRnRaU0E5SUhkcGJtUnZkeTVCYm1sdFlYUnBiMjVHY21GdFpTQjhmQ0J1WlhjZ1FXNXBiV0YwYVc5dVJuSmhiV1VvS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2QybHVaRzkzTGtGdWFXMWhkR2x2YmtaeVlXMWxPMXh1WEc1Y2JpOHZMeTh2THk4dkx5OHZMeTh2THk4dkwxeHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaTh2SUM0dmJHbGlMMEZ1YVcxaGRHbHZia1p5WVcxbExuUnpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQTBYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTWlKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL0FuaW1hdGlvbkZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==