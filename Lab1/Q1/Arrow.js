//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
	}
	//function to draw the arrow
	drawArrow() {
		stroke(255)
		push();
			//translate from the top left corner to x and y of object
			translate(this.x, this.y);
			//rotate by rotation value of object
			rotate(this.rotation);
			line(-50, -25, 0, -25);
			line(0, -25, 0, -50);
			line(0, -50, 50, 0);
			line(50, 0, 0, 50);
			line(0, 50, 0, 25);
			line(0, 25, -50, 25);
			line(-50, 25, -50, -25);
		pop();
		
	}

    rotateToMouse() {
		let dx;
        dx = mouseX - this.x;

        let dy;
        dy = mouseY - this.y;

        let angle = atan2(dy, dx)
        // console.log(angle)

        rotate(tan(angle))
    
        this.rotation = angle;
    }

}