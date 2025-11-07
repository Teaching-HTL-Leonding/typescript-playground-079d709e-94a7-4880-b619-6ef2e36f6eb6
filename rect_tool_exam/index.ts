
function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
    noFill
}

// <<< Add the function `mouseMoved` with the required code here
function mouseMoved(){
    const gridSize = 20;

    let diameterX = Math.abs((mouseX - width/2)*2)
    diameterX = Math.round(diameterX / gridSize)*gridSize
    let diameterY = Math.abs ((mouseY - height/2)*2)
    diameterY = Math.round (diameterY / gridSize)*gridSize

    background("black");
    fill("black")
    stroke("white")
    strokeWeight(3)
    rect(diameterX, diameterY, (200-mouseX)*2, (100-mouseY)*2)



    textAlign(LEFT);
    const area = Math.round(diameterX / 2 * diameterY / 2 * Math.PI);
    text(`area: ${area}`, 5, height - 10);

}