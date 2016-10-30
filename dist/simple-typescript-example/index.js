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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDRhMTA3NTZhZDk3MWQxYmI4ODA3Pzg4ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXBsZS10eXBlc2NyaXB0LWV4YW1wbGUvaW5kZXgudHM/YTVlYiIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLXR5cGVzY3JpcHQtZXhhbXBsZS9pbmRleC5odG1sPzliZDQiLCJ3ZWJwYWNrOi8vLy4vbGliL0FuaW1hdGlvbkZyYW1lLmpzPzVlZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDTkQsMEM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNHQUFxRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUzUTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSw0Q0FBMkMsY0FBYyxtemdCIiwiZmlsZSI6Ii4vZGlzdC9zaW1wbGUtdHlwZXNjcmlwdC1leGFtcGxlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJBbmltYXRpb25GcmFtZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBbmltYXRpb25GcmFtZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBbmltYXRpb25GcmFtZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTEwNzU2YWQ5NzFkMWJiODgwNyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5odG1sXCIpO1xudmFyIEFuaW1hdGlvbkZyYW1lID0gcmVxdWlyZShcIi4uLy4uL2xpYi9BbmltYXRpb25GcmFtZS5qc1wiKTtcbkFuaW1hdGlvbkZyYW1lLnN1YnNjcmliZSh1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVyVGV4dCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaW1wbGUtdHlwZXNjcmlwdC1leGFtcGxlL2luZGV4LnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaW1wbGUtdHlwZXNjcmlwdC1leGFtcGxlL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkFuaW1hdGlvbkZyYW1lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFuaW1hdGlvbkZyYW1lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFuaW1hdGlvbkZyYW1lXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblxuLyoqKi8gfSxcbi8qIDEgKi8sXG4vKiAyICovLFxuLyogMyAqLyxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHQvKipcblx0ICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG5cdCAqL1xuXHRcblx0dmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXHRcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB3aW5kb3cgJiYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSkgfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdCAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG5cdCAgICB9O1xuXHR9KCk7XG5cdC8qKlxuXHQgKiBCaW5kIHBvbHlmaWxsXG5cdCAqL1xuXHRmdW5jdGlvbiBiaW5kKGIpIHtcblx0ICAgIC8qKlxuXHQgICAgICogSWYgdHJ5IGJpbmQgdmFyaWFibGUgdGhhdCBub3QgYSBmdW5jdGlvbiwgdGhlbiB0aHJvdyBlcnJvclxuXHQgICAgICovXG5cdCAgICBpZiAodHlwZW9mIHRoaXMgIT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZVwiKTtcblx0ICAgIH1cblx0ICAgIC8qKlxuXHQgICAgICogbGV0IEFycmF5IHNsaWNlIGZ1bmN0aW9uXG5cdCAgICAgKi9cblx0ICAgIHZhciBhID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXHQgICAgdmFyIGYgPSBhLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0ICAgIHZhciBlID0gdGhpcztcblx0ICAgIGZ1bmN0aW9uIGMoKSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhcIkJpbmQgcG9seWZpbGxcIik7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgZnVuY3Rpb24gZCgpIHtcblx0ICAgICAgICByZXR1cm4gZS5hcHBseSh0aGlzIGluc3RhbmNlb2YgYyA/IHRoaXMgOiBiIHx8IHdpbmRvdywgZi5jb25jYXQoYS5jYWxsKGFyZ3VtZW50cykpKTtcblx0ICAgIH1cblx0ICAgIC8qKlxuXHQgICAgICogUmVnaXN0ZXJlZCB0aGlzIHByb3RvdHlwZSBhcyBwcm90b3R5cGUgdG8gYmluZCBpbXBsZW1lbnRhdGlvbiBmdW5jdGlvbnNcblx0ICAgICAqL1xuXHQgICAgYy5wcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcblx0ICAgIGQucHJvdG90eXBlID0gbmV3IGMoKTtcblx0ICAgIC8qKlxuXHQgICAgICogUmV0dXJuIGJpbmQgcG9seWZpbGxcblx0ICAgICAqL1xuXHQgICAgcmV0dXJuIGQ7XG5cdH1cblx0RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBiaW5kO1xuXHQvKipcblx0ICogT2JqZWN0LmtleXMgcG9seWZpbGxcblx0ICovXG5cdGZ1bmN0aW9uIGtleXMoKSB7XG5cdCAgICB2YXIgaGFzRG9Ob3RFbnVtQnVnID0gIXsgdG9TdHJpbmc6IG51bGwgfS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInRvU3RyaW5nXCIpO1xuXHQgICAgdmFyIGRvTm90RW51bXMgPSBbXCJ0b1N0cmluZ1wiLCBcInRvTG9jYWxlU3RyaW5nXCIsIFwidmFsdWVPZlwiLCBcImhhc093blByb3BlcnR5XCIsIFwiaXNQcm90b3R5cGVPZlwiLCBcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsIFwiY29uc3RydWN0b3JcIl07XG5cdCAgICB2YXIgZG9Ob3RFbnVtc0xlbmd0aCA9IGRvTm90RW51bXMubGVuZ3RoO1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgICBpZiAoKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopKSAhPT0gXCJvYmplY3RcIiAmJiAodHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiIHx8IG9iaiA9PT0gbnVsbCkpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5rZXlzIGNhbGxlZCBvbiBub24tb2JqZWN0XCIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cdCAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcblx0ICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG5cdCAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwcm9wKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoaGFzRG9Ob3RFbnVtQnVnKSB7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9Ob3RFbnVtc0xlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgZG9Ob3RFbnVtc1tpXSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChkb05vdEVudW1zW2ldKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHQgICAgfTtcblx0fVxuXHRPYmplY3Qua2V5cyA9IE9iamVjdC5rZXlzIHx8IGtleXMoKTtcblx0LyoqXG5cdCAqIFJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIGNhbGwgc3RhY2sgY2xhc3Ncblx0ICovXG5cdHZhciBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0ICAgIC8qKlxuXHQgICAgICogQ3JlYXRlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lXG5cdCAgICAgKi9cblx0ICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lKCkge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFN1YnNjcmliZWQgbWV0aG9kc1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRoaXMuc3RhY2sgPSB7fTtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBTdGFydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2F0Y2hlclxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRoaXMud2F0Y2goKTtcblx0ICAgIH1cblx0ICAgIC8qKlxuXHQgICAgICogU3Vic2NyaWJlIG1ldGhvZCB0byB3YXRjaFxuXHQgICAgICogQHBhcmFtIGNvbnRleHRcblx0ICAgICAqIEBwYXJhbSBjYWxsYmFja1xuXHQgICAgICogQHBhcmFtIHBhcmFtc1xuXHQgICAgICogQHBhcmFtIElEXG5cdCAgICAgKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cblx0ICAgICAqL1xuXHQgICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjb250ZXh0LCBjYWxsYmFjaywgcGFyYW1zLCBJRCkge1xuXHQgICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcblx0ICAgICAgICAgICAgY29udGV4dCA9IHdpbmRvdztcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKGNhbGxiYWNrID09PSB2b2lkIDApIHtcblx0ICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcblx0ICAgICAgICAgICAgcGFyYW1zID0gW107XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJZiBjb250ZXh0IGFuZCBjYWxsYmFjayBwYXNzZWQgYW5kIHRoZXkgYXJlIG9iamVjdCBhbmQgZnVuY3Rpb25cblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGlmICgodHlwZW9mIGNvbnRleHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb250ZXh0KSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICogQ3JlYXRlIFVJRFxuXHQgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbG9jYWxJRCA9IElEIHx8IFwieC1cIiArIGQuZ2V0VGltZSgpICsgXCItXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTYpO1xuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKiBBZGQgbWV0aG9kIHRvIHRoZSBzdGFja1xuXHQgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICB0aGlzLnN0YWNrW2xvY2FsSURdID0ge1xuXHQgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG5cdCAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuXHQgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgKiBXcml0ZSB0byBjb25zb2xlIGNvdW50IG9mIHRoZSBzdWJzY3JpYmVkIG1ldGhvZHNcblx0ICAgICAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmluZm8gPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmluZm8oXCJBbmltYXRpb25GcmFtZSBzdGFjayBcIiArIE9iamVjdC5rZXlzKHRoaXMuc3RhY2spLmxlbmd0aCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAqIFJldHVybiBVSURcblx0ICAgICAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsSUQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIF90eXBlb2Yod2luZG93LmNvbnNvbGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuY29uc29sZS5lcnJvciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdCAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiBzb21ldGhpbmcgZ29lcyB3cm9uZyByZXR1cm4gZmFsc2Vcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9O1xuXHQgICAgLyoqXG5cdCAgICAgKiBVbnN1YnNjcmliZSBtZXRob2QgYnkgSURcblx0ICAgICAqIEBwYXJhbSBJRFxuXHQgICAgICovXG5cdCAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoSUQpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJZiByZXF1aXJlZCBtZXRob2QgZXhpc3QgaW4gdGhlIHN0YWNrXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaWYgKHRoaXMuc3RhY2tbSURdKSB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBOdWxsaWZ5IG1ldGhvZCBpbiB0aGUgc3RhY2sgYW5kIGRlc3Ryb3kgaXRcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHRoaXMuc3RhY2tbSURdID0gZmFsc2U7XG5cdCAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YWNrW0lEXTtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFdyaXRlIHRvIGNvbnNvbGUgY291bnQgb2YgdGhlIHN1YnNjcmliZWQgbWV0aG9kc1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmluZm8gPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuaW5mbyhcIkFuaW1hdGlvbkZyYW1lIHN0YWNrIFwiICsgT2JqZWN0LmtleXModGhpcy5zdGFjaykubGVuZ3RoKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdCAgICAvKipcblx0ICAgICAqIFdhdGNoIGFuZCBjYWxsIG1ldGhvZHNcblx0ICAgICAqL1xuXHQgICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJZiBzdGFjayBleGlzdCwgaXQgaXMgYW4gb2JqZWN0IGFuZCBpdCBpcyBjb250YWlucyBtZXRob2RzXG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpZiAodGhpcy5zdGFjayAmJiBfdHlwZW9mKHRoaXMuc3RhY2spID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhY2spLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICogTG9vcCBhbGwgbWV0aG9kcyBpbiBzdGFja1xuXHQgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBJRCBpbiB0aGlzLnN0YWNrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgICAgICogUHJvY2VzcyBvbmx5IG1ldGhvZHMgd2l0aG91dCBleHRlbmRlZCBwcm9wZXJ0aWVzXG5cdCAgICAgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhY2suaGFzT3duUHJvcGVydHkoSUQpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIElmIElEIGV4aXN0IGFuZCBpdCBpcyBhIHN0cmluZ1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSUQgJiYgdHlwZW9mIElEID09PSBcInN0cmluZ1wiKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogR2V0IHN1YnNjcmliZWQgbWV0aG9kIHBhcmFtcyBieSBJRFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmpDYWxsID0gdGhpcy5zdGFja1tJRF07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogSWYgcGFyYW1zIGV4aXN0LCBpdCBpcyBhbiBvYmplY3QsIGFuZCBpdCBpcyBjb250YWlucyBjYWxsIGNvbnRleHQsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogY2FsbGJhY2ssIGFuZCBwYXJhbWV0ZXJzIHdoaWNoIGlzIGFycmF5XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iakNhbGwgJiYgKHR5cGVvZiBvYmpDYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQ2FsbCkpID09PSBcIm9iamVjdFwiICYmIG9iakNhbGwuY29udGV4dCAmJiBvYmpDYWxsLmNhbGxiYWNrICYmIG9iakNhbGwucGFyYW1zICYmIF90eXBlb2Yob2JqQ2FsbC5jb250ZXh0KSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqQ2FsbC5jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiICYmIEFycmF5LmlzQXJyYXkob2JqQ2FsbC5wYXJhbXMpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDYWxsIHN1YnNjcmliZWQgbWV0aG9kXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpDYWxsLmNhbGxiYWNrLmFwcGx5KG9iakNhbGwuY29udGV4dCwgb2JqQ2FsbC5wYXJhbXMpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihlKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX3R5cGVvZih3aW5kb3cuY29uc29sZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHdpbmRvdy5jb25zb2xlLmVycm9yID09PSBcImZ1bmN0aW9uXCIpIHtcblx0ICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKGUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlY2FsbCB3YXRjaGVyXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLndhdGNoLmJpbmQodGhpcykpO1xuXHQgICAgfTtcblx0ICAgIHJldHVybiBBbmltYXRpb25GcmFtZTtcblx0fSgpO1xuXHQvKipcblx0ICogQ3JlYXRlIHNpbmdsZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBvYmplY3Rcblx0ICogQHR5cGUge0FuaW1hdGlvbkZyYW1lfVxuXHQgKi9cblx0d2luZG93LkFuaW1hdGlvbkZyYW1lID0gd2luZG93LkFuaW1hdGlvbkZyYW1lIHx8IG5ldyBBbmltYXRpb25GcmFtZSgpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5BbmltYXRpb25GcmFtZTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTJaR1ptWmpVM09EWTRNREU0TlRRek1tVm1ZaUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2UVc1cGJXRjBhVzl1Um5KaGJXVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeDFRa0ZCWlR0QlFVTm1PMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096czdPenRCUTNSRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h4UjBGQmIwY3NiVUpCUVcxQ0xFVkJRVVVzYlVKQlFXMUNMRGhJUVVFNFNEczdRVUZGTVZFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZETzBGQlEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc05rSkJRVFJDTEdsQ1FVRnBRanRCUVVNM1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVFeVFpeHpRa0ZCYzBJN1FVRkRha1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGblFqdEJRVU5vUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEQkNRVUY1UWp0QlFVTjZRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRlZCUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVU03UVVGRFJEdEJRVU5CTzBGQlEwRXNWMEZCVlR0QlFVTldPMEZCUTBFN1FVRkRRU3gzUXlJc0ltWnBiR1VpT2lJdUwyeHBZaTlCYm1sdFlYUnBiMjVHY21GdFpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z3aVFXNXBiV0YwYVc5dVJuSmhiV1ZjSWl3Z1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpUVc1cGJXRjBhVzl1Um5KaGJXVmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lRVzVwYldGMGFXOXVSbkpoYldWY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1OUtTaDBhR2x6TENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQmNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlMRnh1SUZ4MFhIUmNkR2xrT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc2IyRmtaV1E2SUdaaGJITmxYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXh2WVdSbFpDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9NQ2s3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdkMlZpY0dGamF5OWliMjkwYzNSeVlYQWdObVJtWm1ZMU56ZzJPREF4T0RVME16SmxabUlpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYmk4cUtseHVJQ29nY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c1hHNGdLaTljYmx4dWRtRnlJRjkwZVhCbGIyWWdQU0IwZVhCbGIyWWdVM2x0WW05c0lEMDlQU0JjSW1aMWJtTjBhVzl1WENJZ0ppWWdkSGx3Wlc5bUlGTjViV0p2YkM1cGRHVnlZWFJ2Y2lBOVBUMGdYQ0p6ZVcxaWIyeGNJaUEvSUdaMWJtTjBhVzl1SUNodlltb3BJSHNnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW83SUgwZ09pQm1kVzVqZEdsdmJpQW9iMkpxS1NCN0lISmxkSFZ5YmlCdlltb2dKaVlnZEhsd1pXOW1JRk41YldKdmJDQTlQVDBnWENKbWRXNWpkR2x2Ymx3aUlDWW1JRzlpYWk1amIyNXpkSEoxWTNSdmNpQTlQVDBnVTNsdFltOXNJQ1ltSUc5aWFpQWhQVDBnVTNsdFltOXNMbkJ5YjNSdmRIbHdaU0EvSUZ3aWMzbHRZbTlzWENJZ09pQjBlWEJsYjJZZ2IySnFPeUI5TzF4dVhHNTNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIzYVc1a2IzY2dKaVlnS0hkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2ZId2dkMmx1Wkc5M0xuZGxZbXRwZEZKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQjhmQ0IzYVc1a2IzY3ViVzk2VW1WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIeDhJSGRwYm1SdmR5NXZVbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUh4OElIZHBibVJ2ZHk1dGMxSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2tnZkh3Z1puVnVZM1JwYjI0Z0tHTmhiR3hpWVdOcktTQjdYRzRnSUNBZ0lDQWdJSGRwYm1SdmR5NXpaWFJVYVcxbGIzVjBLR05oYkd4aVlXTnJMQ0F4TURBd0lDOGdOakFwTzF4dUlDQWdJSDA3WEc1OUtDazdYRzR2S2lwY2JpQXFJRUpwYm1RZ2NHOXNlV1pwYkd4Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnWW1sdVpDaGlLU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nU1dZZ2RISjVJR0pwYm1RZ2RtRnlhV0ZpYkdVZ2RHaGhkQ0J1YjNRZ1lTQm1kVzVqZEdsdmJpd2dkR2hsYmlCMGFISnZkeUJsY25KdmNseHVJQ0FnSUNBcUwxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeUFoUFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkdkVzVqZEdsdmJpNXdjbTkwYjNSNWNHVXVZbWx1WkNBdElIZG9ZWFFnYVhNZ2RISjVhVzVuSUhSdklHSmxJR0p2ZFc1a0lHbHpJRzV2ZENCallXeHNZV0pzWlZ3aUtUdGNiaUFnSUNCOVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ2JHVjBJRUZ5Y21GNUlITnNhV05sSUdaMWJtTjBhVzl1WEc0Z0lDQWdJQ292WEc0Z0lDQWdkbUZ5SUdFZ1BTQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyeHBZMlU3WEc0Z0lDQWdkbUZ5SUdZZ1BTQmhMbU5oYkd3b1lYSm5kVzFsYm5SekxDQXhLVHRjYmlBZ0lDQjJZWElnWlNBOUlIUm9hWE03WEc0Z0lDQWdablZ1WTNScGIyNGdZeWdwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ0ppWWdYM1I1Y0dWdlppaDNhVzVrYjNjdVkyOXVjMjlzWlNrZ1BUMDlJRndpYjJKcVpXTjBYQ0lnSmlZZ2RIbHdaVzltSUhkcGJtUnZkeTVqYjI1emIyeGxMbXh2WnlBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VZMjl1YzI5c1pTNXNiMmNvWENKQ2FXNWtJSEJ2YkhsbWFXeHNYQ0lwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJR1oxYm1OMGFXOXVJR1FvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbExtRndjR3g1S0hSb2FYTWdhVzV6ZEdGdVkyVnZaaUJqSUQ4Z2RHaHBjeUE2SUdJZ2ZId2dkMmx1Wkc5M0xDQm1MbU52Ym1OaGRDaGhMbU5oYkd3b1lYSm5kVzFsYm5SektTa3BPMXh1SUNBZ0lIMWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaV2RwYzNSbGNtVmtJSFJvYVhNZ2NISnZkRzkwZVhCbElHRnpJSEJ5YjNSdmRIbHdaU0IwYnlCaWFXNWtJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHWjFibU4wYVc5dWMxeHVJQ0FnSUNBcUwxeHVJQ0FnSUdNdWNISnZkRzkwZVhCbElEMGdkR2hwY3k1d2NtOTBiM1I1Y0dVN1hHNGdJQ0FnWkM1d2NtOTBiM1I1Y0dVZ1BTQnVaWGNnWXlncE8xeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxkSFZ5YmlCaWFXNWtJSEJ2YkhsbWFXeHNYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUdRN1hHNTlYRzVHZFc1amRHbHZiaTV3Y205MGIzUjVjR1V1WW1sdVpDQTlJRVoxYm1OMGFXOXVMbkJ5YjNSdmRIbHdaUzVpYVc1a0lIeDhJR0pwYm1RN1hHNHZLaXBjYmlBcUlFOWlhbVZqZEM1clpYbHpJSEJ2YkhsbWFXeHNYRzRnS2k5Y2JtWjFibU4wYVc5dUlHdGxlWE1vS1NCN1hHNGdJQ0FnZG1GeUlHaGhjMFJ2VG05MFJXNTFiVUoxWnlBOUlDRjdJSFJ2VTNSeWFXNW5PaUJ1ZFd4c0lIMHVjSEp2Y0dWeWRIbEpjMFZ1ZFcxbGNtRmliR1VvWENKMGIxTjBjbWx1WjF3aUtUdGNiaUFnSUNCMllYSWdaRzlPYjNSRmJuVnRjeUE5SUZ0Y0luUnZVM1J5YVc1blhDSXNJRndpZEc5TWIyTmhiR1ZUZEhKcGJtZGNJaXdnWENKMllXeDFaVTltWENJc0lGd2lhR0Z6VDNkdVVISnZjR1Z5ZEhsY0lpd2dYQ0pwYzFCeWIzUnZkSGx3WlU5bVhDSXNJRndpY0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdWY0lpd2dYQ0pqYjI1emRISjFZM1J2Y2x3aVhUdGNiaUFnSUNCMllYSWdaRzlPYjNSRmJuVnRjMHhsYm1kMGFDQTlJR1J2VG05MFJXNTFiWE11YkdWdVozUm9PMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb2IySnFLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ29kSGx3Wlc5bUlHOWlhaUE5UFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUZ3aWRXNWtaV1pwYm1Wa1hDSWdPaUJmZEhsd1pXOW1LRzlpYWlrcElDRTlQU0JjSW05aWFtVmpkRndpSUNZbUlDaDBlWEJsYjJZZ2IySnFJQ0U5UFNCY0ltWjFibU4wYVc5dVhDSWdmSHdnYjJKcUlEMDlQU0J1ZFd4c0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJazlpYW1WamRDNXJaWGx6SUdOaGJHeGxaQ0J2YmlCdWIyNHRiMkpxWldOMFhDSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnY0hKdmNDQnBiaUJ2WW1vcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxTENCd2NtOXdLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkQzV3ZFhOb0tIQnliM0FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaG9ZWE5FYjA1dmRFVnVkVzFDZFdjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pHOU9iM1JGYm5WdGMweGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbW9zSUdSdlRtOTBSVzUxYlhOYmFWMHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEM1d2RYTm9LR1J2VG05MFJXNTFiWE5iYVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQWdJSDA3WEc1OVhHNVBZbXBsWTNRdWEyVjVjeUE5SUU5aWFtVmpkQzVyWlhseklIeDhJR3RsZVhNb0tUdGNiaThxS2x4dUlDb2dVbVZ4ZFdWemRDQmhibWx0WVhScGIyNGdabkpoYldVZ1kyRnNiQ0J6ZEdGamF5QmpiR0Z6YzF4dUlDb3ZYRzUyWVhJZ1FXNXBiV0YwYVc5dVJuSmhiV1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRM0psWVhSbElISmxjWFZsYzNRZ1lXNXBiV0YwYVc5dUlHWnlZVzFsWEc0Z0lDQWdJQ292WEc0Z0lDQWdablZ1WTNScGIyNGdRVzVwYldGMGFXOXVSbkpoYldVb0tTQjdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQlRkV0p6WTNKcFltVmtJRzFsZEdodlpITmNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoWTJzZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRk4wWVhKMElISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0IzWVhSamFHVnlYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCMGFHbHpMbmRoZEdOb0tDazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTjFZbk5qY21saVpTQnRaWFJvYjJRZ2RHOGdkMkYwWTJoY2JpQWdJQ0FnS2lCQWNHRnlZVzBnWTI5dWRHVjRkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQmpZV3hzWW1GamExeHVJQ0FnSUNBcUlFQndZWEpoYlNCd1lYSmhiWE5jYmlBZ0lDQWdLaUJBY0dGeVlXMGdTVVJjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRpYjI5c1pXRnVmSE4wY21sdVozMWNiaUFnSUNBZ0tpOWNiaUFnSUNCQmJtbHRZWFJwYjI1R2NtRnRaUzV3Y205MGIzUjVjR1V1YzNWaWMyTnlhV0psSUQwZ1puVnVZM1JwYjI0Z0tHTnZiblJsZUhRc0lHTmhiR3hpWVdOckxDQndZWEpoYlhNc0lFbEVLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMjUwWlhoMElEMDlQU0IyYjJsa0lEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsZUhRZ1BTQjNhVzVrYjNjN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0dOaGJHeGlZV05ySUQwOVBTQjJiMmxrSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJHeGlZV05ySUQwZ1puVnVZM1JwYjI0Z1kyRnNiR0poWTJzb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaHdZWEpoYlhNZ1BUMDlJSFp2YVdRZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHRnlZVzF6SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1NXWWdZMjl1ZEdWNGRDQmhibVFnWTJGc2JHSmhZMnNnY0dGemMyVmtJR0Z1WkNCMGFHVjVJR0Z5WlNCdlltcGxZM1FnWVc1a0lHWjFibU4wYVc5dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnb2RIbHdaVzltSUdOdmJuUmxlSFFnUFQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCY0luVnVaR1ZtYVc1bFpGd2lJRG9nWDNSNWNHVnZaaWhqYjI1MFpYaDBLU2tnUFQwOUlGd2liMkpxWldOMFhDSWdKaVlnZEhsd1pXOW1JR05oYkd4aVlXTnJJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkRjbVZoZEdVZ1ZVbEVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHUWdQU0J1WlhjZ1JHRjBaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnNiMk5oYkVsRUlEMGdTVVFnZkh3Z1hDSjRMVndpSUNzZ1pDNW5aWFJVYVcxbEtDa2dLeUJjSWkxY0lpQXJJRTFoZEdndWNtOTFibVFvVFdGMGFDNXlZVzVrYjIwb0tTQXFJREZsTmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ29nUVdSa0lHMWxkR2h2WkNCMGJ5QjBhR1VnYzNSaFkydGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZV05yVzJ4dlkyRnNTVVJkSUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpYaDBPaUJqYjI1MFpYaDBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXpvZ1kyRnNiR0poWTJzc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJoY21GdGN6b2djR0Z5WVcxelhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCWGNtbDBaU0IwYnlCamIyNXpiMnhsSUdOdmRXNTBJRzltSUhSb1pTQnpkV0p6WTNKcFltVmtJRzFsZEdodlpITmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmlCZmRIbHdaVzltS0hkcGJtUnZkeTVqYjI1emIyeGxLU0E5UFQwZ1hDSnZZbXBsWTNSY0lpQW1KaUIwZVhCbGIyWWdkMmx1Wkc5M0xtTnZibk52YkdVdWFXNW1ieUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1amIyNXpiMnhsTG1sdVptOG9YQ0pCYm1sdFlYUnBiMjVHY21GdFpTQnpkR0ZqYXlCY0lpQXJJRTlpYW1WamRDNXJaWGx6S0hSb2FYTXVjM1JoWTJzcExteGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FxSUZKbGRIVnliaUJWU1VSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHOWpZV3hKUkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnSmlZZ1gzUjVjR1Z2WmloM2FXNWtiM2N1WTI5dWMyOXNaU2tnUFQwOUlGd2liMkpxWldOMFhDSWdKaVlnZEhsd1pXOW1JSGRwYm1SdmR5NWpiMjV6YjJ4bExtVnljbTl5SUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCM2FXNWtiM2N1WTI5dWMyOXNaUzVsY25KdmNpaGxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dTV1lnYzI5dFpYUm9hVzVuSUdkdlpYTWdkM0p2Ym1jZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibk4xWW5OamNtbGlaU0J0WlhSb2IyUWdZbmtnU1VSY2JpQWdJQ0FnS2lCQWNHRnlZVzBnU1VSY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JCYm1sdFlYUnBiMjVHY21GdFpTNXdjbTkwYjNSNWNHVXVkVzV6ZFdKelkzSnBZbVVnUFNCbWRXNWpkR2x2YmlBb1NVUXBJSHRjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRWxtSUhKbGNYVnBjbVZrSUcxbGRHaHZaQ0JsZUdsemRDQnBiaUIwYUdVZ2MzUmhZMnRjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZV05yVzBsRVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQk9kV3hzYVdaNUlHMWxkR2h2WkNCcGJpQjBhR1VnYzNSaFkyc2dZVzVrSUdSbGMzUnliM2tnYVhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRmphMXRKUkYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG5OMFlXTnJXMGxFWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nVjNKcGRHVWdkRzhnWTI5dWMyOXNaU0JqYjNWdWRDQnZaaUIwYUdVZ2MzVmljMk55YVdKbFpDQnRaWFJvYjJSelhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUY5MGVYQmxiMllvZDJsdVpHOTNMbU52Ym5OdmJHVXBJRDA5UFNCY0ltOWlhbVZqZEZ3aUlDWW1JSFI1Y0dWdlppQjNhVzVrYjNjdVkyOXVjMjlzWlM1cGJtWnZJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VZMjl1YzI5c1pTNXBibVp2S0Z3aVFXNXBiV0YwYVc5dVJuSmhiV1VnYzNSaFkyc2dYQ0lnS3lCUFltcGxZM1F1YTJWNWN5aDBhR2x6TG5OMFlXTnJLUzVzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlhZWFJqYUNCaGJtUWdZMkZzYkNCdFpYUm9iMlJ6WEc0Z0lDQWdJQ292WEc0Z0lDQWdRVzVwYldGMGFXOXVSbkpoYldVdWNISnZkRzkwZVhCbExuZGhkR05vSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCSlppQnpkR0ZqYXlCbGVHbHpkQ3dnYVhRZ2FYTWdZVzRnYjJKcVpXTjBJR0Z1WkNCcGRDQnBjeUJqYjI1MFlXbHVjeUJ0WlhSb2IyUnpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlXTnJJQ1ltSUY5MGVYQmxiMllvZEdocGN5NXpkR0ZqYXlrZ1BUMDlJRndpYjJKcVpXTjBYQ0lnSmlZZ1QySnFaV04wTG10bGVYTW9kR2hwY3k1emRHRmpheWt1YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FxSUV4dmIzQWdZV3hzSUcxbGRHaHZaSE1nYVc0Z2MzUmhZMnRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCSlJDQnBiaUIwYUdsekxuTjBZV05yS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaUJRY205alpYTnpJRzl1YkhrZ2JXVjBhRzlrY3lCM2FYUm9iM1YwSUdWNGRHVnVaR1ZrSUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZV05yTG1oaGMwOTNibEJ5YjNCbGNuUjVLRWxFS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCSlppQkpSQ0JsZUdsemRDQmhibVFnYVhRZ2FYTWdZU0J6ZEhKcGJtZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvU1VRZ0ppWWdkSGx3Wlc5bUlFbEVJRDA5UFNCY0luTjBjbWx1WjF3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaUJIWlhRZ2MzVmljMk55YVdKbFpDQnRaWFJvYjJRZ2NHRnlZVzF6SUdKNUlFbEVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYjJKcVEyRnNiQ0E5SUhSb2FYTXVjM1JoWTJ0YlNVUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ29nU1dZZ2NHRnlZVzF6SUdWNGFYTjBMQ0JwZENCcGN5QmhiaUJ2WW1wbFkzUXNJR0Z1WkNCcGRDQnBjeUJqYjI1MFlXbHVjeUJqWVd4c0lHTnZiblJsZUhRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlHTmhiR3hpWVdOckxDQmhibVFnY0dGeVlXMWxkR1Z5Y3lCM2FHbGphQ0JwY3lCaGNuSmhlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c5aWFrTmhiR3dnSmlZZ0tIUjVjR1Z2WmlCdlltcERZV3hzSUQwOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1hDSjFibVJsWm1sdVpXUmNJaUE2SUY5MGVYQmxiMllvYjJKcVEyRnNiQ2twSUQwOVBTQmNJbTlpYW1WamRGd2lJQ1ltSUc5aWFrTmhiR3d1WTI5dWRHVjRkQ0FtSmlCdlltcERZV3hzTG1OaGJHeGlZV05ySUNZbUlHOWlha05oYkd3dWNHRnlZVzF6SUNZbUlGOTBlWEJsYjJZb2IySnFRMkZzYkM1amIyNTBaWGgwS1NBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmlCMGVYQmxiMllnYjJKcVEyRnNiQzVqWVd4c1ltRmpheUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltSUVGeWNtRjVMbWx6UVhKeVlYa29iMkpxUTJGc2JDNXdZWEpoYlhNcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFJRU5oYkd3Z2MzVmljMk55YVdKbFpDQnRaWFJvYjJSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJKcVEyRnNiQzVqWVd4c1ltRmpheTVoY0hCc2VTaHZZbXBEWVd4c0xtTnZiblJsZUhRc0lHOWlha05oYkd3dWNHRnlZVzF6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBbUppQmZkSGx3Wlc5bUtIZHBibVJ2ZHk1amIyNXpiMnhsS1NBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmlCMGVYQmxiMllnZDJsdVpHOTNMbU52Ym5OdmJHVXVaWEp5YjNJZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCM2FXNWtiM2N1WTI5dWMyOXNaUzVsY25KdmNpaGxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJQ1ltSUY5MGVYQmxiMllvZDJsdVpHOTNMbU52Ym5OdmJHVXBJRDA5UFNCY0ltOWlhbVZqZEZ3aUlDWW1JSFI1Y0dWdlppQjNhVzVrYjNjdVkyOXVjMjlzWlM1bGNuSnZjaUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsdVpHOTNMbU52Ym5OdmJHVXVaWEp5YjNJb1pTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlGSmxZMkZzYkNCM1lYUmphR1Z5WEc0Z0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSFJvYVhNdWQyRjBZMmd1WW1sdVpDaDBhR2x6S1NrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdRVzVwYldGMGFXOXVSbkpoYldVN1hHNTlLQ2s3WEc0dktpcGNiaUFxSUVOeVpXRjBaU0J6YVc1bmJHVWdjbVZ4ZFdWemRDQmhibWx0WVhScGIyNGdabkpoYldVZ2IySnFaV04wWEc0Z0tpQkFkSGx3WlNCN1FXNXBiV0YwYVc5dVJuSmhiV1Y5WEc0Z0tpOWNibmRwYm1SdmR5NUJibWx0WVhScGIyNUdjbUZ0WlNBOUlIZHBibVJ2ZHk1QmJtbHRZWFJwYjI1R2NtRnRaU0I4ZkNCdVpYY2dRVzVwYldGMGFXOXVSbkpoYldVb0tUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdkMmx1Wkc5M0xrRnVhVzFoZEdsdmJrWnlZVzFsTzF4dVhHNWNiaTh2THk4dkx5OHZMeTh2THk4dkx5OHZMMXh1THk4Z1YwVkNVRUZEU3lCR1QwOVVSVkpjYmk4dklDNHZiR2xpTDBGdWFXMWhkR2x2YmtaeVlXMWxMblJ6WEc0dkx5QnRiMlIxYkdVZ2FXUWdQU0EwWEc0dkx5QnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01pSmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9BbmltYXRpb25GcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=