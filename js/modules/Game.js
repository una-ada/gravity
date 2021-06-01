/**
 * Game logic module
 * @module modules/Game
 */
export default
  
/** Class for game model and controller */
  class Game {
    /** Initialize a game */
    constructor(){
      console.log("Game works!")
    }

    /** @constant {Object} scale - Default scales for input */
    static scale = {
      /** @constant {number} scale.mass - Mass multiplier per 100ms */
      mass: 1.05,
      /** @constant {number} scale.velocity - Velocity input (m/s per pixel) */
      velocity: 55.7
    };

  };
