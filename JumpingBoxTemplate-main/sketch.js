var canvas;
var music;

var box;

var surface;
var surface2;
var surface3;
var surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface = creatSprite(190,580,190,10);

surface.shapeColor = "red"

surface2 = creatSprite(390,580,190,10);

surface2.shapeColor = "green"

surface3 = creatSprite(580,580,190,10);

surface3.shapeColor = "blue"

surface4 = creatSprite(770,580,190,10);

surface4.shapeColor = "yellow"

    //create box sprite and give velocity

box= createSprite(random(20,750),100,100)

box.shapeColor = "white"

box.velocityX = 3
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    creteEdgeSprites();


    //add condition to check if box touching surface and make it box\
    if(surface.isTouching(box)){
        box.shapeColor = "red"
    }

    if(surface2.isTouching(box)){
        box.shapeColor = "green"
    }

    if(surface3.isTouching(box)){
        box.shapeColor = "blue"
    }

    if(surface4.isTouching(box)){
        box.shapeColor = "yellow"
    }
}
