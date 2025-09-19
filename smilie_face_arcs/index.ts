function setup() {
  createCanvas(400, 400);


  angleMode(DEGREES);

  stroke("black");
  strokeWeight(10);
  fill("yellow");

  circle(200, 200, 375);

  fill("black");
  circle(125, 125, 20);
  circle(275, 125, 20);

  noFill();
  
  arc(200, 250, 200, 150, 30, 150);

  arc(275,220,200,150,70,110)

  arc(125,220,200,150,70,110)
}
