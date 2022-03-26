class Blackhole{
    constructor(x,y,m){
        this.pos = createVector(x,y);
        this.mass = m;
        this.rs = 2 * G * this.mass / (c*c);
    }
    show(){
        fill(0, 0, 0);
        noStroke(10);
        circle(this.pos.x,this.pos.y,this.rs);

        noFill(255);
        stroke(187,155,4);
        strokeWeight(31);
        circle(this.pos.x,this.pos.y,this.rs*6);

        stroke(170,2,24);
        strokeWeight(31);
        circle(this.pos.x,this.pos.y,this.rs*3);


    }



}