// Layout constants
const GROUPS_PER_ROW = 10;
const ROWS = 10;
const MARKS_PER_GROUP = 5;
const TOTAL = ROWS * GROUPS_PER_ROW * MARKS_PER_GROUP; // 500

const GROUP_W = 42;   // width of one tally group
const GROUP_H = 36;   // height of the vertical strokes
const COL_GAP = 10;   // gap between groups
const ROW_GAP = 16;   // gap between rows
const MARGIN = 16;
const TITLE_HEIGHT = 30;

const CELL_W = GROUP_W + COL_GAP;
const CELL_H = GROUP_H + ROW_GAP;

// Colors
const COLOR_FILLED = "steelblue"


// The random number to visualize (0–500)
let randomNumber: number;

function drawLine(randomNumber: number): void {
    fill(COLOR_FILLED)
    strokeWeight(3)
    stroke(COLOR_FILLED)

    if (randomNumber > 0) {
        if (randomNumber >= 1) {
            line(MARGIN + COL_GAP / 2, TITLE_HEIGHT, MARGIN + COL_GAP / 2, TITLE_HEIGHT + GROUP_H * 3)
        }
        if (randomNumber >= 2) {
            line(MARGIN + COL_GAP / 2 + COL_GAP, TITLE_HEIGHT, MARGIN + COL_GAP / 2 + COL_GAP, TITLE_HEIGHT + GROUP_H * 3)
        }
        if (randomNumber >= 3) {
            line(MARGIN + COL_GAP / 2 + COL_GAP * 2, TITLE_HEIGHT, MARGIN + COL_GAP / 2 + COL_GAP * 2, TITLE_HEIGHT + GROUP_H * 3)
        }
        if (randomNumber >= 4) {
            line(MARGIN + COL_GAP / 2 + COL_GAP * 3, TITLE_HEIGHT, MARGIN + COL_GAP / 2 + COL_GAP * 3, TITLE_HEIGHT + GROUP_H * 3)
        }
        if (randomNumber >= 5) {
            line(MARGIN + COL_GAP / 2 - COL_GAP, TITLE_HEIGHT + GROUP_H * 3, MARGIN + COL_GAP / 2 + COL_GAP * 4, TITLE_HEIGHT)
        }
    }
}

function setup(): void {
    const canvasW = GROUPS_PER_ROW * CELL_W + 2 * MARGIN
    const canvasH = ROWS * CELL_H + TITLE_HEIGHT + MARGIN
    createCanvas(canvasW, canvasH);

    randomNumber = Math.floor(Math.random() * (5 + 1));

    background("white");

    text("Random number :    / 5", width / 2 - 60, TITLE_HEIGHT)
    text(randomNumber, width / 2 + 40, TITLE_HEIGHT)

    translate(MARGIN + COL_GAP / 2, TITLE_HEIGHT + COL_GAP / 2);
    for (let row = 0; row < 1; row++) {
        drawLine(randomNumber)
        push();
        for (let col = 0; col < GROUPS_PER_ROW; col++) {
            translate(0, 0);
        }
        pop();
        translate(0, COL_GAP);
    }
}