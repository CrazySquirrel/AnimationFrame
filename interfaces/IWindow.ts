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

  requestAnimationFrame?: any;
  webkitRequestAnimationFrame?: any;
  mozRequestAnimationFrame?: any;
  oRequestAnimationFrame?: any;
  msRequestAnimationFrame?: any;

  Promise?: Promise<any>;

  AnimationFrame?: IAnimationFrame;
  _AnimationFrame?: IAnimationFrame;
  _oldAnimationFrame?: IAnimationFrame;

  setTimeout?(callback: any, time: number): number;
}
/**
 * Declare window interface
 */
declare var window: IWindow;
/**
 * Export the window interface
 */
export default IWindow;
