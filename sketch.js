
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var hammer;
var plane;
var stone;
var rubber;

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	hammer= new Hammer(10,100);

	plane= new Plane(600,height,1200,50); 

	stone = new Stone(700,320,50,50);

	rubber = new Rubber(900,450,70)
}


function draw() {
  
  background("skyblue");

  Engine.update(engine);
  
  hammer.display();

  plane.display();
 
  stone.display();

  rubber.display();
 
}