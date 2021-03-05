class Plinko {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, width, height, options); 
        this.width = width; 
        this.height = height; 
        World.add(world, this.body); 
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle; 

        push(); 
        translate(); 
        rotate(angle); 
        //imageMode(CENTER); 
        noStroke(); 
        fill(this.color); 
        ellipseMode(RADIUS); 
        ellipse(0, 0, this.r, this.r); 
        pop(); 
    }
}