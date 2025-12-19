function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("lime");

    noStroke();
    fill("yellow")

    for (let y = 1; y * STRIPE_THICKNESS <= SIZE; y += 2) {
        rect(0, y * STRIPE_THICKNESS, width, STRIPE_THICKNESS)
    }
}