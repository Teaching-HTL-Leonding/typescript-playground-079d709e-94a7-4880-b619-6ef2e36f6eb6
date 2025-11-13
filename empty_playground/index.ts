function setup() {
    createCanvas(500, 500)
    background("black")
    colorMode(HSB)
}

let x: number = 0
let colorHue: number = 0

function draw() {
    background("lightblue")
    strokeWeight(2)
    stroke("black")
    fill(colorHue, 100, 100)
    colorHue = (colorHue + 1) % 360
    rect(x, x, 100, 50)
    fill(colorHue, 100, 100)
    circle(x, x + 50, 50)
    circle(x + 100, x + 50, 50)
    triangle(x,x,x+10,x+10,x-50,x)
    x = x % 500
    x = x + 1
}