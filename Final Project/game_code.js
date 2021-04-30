//character variable
var characterX = 400;
var characterY = 50;
//keycode
var w = 87;
var a = 65;
var s = 83;
var d = 68;
//enemy variables
var myXs = [];
var myYs = [];
var shapeXSpeed = [];
var shapeYSpeed = [];
var eLength = 150;
var eWidth = 20;

function setup()
{
    createCanvas(800,600);
    for (var i = 0; i < 50; i++) 
    {
    shapeXSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myXs[0] = 10;
    myYs[0] = 200;
    myXs[1] = 30;
    myYs[1] = 300;
    myXs[2] = 45;
    myYs[2] = 400;
    }
}

function draw()
{
   background(175,100,220);
   //call character
   createCharacter();
   //call movemant
   characterMovement();
   //call boarders
   createBorders();
   //create enemey
   createEnemy();
   //detect hit
   if(circle.collide(rect))
   {
    characterX = 0;
    characterY = 0;
   }
    playerWin();


}

function createCharacter()
{
    fill(20,75,200);
    circle(characterX,characterY,50);

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
    function createBorders()
{
    // top border
    rect(0,0,800,30);
    // left border
    rect(0,30,30,600);
    // bottom border
    rect(775,30,30,600);
    // right border
    rect(0,800,600,30);
}
function createEnemy()
{
    //first enemy
    fill(255,204,0);
    for(var i = 0; i < myXs.length; i++)
    {
        rect(myXs[i],myYs[i],eLength,eWidth);
        myXs[i] += shapeXSpeed[i];
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