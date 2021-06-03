/**
 * @file    Manages the game view (DOM).
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";
import Renderer from "./Renderer.js";

/*----- Classes --------------------------------------------------------------*/
/** @module DOMRenderer - Manages the game view (DOM). */
export default class DOMRenderer extends Renderer {
  /**
   * Initialize a DOM-based renderer.
   * @arg {GameData} model - A game model instance.
   */
  constructor(model) {
    super(model);
    this.setContainer(document.createElement("div"));
  }

  /*---- Methods -------------------------------------------------------------*/
  /** Render the game scene. */
  render() {
    const scene = this.model.scene;
    scene.forEach(
      (obj) => obj.element || (obj.element = document.createElement("div"))
    );
  }
}
