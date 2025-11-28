function setup() {
  const base = 2
  const num = Math.floor(random(0, 64));
  const number1 = num % base
  let currentBase = base
  const number2 = floor(num / currentBase) % base
  currentBase *= base
  const number3 = floor(num / currentBase) % base
  currentBase *= base
  const number4 = floor(num / currentBase) % base
  currentBase *= base
  const number5 = floor(num / currentBase) % base
  currentBase *= base
  const number6 = floor(num / currentBase) % base

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

  text(number6, 80 * 0 + 75, 140)
  text(number5, 80 * 1 + 75, 140)
  text(number4, 80 * 2 + 75, 140)
  text(number3, 80 * 3 + 75, 140)
  text(number2, 80 * 4 + 75, 140)
  text(number1, 80 * 5 + 75, 140)
}
