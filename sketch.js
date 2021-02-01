const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
 
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(displayWidth/2,displayHeight/2, displayWidth,displayHeight)



    pin1 = new Pin(500,500, 50,50);
        
    
}

function draw(){
    background("white");
    Engine.update(engine);
   
    
    
    ground.display();
    

    pin1.display();
    
    console.log(pin1.x)
}
