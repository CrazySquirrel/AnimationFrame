!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("AnimationFrame",[],e):"object"==typeof exports?exports.AnimationFrame=e():t.AnimationFrame=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},,,,function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=o(5),r=n(i);o(6),r.default.subscribe(void 0,function(){document.body.innerText=(new Date).getTime().toString()})},function(t,e){(function(o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){function e(){"undefined"!=typeof a&&"object"===c(a.console)&&"function"==typeof a.console.log&&a.console.log("Bind polyfill")}function o(){return r.apply(this instanceof e?this:t||a,i.concat(n.call(arguments)))}if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice,i=n.call(arguments,1),r=this;return e.prototype=this.prototype,o.prototype=new e,o}function r(){var t=!{toString:null}.propertyIsEnumerable("toString"),e=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=e.length;return function(n){if("object"!==("undefined"==typeof n?"undefined":c(n))&&("function"!=typeof n||null===n))throw new TypeError("Object.keys called on non-object");var i=[];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&i.push(r);if(t)for(var a=0;a<o;a++)Object.prototype.hasOwnProperty.call(n,e[a])&&i.push(e[a]);return i}}e.__esModule=!0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=void 0;a="undefined"==typeof window?"undefined"!=typeof o?o:{}:window,a.requestAnimationFrame=function(){return"undefined"!=typeof a&&(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame)||function(t){a.setTimeout(t,1e3/60)}}(),Function.prototype.bind=Function.prototype.bind||i,Object.keys=Object.keys||r();var s=function(){function t(){n(this,t),this.stack={},this.watch()}return t.prototype.subscribe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return null},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments[3];try{if("object"===("undefined"==typeof t?"undefined":c(t))&&"function"==typeof e){var i=new Date,r=n||"x-"+i.getTime()+"-"+Math.round(1e6*Math.random());return this.stack[r]={context:t,callback:e,params:o},"undefined"!=typeof a&&"object"===c(a.console)&&"function"==typeof a.console.info&&a.console.info("AnimationFrame stack "+Object.keys(this.stack).length),r}}catch(t){"undefined"!=typeof a&&"object"===c(a.console)&&"function"==typeof a.console.error&&a.console.error(t)}return!1},t.prototype.unsubscribe=function(t){this.stack[t]&&(this.stack[t]=!1,delete this.stack[t],"undefined"!=typeof a&&"object"===c(a.console)&&"function"==typeof a.console.info&&a.console.info("AnimationFrame stack "+Object.keys(this.stack).length))},t.prototype.watch=function(){try{if(this.stack&&"object"===c(this.stack)&&Object.keys(this.stack).length>0)for(var t in this.stack)if(this.stack.hasOwnProperty(t))try{if(t&&"string"==typeof t){var e=this.stack[t];e&&"object"===("undefined"==typeof e?"undefined":c(e))&&e.context&&e.callback&&e.params&&"object"===c(e.context)&&"function"==typeof e.callback&&Array.isArray(e.params)&&e.callback.apply(e.context,e.params)}}catch(t){"undefined"!=typeof a&&"object"===c(a.console)&&"function"==typeof a.console.error&&a.console.error(t)}}catch(t){"undefined"!=typeof a&&"object"===c(a.console)&&"function"==typeof a.console.error&&a.console.error(t)}a.requestAnimationFrame(this.watch.bind(this))},t}();a.AnimationFrame=a.AnimationFrame||new s,e.default=a.AnimationFrame,t.exports=a.AnimationFrame}).call(e,function(){return this}())},function(t,e){}])});