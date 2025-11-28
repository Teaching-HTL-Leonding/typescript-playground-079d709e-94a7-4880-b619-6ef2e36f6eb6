function setup() {
  const num = Math.floor(random(0, 1_000_000));
  const number1 = num % 10
  const number2 = floor(num / 10) % 10
  const number3 = floor(num / 100) % 10
  const number4 = floor(num / 1000) % 10
  const number5 = floor(num / 10000) % 10
  const number6 = floor(num / 100000) % 10

  createCanvas(600, 400)
  background("black")

  noFill()
  stroke("yellow")

  rect(50 + 80 * 0, 100, 50, 80)
  rect(50 + 80 * 1, 100, 50, 80)
  rect(50 + 80 * 2, 100, 50, 80)
  rect(50 + 80 * 3, 100, 50, 80)
  rect(50 + 80 * 4, 100, 50, 80)
  rect(50 + 80 * 5, 100, 50, 80)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  textSize(40)

  text(number6, 80 * 0 + 75, 100 + 40)
  text(number5, 80 * 1 + 75, 100 + 40)
  text(number4, 80 * 2 + 75, 100 + 40)
  text(number3, 80 * 3 + 75, 100 + 40)
  text(number2, 80 * 4 + 75, 100 + 40)
  text(number1, 80 * 5 + 75, 100 + 40)
}
