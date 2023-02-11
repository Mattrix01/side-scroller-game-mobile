// load event waits for all assets and images before executes code in its call back function/
window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

  // will apply event listeners to keybaord events and hold an array of all currently active keys

  // will react to the inputHandler keys, as they are pressed drawing and udpating the player

  // handles endlessly scrolling background

  // class to generate enemies

  // function for multiple active enemies,responsible for adding, animating and removing enemies

  // utility function which will handle displaying score and game over message

  // main animation loop, function will run 60 times a second updating and drawing over and over.
});
