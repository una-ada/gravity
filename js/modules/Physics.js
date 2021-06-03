/**
 * @file    Manages the physics simulation.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
 */

/*----- Imports --------------------------------------------------------------*/
import GameData from "./GameData.js";

/*----- Classes --------------------------------------------------------------*/
/** @module Physics Manages the physics simulation. */
export default class Physics {
  /**
   * Initialize physics engine.
   * @arg {GameData} model A game model instance.
   */
  constructor(model) {
    /** @var {GameData} model Reference to the game's model. */
    this.model = model;
    /** @var {number} _intervalId Holds the ID of the loop interval. */
    this._intervalId = null;
  }

  /*----- Constants ----------------------------------------------------------*/
  /** @const {number} G Gravitational constant. */
  static G = 6.67e-11;
  /** @const {Object} scale Conversion rates for physics equations. */
  static scale = {
    /** @const {number} scale.space Space scale (meters per pixel). */
    space: 0.3e7,
    /** @const {number} scale.time Time scale (seconds per frame). */
    time: 0.5e3,
  };
  /** @const {number} interval Interval time for physics loop. */
  static interval = 1e3 / 120;

  /*----- Running Methods ----------------------------------------------------*/
  /** Calculate physics on a set interval. */
  loop() {
    this._intervalId = window.setInterval(
      this.step.bind(this),
      Physics.interval
    );
    console.log(`Physics running on loop ${this._intervalId}`);
  }
  /** Stop the physics engine loop. */
  stop() {
    window.clearInterval(this._intervalId);
  }
  /** Calculate the physics for objects in the scene and apply to model. */
  step() {}
}
