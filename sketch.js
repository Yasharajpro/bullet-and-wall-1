var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1000,400);
  thickness=random(22,83);
  wall=createSprite(900, 200,thickness,200);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(50,180,30,20);
  bullet.shapeColor="white"
  bullet.velocityX=speed=random(223,321);
  weight=random(30,52);
 
}

function draw() {
  background("black"); 
  if(Collide(bullet,wall)){
    bullet.velocityX=0;
      var damage =0.5*speed*speed*weight/(thickness*thickness*thickness);
      if(damage>10){
        wall.shapeColor=color(255,0,0)
      }
      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
    }
  drawSprites();
}
function Collide(ob1,ob2){
    bulletRE=ob1.x+ob1.width;
    wallLE=ob2.x
  if(bulletRE>=wallLE){
    return true;
  }
 
   return false;
 

}