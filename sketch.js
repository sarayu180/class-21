const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ground,topWall,leftWall,rightWall
let ball


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground = new Ground(200,390,400,20)
  topWall = new Ground(200,10,400,20)
  rightWall = new Ground(390,200,20,400)
  leftWall = new Ground(10,200,20,400)

  var ball_options = {
    resitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  botton1 = createImg("right.png")
  botton1.position(220,30)
  botton1.size(50,50)
  botton1.mouseClicked(hForce)

  botton2 = createImg("up.png")
  botton2.position(20,30)
  botton2.size(50,50)
  botton2.mouseClicked(vForce)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  topWall.show()
  rightWall.show()
  leftWall.show()

  ellipse(ball.position.x,ball.position.y,20)
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

