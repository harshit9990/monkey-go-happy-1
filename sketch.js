
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
monkey = createSprite(70,350,20,50);
monkey.addAnimation("Running",monkey_running);
monkey.scale=0.1;

  
ground = createSprite(400,385,900,10);
ground.velocityX=-4;  
ground.x=ground.width/2;
}


function draw() {
background(230);
if (ground.x < 0){
ground.x = ground.width/2;
}

if(keyDown("space")){
  monkey.velocityY=-12;
}  

  
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground);







  
  
  
  
  
spawnobstacle()  
spawnfruit()
drawSprites();
   
}
function spawnfruit(){
if(frameCount%60===0){
banana = createSprite(300,200,10,30);
banana.velocityX=-3;
banana.y=Math.round(random(100,300));   
banana.addImage("monkey",bananaImage);
banana.scale=0.1
monkey.depth=banana.depth;
}
}
function spawnobstacle(){
if(frameCount%100===0){
obstacle=createSprite(290,350,10,30);
obstacle.addImage("obstacle",obstaceImage);
obstacle.scale=0.15
obstacle.velocityX=-3;
}
}
