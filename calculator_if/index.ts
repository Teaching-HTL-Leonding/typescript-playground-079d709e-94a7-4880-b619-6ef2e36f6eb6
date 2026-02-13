const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(400, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");
    fill("white")
    rect(MARGIN_NUM, MARGIN_NUM, width - MARGIN_NUM * 2, lineHeight - MARGIN_NUM * 2)
    strokeWeight(3)
    
    for(let i = 1; i < 5; i++){
    line(0, lineHeight * i, width, lineHeight * i)
    }

    line(cellWidth, lineHeight, cellWidth, lineHeight * 4)
    line(cellWidth * 2, lineHeight, cellWidth * 2, height)
    
    fill("black")
    textSize(70)
    
    textAlign(CENTER, CENTER)
    text("0", cellWidth, lineHeight * 4.5)
    text("C", cellWidth * 2.5, lineHeight * 4.5)
    
    for(let i = 0.5; i < 4; i++){
    text(i + 0.5, cellWidth * i, lineHeight * 3.5)
    }
    for(let i = 0.5; i < 4; i++){
    text(i + 3.5, cellWidth * i, lineHeight * 2.5)
    }
    for(let i = 0.5; i < 4; i++){
    text(i + 6.5, cellWidth * i, lineHeight * 1.5)
    }


}

function mouseClicked() {
    
}
