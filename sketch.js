let hook;
let gif1;
let backg;
let cursor;
let color;
let dvd;
let speed;
let xPos = 0;
let yPos = 0;
let direction = 2;
let distance = dist(mouseX, mouseY, 450, 500); 

function preload() {
  hook = createVideo('Hook Toy Commercial (Vintage VHS Commercial).mp4');
  backg = loadImage('background.jpeg');
  gif1 = loadImage('3673367_420a6.gif');
  gif2 = loadImage('gif2.gif');
  cursor = loadImage('cursor.gif');
  dvd = loadImage('download.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight + 100);
  hook.hide();
}

function draw() {
  background(mouseX, 3);
  image(backg, 0, 0, width/2, height);
  image(gif1, 450, 210, 300, 200);
  image(gif2, 450, 500, 290, 168);
  image(hook, 150, 240, 250, 250); 
  image(cursor, mouseX, mouseY, 100, 100);
  DVD();

}

function mouseClicked(){
hook.play();
}

function mouseReleased(){
  hook.stop();
}

function DVD() {

  image(dvd, xPos, yPos, 160, 100);
  
  xPos = xPos + direction;
  yPos = yPos + direction;

  if (xPos > width || yPos > height) {
    direction = -1;
  }
  if (xPos < 0 || yPos < 0) {
    direction = 1;
  }

 
}