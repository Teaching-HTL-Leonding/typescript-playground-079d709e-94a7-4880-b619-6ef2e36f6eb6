const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  let a = 25
  while (a < (SIZE)) {
      stroke("lime")
    line(a, MARGIN, mouseX, mouseY)
    line(a, MARGIN, mouseX, mouseY)
    stroke("yellow")
    line(SIZE - MARGIN, a + 25, mouseX, mouseY)
    a += 25
  }
}