class triangleClass2 {
    constructor(x4,y4,x5,y5,x6,y6,red,green,blue) {
        this.x4= x4;
        this.y4 = y4;
        this.x5 = x5;
        this.y5 = y5;
        this.x6 = x6;
        this.y6 = y6;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    display2() {
        fill(this.red,this.green.this.blue);
        triangle(this.x4,this.y4,this.x5,this.y5,this.x6,this.y6);
    }
}