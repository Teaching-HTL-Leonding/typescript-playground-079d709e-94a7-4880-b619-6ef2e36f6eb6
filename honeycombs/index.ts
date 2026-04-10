function setup() {
    createCanvas(450, 370);   // create a 450×370 px drawing surface
    background("black");      // fill the canvas with black
    stroke("yellow");         // all future lines will be yellow
    // (no fill() call → shapes are outlines only)

    // Move the coordinate origin 10 px right and 10 px down.
    // Every subsequent drawing call is now relative to (10, 10),
    // giving us a small margin around the hive.

    // Draw a single hexagon using six line() calls.
    //
    // Vertex layout (pixel coordinates, origin = top-left of bounding box):
    //
    //          (20,0) ──────── (45,0)
    //         /                      \
    //      (0,25)                  (65,25)
    //         \                      /
    //          (20,50) ──────── (45,50)
    //
    // Each line() call: line(x1, y1, x2, y2)
    // <<< ADD YOUR CODE HERE >>>
    drawHoneycomb()
}
function drawHoneycomb() {
    for (let i = 0; i < 7; i++) {
        push()
        translate(10, 10);
        push()
        for (let i = 0; i < 5; i++) {
            drawHexagon()
            translate(90, 0)
        }
        pop()
        translate(45, 25)
        for (let i = 0; i < 4; i++) {
                drawHexagon()
                translate(90, 0)
        }
        pop()
        translate(0, 50)
    }
}

function drawHexagon() {
    line(20, 0, 45, 0)
    line(45, 0, 65, 25)
    line(65, 25, 45, 50)
    line(45, 50, 20, 50)
    line(20, 50, 0, 25)
    line(0, 25, 20, 0)
}
