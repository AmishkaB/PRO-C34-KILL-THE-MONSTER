class Hero {
  //----ONLY X AND Y , WIDTH AND HEIGHT IS FIXED AT 50
    constructor(x, y) {
      var options = {
     
        'density':1,
        'frictionAir': 0.005,
        
      };
      this.image=loadImage('hero.png')
      this.body = Bodies.circle(x, y, 50, options);
      this.r = 50;

      World.add(myWorld, this.body);
    };
    display(){
      //====CHANGING POSITION WITH MOUSE
      var pos = this.body.position;
    //  pos.x = mouseX;
      //pos.y = mouseY;

      var angle = this.body.angle;
      angleMode(RADIANS)
      push();
      translate(pos.x, pos.y);
      //rotate(angle);


    
      
      imageMode(CENTER)
      image(this.image,0, 0, this.r*5, this.r*5);
      pop();
    };
  };
  