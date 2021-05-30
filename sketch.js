var bgImg;  
var catImg1;
var mouseImg1;
var catImg2;
var mouseImg2;
var catImg3;
var mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat.addAnimation("catRunning", catImg2);


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(catImg1.x-mouseImg1.x < (cat.width  - mouseImg1.width/2) {
        cat.changeAnimation("catRunning");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === Left_Arrow){
    mouseImg1.addAnimation("mouseTeasing", mouseImg2);
    mouseImg1.changeAnimation("mouseTeasing");
    mouseImg1.frameDelay = 25;
    }
    if(keyCode === Right_Arrow){
        mouseImg1.addAnimation("mouseTeasing", mouseImg2);
        mouseImg1.changeAnimation("mouseTeasing");
        mouseImg1.frameDelay = 25;
    }
}
