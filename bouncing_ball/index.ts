function setup() {
  createCanvas(300, 300);
}

const circleDiameter = 50;

let circleCenterX1 = 200;
let circleCenterY1 = 0;
let directionX1 = 2;
let directionY1 = 2;
let circleCenterX2 = 200;
let circleCenterY2 = 300;
let directionX2 = -2;
let directionY2 = 2;
let circleCenterX3 = 300;
let circleCenterY3 = 150;
let directionX3 = -2;
let directionY3 = 2;

function draw() {
  background("lightblue");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX1, circleCenterY1, circleDiameter);

  fill("blue");
  circle(circleCenterX2, circleCenterY2, circleDiameter);

  fill("red");
  circle(circleCenterX3, circleCenterY3, circleDiameter);
  
  fill("yellow");
  circle(circleCenterX4, circleCenterY4, circleDiameter);

  circleCenterX1 += directionX1
  circleCenterY1 += directionY1
  circleCenterX2 += directionX2
  circleCenterY2 += directionY2
  circleCenterX3 += directionX3
  circleCenterY3 += directionY3

  if (circleCenterY1 >= width || circleCenterY1 <= 0) {
    directionY1 *= -1.01
  }

  if (circleCenterX1 >= height || circleCenterX1 <= 0) {
    directionX1 *= -1.01
  }

  if (circleCenterY2 >= width || circleCenterY2 <= 0) {
    directionY2 *= -1.01
  }

  if (circleCenterX2 >= height || circleCenterX2 <= 0) {
    directionX2 *= -1.01
  }

    if (circleCenterY3 >= width || circleCenterY3 <= 0) {
    directionY3 *= -1.01
  }

  if (circleCenterX3 >= height || circleCenterX3 <= 0) {
    directionX3 *= -1.01
  }
}
