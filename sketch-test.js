let t;
let increment = 0.001; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  stroke(255);
  noFill();
  t = 0;
}

function draw() {
  background(0, 15);

  // TODO: Call the makeCircle() function with 4 for xPos, 50 for yPos and 600 for circleSize
  makeCircle(4, 50, 600);

  // TODO: Call the makeCircle() function with 0 for xPos, 200 for yPos and 200 for circleSize
  makeCircle(0, 200, 200);

  // TODO: Call the makeCircle() function with 100 for xPos, 200 for yPos and 1 for circleSize
  makeCircle(100, 200, 1);
}

function makeCircle(xPos, yPos, circleSize) { 
  let x = width * noise(t + xPos);
  let y = height * noise(t + yPos);
  let size = width * noise(t + circleSize);

  ellipse(x, y, size, size);

  t += increment;
}