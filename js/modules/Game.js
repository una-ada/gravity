/**
 * @file    Manages the game controller.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

import GameData from "./GameData.js";

/** @module Game - Manages the game controller. */
export default
  /** Manages the game controller. */
  class Game {
    /**
     * Initialize a game controller.
     * @param {GameData} model - A game model instance.
     */
    constructor(model){
      /** @var {GameData} model - Reference to the game's model */
      this.model = model;
    }

    /*----- Constants --------------------------------------------------------*/
    /** @const {Object} scale - Default scales for input */
    static scale = {
      /** @const {number} scale.mass - Mass multiplier per 100ms */
      mass: 1.05,
      /** @const {number} scale.velocity - Velocity input (m/s per pixel) */
      velocity: 55.7
    }

    /*----- Event Listeners --------------------------------------------------*/
    
    handleMouseDown(e){
      console.log("BOOP!", e);
    }

  }
