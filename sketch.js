function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  
  for (let li = 0; li < 80; li++) { 
    stroke(li * 25);
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
}
