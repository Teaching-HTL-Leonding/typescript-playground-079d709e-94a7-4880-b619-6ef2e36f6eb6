function setup() {
    createCanvas(500, 500)
    background("black")
    colorMode(HSB)
}

let x: number = 0
let colorHue: number = 0

function draw() {
    background("lightblue")
    noStroke()
    fill(colorHue, 100, 100)
    colorHue = (colorHue + 1) % 360
    circle(x, x + 50, 50)
    circle(x + 100, x + 50, 50)
    rect(x, x, 100, 50)
    circle(x+100, x+25, 50)
    noStroke()
    fill(colorHue, 100, 100)
    x = x % 500
    x = x + 1
}