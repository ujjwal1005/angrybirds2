const Engine = Matter.Engine ;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world ;
var pig1,pig2;
var box1,box2,ground;
var log;
var bird;
var backgroundImg;

function preload(){

  backgroundImg = loadImage("sprites/bg.png")
  

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world ;
  //creating object for box class
  box1= new Box(700,320,70,70);
  box2 = new Box(900,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);
  
  pig1 = new Pig(800,330);
  pig2 = new Pig(810, 220);
  
  log1 = new Log(810,260,PI/2);
  log2 = new Log(810,180,PI/2);
  log3 = new Log(760,120, PI/7);
  log4 = new Log(870,120, -PI/7);

  bird = new Bird(100,100);

  ground = new Ground(600,380);
 /* ball_options = 
  {
restitution : 1.00
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);*/
}

function draw() {
  background(backgroundImg);
  
  
Engine.update(engine);



 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 

 pig1.display();
 pig2.display();


 log1.display();
 log2.display();
 log3.display();
 log4.display();

 bird.display();

 ground.display();
 
}