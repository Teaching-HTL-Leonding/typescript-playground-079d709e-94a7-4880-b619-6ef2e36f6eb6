// <<< ADD CONSTANTS HERE (if you need them)
const KREIS_L_BREITE = 200
const KreisL_Hoehe = 370
const KreisL_Durchmesser = 70
const KreisR_Breite = 500
const KreisR_Hoehe = 370
const KreisR_Durchmesser = 80
const KRESIS_R_GELB = 65


function setup() {
  angleMode(DEGREES)
  createCanvas(1000, 1000)
  background("lightblue")

  //Rechte Blume
  //Blumenstängel rechte Blume
  stroke("green")
  strokeWeight(20)
  fill("lightblue")
  arc(500, 500, 125, 250, -90, 90)

  //Blütenblätter rechte blume
  fill("lightgreen")
  strokeWeight(5)
  circle(KreisR_Breite + 50, KreisR_Hoehe, KreisR_Durchmesser)
  circle(KreisR_Breite, KreisR_Hoehe + 50, KreisR_Durchmesser)
  circle(KreisR_Breite - 50, KreisR_Hoehe, KreisR_Durchmesser)
  circle(KreisR_Breite, KreisR_Hoehe - 50, KreisR_Durchmesser)

  //Gelber kreis rechte Blume
  fill("yellow")
  strokeWeight(0)
  circle(KreisR_Breite, KreisR_Hoehe, KRESIS_R_GELB)

  //Linke Blume
  //Blumenstängel linke Blume
  stroke("green")
  strokeWeight(20)
  fill("lightblue")
  arc(200, 500, 125, 250, -90, 90)

  // Blütenblätter linke Blume
  fill("lightgreen")
  strokeWeight(0)
  circle(KREIS_L_BREITE + 50, KreisL_Hoehe, KreisL_Durchmesser)
  circle(KREIS_L_BREITE + 15.5, KreisL_Hoehe + 47.5, KreisL_Durchmesser)
  circle(KREIS_L_BREITE - 44, KreisL_Hoehe + 31.9, KreisL_Durchmesser)
  circle(KREIS_L_BREITE + 15.5, KreisL_Hoehe - 47.5, KreisL_Durchmesser)
  circle(KREIS_L_BREITE - 44, KreisL_Hoehe - 31.9, KreisL_Durchmesser)

  //Gelber Kreis linke Blume
  fill("yellow")
  circle(200, 370, 65)









}
