let arrowOne;

function setup() {
    createCanvas(500, 500)
    arrowOne = new Arrow(250,250);
}

function draw() {
    background(255)
    arrowOne.drawArrow();
    arrowOne.rotateToMouse();
}