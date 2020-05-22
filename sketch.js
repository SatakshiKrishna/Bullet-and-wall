var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
   speed = random(223,321);
   thickness = random(22,83);
   weight = random(30,52); 

  bullet =createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.ShapeColor = "white";
}

function draw() {
  background("black"); 
 
  if (hasCollided(bullet,wall)) {
  bullet.velocityX = 0;
  var Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (Damage>10) {
    wall.ShapeColor = color("pink");
  }

  if (Damage<10) {
    wall.ShapeColor = color("blue");
  } 
}

  drawSprites();
  }

function hasCollided(lbullet,lwall){

    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
      return true
    }
    return false;

  }
  