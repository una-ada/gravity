## Pseudocode

### main.js

- Import modules
  - physics engine (Physics.js) &rarr; `phys`
  - renderer (DOMRenderer.js) &rarr; `renderer`
  - game logic (Game.js) &rarr; `game`
- Define constants (instances of modules)
- Cache DOM elements
- Initialize game
  - Pass elements into `init()`
  - Initialize `renderer`
  - Append `renderer.container` to DOM
  - Initialize `game` (pass in `renderer`)
  - Initialize `phys` (pass in `game`)
  - Add event listeners to `renderer.container` to update `game` state <br/>
    *These should probably be functions in the `game` module.*
    - `mousedown` &rarr;
      - `true` on mouse being down
      - cache mouse position as `Object`
    - `mousemove` &rarr; current mouse position as `Object`
    - `mouseup` &rarr; `false` on mouse being down
  - Start `phys` loop
  - Start `game` loop <br/>
    *These need to be separate because physics simulation is time based but the
    renderer is based on animation frames.*

### DOMRenderer.js

- Define `container` `Element`
- For each type of object in the game
  - Define initializing `function` <br/>
    *Take in the attributes the item has according to the model and create an
    `Element` matching that description. Append this `Element` to the
    `container`*
  - Define setter `function` <br/>
    *A `function` which will update the DOM `Element` (view) to match the model
    in `game`.*
- Initialize UI
  - Create `Element` for ...
    - settings menu
    - settings button
    - repo/docs link
    - velocity display
    - "health" display <br/>
      *I'm calling this "health" as a convenient analogy, it will really be a
      number of attempts remaining to get the "moon" into the target area.*
    - game messages display
  - ... and append to `container`
- Define renderer loop
  - Update displays according to `game` state:
    - velocity
    - "health"
    - game messages
  - Update game objects
    - remove `Element` if absent from `game` state
    - update attributes to match state
    - add `Element` if newly added to `game` state <br/>
      *Not entirely sure how this will go at the moment, either caching render
      states or setting a flag on the renderer's `Object` for the game object to
      show that it has not been rendered yet.*
  - Loop back to start on next animation frame