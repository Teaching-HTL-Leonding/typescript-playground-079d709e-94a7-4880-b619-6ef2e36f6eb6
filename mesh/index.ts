const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.
const RAND = SIZE - MARGIN

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  for (let b = MARGIN; b < SIZE; b += MARGIN) {
    for (let a = MARGIN; a < SIZE; a += MARGIN) {
      line(MARGIN, b, RAND, a)
    }
  }
}