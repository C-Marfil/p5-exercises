let t;
let increment = 0.001; 
let starX = 0;
let starY = 0;
let starSize = 7;
let starSpeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  strokeWeight(2);
  stroke(255);
  noFill();
  t = 1;
}

function draw() {
  background(0, 16);
  
  for (let li = 0; li < 80; li++) { 
    stroke(li * 3);
    strokeWeight(100 - li);
    line(0 + li * 50,0 + li * 5,400 - li * 50,400 + li * 50);
  }
  
  for (let i = 0; i < 255; i++) {
    noStroke();
    fill(i);
    circle(200, 200, 300-i);
  }
  
  for (let t = 0; t < 255; t++) {
    noStroke();
    fill(255 - t, 255 - t * 3, 0);
    triangle(300 - t * 75 , 300 - t, 600 + t, 600 + t, 600, 650 + t);
  }

  makeSparkle();
  makeCircle(4, 50, 600);
  makeCircle(0, 200, 200);
  makeCircle(100, 200, 1);
  shootingStar();

  function shootingStar() {
    circle(starX, starY, starSize);
    starX += 1;
    starY += 1;
  }

  function makeSparkle() {
    stroke(255);
    noFill();
    strokeWeight(2);
    circle(random(width), random(height), random(200));

  }

  function makeCircle(xPos, yPos, circleSize) { 
    stroke(255);
    strokeWeight(22);
    noFill();
    let x = width * noise(t + xPos);
    let y = height * noise(t + yPos);
    let size = width * noise(t + circleSize);
  
    ellipse(x, y, size, size);
  
    t += increment;
  }
}
