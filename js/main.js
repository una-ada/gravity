/**
 * @file    Build and run an instance of Gravity.
 * @author  Una Ada <una@anarchy.website>
 * @version 2021.06.04
 */

/*----- Imports --------------------------------------------------------------*/
import Game from "./modules/Game.js";
import DOMRenderer from "./modules/DOMRenderer.js";
import Physics from "./modules/Physics.js";
import GameData from "./modules/GameData.js";
import Celestial from "./modules/Celestial.js";
import { Point, Vector } from "./modules/Utils.js";
import Area from "./modules/Area.js";

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
    physical: true,
    mass: 5.683e26,
    size: 3.06e8,
  }),
  titan = new Celestial({
    name: "Titan",
    physical: true,
    mass: 1.35e23,
    position: new Point(0, -1.187e9),
    velocity: new Vector(5.57e3, 0),
    size: 0.54e8,
  }),
  target = new Area(new Point(1.0e9, -1e8), new Point(0.559e9, 2e8), {
    name: "Target",
  });
model.scene.push(saturn);
model.scene.push(titan);
model.scene.push(target);
view.loop();
physics.loop();
game.loop();
console.log(model);
