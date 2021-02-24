
function preload() {
    //load the images here
    catSitting    = loadAnimation("cat1.png");
    catMoving     = loadAnimation("cat3.png","cat3.png","cat2.png");
    catSitting2   = loadAnimation("cat4.png");
    mouseStanding = loadAnimation("mouse2.png","mouse2.png","mouse3.png");
    mouseTouching = loadAnimation("mouse2.png","mouse2.png","mouse3.png");
    scene         = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    backg = createSprite(500,400);
    backg.addImage(scene);
//create tom and jerry sprites here
     
    cat = createSprite(800,740);
    cat.addAnimation("catty",catSitting);

    mouse = createSprite(100,740);
    mouse.addAnimation("mosey",mouseStanding);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.changeAnimation("catty",catSitting2);
        mouse.changeAnimation("mosey",mouseTouching);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left")){
    cat.x = cat.x - 5;
    cat.changeAnimation("catty",catMoving);
   }
}
