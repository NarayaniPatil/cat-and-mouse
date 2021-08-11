
var cat1,cat2,cat3,cat4
var m1,m2,m3,m4
var bg

function preload() {
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")
    m1=loadAnimation("images/mouse1.png")
    m2=loadAnimation("images/mouse2.png","images/mouse3.png")
    m4=loadAnimation("images/mouse4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    cat3=createSprite(900,600)
    cat3.addAnimation("cat",cat1)
    cat3.scale=0.2
    m3=createSprite(300,600)
    m3.addAnimation("mouse",m1)
    m3.scale=0.2

}

function draw() {

    background(bg);
//Write condition here to evalute if tom and jerry collide
if (cat3.x-m3.x<cat3.width/2-m3.width/2) {
    cat3.velocityX=0
    cat3.addAnimation("cli",cat4)
    cat3.x=300
    cat3.scale=0.2
    cat3.changeAnimation("cli")
    m3.addAnimation("mli",m4)
    m3.scale=0.2
    m3.changeAnimation("mli")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode===LEFT_ARROW) {
    cat3.velocityX=-5
    cat3.addAnimation("cr",cat2)
    cat3.changeAnimation("cr")  

    m3.addAnimation("m",m2)
    m3.changeAnimation("m")  
    
  }

}
