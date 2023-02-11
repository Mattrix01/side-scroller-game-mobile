// load event waits for all assets and images before executes code in its call back function/
window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

  // will apply event listeners to keybaord events and hold an array of all currently active keys
  class InputHandler {
    constructor() {
      // array of keys adding and removing from it as they are pressed and released. keep track of multiple presses.
      // holds information fo which arrow keys are currently pressed.
      this.keys = [];
      // using ES6 arrow function to make sure JS doesnt forget which object this keys is.
      window.addEventListener("keydown", (e) => {
        // if statement, if key that was pressed is arrow down and if that key is not yet inside the this.keys, only then push it into the array.
        // listening for all arrow keys
        if (
          (e.key === "ArrowDown" ||
            e.key === "ArrowUp" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight") &&
          this.keys.indexOf(e.key) === -1
        ) {
          this.keys.push(e.key);
        }
      });
      // When we release a key, if that key was arrow down, find index of that key inside this.keys array and use splice to remove on element from that array.
      // now when down arrow is pressed it is added, when it is released it is removed.
      window.addEventListener("keyup", (e) => {
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight"
        ) {
          this.keys.splice(this.keys.indexOf(e.key), 1);
        }
      });
    }
  }

  // will react to the inputHandler keys, as they are pressed drawing and udpating the player
  class Player {}

  // handles endlessly scrolling background
  class Background {}

  // class to generate enemies
  class Enemy {}

  // function for multiple active enemies,responsible for adding, animating and removing enemies
  function handleEnemies() {}

  // utility function which will handle displaying score and game over message
  function displayStatusText() {}

  // instance of inputHandler class which will run all the code inside of its contructor. executing the code.
  const input = new InputHandler();

  // main animation loop, function will run 60 times a second updating and drawing over and over.
  function animate() {}
});
