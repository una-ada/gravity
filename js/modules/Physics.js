/**
 * Physics engine module.
 * @module modules/Physics
 */
export default
  /** Class for physics simulation. */
  class Physics {

    /** Initialize physics engine. */
    constructor(){
      console.log("Physics works!")
    }

    /** @const {number} G - Gravitational constant */
    static G = 6.67e-11;

    /** @const {Object} scale - Conversion rates for physics equations */
    static scale = {
      /** @const {number} scale.space - Space scale (meters per pixel) */
      space: 0.30e7,
      /** @const {number} scale.time - Time scale (seconds per frame) */
      time: 0.50e3
    };

  };
