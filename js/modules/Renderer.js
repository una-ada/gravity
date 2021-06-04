/**
 * @file    Superclass for managing game view.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";
import Celestial from "./Celestial.js";
import { Point } from "./Utils.js";

/*----- Classes --------------------------------------------------------------*/
/** @module Renderer Superclass for managing game view. */
export default class Renderer {
  /**
   * Initialize base rendering functions.
   * @arg {GameData} model A game model instance.
   */
  constructor(model) {
    /** @var {GameData} model Reference to the game's model. */
    this.model = model;
    /** @var {boolean} running Should the renderer continue running? */
    this.running = true;
    /** @var {number} scale Space scale (meters per pixel). */
    this.scale = 0.3e7;
  }

  /*---- Setters and getters -------------------------------------------------*/
  /** @type {number[]} */
  get bounds() {
    const { top, left, height, width } = this.container.getBoundingClientRect();
    return { top, left, height, width };
  }

  /*----- Functions ----------------------------------------------------------*/
  /**
   * Get the appropriate view position for a Celestial instance.
   * @param {Celestial} celestial
   * @returns {Point} View position for the Celestial.
   */
  getPosition(celestial) {
    const bounds = this.bounds,
      // View origin point (0, 0)
      origin = new Point(
        bounds.width / 2,
        bounds.height / 2
      ),
      // View position from scaled Celestial position
      position = celestial.position.copy().scale(1 / this.scale),
      // View offset position from Celestial origin
      offset = celestial.size / (this.scale * 2);
    // Return offset view position
    return origin.add(position).subtract(offset);
  }

  /*----- Methods ------------------------------------------------------------*/
  /**
   * Sets the view container
   * @arg {HTMLElement} el Element to set as view container.
   */
  setContainer(el) {
    el.id = `gravity-${this.model.id}`;
    el.classList.add("gravity");
    /** @var {HTMLElement} container DOM Element holding all game views. */
    this.container = el;
  }
  /**
   * Render the game scene.
   * @abstract
   */
  render() {
    throw new Error("Renderer#render() must be implemented by subclass!");
  }
  /** Render on animationFrame */
  loop() {
    if (this.running) this.render();
    requestAnimationFrame(this.loop.bind(this));
  }
}
