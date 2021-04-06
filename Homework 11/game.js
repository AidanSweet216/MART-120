//character variables
var playerX = 100;
var playerY = 100;
var playerDiameter = 50;
//keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//possible shape x and y
var shapeX = 150;
var shapeY = 170;
var shapeX2 = 345;
var shapeY2 = 400;
var shapeXSpeed;
var shapeYSpeed;
//shape creation on mouse click
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600,800);
    //give shapes a random speed, they must go zooom
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function mousePressed()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function draw()
{
    background(220);
    //player
    fill(13,145,14)
    circle(playerX,playerY,playerDiameter);
    //exit message
    textSize(25);
    text("EXIT",width-50,height-50)

    //key controls
    if(keyIsDown(w))
    {
        playerY -= 10;   
    }
    if(keyIsDown(s))
    {
        playerY += 10;   
    }
    if(keyIsDown(a))
    {
        playerX -= 10;   
    }
    if(keyIsDown(d))
    {
        playerX += 10;   
    }
 
    //enemy
    fill(255, 204, 0);
    //enemy shape
    circle(shapeX,shapeY,20);
    circle(shapeX2,shapeY2,35);
    //enemy movement
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeXSpeed;
    shapeY2 += shapeYSpeed;
    //mouse shape
    rect(mouseShapeX,mouseShapeY,55,55)
    //is the shape out of bounds
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
    if(playerX > width && playerY > width)
    {
       
        fill(0);
        stroke(6);
        textSize(36);
        text("You Win!", width/2-50, height/2-50);
    }
    //mouse created character
    fill(224,14,255);
    rect(mouseShapeX,mouseShapeY,75,75);
    
}

