const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var engine,world,ground,ball;





function setup() {
  createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var apple={
   isStatic:true
 }
 ground=Bodies.rectangle(200,350,400,10,apple);
 World.add(world,ground);
 var lemon={
   restitution:1
 }

 ball=Bodies.circle(200,100,30,lemon);

 World.add(world,ball);
}

function draw() {
  background(0); 

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}