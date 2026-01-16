let circleX: number[] = []
let circleY: number[] = []
let direction: number[] = []

const SPEED: number = 2;
const RADI: number = 10;
const DIAM: number = RADI * 2;

function setup() {
    createCanvas(500, 300);
}

function draw() {
    background("white");

    fill('lightgray');
    stroke('darkgray');
    rect(0, 0, DIAM, height);

    fill('yellow');
    stroke('gold');

    for (let i = 0; i < circleY.length; i++) {

        circle(circleX[i], circleY[i], DIAM);

        circleX[i] += SPEED * direction[i]
        if (circleX[i] - RADI < 0 || circleX[i] + RADI > width) {
            direction[i] *= -1;
            circleX[i] = max(RADI, min(width - RADI, circleX[i]));
        }
    }
    if (mouseY < 290) {
        circle(10, mouseY, DIAM)
    }
}

function mouseClicked() {
    if (mouseY < 290) {
        circleY.push(mouseY)
        circleX.push(10)
        direction.push(SPEED)
    }
}