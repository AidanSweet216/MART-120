

//character variables
var characterX = 100;
var characterY = 100;
//keycodes
var w = 87;
var a = 65;
var s = 83;
var d = 68;
//shape variables
var myXs = [];
var myYs = [];
var myDiameters = [];
var shapeXSpeed = [];
var shapeYSpeed = [];
//mouseClick shape
var mouseShapex;
var mouseShapey;
//class shapes
var triangleArray = [];
function setup()
{
    createCanvas(500,600);
    
    //create triangle
    // send in 9 arguments into the constructor
    for(var i = 0; i < 10; i++)
    {
    
        triangleArray.push(new triangleClass(random(100), random(100), random(100), random(100), random(100), random(100), random(255), random(255), random(255)));
    }
    
    for (var i = 0; i < 50; i++) 
    {
    shapeXSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myXs[0] = 200;
    myXs[1] = 300;
    myXs[2] = 150;
    myXs[3] = 350;
    myXs[4] = 400;
    myYs[0] = 250;
    myYs[1] = 350;
    myYs[2] = 200;
    myYs[3] = 400;
    myYs[4] = 500;  
    myDiameters[1] = 75;
    myDiameters[0] = 50;
    myDiameters[2] = 45;
    myDiameters[3] = 60;
    myDiameters[4] = 35;
    }
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
    creatCircle();
    //call movement
    characterMovement();
    //exit message
    fill(128)
    textSize(30);
    text("Exit",425,530)
    //check for win
    playerWin();
    
    // draw the triangle from the object
    for(var i = 0; i <triangleArray.length; i++)
    {
       triangleArray[i].display();
    }
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
            for(var i = 0; i < myXs.length; i++)
            {
                circle(myXs[i],myYs[i],myDiameters[i]);
                myXs[i] += shapeXSpeed[i];
                myYs[i] += shapeXSpeed[i];
                if(myXs[i] > width)
                {
                    myXs[i] = 0;
                }
                else if(myXs[i] < 0)
                {
                    myXs[i] = width;
                }
                if(myYs[i] > height)
                {
                    myYs[i] = 0;
                }
                else if(myYs[i] < 0)
                {
                    myYs[i] = height;
                }
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
