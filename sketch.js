var spacejet, spacejetImage;
var ufo, ufoImage;
var background, backgroundImage;
var bullet, bulletImage;
var ufoGroup;

function preload (){
  spacejetImage = loadImage("Photos/Game Spacejet 2.png");
  ufoImage = loadImage("Photos/Game Alien.png");
  backgroundImage = loadImage("Photos/Space Background.jpg");
  bulletImage = loadImage("Photos/Game Bullet.png");  
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  spacejet = createSprite(width/2,height-120);
  spacejet.addImage (spacejetImage);
  spacejet.scale = 0.4;
  ufoGroup=new Group();
  bulletGroup=new Group();
}

function draw() {
  background(backgroundImage);
  if(keyDown("space")){
    var bullet = createSprite(spacejet.x,spacejet.y-150);
    bullet.addImage(bulletImage);
    bullet.scale = 0.2;
    bullet.velocityY = -25;
    bulletGroup.add(bullet);

  }
  spacejet.x=mouseX;
  bulletGroup.isTouching(ufoGroup), bulletHit();
  spawnChomu();
  drawSprites();
}

function spawnChomu(){
  if(frameCount%40===0){
  var x = Math.round(random(100,width-100));
  ufo = createSprite(x,height-650);
  ufo.addImage(ufoImage);
  ufo.scale = 0.4;
  ufoGroup.add(ufo);
  ufo.lifetime = 400;
}
}

function bulletHit(){
  
}





