function setup() {
    createCanvas(9000, 8500)
    colorMode(HSB)
    background(0, 100, 0)
    noStroke()
}

let color_hue: number = 0


function mouseClicked() {
    fill(color_hue, 100, 100)
    circle(mouseX, mouseY, 100)
    color_hue = color_hue + 5
    color_hue = color_hue % 360
    //console.log(color_hue)


}
