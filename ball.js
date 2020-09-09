class Ball{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.circle(x, y,20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
      display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
  