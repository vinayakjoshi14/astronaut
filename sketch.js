var astronaut;
var bg,sleep,brush,gym,eat,bath,move;

function preload() {
bg=loadImage("/images/iss.png");
sleep=loadImage("images/sleep.png");
brush=loadImage("images/brush.png");
gym=loadAnimation("images/gym1.png","images/gym2.png","images/gmy12.png");
eat=loadAnimation("images/eat1.png","images/eat2","images/drink1.png");
bath=loadAnimation("images/bath1.png","images/bath2.png");
move=loadAnimation("images/move.png","images/move1.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut=createSprite(300,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw(){ 
  background(bg);  
  drawSprites()

  textSize(20);
  fill("white")
  text("instructions",20,35); 
textSize(15);
text("Up Arrow = Brushing",20,55);
text("Down Arrow=Gyming",20,70);
text("Left Arrow= Eating",20,85);
text("right Arrow = Bathing",20,100);
text("m key= Moving",);

edges=createEdgeSprite();
astronaut.bounceOff(edges);

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.VelocityX=0;
  astronaut.VelocityY=0;
  
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=350;
    astronaut.VelocityX=0;
    astronaut.VelocityY=0;
    
    }
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.cha0.geAnimation("eating");
      astronaut.y=350;
      astronaut.x=150;
      astronaut.VelocityX=0.5;
      astronaut.VelocityY=0.5;
      
      }
      if(keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("bathing",bath);
        astronaut.changeAnimation("bathing");
         astronaut.VelocityX=0;
        astronaut.VelocityY=0;
        
        }
        if(keyDown("UP_ARROW")){
          astronaut.addAnimation("brushing",brush);
          astronaut.changeAnimation("brushing");
          astronaut.y=350;
          astronaut.VelocityX=0;
          astronaut.VelocityY=0;
          
          }
if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  
  astronaut.VelocityX=1;
  astronaut.VelocityY=1;
  
  }
            
                  



}