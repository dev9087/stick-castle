class Ground {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
    
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
   rectMode(CENTER);
    fill ("green");
    stroke ("brown");
strokeWeight(9);
    rect(pos.x,pos.y,this.Width,this.height);
}
};