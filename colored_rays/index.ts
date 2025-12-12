const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  colorMode(HSB);
}
let color_hue = 0;

function draw() {
  color_hue = (color_hue + 1) % 360
  stroke(color_hue, 100, 100)
  background("black");
  strokeWeight(2);

  for (let a = 25; a < SIZE; a += 25) {

    line(a, MARGIN, mouseX, mouseY)
    line(a, SIZE - 25, mouseX, mouseY)
    line(SIZE - MARGIN, a, mouseX, mouseY)
    line(MARGIN, a, mouseX, mouseY)

  }
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  for (let a = 25; a < SIZE; a += 25) {

    line(a, MARGIN, mouseX, mouseY)
    line(a, SIZE - 25, mouseX, mouseY)
    line(SIZE - MARGIN, a, mouseX, mouseY)
    line(MARGIN, a, mouseX, mouseY)

  }
}