var headX = 250;
var headY = 150;
var headDirection = 5;
var leftEyeX = 200;
var rightEyeX = 285;
var eyeY = 120;
var eyeDirection = 1;
var bodyY = 250;
var bodyX = 200;
var bodyDirection = 10;
var leftLegX = 200;
var rightLegX = 285
var legY = 425;
var legDirection = 8;
var size = 24;
var count = 0;
var sizeDirection = 1;
function setup()
{
    createCanvas(500,600);
}
function draw()
{
    background(120,45,78);
    textSize(22);
    text("Surprise!",10,80)

    
    //head
    fill('#fae')
    circle(headX,headY,175);
    if(headX >=500 || headX <= 0)
    {
        headDirection *= -1;
    }
    headX += headDirection;


    //eyes
    strokeWeight(10);
    fill(0);
    point(leftEyeX,eyeY);
    if(eyeY >= 250 || eyeY <=0)
    {
        eyeDirection *= -1;
    }
    eyeY += eyeDirection;
    point(rightEyeX,eyeY);


    //mouth
    ellipse(245, 150, 45, 10)

    //arms
    strokeWeight(10);
    line(130,175,175,250);
    line(325,250,360,175);

    // body
    fill(10, 24, 120);
    rect(bodyX,bodyY,100,175);
    if(bodyX >= 350 || bodyX <= 0)
    {
        bodyDirection *= -1;
    }
    bodyX += bodyDirection;

    //legs
    rect(leftLegX,legY,15,75);
    if( leftLegX && rightLegX >= 500 || leftLegX && rightLegX <= 0)
    {
        legDirection *= -1;
    }
    if( legY >= 600 || legY <= -1)
    {
        legDirection *= -1;
    }
    rightLegX += legDirection;
    leftLegX += legDirection;
    legY += legDirection;
    rect(rightLegX,legY,15,75);

    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Aidan Sweet",350,500)
}