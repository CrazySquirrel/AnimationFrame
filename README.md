# AnimationFrame
[![npm version](https://badge.fury.io/js/AnimationFrame.svg)](AnimationFrame)
[![license](https://img.shields.io/github/license/CrazySquirrel/AnimationFrame.svg)](AnimationFrame)
[![Github All Releases](https://img.shields.io/github/downloads/CrazySquirrel/AnimationFrame/total.svg)](AnimationFrame)
[![npm version](https://img.shields.io/badge/donate-%E2%99%A5-red.svg)](http://crazysquirrel.ru/support/)

This is the class for signing several watcher on requestanimationframe.

## Build
The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder.
* npm install
* npm run production

or

* npm run development

The build required NodeJs version 6 or higher.

## Usage

```TypeScript
import AnimationFrame from "AnimationFrame.ts";

let animation = new AnimationFrame();

let ID = animation.subscribe(context,callback,arguments,ID);
```

or

```JavaScript
let AnimationFrame = required("AnimationFrame.js");

let animation = new AnimationFrame();

let ID = animation.subscribe(context,callback,arguments,ID);
```

 - context - The context of the called function.
 - callback - The called function.
 - arguments - An array of arguments of the called function.
 - ID - ID which will be signed watcher. One ID can contain only one watcher.
 
The arguments and ID are optional. If you do not pass the ID, then the subscribe will return the generated ID, otherwise returns the passed ID.