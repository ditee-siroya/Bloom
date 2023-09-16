let angle = 0;
let r,g,b;

function setup() {
  createCanvas(800, 450);
  background(92, 64, 51);
  fill(255, 232, 124);
  rect(20, 20, 950, 610);
  stroke(0);
  fill(102);
}

function draw() {
     r= random(128, 255);
      g= 0;
      b= random(0, 255);
      stroke(r,g,b)
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) 
  { 
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75)
    {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(r, g, b);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
       fill(0);
    ellipse(mouseX, mouseY, 2, 2);
  }

noFill();
stroke(0);
line(200, 400, 300, 400);
bezier(200,400, 300, 450, 50, 550, 200, 600);
bezier(200, 600, 225, 610, 275, 610, 300, 600);
bezier(300, 400, 200, 450, 450, 550, 300, 600);

line(450, 300, 550, 300);
bezier(450,300, 550, 500, 400, 500, 450, 575);
bezier(450, 575, 475, 610, 525, 610, 550, 575);
bezier(550, 300, 450, 500, 600, 500, 550, 575);

line(700, 450, 850, 450);
bezier(700,450, 750, 500, 600, 525, 700, 600);
bezier(700, 600, 725, 610, 825, 610, 850, 600);
bezier(850, 450, 800, 500, 950, 525, 850, 600);

}
