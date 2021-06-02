/**
 * @file    Manages the game view (DOM).
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import Renderer from "./Renderer.js";

/** @module DOMRenderer - Manages the game view (DOM). */
export default class extends Renderer {
  /** Initialize a DOM-based renderer */
  constructor() {
    super();

    /** @var {HTMLElement} container - DOM Element holding all game views.*/
    this.container = document.createElement("div");
  }
}
