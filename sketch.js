
var movingrec,fixedrec;

function setup() {
  createCanvas(800,400);
  movingrec= createSprite(200,150,80,80);
  movingrec.shapeColor="blue";

  fixedrec=createSprite(180,200,80,80);
  fixedrec.shapeColor="blue";
}

function draw() {
  background("black");  
movingrec.x=mouseX;
movingrec.y=mouseY;


if (movingrec.x-fixedrec.x<movingrec.width/2+fixedrec.width/2
  && fixedrec.x-movingrec.x<movingrec.width/2+fixedrec.width/2
  && movingrec.y-fixedrec.y<movingrec.width/2+fixedrec.width/2
  &&fixedrec.y-movingrec.y<movingrec.width/2+fixedrec.width/2){
movingrec.shapeColor="green";
fixedrec.shapeColor="green";
}

else 
{
  movingrec.shapeColor="blue";
  fixedrec.shapeColor="blue";
    
}
  drawSprites();
}