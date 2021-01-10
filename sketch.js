const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var rope, ball, b1, b2,b3,b4,b5,b6;


function setup() {
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground  = new Ground(600,height,1200,20);
    b1 = new Box(600,750,70,70);
    b2 = new Box(600,650,70,70);
    b3 =  new Box(600,550,70,70);
    b4 = new Box(600,450,70,70);
    b5 = new Box(600,350,70,70);
    b6 = new Box(600,250,70,70);
    ball = new Ball(450,400,70,70);
    rope = new Rope(ball.body,{x:450,y:250});
}

function draw(){
background(0);
Engine.update(engine);
b1.display();

b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
ground.display();
rope.display();
ball.display();

}
function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   
}


//function mouseReleased(){
   // rope.fly();
    
//}
















