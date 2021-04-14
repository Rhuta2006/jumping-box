var canvas;
var music;

var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1=createSprite(100,600,180,20);
    surface1.shapeColor='red';

    surface2=createSprite(300,600,180,20);
    surface2.shapeColor='blue';

    surface3=createSprite(490,600,180,20);
    surface3.shapeColor='green';

    surface4=createSprite(680,600,180,20);
    surface4.shapeColor='yellow';
    

    box=createSprite(random(20,750),100,30,30);
    box.shapeColor='white';
    box.velocityX=5;
    box.velocityY=5;
    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
     box.bounceOff(edges);

     if(surface1.isTouching(box)&& box.bounceOff(surface1)){
         box.shapeColor='red';
         music.play();
     }
     if(surface2.isTouching(box)){
        box.shapeColor=rgb(255,128,0);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor='green';
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor='yellow';
    }



    //add condition to check if box touching surface and make it box
    drawSprites();
}
