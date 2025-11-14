const textAreaHeight: number = 50

function setup() {
    createCanvas(400, 200);
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







}