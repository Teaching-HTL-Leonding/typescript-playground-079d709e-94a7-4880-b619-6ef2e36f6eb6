const MARGIN_NUM = 10;

let num: number = 0;
let lineHeight: number = 0;
let cellWidth: number = 0;

function setup() {
    createCanvas(300, 500);
    lineHeight = height / 5;
    cellWidth = width / 4;
}

function draw() {
    background("lightgray");

    noStroke();
    fill("white");
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM);

    stroke("black");
    fill("black");
    strokeWeight(3);
    textSize(60);

    for(let i = 1; i < 5; i++){
    line(0, lineHeight * i, width, lineHeight * i)
    }

    line(cellWidth, lineHeight, cellWidth, lineHeight * 4)
    line(cellWidth * 2, lineHeight, cellWidth * 2, height)
    line(cellWidth * 3, lineHeight, cellWidth * 3, height)

    textAlign(RIGHT, CENTER);
    text(num, width - MARGIN_NUM * 2, lineHeight / 2);

    textAlign(CENTER, CENTER);

    textAlign(CENTER, CENTER)
    text("0", cellWidth, lineHeight * 4.5)
    text("C", cellWidth * 2.5, lineHeight * 4.5)
    
    for(let i = 0.5; i < 3; i++){
    text(i + 0.5, cellWidth * i, lineHeight * 3.5)
    }
    for(let i = 0.5; i < 3; i++){
    text(i + 3.5, cellWidth * i, lineHeight * 2.5)
    }
    for(let i = 0.5; i < 3; i++){
    text(i + 6.5, cellWidth * i, lineHeight * 1.5)
    }

    text("+", cellWidth * 3.5, lineHeight * 4.5)
    text("-", cellWidth * 3.5, lineHeight * 3.5)
    text("*", cellWidth * 3.5, lineHeight * 2.5)
    text("/", cellWidth * 3.5, lineHeight * 1.5)

}

function mouseClicked() {
  if (mouseY > lineHeight && mouseY <= height && mouseX >= 0 && mouseX <= width) {
    const clickedY = Math.floor((mouseY - lineHeight) / lineHeight);
    const clickedX = Math.floor(mouseX / cellWidth);
    
    let digit: number = -1;
    if (clickedY === 0) {
        if (clickedX === 0) { digit = 7; }
        else if (clickedX === 1) { digit = 8; }
        else if (clickedX === 2) { digit = 9; }
    } else if (clickedY === 1) {
        if (clickedX === 0) { digit = 4; }
        else if (clickedX === 1) { digit = 5; }
        else if (clickedX === 2) { digit = 6; }
    } else if (clickedY === 2) {
        if (clickedX === 0) { digit = 1; }
        else if (clickedX === 1) { digit = 2; }
        else if (clickedX === 2) { digit = 3; }
    } else if (clickedX !== 2) { digit = 0; }

    if (digit === -1) {
        num = 0;
    } else {
        const oldNum = num;
        num = num * 10 + digit;
        if (num >= 1000000000) {
            num = oldNum;
        }
    }
  }
}