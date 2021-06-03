/**
 * @file    Manages the game model.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
 */

/*----- Imports --------------------------------------------------------------*/
import { Point, Vector } from "./Utils.js";
import Celestial from "./Celestial.js";

/*----- Classes --------------------------------------------------------------*/
/** @module GameData Manages the game model. */
export default class GameData {
  /** Initialize a game model. */
  constructor() {
    /** @var {string} id Short game ID based on the current time. */
    this.id = Math.round(+new Date() / 1e3).toString(26);
    /** @var {Object} mouse Data regarding the user's mouse. */
    this.mouse = {
      /** @var {boolean} mouse.isDown Is mouse currently down? */
      isDown: false,
      /** @var {Object} mouse.initPosition Position of mouse on down. */
      initPosition: new Point(0, 0),
      /** @var {Object} mouse.position Current position of mouse. */
      position: new Point(0, 0),
    };
    /** @var {Celestial[]} scene Array of game objects in current scene. */
    this.scene = [];
  }
}
