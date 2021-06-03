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
    this.setContainer(document.createElement("gravity"));
  }

  /*---- Methods -------------------------------------------------------------*/
  /** Render the game scene. */
  render() {
    const scene = this.model.scene;
    // Make sure each Celestial has an Element
    scene.forEach((obj) => obj.element || this.generateElement(obj));
  }
  /**
   * Create a rendering Element for a Celestial and append it to the container.
   * @arg {Celestial} celestial
   */
  generateElement(celestial) {
    const element = document.createElement("celestial"),
      // Clean up the name for adding into a CSS class
      cleanName = celestial.name.replace(/\s+/g, "-").toLowerCase();
    element.classList.add(`gravity__celestial_${cleanName}`);
    celestial.element = element;
    this.container.append(celestial.element);
  }
}
