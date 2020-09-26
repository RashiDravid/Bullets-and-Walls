var bullet,wall;
var speed,weight;
var thickness;
var barrier1,barrier2;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  speed=random(223,321);
  weight=random(30,52);

 bullet = createSprite(50, 200, 40, 10);
 bullet.shapeColor = color(255,255,255);

 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor = color(80,80,80);

 barrier1 = createSprite(800,20,1600,20);
 barrier1.shapeColor = color(255,255,255);

 barrier2 = createSprite(800,380,1600,20);
 barrier2.shapeColor = color(255,255,255);
}

function draw() {
  background(0,0,0);
  bullet.velocityX=speed;  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damge=0.5*weight*speed*speed/(thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(225,0,0);
    
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,225,0);
  }
}
  hasCollided(bullet,wall);
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>=wallleftEdge)
  {
    return true;
  }
    return false;
}