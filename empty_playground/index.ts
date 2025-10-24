function setup() {
    createCanvas(1000, 1000)
    background("black")
    stroke("green")
    strokeWeight(3)
    noFill()
    angleMode(DEGREES)
}

let lastClickX: number = 0
let lastClickY: number = 0

function mouseClicked() {
    let a = mouseY - lastClickY
    let b = mouseX - lastClickX
    let c = sqrt(a * a + b * b)
    //let cheat = dist(mouseX, mouseY, lastClickX, lastclickY)
    let diameter = 2 * c
    stroke("green")
    circle(mouseX, mouseY, diameter)
    stroke("lightblue")
    //Dreieck
    line(mouseX, mouseY, lastClickX, lastClickY)
    line(mouseX, mouseY, lastClickX, mouseY)
    line(lastClickX, mouseY, lastClickX, lastClickY)
    //Arc
    arc(lastClickX, mouseY, 100, 100, 270, 0)
    //Punkt
    circle(lastClickX + 15, mouseY - 15, 1)
    lastClickX = mouseX
    lastClickY = mouseY
}