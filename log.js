class Log extends Base{
    constructor(x,y,angle){
        
    super(x,y,250,25,angle);

    this.image = loadImage("sprites/wood2.png");

    Matter.Body.setAngle(this.body,angle)
    }
    
}