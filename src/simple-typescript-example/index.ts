"use strict";
declare var require: any;
require("./index.html");

let AnimationFrame = require("../../lib/AnimationFrame.js");

AnimationFrame.subscribe(this, () => {
    document.body.innerText = (new Date()).getTime().toString();
});