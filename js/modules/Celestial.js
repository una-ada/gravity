/**
 * @file    Celestial game objects.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.03
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
    /** @var {string} name Display name. */
    this.name = options.name || "Unnamed Celestial";
    /** @var {number} birth Creation timestamp. */
    this.birth = +new Date();

    /*----- Physics ----------------------------------------------------------*/
    /** @var {Point} position Position coordinates in meters. */
    this.position = options.position || new Point(0, 0);
    /** @var {Vector} velocity Velocity vector in meters/second. */
    this.velocity = options.velocity || new Vector(0, 0);
    /** @var {number} mass Mass in kilograms. */
    this.mass = options.mass || 0;
    /** @TODO Add HitBox class */
    this.hitBox = null;

    /*----- Rendering --------------------------------------------------------*/
    /** @var {number} size Width or diameter in meters. */
    this.size = options.size || 0;
    /** @var {ImageData} texture The texture for rendering. */
    this.texture = options.texture || null;
  }
}
