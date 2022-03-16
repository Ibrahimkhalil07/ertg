var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombieGroup
var heart1, heart2, heart3, heart1Img, heart2Img, heart3Img;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
heart1Img = loadImage("assets/heart_1.png")
heart2Img = loadImage("assets/heart_2.png")
heart3Img = loadImage("assets/heart_3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = .5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
heart1=createSprite(displayWidth-150,40,20,20)
heart1.addImage("heart1",heart1Img);
heart1.visible=false;
heart1.scale = 0.4

heart2=createSprite(displayWidth-100,40,20,20)
heart2.addImage("heart2",heart2Img);
heart2.visible=false;
heart2.scale = 0.4

heart3=createSprite(displayWidth-150,40,20,20)
heart3.addImage("heart3",heart3Img);

heart3.scale = 0.4

zombieGroup=new Group();
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("W")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("S")||touches.length>0){
 player.y = player.y+30
}
 if(keyDown("A")||touches.length>0){
  player.x = player.x-30
 }
  if(keyDown("D")||touches.length>0){
    player.x = player.x +30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if (zombieGroup.isTouching(player)){
  for(var i=0;1<zombieGroup.length; i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy();
      
    }
  }
}
enemy();
drawSprites();

}
function mouseclicked()
{ 
  player.addImage(shooter_shooting)

}

function enemy(){
if (frameCount%60===0){
  zombie = createSprite(random(2000,1100),random(100,500),40,40);
  zombie.addImage(zombieImg)
  zombie.scale = .15
  zombie.debug = true
  zombie.setCollider("rectangle",0,0,400,400)
  zombie.velocityX = -7
  zombie.lifetime = 400
  zombieGroup.add(zombie)
}


}