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
    circle(250,150,175);

    //eyes
    strokeWeight(10);
    fill(0);
    point(200,120);
    point(285,120);

    //mouth
    ellipse(245, 150, 45, 10)

    //arms
    strokeWeight(10);
    line(130,175,175,250);
    line(325,250,360,175);

    // body
    fill(10, 24, 120);
    rect(200,250,100,175);

    //legs
    rect(200,425,15,75);
    rect(285,425,15,75);

    fill(120);
    textSize(22);
    text("Aidan Sweet",350,500)
}