
let balls = []
let colours = []

function setup() {
    createCanvas(500, 500);

    let xSpeed = random(-5, 5);
    let ySpeed = random(-5, 5);

    for(let i = 0; i < 10; i++) {
        colours.push(color(random(0, 255), random(0, 255), random(0,255)));
        balls.push(new Ball(random(0,500), random(0,500), xSpeed, ySpeed, 10, colours[i]));
    }
} 

function draw() {
    background(0);
    balls.forEach(ball => {
        ball.drawBall();
        ball.moveBall()
    });
}