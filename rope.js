class rope{
	constructor(body1,body2,pointA,pointB){
		this.pointA=pointA;
		this.pointB=pointB;
	 
	 
     var options={
		 bodyA:body1,
		 bodyB:body2,
         ponitB:{x:this.pointA,y:this.pointB}

		}
		con = Matter.Constraint.create({
			pointA:{x:200,y:20},
			bodyB:rope1,
			pointB:{x:0,y:0},
			length:100,
			stiffness:0.1
		  });
	
		World.add(world,con);
		var options={
			bodyA:rope2,
			//pointA:{x:0,y:0},
			bodyB:rope1,
			//pointB:{x:0,y:0},
			lenght:100,
  stiffness:0.1
  
		}
  
  
  
	 }

 //create display() here 
display()

{

var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);
}



	}


    

