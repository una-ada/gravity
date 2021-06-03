/**
 * @file    Build and run an instance of Gravity.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.01
 */

/*----- Imports --------------------------------------------------------------*/
import Game from "./modules/Game.js";
import DOMRenderer from "./modules/DOMRenderer.js";
import Physics from "./modules/Physics.js";
import GameData from "./modules/GameData.js";
import Celestial from "./modules/Celestial.js";
import { Point, Vector } from "./modules/Utils.js";

/*----- Initialize -----------------------------------------------------------*/
const model = new GameData(),
  view = new DOMRenderer(model),
  physics = new Physics(model),
  game = new Game(model, view);
document.body.append(view.container);

/*----- Event Listeners ------------------------------------------------------*/
document.addEventListener("mousedown", game.handleMouseDown.bind(game));
document.addEventListener("mouseup", game.handleMouseUp.bind(game));
document.addEventListener("mousemove", game.handleMouseMove.bind(game));

/*---- Temporary Level -------------------------------------------------------*/
let saturn = new Celestial({
    name: "Saturn",
    mass: 5.683e26,
    size: 102, // not to scale
  }),
  titan = new Celestial({
    name: "Titan",
    mass: 1.35e23,
    position: new Point(0, -389), // not to scale
    velocity: new Vector(15.26e3, 0),
    size: 18, // not to scale
  });
model.scene.push(saturn);
model.scene.push(titan);
view.render();
console.log(model);
