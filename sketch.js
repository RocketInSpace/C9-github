let box
let edges
function setup() {
edges = createEdgeSprites();
box = createSprite(200,200,20,20);
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  box.bounceOff(edges)
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 2
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 2
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y - 2
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y + 2
  }
  drawSprites();
}




