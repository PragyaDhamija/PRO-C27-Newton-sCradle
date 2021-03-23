class Rope {

    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX = offsetX;
      this.offsetY = offsetY ; 
      
        var options = {
        bodyA:body1,
        bodyB:body2 ,
        pointB:{x:this.offsetX, y:this.offsetY} 
       }

       this.Rope = Constraint.create(options);
       World.add(world,this.Rope);

    }

    display () {

        var pointA= this.Rope.bodyA.position;
        var pointB= this.Rope.bodyB.position;

        //stroke(0);
        strokeWeight (2)
        var A1X = pointA.x
        var A1Y = pointA.y
        
        var A2X = pointB.x+this.offsetX
        var A2Y = pointB.y+this.offsetY
        line (A1X,A1Y,A2X,A2Y);
        

    }
}

