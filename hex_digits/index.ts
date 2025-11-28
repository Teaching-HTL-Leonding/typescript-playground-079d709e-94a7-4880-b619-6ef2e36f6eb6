function setup() {
  const base = 0x10
  const num = Math.floor(random(0, 0x1000));
  const number1 = num % base
  let currentBase = base
  const number2 = floor(num / currentBase) % base
  currentBase *= base
  const number3 = floor(num / currentBase) % base
  currentBase *= base
  let digit1: string;
  if (number1 === 10) {
    digit1 = 'A'
  } else if (number1 === 11) {
    digit1 = 'B'
  } else if (number1 === 12) {
    digit1 = 'C'
  } else if (number1 === 13) {
    digit1 = 'D'
  } else if (number1 === 14) {
    digit1 = 'E'
  } else if (number1 === 15) {
    digit1 = 'F'
  } else {
    digit1 = `${number1}`
  }
    
  let digit2: string;
  if (number2 === 10) {
    digit2 = 'A'
  } else if (number2 === 11) {
    digit2 = 'B'
  } else if (number2 === 12) {
    digit2 = 'C'
  } else if (number2 === 13) {
    digit2 = 'D'
  } else if (number2 === 14) {
    digit2 = 'E'
  } else if (number2 === 15) {
    digit2 = 'F'
  } else {
    digit2 = `${number2}`
  }
  
  let digit3: string;
  if (number3 === 10) {
    digit3 = 'A'
  } else if (number3 === 11) {
    digit3 = 'B'
  } else if (number3 === 12) {
    digit3 = 'C'
  } else if (number3 === 13) {
    digit3 = 'D'
  } else if (number3 === 14) {
    digit3 = 'E'
  } else if (number3 === 15) {
    digit3 = 'F'
  } else {
    digit3 = `${number3}`
  }
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

  text(digit3, 80 * 0 + 75, 140)
  text(digit2, 80 * 1 + 75, 140)
  text(digit1, 80 * 2 + 75, 140)
}