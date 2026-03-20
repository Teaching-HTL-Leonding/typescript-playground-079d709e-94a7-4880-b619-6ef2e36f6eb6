const diceSize = 200; // size of the square (width and height)
function setup() {
    createCanvas(10000, 10000);

    const symbol = floor(random(1, 7));
    const symbol2 = floor(random(1, 7))
    const symbol3 = floor(random(1, 7))

    for (let i = 0; i <= 600; i += 200) {
        translate(i, 0)
        drawDomino(symbol, symbol2)
    }
}

function drawDomino(symbol: number, symbol2: number): void {
    fill("lightgrey")
    noStroke();
    rect(0, 0, diceSize * 2, diceSize)

    fill("black");
    rect(10, 10, diceSize * 2 - 20, diceSize - 20);

    strokeWeight(3)
    stroke("white")
    line(diceSize, 20, diceSize, 180)

    drawSymbol(symbol)

    translate(diceSize, 0)
    drawSymbol(symbol2)
}

function drawSymbol(symbol: number): void {
    const centerX = diceSize / 2;
    const centerY = diceSize / 2;
    const size = 80;

    // draw symbol
    fill("white")
    switch (symbol) {
        case 1:
            rect(centerX - 40, centerY - 40, 80, 80)
            break
        case 2:
            circle(centerX, centerY, size)
            break
        case 3:
            triangle(centerX, centerY - 40, centerX - 40, centerY + 40, centerX + 40, centerY + 40)
            break
        case 4:
            textAlign(CENTER, CENTER)
            textSize(size)
            text("⭐", centerX, centerY)
            break
        case 5:
            textAlign(CENTER, CENTER)
            textSize(size)
            text("❤️", centerX, centerY)
            break
        case 6:
            textAlign(CENTER, CENTER)
            textSize(size)
            text("🍀", centerX, centerY)
            break
    }
}