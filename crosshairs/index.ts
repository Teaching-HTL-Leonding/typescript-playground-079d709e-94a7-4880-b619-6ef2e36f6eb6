function setup() {
  createCanvas(2000, 2000);
}

function mouseMoved() {
  background("aqua")
  stroke("blue")
  noFill()
  strokeWeight(2)
  // Variable

  circle(mouseX, mouseY, 40)
  circle(mouseX, mouseY, 20)
  line(mouseX - 40, mouseY, mouseX + 40, mouseY)
  line(mouseX, mouseY - 40, mouseX, mouseY + 40)
}
