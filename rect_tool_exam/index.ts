
function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
    noFill
}

// <<< Add the function `mouseMoved` with the required code here
function mouseMoved(){
    background("black");
    fill("black")
    stroke("white")
    strokeWeight(3)
    rect(mouseX, mouseY, mouseX+200, mouseY+100)



}