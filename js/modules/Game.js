/**
 * @file    Manages the game controller.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";

/** @module Game - Manages the game controller. */
export default class Game {
  /**
   * Initialize a game controller.
   * @param {GameData} model - A game model instance.
   */
  constructor(model) {
    /** @var {GameData} model - Reference to the game's model */
    this.model = model;
  }

  /*----- Constants ----------------------------------------------------------*/
  /** @const {Object} scale - Default scales for input */
  static scale = {
    /** @const {number} scale.mass - Mass multiplier per 100ms */
    mass: 1.05,
    /** @const {number} scale.velocity - Velocity input (m/s per pixel) */
    velocity: 55.7,
  };

  /*----- Event Handlers -----------------------------------------------------*/
  /**
   * Handle mouse down events
   * @param {MouseEvent} e - Mouse down event
   */
  handleMouseDown(e) {
    //  Update GameData#mouse properties
    let mouse = this.model.mouse;
    mouse.isDown = true;
    [mouse.initPosition.x, mouse.initPosition.y] = [e.pageX, e.pageY];
    [mouse.position.x, mouse.position.y] = [e.pageX, e.pageY];
    console.log(e);
  }
  /**
   * Handle mouse up events
   * @param {MouseEvent} e - Mouse up event
   */
  handleMouseUp(e) {
    //  Update GameData#mouse properties
    let mouse = this.model.mouse;
    mouse.isDown = false;
    [mouse.position.x, mouse.position.y] = [e.pageX, e.pageY];

    // TEST! Log all the mouse data
    console.log(mouse);
  }
  /**
   * Handle mouse move events
   * @param {MouseEvent} e - Mouse move event
   */
  handleMouseMove(e) {
    //  Update GameData#mouse properties
    let mouse = this.model.mouse;
    [mouse.position.x, mouse.position.y] = [e.pageX, e.pageY];
  }
}
