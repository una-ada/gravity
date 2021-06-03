/**
 * @file    Celestial game objects.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.02
 */

/*----- Imports --------------------------------------------------------------*/
import { Point, Vector } from "./Utils.js";

/*----- Classes --------------------------------------------------------------*/
/** @module Celestial - Celestial game objects. */
export default class Celestial {
  /**
   * Create a new celestial game object.
   * @arg {Object} options Optional parameters.
   * @arg {string} [options.name="Unnamed Celestial"] Display name.
   * @arg {Point} [options.position] Position coordinates in meters.
   * @arg {Vector} [options.velocity] Velocity vector in meters/second.
   * @arg {Vector} [options.acceleration] Acceleration vector in meters/second^2
   * @arg {number} [options.mass=0] Mass in kilograms.
   * @arg {number} [options.size=0] Width or diameter in meters.
   * @arg {ImageData} [options.texture] The texture for rendering.
   */
  constructor(options) {
    /*----- Metadata ---------------------------------------------------------*/
    this.name = options.name || "Unnamed Celestial";
    /** @var {number} birth Creation timestamp. */
    this.birth = +new Date();

    /*----- Physics ----------------------------------------------------------*/
    this.position = options.positions || new Point(0, 0);
    this.velocity = options.velocity || new Vector(0, 0);
    this.mass = options.mass || 0;
    /** @TODO Add HitBox class */
    this.hitBox = null;

    /*----- Rendering --------------------------------------------------------*/
    this.size = options.size || 0;
    this.texture = options.texture || null;
  }
}
