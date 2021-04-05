var roof1,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof (400,30,500,20);

	bobObject1 = new Bob (600,400,50);
	bobObject2 = new Bob (500,400,50);
	bobObject3 = new Bob (400,400,50);
	bobObject4 = new Bob (300,400,50);
	bobObject5 = new Bob (200,400,50);

	rope1 = new Chain (bobObject1.body, roof1.body-50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display();

  rope1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



