class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 390
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    displayshape(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            stroke(255,255,255);
            line(pointA.x, pointA.y-40, pointB.x, pointB.y);
            line(pointA.x, pointA.y-40, pointB.x, pointB.y);
            pop();
        }
    }
}
