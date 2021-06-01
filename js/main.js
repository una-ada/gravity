
import Game from "./modules/Game.js";
import DOMRenderer from "./modules/DOMRenderer.js";
import Physics from "./modules/Physics.js";
import GameData from "./modules/GameData.js";

const
  state = new GameData(),
  renderer = new DOMRenderer(),
  phys = new Physics(state),
  game = new Game(state);