class triangleClass {
    // creat constructor function
    constructor(x1, y1, x2, y2, x3, y3, red, green, blue) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
  
    display() {
        fill(this.red, this.green, this.blue);
       triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3 );
      
    }
}
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