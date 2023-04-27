
let arrows = [];
let colours = [];

function setup() {
    createCanvas(500, 500);
    for(let i = 0; i < 8; i++) {
        colours.push(color(random(255), random(255), random(255)));
        arrows.push(new Arrow(random(50,450), random(50,450), colours[i]))
    }
    
}

function draw() {
    background(0)
    arrows.forEach(arrow => {
        arrow.drawArrowVertex();
        arrow.rotateToMouse()
    });
}