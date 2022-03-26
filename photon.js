class Photon{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.vel = createVector(-c,0);

    }
    update(){
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);
       
    }


    show(){
        strokeWeight(4);
        stroke(255, 105, 180);
        point(this.pos.x, this.pos.y);
       
    }

}      