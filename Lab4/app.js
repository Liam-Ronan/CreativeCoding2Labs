let arrows = [];
let colours = [];

function setup() {
    createCanvas(500,500);
    angleMode(DEGREES);
    for (let i = 0; i < 5; i++) {
        colours.push(color(random(0, 255), random(0, 255), random(0,255)));
        arrows.push(new ArrowUpdated(colours[i]))
    }
}

function draw() {
    background(0);
    arrows.forEach(arrow => {
        arrow.drawArrow();
        arrow.moveArrow();
    });
}