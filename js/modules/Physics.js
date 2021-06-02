/**
 * @file    Manages the physics simulation.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/** @module Physics - Manages the physics simulation. */
export default class {
  /** Initialize physics engine. */
  constructor() {
    console.log("Physics works!");
  }

  /*----- Constants ----------------------------------------------------------*/
  /** @const {number} G - Gravitational constant */
  static G = 6.67e-11;
  /** @const {Object} scale - Conversion rates for physics equations */
  static scale = {
    /** @const {number} scale.space - Space scale (meters per pixel) */
    space: 0.3e7,
    /** @const {number} scale.time - Time scale (seconds per frame) */
    time: 0.5e3,
  };
}
