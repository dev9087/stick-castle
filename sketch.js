const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world,bodies;
var box1,box2,triangle1,triangle2,box3,box4,box5,ground;


function setup() {
 var canvas= createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(400,390,500,10);}

function draw() {
  background(0); 
  Engine.update(engine);
  triangle(180,250,95,150,125,200);
  triangle(355,200,325,150,280,200);
  triangle(170,280,215,160,250,280);
rect(70,200,100,200);
 rect(50,100,100,300);
   rect(355,100,100,300);
   rect(300,200,20,250);
   rect(455,260,100,200);
   rect (270,150,20,250);
   rect(170,280,100,300);
  ground=new Ground(400,390,400,10);
  rect.display();
  rect.display();

  rect.display();
  rect.display();
  rect.display();
  ground.display();
}
