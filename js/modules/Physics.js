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

    /** @constant {number} G - Gravitational constant */
    static G = 6.67e-11;

    /** @constant {Object} scale - Conversion rates for physics equations */
    static scale = {
      /** @constant {number} scale.space - Space scale (meters per pixel) */
      space: 0.30e7,
      /** @constant {number} scale.time - Time scale (seconds per frame) */
      time: 0.50e3
    };

  };
