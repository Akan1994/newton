class Chain{
    constructor(A , B){
        var options={
            bodyA:A,
            bodyB:B,
            length:20,
            stiffness:0.4
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);

    }

    display()
    {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        strokeWeight(4);
        line(posA.x , posA.y , posB.x , posB.y);
    }

}