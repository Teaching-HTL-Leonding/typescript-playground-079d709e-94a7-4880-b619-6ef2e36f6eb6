function setup() {
  createCanvas(200, 200);
  background("lightgray");

  const diceSize = 200; // size of the square (width and height)

  const symbol = floor(random(1, 7));

  // draw black background
  fill("black");
  noStroke();
  rect(0, 0, diceSize, diceSize);

  const centerX = diceSize / 2;
  const centerY = diceSize / 2;
  const size = 80;

  // TODO: Use a switch statement to draw different symbols based on the value of symbol
  // 1: Square
  // 2: Circle
  // 3: Triangle
  // 4: Star emoji ⭐
  // 5: Heart emoji ❤️
  // 6: Lucky charm emoji 🍀

  fill("white")

  switch (symbol) {
    case 1:
      rect(centerX - 40, centerY - 40, 80, 80)
      break
    case 2:
      circle(centerX, centerY, size)
      break
    case 3:
      triangle(centerX, centerY - 40, centerX - 40, centerY + 40, centerX + 40, centerY + 40)
      break
    case 4:
      textAlign(CENTER, CENTER)
      textSize(size)
      text("⭐", centerX, centerY)
      break
    case 5:
      textAlign(CENTER, CENTER)
      textSize(size)
      text("❤️", centerX, centerY)
      break
    case 6:
      textAlign(CENTER, CENTER)
      textSize(size)
      text("🍀", centerX, centerY)
      break
  }
}