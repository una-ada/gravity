/**
 * @file    Manages the game model.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/** @module GameData - Manages the game model. */
export default
  /** Manages the game model. */
  class GameData {
    /** Initialize a game model. */
    constructor(){
      
      /** @var {Object} mouse - Data regarding the user's mouse */
      this.mouse = {
        /** @var {boolean} mouse.isDown - Is mouse currently down */
        isDown: false,
        /** @var {number[]} mouse.initialPosition - Position of mouse on down */
        initialPosition: [0, 0],
        /** @var {number[]} mouse.position - Current position of mouse */
        position: [0, 0]
      }

    }
  }
