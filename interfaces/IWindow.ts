"use strict";
/**
 * Import sub interfaces
 */
import IAnimationFrame from "./IAnimationFrame";
/**
 * The storage interface
 */
interface IWindow {
  console?: any;

  requestAnimationFrame?: Function;
  webkitRequestAnimationFrame?: Function;
  mozRequestAnimationFrame?: Function;
  oRequestAnimationFrame?: Function;
  msRequestAnimationFrame?: Function;

  Promise?: Promise<any>;

  AnimationFrame?: IAnimationFrame;
  _AnimationFrame?: IAnimationFrame;
  _oldAnimationFrame?: IAnimationFrame;

  setTimeout?(callback: Function, time: number): number;
}
/**
 * Declare window interface
 */
declare var window: IWindow;
/**
 * Export the window interface
 */
export default IWindow;
