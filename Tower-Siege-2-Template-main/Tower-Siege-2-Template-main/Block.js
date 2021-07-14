class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("block.png");
      this.width = width;
      this.height = height;
      this.Visiblity= 255;
      World.add(world, this.body);
      
    }
    display(){
      var pos= this.body.position;
      var angle=this.body.angle;
      if(this.body.speed<3)
      {
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
      World.remove(world,this.body)
      push()
      this.Visiblity= this.Visiblity - 5;
      tint(255,this.Visiblity)      
      image(this.image,this.body.position.x,this.body.position.y,0,0)
      pop()
      }
      
      }
      
}
