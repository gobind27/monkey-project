var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
createCanvas(400,400)
monkey=createSprite(200,350,20,20);
monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.07
  ground=createSprite(200,385,850,30)
  ground.velocityX=-10
  bananaGroup=new Group();
  score=0
}


function draw() {
background("white")
  text("survival time "+score,300,100)
  score= score+Math.round(frameCount/60)
drawSprites();
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&&  monkey.y >= 329) {
        monkey.velocityY = -12;}
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  console.log(monkey.y)
  spawnBanana()
  spawnObstacles()
}
function spawnBanana(){
 if (frameCount % 80 === 0) {
   var banana= createSprite(400,340,20,20)
   banana.y=Math.round(random(300,310))
   banana.velocityX=-10
   banana.addImage(bananaImage)
   banana.scale=0.03
   banana.lifetime=45
   
   bananaGroup.add(banana)
   
 }

}
function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle= createSprite(400,360,20,20)
    obstacle.velocityX=-10
    obstacle.lifetime=45
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.05
  }
}