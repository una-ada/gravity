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
    size: 3.06e8,
  }),
  titan = new Celestial({
    name: "Titan",
    mass: 1.35e23,
    position: new Point(0, -1.187e9),
    //velocity: new Vector(5.57e3, 0),
    size: 0.54e8,
  });
model.scene.push(saturn);
model.scene.push(titan);
view.loop();
physics.loop();
console.log(model);
physics.updateVelocities();
