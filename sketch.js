
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var support , ball , chain1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	support = new String(400 , 400 , 400 , 20);
	ball = new Ball(400 , 600 );
	chain1 = new Chain(support.body , ball.body);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  support.display();
  chain1.display();
  drawSprites();
 
}



