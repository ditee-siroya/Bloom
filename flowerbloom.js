let angle = 0;
let r,g,b;

function setup() {
  createCanvas(800, 450);
  fill(255);
  rect(0, 0, 800, 450);
  fill(214, 236, 239);
  noStroke();
  rect(20, 20, 760, 410);
  stroke(100);
  fill(100);
  textSize(20);
  text("Click to add flowers to the vases" , 30 , 50);
  
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
  strokeWeight(2);
line(70, 250, 150, 250);
bezier(70, 250, 120, 275, 35, 325, 70 , 380);
bezier(70, 380, 90, 410, 130, 410, 150, 380);
bezier(150, 250, 100, 275, 185, 325, 150, 380);

line(350, 175, 450, 175);
bezier(350, 175, 450, 325, 300, 325, 350, 380);
bezier(350, 380, 375, 410, 425, 410, 450, 380);
bezier(450, 175, 350, 325, 500, 325, 450, 380);

line(600, 300,  700, 300);
bezier(600,300, 625, 325, 550, 350, 600, 387);
bezier(600, 387, 630, 400, 665, 400, 700, 387);
bezier(700, 300, 675, 325, 750, 350, 700, 387);


}
