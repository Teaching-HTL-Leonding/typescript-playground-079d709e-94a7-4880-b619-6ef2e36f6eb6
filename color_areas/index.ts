function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("green")
    rect(0, 0, width / 3, height)

    fill("red")
    rect(2*width/3 , 0, width / 3, height)

    fill("blue")
    rect(width/3, 0, width / 3, height)

    fill("black")
    rect(0, 0, width / 3, height)


}