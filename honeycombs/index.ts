function setup() {
    createCanvas(450, 370);
    background("black");
    stroke("yellow");

    drawHoneycomb()
}
function drawHoneycomb() {
    for (let i = 0; i < 7; i++) {
        push()
        translate(10, 10);
        drawLine(5)
        pop()
        if (i < 6) {
            translate(55, 35)
            drawLine(4)
        }
        translate(-415, 15)
    }
}

function drawLine(count:number) {
    for (let i = 0; i < count; i++) {
        drawHexagon()
        translate(90, 0)
    }
}

function drawHexagon() {
    line(20, 0, 45, 0)
    line(45, 0, 65, 25)
    line(65, 25, 45, 50)
    line(45, 50, 20, 50)
    line(20, 50, 0, 25)
    line(0, 25, 20, 0)
}