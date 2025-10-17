function setup() {
  createCanvas(800, 800);
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

  fill("white")
  circle(KreisX, KreisY, KreisD)

  //Auge Links
  const LAugeX = headX + headWidth * 0.25
  const AugeY = headY + headHeight * 0.25
  const AugeD = min(headWidth, headHeight) * 0.2

  fill("black")
  circle(LAugeX, AugeY, AugeD)

  //Auge Rechts
  const RAugeX = headX + headWidth * 0.75

  circle(RAugeX, AugeY, AugeD)

  //Mund
  const MundX = width * 0.375
  const MundY = height * 0.6
  const MundX2 = width * 0.25
  const MundY2 = height * 0.05


  fill("white")
  rect(MundX, MundY, MundX2, MundY2)

  //Linkes Bein
  fill("grey")
  const LBeinX = headWidth * 0.65
  const BeinY = headHeight * 1.5
  const LBeinX2 = headWidth * 0.20
  const BeinY2 = headHeight * 0.45

  rect(LBeinX, BeinY, LBeinX2, BeinY2)

  //Rechtes Bein
  const RBeinX = headWidth * 1.15
  const RBeinX2 = headWidth * 0.20

  rect(RBeinX, BeinY, RBeinX2, BeinY2)

}
