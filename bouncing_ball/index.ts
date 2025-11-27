function setup() {
  createCanvas(300, 300);
}

const circleDiameter = 50;

let circleCenterX1 = 150;
let circleCenterY1 = 0;
let directionX1 = 2;
let directionY1 = 2;
let circleCenterX2 = 150;
let circleCenterY2 = 300;
let directionX2 = -2;
let directionY2 = 2;
let circleCenterX3 = 300;
let circleCenterY3 = 150;
let directionX3 = -2;
let directionY3 = 2;
let circleCenterX4 = 0;
let circleCenterY4 = 150;
let directionX4 = -2;
let directionY4 = -2;

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
  circleCenterX4 += directionX4
  circleCenterY4 += directionY4
  
  if (circleCenterY1 >= height || circleCenterY1 <= 0) {
    directionY1 *= -1
  }

  if (circleCenterX1 >= width || circleCenterX1 <= 0) {
    directionX1 *= -1
  }

  if (circleCenterY2 >= height || circleCenterY2 <= 0) {
    directionY2 *= -1
  }

  if (circleCenterX2 >= width || circleCenterX2 <= 0) {
    directionX2 *= -1
  }

    if (circleCenterY3 >= height || circleCenterY3 <= 0) {
    directionY3 *= -1
  }

  if (circleCenterX3 >= width || circleCenterX3 <= 0) {
    directionX3 *= -1
  }    
  if (circleCenterY4 >= height || circleCenterY4 <= 0) {
    directionY4 *= -1
  }

  if (circleCenterX4 >= width || circleCenterX4 <= 0) {
    directionX4 *= -1
  }
}
