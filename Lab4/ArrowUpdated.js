//Arrow class
class ArrowUpdated {
	constructor( _colour) {
		this.velocity = createVector(random(-2, 2), random(-2, 2));
		//x and y properties of arrow
		this.pos = createVector(random(50, width - 50), random(50, height - 50))
		//rotation of arrow
		// this.rotation = _rotation;
		this.colour = _colour;
	}
	//function to draw the arrow using vertex instead of line
	drawArrow() {
		noStroke()
		fill(this.colour)
		push()
			translate(this.pos.x, this.pos.y)
			beginShape();
			rotate(this.velocity.heading() + 90);
				vertex(-50, 10);
				vertex(0, 10);
				vertex(0, -20);
				vertex(30, 0);
				vertex(0, 20);
				vertex(0, -10);
				vertex(-50, -10);
			endShape(CLOSE);
		pop()
	}

	//move arrow - same as for Ball class
	moveArrow(){
		this.pos.add(this.velocity);

		if(this.pos.x > width) {
            this.pos.x = 0;
        }
        if(this.pos.x < 0) {
            this.pos.x = width;
        }
        if(this.pos.y > height) {
            this.pos.y = 0;
        }
        if(this.pos.y < 0) {
            this.pos.y = height;
        }
	}

}