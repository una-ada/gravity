/**
 * @file    Manages the game state/model.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/**
 * Rendering module using the DOM
 * @module modules/GameData
 */
export default
  /** The game state (model) */
  class GameData {
    /** Create object to hold game states */
    constructor(){
      
      /** @var {Object} mouse - Data regarding the user's mouse */
      this.mouse = {
        /** @var {boolean} mouse.isDown - Is mouse currently down */
        isDown = false,
        /** @var {number[]} mouse.initialPosition - Position of mouse on down */
        initialPosition = [0, 0],
        /** @var {number[]} mouse.position - Current position of mouse */
        position = [0, 0]
      }

    }
  }
