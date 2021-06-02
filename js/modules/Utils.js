/**
 * @file    A collection of utility classes.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.02
 */

/** A single point in cartesian coordinated. */
export class Point {
  /**
   * Create a single point.
   * @param {number} x - The point's x coordinate.
   * @param {number} y - The point's y coordinate.
   */
  constructor(x, y) {
    /** @var {number} x - The point's x coordinate. */
    this.x = x;
    /** @var {number} y - The point's y coordinate. */
    this.y = y;
  }
}
/** A 2-dimensional vector in cartesian coordinated. */
export class Vector extends Point {
  /**
   * Create a 2-dimensional vector.
   * @param {number} x - The vector's x length.
   * @param {number} y - The vector's y length.
   */
  constructor(x, y) {
    super(x, y);
  }

  /*----- Getters and setters ------------------------------------------------*/
  /** @type {number} */
  get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  set magnitude(magnitude) {
    let direction = this.direction;
    this.x = magnitude * Math.cos(direction);
    this.y = magnitude * Math.sin(direction);
  }
  /** @type {number} */
  get direction() {
    /** @TODO */
  }
  set direction(direction) {
    let magnitude = this.magnitude;
    // Keep direction within [-pi, pi]
    if(Math.abs(direction) > Math.PI) direction %= Math.PI;
    this.x = magnitude * Math.cos(direction);
    this.y = magnitude * Math.sin(direction);
  }
}
