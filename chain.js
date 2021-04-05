class Chain {
    constructor(bodyA, bodyB,offsetX , offsetY) {
        this.offsetX = offsetX
            this.offsetY = offsetY

        var options = {
            
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y: this.offsetY},
            stiffness: 0.04,
            lenth: 10
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        fill('Blue')
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB);
    }
}