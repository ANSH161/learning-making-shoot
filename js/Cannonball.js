class Cannonball{
    constructor (x,y) {
        var options = {
            isStatic: true,
            restitution:0.8,
            density:1.0,
            friction:1.0
        }
        this.radius = 40;
        this.cannonballimage = loadImage("assets/cannonball.png");
     this.body = Bodies.circle(x,y,this.radius,options);
     World.add(world,this.body)
     
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.cannonballimage,0,0,this.radius,this.radius)
        pop();

        



    }

    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setVelocity(this.body,{
          x:velocity.x,y:velocity.ys
        })
        Matter.Body.setStatic(this.body,false)
    }







}