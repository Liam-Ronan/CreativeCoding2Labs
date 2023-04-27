
class Ball {
    constructor(x, y, speedX, speedY, radius, colour) {
        this.x = x;
		this.y = y;
		this.speedX = speedX;
		this.speedY = speedY;
		this.radius = radius;
		this.colour = colour;
    }

    drawBall() {
        noStroke();
        fill(this.colour);
        ellipse(this.x, this.y, this.radius*2);
        
    }

    moveBall() {
        this.x += this.speedX;

        this.y += this.speedY;

        if((this.x > width) || (this.x < 0)){
            this.speedX = -this.speedX;
        }
        if((this.y > height )|| (this.y < 0)){
            this.speedY = -this.speedY;
        }
    }
}