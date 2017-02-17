"use strict";
declare let require: any;
require("./index.html");

let AnimationFrame = require("../../lib/AnimationFrame.ts");

AnimationFrame.subscribe(this, () => {
  document.body.innerText = (new Date()).getTime().toString();
});