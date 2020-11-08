class Rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);

        }

        attach(body){
            this.sling.bodyA = body;
        }
        
        fly(){
            this.sling.bodyA = null;
        }

        display(){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();

            if(this.sling.bodyA){
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
            pop();
            }

        
    }


