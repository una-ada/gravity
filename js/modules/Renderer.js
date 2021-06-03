/**
 * @file    Superclass for managing game view.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";

/*----- Classes --------------------------------------------------------------*/
/** @module Renderer - Superclass for managing game view. */
export default class Renderer {
  /**
   * Initialize base rendering functions.
   * @arg {GameData} model - A game model instance.
   */
  constructor(model) {
    /** @var {GameData} model - Reference to the game's model. */
    this.model = model;
  }

  /*---- Setters and getters -------------------------------------------------*/
  /** @type {number[]} */
  get bounds() {
    const { top, left, height, width } = this.container.getBoundingClientRect();
    return { top, left, height, width };
  }

  /*----- Methods ------------------------------------------------------------*/
  /**
   * Sets the view container
   * @arg {HTMLElement} el - Element to set as view container.
   */
  setContainer(el) {
    el.id = `gravity-${this.model.id}`;
    el.classList.add("gravity");
    /** @var {HTMLElement} container - DOM Element holding all game views. */
    this.container = el;
  }
  /**
   * Render the game scene.
   * @abstract
   */
  render() {
    throw new Error("Renderer#render() must be implemented by subclass!");
  }
}
