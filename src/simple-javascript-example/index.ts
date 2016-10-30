"use strict";
declare var require: any;
require("./index.html");

import AnimationFrame from "../../lib/AnimationFrame.ts";

AnimationFrame.subscribe(this, () => {
    document.body.innerText = (new Date()).getTime().toString();
});