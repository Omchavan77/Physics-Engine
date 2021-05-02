const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ground
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,options)
  World.add(world,ground)
  console.log(ground)
  var balloptions={
    restitution:2
  }
  ball=Bodies.circle(100,200,50,balloptions)
  World.add(world,ball)


}

function draw() {
  background(0,0,0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)  
  ellipseMode(RADIUS)
  circle(ball.position.x,ball.position.y,50)
  drawSprites();
}