class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitiution': 0.0,
            'friction': 1.0,
            'density': 1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.dead = false;
        World.add(world, this.body);
    }
    display() {
        if (this.body.position.y < height + this.height / 2) {
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            World.remove(world, this.body);
            if (this.dead === false) { score++ }
            this.dead = true;

        }

    }

    /*score(){
    } is unnecessary so I didn't add it*/
}