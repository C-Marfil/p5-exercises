function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noFill();
}

function draw() {
background(80, 0, 200);
noStroke();
fill("darkgreen");
ellipse(width / 8, height, 800, 300);
ellipse(width / 2, height, 600, 400);
ellipse(width, height, 1100, 400);
ellipse(width / 3, height, 1100, 400);

}
