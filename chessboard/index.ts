function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square
    const RAND = SQUARE_SIZE - SIZE
    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    for (let b = 0; b < 4; b++) {
        for (let a = 8; a > 0; a--) {
            if (a % 2 === 1) {
                fill("white")
            } else {
                fill("brown")
            }
            rect(a * SQUARE_SIZE, (b * 2) * SQUARE_SIZE + SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE)
        }
    }
    for (let b = 0; b < 4; b++) {
        for (let a = 8; a > 0; a--) {
            if (a % 2 === 1) {
                fill("brown")
            } else {
                fill("white")
            }
            rect(a * SQUARE_SIZE, (b * 2) * SQUARE_SIZE + SQUARE_SIZE * 2, SQUARE_SIZE, SQUARE_SIZE)
        }
    }
    for (let numb = 1; numb < 9; numb++) {
        
    }
}
