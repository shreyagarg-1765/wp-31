const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles=[];
var plinkos=[];
var divisions=[];
var divisionsHeight=300;







function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(400,690,800,20);


  for (var i=0; i<=width; i= i+80) {
    divisions.push(new Divisions(i,height- divisionsHeight/2,10,divisionsHeight))
  }

  for (var j=75 ;j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j=50 ;j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j=75 ;j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50 ;j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }
   Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(0); 
  drawSprites();

 // Engine.update(engine);
  ground.display() ;

  for (var n= 0; n< plinkos.length;n++){
    plinkos[n].display();

  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));

  }
  for (var j=0; j<particles.length; j++){
    particles[j].display();
  }

  for (var k=0; k < divisions.length; k++){
    divisions[k].display();
  }

}