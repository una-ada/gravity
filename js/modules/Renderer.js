/**
 * @file    Superclass for managing game view.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";

/** @module Renderer - Superclass for managing game view. */
export default class {
  /**
   * Initialize base rendering functions.
   * @param {GameData} model - A game model instance.
   */
  constructor(model) {
    /** @var {GameData} model - Reference to the game's model */
    this.model = model;
  }
  /**
   * Sets the view container
   * @param {HTMLElement} el - Element to set as view container
   */
  setContainer(el) {
    el.id = `gravity-${this.model.id}`;
    /** @var {HTMLElement} container - DOM Element holding all game views.*/
    this.container = el;
  }
}
