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

const model = new GameData(),
  renderer = new DOMRenderer(model),
  phys = new Physics(model),
  game = new Game(model);

/*----- Event Listeners ------------------------------------------------------*/
document.addEventListener("mousedown", game.handleMouseDown.bind(game));
document.addEventListener("mouseup", game.handleMouseUp.bind(game));
document.addEventListener("mousemove", game.handleMouseMove.bind(game));
