


//Crie um namespace (espaço de nomes) para Mecanismo
const Engine = Matter.Engine;
//Crie um namespace (espaço de nomes) para Mundo
const World = Matter.World;
//Crie um namespace (espaço de nomes) para Corpos
const Bodies = Matter.Bodies;
//Crie um namespace (espaço de nomes) para Corpo
const Body = Matter.Body;

function setup() {
  createCanvas(400,400);
//crie o mecanismo
engine = Engine.create();
  //Adicione mundo ao mecanismo
  world = engine.world;

   
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01,
  }
  var ball_options2 = {
    restitution: 0.75,
    frictionAir:0.01,
  }
  ball2 =  Bodies.circle(150,20,20,ball_options2);
World.add(world,ball2);


   var ground_options ={
     isStatic: true 
   };
  
  
//crie o solo
ground = Bodies.rectangle(200,390,400,20,ground_options);
//adicione ao mundo
World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
  fill("grey");
  rect(ground.position.x,ground.position.y,400,20);


  
  
}

