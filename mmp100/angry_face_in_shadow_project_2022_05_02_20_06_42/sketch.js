function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(0);
  stroke(0); // black outline
  
  if (mouseIsPressed === true)
  fill(128,0,0) // skin color fill
  square(125, 130, 150, 30); // face
  //ellipse(width/2, height/2, 100, 130); // face
  
  line(165, 160, 185, 175);
  line(235, 160, 215, 175);
  
  fill(255);
  ellipse(width/2 - 20, height/2 - 15, 20, 15); // white of eye
  ellipse(width/2 + 20, height/2 - 15, 20, 15);
  
  noStroke();
  
  fill(255, 255, 0)
  ellipse(width/2 - 20, height/2 - 15, 10, 10); //Brown iris
  ellipse(width/2 + 20, height/2 - 15, 10, 10);
  
  fill(0)
  
  ellipse(width/2 - 20, height/2 - 15, 4, 4); //Black pupil
  ellipse(width/2 + 20, height/2 - 15, 4, 4);
  
  ellipse(width/2, height/2 + 25, 30, 45); // mouth
  

}