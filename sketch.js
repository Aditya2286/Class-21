var box1,box2,box3,box4,squ1,squ2 ,movingRect;

function setup() {
  createCanvas(1400,600);
  box1 = createSprite(200, 400, 50, 80);
  box1.shapeColor = "green";

  box2= createSprite(400, 400, 50, 80);
  box2.shapeColor = "green";

  box3 = createSprite(600, 400, 50, 80);
  box3.shapeColor = "green";

  box4 = createSprite(800, 400, 50, 80);
  box4.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  squ1 = createSprite(200, 200, 50, 80);
  squ1.shapeColor = "purple";
  squ1.velocityX=1;

 squ2= createSprite(1200, 200, 50, 80);
  squ2.shapeColor = "purple";
  squ2.velocityX=-1;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
isTouching(movingRect,box2);
bounce(squ1,squ2);
  drawSprites();
}