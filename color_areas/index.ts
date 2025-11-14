const textAreaHeight: number = 50

function setup() {
    createCanvas(500, 300);
    background("black");
    noStroke();

    fill("red")
    rect(0, 0, width / 3, height)

    fill("blue")
    rect(2*width/3 , 0, width / 3, height)

    fill("green")
    rect(width/3, 0, width / 3, height)

    fill("black")
    rect(0, height-textAreaHeight, width, textAreaHeight)
}

function mouseClicked(){
    fill("black")
    rect(0, height - 50, width, 50)

    noStroke()
    fill("white")
    textSize(30)
    textStyle(BOLD)
    textAlign(CENTER, CENTER)

    let message: string

    if (mouseX < width / 3) {
        message = "Red"
    } else if (mouseX < width / 3 * 2) {
        message = "Green"
    } else {
        message = "Blue"
    }

    text(message, width / 2, height - textAreaHeight / 2)
}