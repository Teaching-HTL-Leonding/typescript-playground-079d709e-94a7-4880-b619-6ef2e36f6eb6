function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
    noFill
}

// <<< Add the function `mouseMoved` with the required code here
function mouseMoved() {
    const gridSize = 10
    const snap = 10
    const markerSize = 10

    const x = Math.round(mouseX / snap) * snap;
    const y = Math.round(mouseY / snap) * snap;

    const höhe = Math.round((100 - y) * 2)
    const breite = Math.round((200 - x) * 2)
    
    background("black");
    fill("black")
    stroke("white")
    strokeWeight(3)

    //rect(mouseX, mouseY, (200-mouseX)*2, (100-mouseY)*2)
    stroke("red")
    line(x, y, x, y + höhe)
    stroke("Yellow")
    line(x, y, x + breite, y)
    stroke("lightblue")
    line(x + breite, y + höhe, x + breite, y)
    stroke("lightgreen")
    line(x + breite, y + höhe, x, y + höhe)
    //Dirgonele
    stroke("white")
    strokeWeight(1)
    line(x, y, x + breite, y + höhe)
    line(x, y + höhe, x + breite, y)

    noStroke()
    fill("white")
    textAlign(LEFT);
    const area = Math.round((höhe) * (breite))
    text(`area: ${area}`, 5, height - 10);

    text(`  ${breite}`, x + (200 - x), y - 5);

    text(`  ${höhe}`, x - 30, y + (100 - y));
}
