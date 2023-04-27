//Arrow class
class Arrow {
	constructor(x, y, colour) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = 0;
		this.colour = colour;
	}

	//function to draw the arrow
	drawArrowVertex() {
		noStroke()
		fill(this.colour)
		push()
			translate(this.x, this.y)
			rotate(this.rotation);
			beginShape();
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

    rotateToMouse() {
		let dx;
        dx = mouseX - this.x;

        let dy;
        dy = mouseY - this.y;

        let angle = atan2(dy, dx)
        // console.log(angle)

		push()
		translate(this.x, this.y)
			rotate(angle)
			this.rotation = angle;
		pop()
    }

}