// A grid of 10x10 circles represents 100 units.
// A random number n (0–100) determines how many circles are "filled".
// Circles are counted left-to-right, top-to-bottom.

// Canvas / layout constants
let circleWidth: number = 0
let circleHeight: number = 0
const COLS = 10;
const ROWS = 10;
const CELL_SIZE = 46;  // distance between circle centers
const MARGIN = 10;
const TITLE_HEIGHT = 35;

// Colors
const COLOR_FILLED = "steelblue";
const COLOR_EMPTY = "lightgray";
const COLOR_STROKE = "white";

// The random number we want to visualize (0–100)
let randomNumber: number;

function draw () {

    circleWidth = height / 10
    circleHeight = height / 10
    
    for(let i = 0; i < 10 * CELL_SIZE; i+= CELL_SIZE){
    for(let x = 0; x < 10 * CELL_SIZE; x+= CELL_SIZE){
    noStroke()
    fill(COLOR_FILLED)
    circle(i + CELL_SIZE, x + CELL_SIZE, 30)
    }
    }

}

function setup(): void {
    createCanvas(COLS * CELL_SIZE + 2 * MARGIN, ROWS * CELL_SIZE + TITLE_HEIGHT + MARGIN);
    randomNumber = Math.floor(Math.random() * 101);
    background("white");

    // <<< Add your logic here
}
