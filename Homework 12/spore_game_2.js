//character variables
var characterX = 100;
var characterY = 100;
//keycodes
var w = 87;
var a = 65;
var s = 83;
var d = 68;
//shape variables
var shapeX = 175;
var shapeY = 250;
var shapeX2 = 350;
var shapeY2 = 400;
var shapeXSpeed;
var shapeYSpeed;
//mouseClick shape
var mouseShapex;
var mouseShapey;
function setup()
{
    createCanvas(500,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw()
{
    background(120,45,78);
    //call character
    createCharacter();
    //call borders
    createBorders();
    //call enemy
    createEnemy();
    //mouse event
    mousePressed();
    creatCircle();
    //call movement
    characterMovement();
    //exit message
    fill(128)
    textSize(30);
    text("Exit",425,530)
    //check for win
    playerWin();
}
//create a character
function createCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,50);
}
function createBorders()
{
    // top border
    rect(0,0,500,30);
    // left border
    rect(0,30,30,600);
    // bottom border
    rect(475,30,30,450);
    // right border
    rect(0,575,500,30);
}
function characterMovement()
{
     //key controls
     if(keyIsDown(w))
     {
         characterY -= 10;   
     }
     if(keyIsDown(s))
     {
         characterY += 10;   
     }
     if(keyIsDown(a))
     {
         characterX -= 10;   
     }
     if(keyIsDown(d))
     {
         characterX += 10;   
     }
    }
     function playerWin()
     {
        if(characterX > width && characterY > width-50)
        {
            fill(0);
            stroke(5);
            textSize(50);
            text("You Win!", width/2-50, height/2-50);
        }
    }
        function createEnemy()
        {
            fill(130);
            circle(shapeX,shapeY,50);
            circle(shapeX2,shapeY2,60);
        shapeX += shapeXSpeed;
        shapeY += shapeYSpeed;
        shapeX2 += shapeXSpeed;
        shapeY2 += shapeYSpeed;
        if(shapeX > width)
        {
            shapeX = 0;
        }
        else if(shapeX < 0)
        {
            shapeX = width;
        }
        if(shapeY > height)
        {
            shapeY = 0;
        }
        else if(shapeY < 0)
        {
            shapeY = height;
        }
        if( shapeX2 > width)
        {
            shapeX2 = 0;
        }
        else if(shapeX2 < 0)
        {
            shapeX2 = width;
        }
        if(shapeY2 > height)
        {
            shapeY2 = 0;
        }
        else if(shapeY2 < 0)
        {
            shapeY2 = height
        }
    } 
        function creatCircle()
        {
            fill(120);
            circle(mouseShapex, mouseShapey,60);
        }
        function mousePressed()
{
    mouseShapex = mouseX;
    mouseShapey = mouseY;
    
}

        