var man;
var bad = [];
var bad2 = [];
var sceneNum = 0;
let timer = 22 
//finish up hit function https://www.youtube.com/watch?v=l0HoJHc-63Q&t=1027s
function setup() {
  createCanvas(640, 360);
  man = new Person();
  for (let i = 0; i < 100;   i++) {
    bad[i] = new obstacle();
  }
  for (let l = 0; l < 100;   l++) {
    bad2[l] = new obstacle2();
}
}


  
function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -5);
    man.applyForce(force);
  } else if (key == 's') {
    sceneNum++;

  }

  if (sceneNum > 2) {
    sceneNum = 0;
  }
}

function draw() {
  if (sceneNum === 0){
    scene0();
  } else if (sceneNum === 1) {
    scene1();
    fill(0,255,255);
    textSize(35);
    text(timer, 400, 50);
    
    if (frameCount % 60 == 0 && timer > 0) {
    timer --;
    
    }
    if (timer == 0) {
      sceneNum = 2;
    }

  } else if (sceneNum === 2) {
    scene2();
  }
    
}

function scene1() {
image(img,0,0,640,360);
translate(-man.pos.x + 100, 0);
  let gravity = createVector(0, 0.05)

  man.applyForce(gravity);
  man.update();
  man.display();
  man.edges();
  

  //Silly hard code or obstacle
  //fill(50, 30, 200);
  //rect(200, height - 50, 100, 100);

  
  
  for (let i = 0; i < 100; i++) {
    if (man.hits(bad[i])) {
      console.log("Game Over!");
      console.log(bad[i].pos.x);
    }
    //console.log(bad[i].pos.x);

    bad[i].show();
    bad[i].update();
  }

  for (let l = 0; l < 100; l++) {
    if (man.hits(bad2[l])) {
      console.log("Game Over!");
      console.log(bad2[l].pos.x);
    }
    //console.log(bad2[l].pos.x);

    bad2[l].show();
    bad2[l].update();
  }
}


function scene0() {
  background("grey");
  image(img2,0,0,640,360)
  textSize(50);
  fill(255,0,0);
  //stroke(100)
  textFont('Georgia');
  text("Space Game!!!", 150, 100);
  textSize(20);
  text("Press the space bar to jump", 150, 175);
  text("Collect as many points as you can", 150, 235);
  text("Press S to Start the game!", 150, 300);
}

function scene2() {
  image(img1,0,0,1000,600)
  fill(120,180,300);
  //text("Welcome to the black hole",200,300);
  fill(250,250,290);
  rect(300,400,300,400);
  translate(-man.pos.x + 100, 0);
  let gravity = createVector(0, 0.05)

  man.applyForce(gravity);
  man.update();
  man.display();
  man.edges();
  

  //Silly hard code or obstacle
  //fill(50, 30, 200);
  //rect(200, height - 50, 100, 100);

  
  
  for (let i = 0; i < 100; i++) {
    if (man.hits(bad[i])) {
      console.log("Game Over!");
      console.log(bad[i].pos.x);
    }
    //console.log(bad[i].pos.x);

    bad[i].show();
    bad[i].update();
  }

  for (let l = 0; l < 100; l++) {
    if (man.hits(bad2[l])) {
      console.log("Game Over!");
      console.log(bad2[l].pos.x);
    }
    //console.log(bad2[l].pos.x);

    bad2[l].show();
    bad2[l].update();

} 

function scene3() {
  if (key=="e") {
  background("yellow");
  fill(255, 255, 0);
  textSize(40);
  text("Game Over", 200, 150);
  fill(255,255,255);
  textSize("30");
  //text("^",50,290);
  //text("|",54,293);
  textSize(15)
  text("You went into the black hole and never came back out!", 150, 300);
  } } }
