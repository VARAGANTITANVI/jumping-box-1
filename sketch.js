var music;
var movingbox, movingbox, box2, box3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(1300,600);
    //create 4 different surfaces
    movingbox = createSprite(600, 300, 50, 50);
    movingbox.shapeColor = "white";
    movingbox.debug ="true";
    movingbox.velocityX = -1;
    movingbox.velocityY =  1;   

    box1 = createSprite(200, 590, 200, 20);
    box1.shapeColor = "purple";

    box2 = createSprite(500, 590, 200, 20);
    box2.shapeColor ="red";

    box3 = createSprite(800, 590, 200, 20);
    box3.shapeColor = "blue";

    box4 = createSprite(1100, 590, 200, 20);
    box4.shapeColor = "black";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    movingbox.x = World.mouseX;
    movingbox.y = World.mouseY;

 function isTouching(movingbox,box2)
  {
    movingbox.shapeColor = "red";
    box2.shapeColor = "red";

    
  }  

 
  
    //add condition to check if box touching surface and make it box
    drawSprites();
}

function isTouching(movingbox,box2)
  {
    if
    (
      movingbox.x - box2.x < box2.width/2 + movingbox.width/2 &&
      box2.x - movingbox.x < box2.width/2 + movingbox.width/2 &&
      box2.y - movingbox.y < box2.height/2 +movingbox.height/2 &&
      movingbox.y - box2.y < movingbox.height/2 + box2.height/2
    )
    {
       return true;
    }
    else
    {
      return false;
    }
  }