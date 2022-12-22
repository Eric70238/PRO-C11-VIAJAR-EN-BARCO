var sea, seaImg;
var ship, shipImg;


function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  ship = createSprite(200,200);
  sea.addImage(seaImg);
  ship.addAnimation(shipImg);
  sea.scale = 0.3;
}

function draw() {
  background("blue");
 if (sea.x <0){
  sea.x=sea.width/8;
 }
 sea.velocityX=4;
 drawSprites();
}