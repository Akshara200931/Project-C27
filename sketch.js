const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new roof(400,20,550,20);
	ball1= new Ball(140,400,50);
	ball2= new Ball(220,400,50);
	ball3= new Ball(300,400,50);
	ball4= new Ball(380,400,50);
	ball5= new Ball(460,400,50);

	

	rope1= new Rope(ball1.body, {x: 140, y: 20});
	rope2= new Rope(ball2.body, {x: 220, y: 20});
	rope3= new Rope(ball3.body, {x: 300, y: 20});
	rope4= new Rope(ball4.body, {x: 380, y: 20});
	rope5= new Rope(ball5.body, {x: 460, y: 20});

	Engine.run(engine);

	
}


function draw() {
	rectMode(CENTER);
	background("grey");
	

	Engine.update(engine);
	
	roof1.displayshape();
	ball1.displayshape();
	ball2.displayshape();
	ball3.displayshape();
	ball4.displayshape();
	ball5.displayshape();
	rope1.displayshape();
	rope2.displayshape();
	rope3.displayshape();
	rope4.displayshape();
	rope5.displayshape();

	drawSprites();
 
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-300, y:0})
	}
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:300, y:0})
	}
}


