let moonY = 800;
let speed = 3;
let sunY = 300;

const sky = () => {
  let x1;
  let y1;
  let rStart;
  let x2;
  let y2;
  let rFinish;
  if (sunY <= 462) {
    x1 = width / 4;
    y1 = height / 2 + 200;
    rStart = 50;
    x2 = width / 4;
    y2 = height / 2;
    rFinish = 350
    color1 = "white";
    color2 = "blue";
    
  } else if (sunY > 462 && sunY < 562) {
    x1 = width / 4;
    y1 = height / 2 + 200;
    rStart = 50;
    x2 = width / 4;
    y2 = height / 2;
    rFinish = 350
    color1 = "pink";
    color2 = "orange";
  }
  else {
    x1 = width / 4 - width;
    y1 = height / 2 - height;
    rStart = 0;
    x2 = width / 4 - width;
    y2 = height / 2 - height;
    rFinish = 350
    color1 = "white";
    color2 = "black";
  }
  let gradient = drawingContext.createRadialGradient(
    x1,
    y1,
    rStart,
    x2,
    y2,
    rFinish, 
  );
  gradient.addColorStop(0, color(color1));
  gradient.addColorStop(1, color(color2));
  drawingContext.fillStyle = gradient;
  ellipse(width/2, height/2, 10000, 10000, 50);
};
const stars = () => {
  let size = random(10);
  fill(random(255, 200, 50));
  ellipse(random(width), random(height), size, size);
  ellipse(random(width), random(height), size, size);
  ellipse(random(width), random(height), size, size);
  ellipse(random(width), random(height), size, size);
  ellipse(random(width), random(height), size, size);
  ellipse(random(width), random(height), size, size);
};

const windows = (rectX, rectY, windowSize, shade, color) => {
  if (sunY < 550) {
    color = shade;
  }
  for (y = 10; y < 300; y += 30) {
    for (x = 5; x < 60; x += 20) {
      fill(color);
      rect(rectX + x, rectY + y, windowSize, windowSize);
    }
  }
  fill(shade);
};

const fields = () => {
  noStroke();
  fill(0, 50, 0);
  push()
  ellipse(width / 8, height, 800, 300);
  ellipse(width / 2, height, 600, 400);
  ellipse(width, height, 1100, 400);
  ellipse(width / 3, height, 1100, 400);
  pop();
};

const backgroundFields = () => {
  noStroke();
  fill(0, 30, 0);
  push()
  ellipse(width / 8.5, height / 2 + 350, 800, 400);
  ellipse(width / 2, height / 2 + 280, 800, 400);
  ellipse(width / 2 + 500, height / 2 + 280, 800, 400);
  pop()
};

const city = () => {
  noStroke();
  fill(30);
  rect(width / 8, height / 2, 60, 200);
  windows(width / 8, height / 2, 10, 30, "yellow");
  rect(width / 2 - 300, height / 2, 60, 200);
  windows(width / 2 - 300, height / 2, 10, 30, "white");
  rect(width / 2 - 460, height / 2 + 60, 80, 200);
  windows(width / 2 - 460, height / 2 + 60, 10, 30, "yellow");
  rect(width / 2 - 425, height / 2 + 30, 10, 30);

  fill(80);
  triangle(
    width / 4,
    height / 2 - 50,
    width / 3.5,
    height / 2,
    width / 3.5,
    height / 2 - 100
  );
  rect(width / 4, height / 2 - 50, 80, 200);
  windows(width / 4 + 10, height / 2 - 50, 10, 80, "orange");
  rect(width / 8 + 50, height / 2 + 80, 80, 200);
  windows(width / 8 + 70, height / 2 + 75, 10, 80, "cream");

  fill(100);
  push()
  rect(width / 4.5, height / 2, 80, 200);
  windows(width / 4.5 + 10, height / 2, 10, 100, 255);
  pop();
  rect(width / 3.2, height / 2 + 80, 80, 200);
  windows(width / 3.2 + 10, height / 2 + 80, 15, 100, 255);
  rect(width / 10, height / 2 + 90, 30, 100);
  windows(width / 10, height / 2 + 90, 0.5, 100, "yellow");
};

const moon = () => {
  fill(255);
  if (moonY <= height / 2 || moonY > 800 + 10) {
    speed = speed * -1;
  }
  ellipse(width / 2 + 300, moonY, 300, 300);
  moonY -= speed;
};

const sun = () => {
  fill("gold");
  ellipse(width / 4, sunY, 400, 400);
  sunY += speed;
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(35);
  noFill();
}

function draw() {
  background(80, 0, 200);
  sky();
  if (moonY < 650) {
    stars();
  }
  sun();
  moon();
  backgroundFields();
  city();
  fields();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};