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

    /*----- Event Handlers ---------------------------------------------------*/
    /**
     * Handle mouse down events
     * @param {MouseEvent} e - Mouse down event
     */
    handleMouseDown(e){
      // Show mouse is down in model
      this.model.mouse.isDown = true;
      // Cache initial mouse position
      this.model.mouse.initialPosition = [e.pageX, e.pageY];
      // Save current mouse position
      this.model.mouse.position = [e.pageX, e.pageY];
    }
    /**
     * Handle mouse up events
     * @param {MouseEvent} e - Mouse up event
     */
    handleMouseUp(e){
      // Show mouse is up in model
      this.model.mouse.isDown = false;
      // TEST! Log all the mouse data
      console.log(this.model.mouse);
    }
    /**
     * Handle mouse move events
     * @param {MouseEvent} e - Mouse move event
     */
    handleMouseMove(e){
      // Save current mouse position
      this.model.mouse.position = [e.pageX, e.pageY];
    }
  }
