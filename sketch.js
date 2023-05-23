var ground;
var trackImage;
var car,carImage;

function preload(){
  trackImage=loadImage("track2.png");
  carImage=loadImage("sf90car.png");


}

function setup(){
  createCanvas(windowWidth,windowHeight);ground = createSprite(200,180,400,20);
  
  ground = createSprite(200,180,400,20);
  ground.addImage("track2",trackImage);
  ground.x = ground.width /2;
  ground.scale=3
  ground.velocityX=-2

  car=createSprite(100,height/2,40,40)
  car.addImage("sf90car",carImage)


}

function draw(){
  background("blue");

  if (ground.x<200)
    ground.x=ground.width/2
    
  drawSprites();

}