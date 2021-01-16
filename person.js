// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function preload() {
  img = loadImage('unnamed.jpg')
  img1 = loadImage('download.jpg')
  img2 = loadImage('https___www.history.com_.image_MTYyNzgxMzA3MDcwMzI2MzYw_moon-gettyimages-490413228-promo.jpg')
}
function Person() {
  
  this.display = function() {
//image(img,100,100,900,500);
noStroke();
    fill("yellow");
    rect(this.pos.x, this.pos.y, -30, 10);
    rect(this.pos.x, this.pos.y, 10, 30);
    rect(this.pos.x, this.pos.y, 10, -30);
    rect(this.pos.x, this.pos.y, 30, 10);
    fill("blue");
    ellipse(this.pos.x, this.pos.y, 35, 35);
    //fill("yellow");
    //ellipse(400, this.pos.y, 50, 55);
    fill(200,20,200);
    //rect(900,100,500,300);
    fill("grey");
    rect(400,250,600,250);
    rect(800,0,400,100);
    fill(255,255,255);
    text("Welcome to the black hole",400,200);
    
    fill("blue");
    text("Press E to win the game!",1000,200);

    
    fill(255,255,0);
     stroke(20,20,20);
    textSize(50)
    text(this.score,this.pos.x,35);

  }
  
  this.pos = createVector(50, height-10);
  this.vel = createVector(0.25, 0);
  this.acc = createVector(0,0);
  this.score= 0;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(10);
    this.acc.add(f);
  }

 this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  
  
  this.hits = function(obs) {
    
     if ((obs.pos.x >= this.pos.x && obs.pos.x <= (this.pos.x + 40)) &&
        (obs.pos.y >= this.pos.y && obs.pos.y <= (this.pos.y + 40))) {
        this.score=obs.val+this.score;
       obs.pos.y=400;
    }
     //collideRectRect(this.pos.x,this.pos.y,50,50, obs.pos.x,obs.pos.y,10,10);
  }

  this.edges = function() {
    if (this.pos.y > height - 21) {
      this.vel.y *= 0;
      this.pos.y = height - 21;
    } else if (this.pos.y < 0) {
      this.vel.y *=0;
      this.pos.y = 0;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
    if (key=="e") {
  //background("yellow");
background(0);
      fill(255, 255, 255);
  textSize(40);
  text("Game Over", 1350, 150);
  fill(255,255,255);
  textSize("30");
  //text("^",50,290);
  //text("|",54,293);
  textSize(15)
  text("You went into the black hole and never came back out!", 1350, 300); }
  }
}
