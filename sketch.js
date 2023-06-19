const windows = (rectX, rectY, windowSize, shade) => {
  for(y = 10; y < rectY; y += 30) {
    for (x =5; x < 60; x += 20) {
      fill(255)
      rect(rectX + x, rectY + y, windowSize, windowSize);
    }
  }
  fill(shade);
};

const moon = () => {
fill(255);
ellipse(width/2 + 300, height/2, 300, 300);
};

const fields = () => {
  noStroke();
  fill(0, 50, 0);
  ellipse(width / 8, height, 800, 300);
  ellipse(width / 2, height, 600, 400);
  ellipse(width, height, 1100, 400);
  ellipse(width / 3, height, 1100, 400);
};

const backgroundFields = () => {
  noStroke();
  fill(0, 30, 0);
  ellipse(width/8.5, height/2 + 350, 800, 400);
  ellipse(width/2, height/2 + 280, 800, 400);
  ellipse(width/2 + 500, height/2 + 280, 800, 400);
}

const city = () => {
  noStroke();
  fill(30);
  rect(width /8, height / 2, 60, 200);
  windows(width/8, height/2, 10, 30);
  rect(width /2 - 300, height / 2, 60, 200);
  windows(width/2 - 300, height/2, 10, 30);
  rect(width /2 - 460, height / 2 + 60, 80, 200);
  windows(width/2 - 460, height/2 + 60, 10, 30);
  rect(width /2 - 425, height / 2 + 30, 10, 30);

  fill(80);
  triangle(width/4, height/ 2 - 50, width/3.5, height /2, width / 3.5, height/2 - 100);
  rect(width /4, height / 2 -50, 80, 200);
  windows(width/4 + 10, height/2 - 50, 10, 80);
  rect(width /8 + 50, height / 2 +80, 80, 200);
  windows(width/8 + 70, height/2 + 75, 5, 80);

  fill(100);
  rect(width /4.5, height / 2, 80, 200);
  windows(width/4.5 + 10, height/2, 10, 100);
  rect(width /3.2, height / 2 +80, 80, 200);
  windows(width/3.2 + 10, height/2 +80, 15, 100);
  rect(width /10, height / 2 +90, 30, 100);
  windows(width/10, height/2 +90, 2, 100);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noFill();
};

function draw() {
background(80, 0, 200);
moon();
backgroundFields();
city();
fields();
};




