/**
 * @file    Manages the game view (DOM).
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";
import Renderer from "./Renderer.js";
import Celestial from "./Celestial.js";

/*----- Classes --------------------------------------------------------------*/
/** @module DOMRenderer Manages the game view (DOM). */
export default class DOMRenderer extends Renderer {
  /**
   * Initialize a DOM-based renderer.
   * @arg {GameData} model A game model instance.
   */
  constructor(model) {
    super(model);
    this.setContainer(document.createElement("gravity"));
  }

  /*---- Methods -------------------------------------------------------------*/
  /**
   * Render the game scene.
   * @override
   */
  render() {
    const scene = this.model.scene;
    scene.forEach(
      /** @arg {Celestial} obj */
      (obj) => {
        // Make sure each Celestial has an Element
        const elem = obj.element || this.generateElement(obj),
          // Avoid repeating elem.style a whole bunch.
          style = elem.style,
          position = this.getPosition(obj);
        style.left = `${position.x}px`;
        style.top = `${position.y}px`;
        style.width = `${obj.size / this.scale}px`;
        style.height = `${obj.size / this.scale}px`;
        if (obj.collisions.length > 0) style.backgroundColor = "red";
      }
    );
  }
  /**
   * Create a rendering Element for a Celestial and append it to the container.
   * @arg {Celestial} celestial
   * @returns {HTMLElement} The rendering Element for the Celestial.
   */
  generateElement(celestial) {
    const element = document.createElement("celestial"),
      // Clean up the name for adding into a CSS class
      cleanName = celestial.name.replace(/\s+/g, "-").toLowerCase();
    element.classList.add(`gravity__celestial_${cleanName}`);
    celestial.element = element;
    this.container.append(celestial.element);
    return element;
  }
}
