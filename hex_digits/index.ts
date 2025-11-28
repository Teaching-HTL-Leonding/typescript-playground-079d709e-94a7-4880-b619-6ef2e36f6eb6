function setup() {
  const base = 0x10
  const num = Math.floor(random(0, 0x1000));
  const number1 = num % base
  let currentBase = base
  const number2 = floor(num / currentBase) % base
  currentBase *= base
  const number3 = floor(num / currentBase) % base
  currentBase *= base


  createCanvas(300, 400)
  background("black")

  noFill()
  stroke("yellow")

  rect(50 + 80 * 0, 100, 50, 80)
  rect(50 + 80 * 1, 100, 50, 80)
  rect(50 + 80 * 2, 100, 50, 80)

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  textSize(40)

  text(number2, 80 * 0 + 75, 140)
  text(number2, 80 * 1 + 75, 140)
  text(number1, 80 * 2 + 75, 140)
}
