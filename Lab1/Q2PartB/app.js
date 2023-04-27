let arrow;

function setup() {
    createCanvas(500, 500);
    background(0);
    arrow = new Arrow(250,250, 220);
}

function draw() {
    background(0)
    arrow.drawArrow();
    arrow.rotateToCorner();
}