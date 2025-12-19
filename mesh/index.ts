const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.
const RAND = SIZE - MARGIN

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  colorMode(HSB)

  strokeWeight(1);

  for (let b = MARGIN; b < SIZE; b += MARGIN) {
    for (let a = MARGIN, color = 0; a < SIZE; a += MARGIN, color += 60) {
      stroke(color, 100, 100)
      line(MARGIN, a, RAND, b)
    }
  }
}