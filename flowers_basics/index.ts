// <<< ADD CONSTANTS HERE (if you need them)
const KREIS_L_BREITE = 200
const KREIS_L_HOEHE = 370
const KREIS_L_DURCHMESSER = 70
const KREIS_R_BREITE = 500
const KREIS_R_HOEHE = 370
const KREIS_R_DURCHMESSER = 80
const KRESIS_GELB_DURCHMESSER = 65


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
  circle(KREIS_R_BREITE + 50, KREIS_R_HOEHE, KREIS_R_DURCHMESSER)
  circle(KREIS_R_BREITE, KREIS_R_HOEHE + 50, KREIS_R_DURCHMESSER)
  circle(KREIS_R_BREITE - 50, KREIS_R_HOEHE, KREIS_R_DURCHMESSER)
  circle(KREIS_R_BREITE, KREIS_R_HOEHE - 50, KREIS_R_DURCHMESSER)

  //Gelber kreis rechte Blume
  fill("yellow")
  strokeWeight(0)
  circle(KREIS_R_BREITE, KREIS_R_HOEHE, KRESIS_GELB_DURCHMESSER)

  //Linke Blume
  //Blumenstängel linke Blume
  stroke("green")
  strokeWeight(20)
  fill("lightblue")
  arc(200, 500, 125, 250, -90, 90)

  // Blütenblätter linke Blume
  fill("lightgreen")
  strokeWeight(0)
  circle(KREIS_L_BREITE + 50, KREIS_L_HOEHE, KREIS_L_DURCHMESSER)
  circle(KREIS_L_BREITE + 15.5, KREIS_L_HOEHE + 47.5, KREIS_L_DURCHMESSER)
  circle(KREIS_L_BREITE - 44, KREIS_L_HOEHE + 31.9, KREIS_L_DURCHMESSER)
  circle(KREIS_L_BREITE + 15.5, KREIS_L_HOEHE - 47.5, KREIS_L_DURCHMESSER)
  circle(KREIS_L_BREITE - 44, KREIS_L_HOEHE - 31.9, KREIS_L_DURCHMESSER)

  //Gelber Kreis linke Blume
  fill("yellow")
  circle(KREIS_L_BREITE, KREIS_L_HOEHE, KRESIS_GELB_DURCHMESSER)
}
