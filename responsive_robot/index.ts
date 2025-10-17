function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  // Add your code here

  //Antenne
  const AntenneX = width * 0.5
  const AntenneY = headHeight * 0.25
  const AntenneY2 = height * 0.25

  line(AntenneX, AntenneY, AntenneX, AntenneY2)

  //Kreis auf der Antenne
  const KreisX = width * 0.5
  const KreisY = height * 0.1
  const KreisD = headHeight * 0.1

  circle(KreisX, KreisY, KreisD)

  //Auge Links
  const LAugeX = headHeight *0.125
  const LAuge
  const LAugeD





}
