const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);
  stroke("lime")

  let a = 25
  while (a < (SIZE - MARGIN)) {
    line(a, MARGIN, mouseX, mouseY)
    line(SIZE - MARGIN, a, mouseX, mouseY)
    a += 25
  }
}