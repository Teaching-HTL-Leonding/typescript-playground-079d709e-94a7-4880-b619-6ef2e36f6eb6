function setup() {
    createCanvas(500, 500)
    background("black")
    colorMode(HSB)
}

let x: number = 0
let colorHue: number = 0

function draw() {
    background("lightblue")
    strokeWeight(1)
    stroke("black")
    fill(colorHue, 100, 100)
    colorHue = (colorHue + 1) % 360
    circle(x, x + 50, 50)
    circle(x + 100, x + 50, 50)
    rect(x, x, 100, 50)
    noStroke()
    fill(colorHue, 100, 100)
    triangle(x+1,x+10,x,x-30,x+101,x)
    x = x % 500
    x = x + 1
}