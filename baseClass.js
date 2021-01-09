//Base is parent class

class Base{
    constructor(x,y,w,h,angle){
    var options = 
        {
        'restitution' : 0.5,
        'friction' : 1.0,
        'density' : 1.5
        }
   
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height= h;
    //its a variable in which image is loaded
    this.image = loadImage("sprites/base.png");
    
    World.add(world,this.body);
    }
    
    display(){
    //namespace/nick name
    var position = this.body.position;
    var angle = this.body.angle;

    push();
    translate(position.x,position.y);
    rotate(angle);
    imageMode(CENTER);
    //it is a function which displays images
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}