/**
 * @file    Manages the game view (DOM).
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";
import Renderer from "./Renderer.js";

/** @module DOMRenderer - Manages the game view (DOM). */
export default class extends Renderer {
  /**
   * Initialize a DOM-based renderer.
   * @param {GameData} model - A game model instance.
   */
  constructor(model) {
    super(model);
    this.setContainer(document.createElement("div"));
  }
}
