/**
 * @file    Manages the game model.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/** @module GameData - Manages the game model. */
export default class {
  /** Initialize a game model. */
  constructor() {
    /** @var {Object} mouse - Data regarding the user's mouse */
    this.mouse = {
      /** @var {boolean} mouse.isDown - Is mouse currently down */
      isDown: false,
      /** @var {Object} mouse.initPosition - Position of mouse on down */
      initPosition: {
        x: 0,
        y: 0,
      },
      /** @var {Object} mouse.position - Current position of mouse */
      position: {
        x: 0,
        y: 0,
      },
    };
  }
}
