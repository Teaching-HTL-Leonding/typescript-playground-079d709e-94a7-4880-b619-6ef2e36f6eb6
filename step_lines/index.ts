function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance
    let GELB = 50

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    
    let a = 50
    while (GELB < (GRID * 16)){
        line(GRID, a, GELB, a)
        a += GRID 
        GELB += 25
    }


    // Draw right part of the lines
    stroke("red");
    let b = 50
    while (GELB < (GRID * 16)){
        line(GRID, b, GELB, b)
        a += GRID 
        GELB += 25
    }
}
