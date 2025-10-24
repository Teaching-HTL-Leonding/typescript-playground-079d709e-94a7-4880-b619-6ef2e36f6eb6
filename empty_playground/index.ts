function setup() {
    createCanvas(1000,1000)
    background("black")
    stroke("green")
    strokeWeight(3)
    noFill()
}

let lastClickX: number = 0
let lastClickY: number = 0

function mouseClicked() {
    let a = mouseY - lastClickY
    let b = mouseX - lastClickX
    let c = sqrt(a * a + b* b)
    let diameter = 2 * c
    circle(mouseX, mouseY, diameter)
    line(a,b,diameter,diameter)
    line()
    line()
    lastClickX = mouseX
    lastClickY = mouseY
}
