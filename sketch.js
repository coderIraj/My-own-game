var wall1, wall2, wall3, wall4, wall5, wall6

function preload(){
spookyhouseformygame=loadImage("spooky house for my game.jpg")

}





function setup() {
  createCanvas(2000,800);

   wall1=createSprite(100, 560, 750,30)
  wall1.shapeColor="white"

  wall2=createSprite(800, 560, 400,30)
  wall2.shapeColor="white"
  
  wall3=createSprite(1350, 560, 450, 30)
  wall3.shapeColor="white"

  wall4=createSprite(180, 340, 750,30)
  wall4.shapeColor="white"

  wall5=createSprite(880, 340, 400, 30)
  wall5.shapeColor="white"

  wall6=createSprite(1430, 340, )
  
  
}

function draw() 
{
  background(spookyhouseformygame);

  drawSprites();
  
  


}




