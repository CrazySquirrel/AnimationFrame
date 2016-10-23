"use strict";
/**
 * Import subinterfaces
 */
import IAnimationFrame from "IAnimationFrame";
/**
 * The storage interface
 */
interface IWindow {
    requestAnimationFrame: Function;
    webkitRequestAnimationFrame: Function;
    mozRequestAnimationFrame: Function;
    oRequestAnimationFrame: Function;
    msRequestAnimationFrame: Function;

    setTimeout(callback: Function, time: number): number;
}
/**
 * Declare window interface
 */
declare var window: IWindow;
/**
 * Export the window interface
 */
export default IWindow;
