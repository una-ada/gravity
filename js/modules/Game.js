/**
 * @file    Manages the game controller.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";
import Renderer from "./Renderer.js";

/** @module Game - Manages the game controller. */
export default class Game {
  /**
   * Initialize a game controller.
   * @param {GameData} model - A game model instance.
   * @param {Renderer} view - A game view instance.
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
   * @param {MouseEvent} e - Mouse down event
   */
  handleMouseDown(e) {
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
    let mouse = this.model.mouse;
    mouse.isDown = false;
    [mouse.position.x, mouse.position.y] = [e.pageX, e.pageY];
  }
  /**
   * Handle mouse move events
   * @param {MouseEvent} e - Mouse move event
   */
  handleMouseMove(e) {
    let mouse = this.model.mouse;
    [mouse.position.x, mouse.position.y] = [e.pageX, e.pageY];
  }
}
