function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance
    let gelb = 50
    let rot = 25

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

    for (let a = 50, b = 25; gelb < (GRID * 16) && rot < (GRID * 16); a += GRID, gelb += 25, b += GRID, rot += 25) {
        line(GRID, a, gelb, a)
        stroke("red")
        line(SIZE - 25, b, rot, b)
    }
}

