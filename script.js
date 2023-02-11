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
  class Player {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.width = 200;
      this.height = 200;
      this.x = 0;
      this.y = this.gameHeight - this.height;
      // bringing in sprite image
      this.image = document.getElementById("playerImage");
      this.frameX = 0;
      this.frameY = 0;
      // when speed is posotive player will move right, when negative move to left on horizonal x.
      this.speed = 0;
      // for vertical movement on up arrow
      this.vy = 0;
      this.weight = 1;
    }
    draw(context) {
      context.fillStyle = "white";
      context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(
        this.image,
        this.frameX * this.width,
        this.frameY * this.height,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    update(input) {
      // every call of update method increment x coordinates by speed of posotive go right negative number go left.
      // controls
      if (input.keys.indexOf("ArrowRight") > -1) {
        // if index of the keys input is arrow up, run this code.
        this.speed = 5;
      } else if (input.keys.indexOf("ArrowLeft") > -1) {
        this.speed = -5;
        // && so player can only jump when on solid ground
      } else if (input.keys.indexOf("ArrowUp") > -1 && this.onGround()) {
        // size of jump
        this.vy -= 32;
      } else {
        this.speed = 0;
      }
      // to stop player going off screen
      // horizontal movment
      this.x += this.speed;
      if (this.x < 0) this.x = 0;
      else if (this.x > this.gameWidth - this.width)
        this.x = this.gameWidth - this.width;
      // vertical movement
      this.y += this.vy;
      // checking player jump state, if player is not on the ground in the air, take this.vy and increase by this.weight
      if (!this.onGround()) {
        this.vy += this.weight;
      } else {
        // reswet velocity when player on round to stop vertical movement.
        this.vy = 0;
      }
      // vertical boundry for jump so doesn't go through floor
      if (this.y > this.gameHeight - this.height)
        this.y = this.gameHeight - this.height;
    }
    // utility method, checking player jump state
    onGround() {
      return this.y >= this.gameHeight - this.height;
    }
  }

  // handles endlessly scrolling background
  class Background {}

  // class to generate enemies
  class Enemy {}

  // function for multiple active enemies,responsible for adding, animating and removing enemies
  function handleEnemies() {}

  // utility function which will handle displaying score and game over message
  function displayStatusText() {}

  // instance of classes which will run all the code inside of its contructor. executing the code.
  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height);

  // main animation loop, function will run 60 times a second updating and drawing over and over.
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    player.update(input);
    // request animation to loop animate parent
    requestAnimationFrame(animate);
  }
  animate();
});
