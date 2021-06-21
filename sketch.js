var ship, ship_sailing;
var edges;
var sea;
var sea_img;

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
  sea_img = loadImage("sea.png");
}

function setup(){
  createCanvas(700,400)
 sea = createSprite(100,20,100,100);
 sea.addImage(sea_img);

 ship = createSprite(200,200,50,50)
 ship.addAnimation("Sailing", ship_sailing);
 ship.scale = 0.3;
 edges= createEdgeSprites();
}

function draw(){
  background("blue")
  sea.velocityX = -2 
 
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 
  drawSprites();

} 