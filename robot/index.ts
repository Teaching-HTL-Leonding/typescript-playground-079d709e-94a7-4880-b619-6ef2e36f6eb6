function setup() {
    createCanvas(5000,5000)
    background("lightgrey")

    // Head
    fill("grey")
    rect(100,200,400,400)

    // Eyes
    fill("black")
    circle(180,330,80) // Left eye
    circle(420,330,80) // Right eye

    // Antenne
    strokeWeight(2)
    line(300,100,300,200)

    fill("white")
    circle(300,100,50)

    // Mund
    rect(200,450,200,50)
}
