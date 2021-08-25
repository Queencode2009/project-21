
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
var radius = 40;

function setup() {
	createCanvas(1000, 900);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	
	}

	//Create the Bodies Here.
    ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  groundObj=new Ground (w/2,670,w,20);
  leftSide = new Ground(1100,600,20,120);
  
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display();
  
 
}



