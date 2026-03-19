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

  if(symbol === 1){
    rect(centerX- 20, centerY - 20, 40, 40)
  } else if (symbol === 2){
    circle(centerX, centerY, 40)
  } else if (symbol === 3){
    triangle(centerX, centerY - 20, centerX - 20, centerY + 20, centerX+ 20, centerY + 20)
  } else if (symbol === 4){
    text("⭐")
  } else if (symbol === 5){
    
  } else if (symbol === 6){
    
  } else if (symbol === 7){
    
  }
}