!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("AnimationFrame",[],n):"object"==typeof exports?exports.AnimationFrame=n():t.AnimationFrame=n()}(this,function(){return function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(1)},function(t,n,e){"use strict";e(2);var o=e(3);o.subscribe(void 0,function(){document.body.innerText=(new Date).getTime().toString()})},function(t,n){},function(t,n,e){!function(n,e){t.exports=e()}(this,function(){return function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}({0:function(t,n,e){t.exports=e(5)},5:function(t,n){(function(e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t){function n(){}function e(){return i.apply(this instanceof n?this:t||c,r.concat(o.call(arguments)))}if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var o=Array.prototype.slice,r=o.call(arguments,1),i=this;return n.prototype=this.prototype,e.prototype=new n,e}function i(){var t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],e=n.length;return function(o){if("object"!==("undefined"==typeof o?"undefined":a(o))&&("function"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var r=[];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&r.push(i);if(t)for(var c=0;c<e;c++)Object.prototype.hasOwnProperty.call(o,n[c])&&r.push(n[c]);return r}}n.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=void 0;c="undefined"==typeof window?"undefined"!=typeof e?e:{}:window,c.requestAnimationFrame=function(){return"undefined"!=typeof c&&(c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.oRequestAnimationFrame||c.msRequestAnimationFrame)||function(t){c.setTimeout(t,1e3/60)}}(),Function.prototype.bind=Function.prototype.bind||r,Object.keys=Object.keys||i();var u=function(){function t(){o(this,t),this.stack={},this.watch()}return t.prototype.subscribe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return null},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments[3];try{if("object"===("undefined"==typeof t?"undefined":a(t))&&"function"==typeof n){var r=new Date,i=o||"x-"+r.getTime()+"-"+Math.round(1e6*Math.random());return this.stack[i]={context:t,callback:n,params:e},i}}catch(t){}return!1},t.prototype.unsubscribe=function(t){this.stack[t]&&(this.stack[t]=!1,delete this.stack[t])},t.prototype.watch=function(){try{if(this.stack&&"object"===a(this.stack)&&Object.keys(this.stack).length>0)for(var t in this.stack)if(this.stack.hasOwnProperty(t))try{if(t&&"string"==typeof t){var n=this.stack[t];n&&"object"===("undefined"==typeof n?"undefined":a(n))&&n.context&&n.callback&&n.params&&"object"===a(n.context)&&"function"==typeof n.callback&&Array.isArray(n.params)&&n.callback.apply(n.context,n.params)}}catch(t){}}catch(t){}c.requestAnimationFrame(this.watch.bind(this))},t}();c.AnimationFrame=c.AnimationFrame||new u,n.default=c.AnimationFrame,t.exports=c.AnimationFrame}).call(n,function(){return this}())}})})}])});