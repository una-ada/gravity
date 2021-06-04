/**
 * @file    Manages the game controller.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import Celestial from "./Celestial.js";
import GameData from "./GameData.js";
import Renderer from "./Renderer.js";

/*----- Classes --------------------------------------------------------------*/
/** @module Game - Manages the game controller. */
export default class Game {
  /**
   * Initialize a game controller.
   * @arg {GameData} model - A game model instance.
   * @arg {Renderer} view - A game view instance.
   */
  constructor(model, view) {
    /** @var {GameData} model - Reference to the game's model */
    this.model = model;
    /** @var {Renderer} view - Reference to the game's view */
    this.view = view;
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
   * @arg {MouseEvent} e - Mouse down event
   */
  handleMouseDown(e) {
    let mouse = this.model.mouse;
    mouse.isDown = true;
    mouse.initPosition.update(e.pageX, e.pageY);
    mouse.position.update(e.pageX, e.pageY);
  }
  /**
   * Handle mouse up events
   * @arg {MouseEvent} e - Mouse up event
   */
  handleMouseUp(e) {
    let mouse = this.model.mouse;
    mouse.isDown = false;
    mouse.position.update(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   * @arg {MouseEvent} e - Mouse move event
   */
  handleMouseMove(e) {
    this.model.mouse.position.update(e.pageX, e.pageY);
  }
}
