function setup() {
  createCanvas(800, 800);
  background("lightblue");
}

function mouseMoved() {
  const SNAP = 40; // marker must snap every 40 pixels
  const MARKER_SIZE = 40; // size of marker

  background("lightblue");

  // Add your code here
  const x = round(mouseX / SNAP) * SNAP
  const y = round(mouseY / SNAP) * SNAP

  fill("lightblue")
  circle(x, y, 40)
  circle(x, y, 20)

  line(x - MARKER_SIZE, y, x + MARKER_SIZE, y)
  line(x, y - MARKER_SIZE, x, y + MARKER_SIZE)
  //line(x + MARKER_SIZE, y, x, y + MARKER_SIZE)
  //line(x - MARKER_SIZE, y, x, y+ MARKER_SIZE)
  //line(x, y - MARKER_SIZE, x + MARKER_SIZE, y)
  //line(x, y + MARKER_SIZE, x - MARKER_SIZE, y)

  strokeWeight(3)
  stroke("black")
  fill("green")
  textSize(30)
  text(`x=${x},y=${y}`, 0, height)



}