int value = 0;


void setup(){
  
size(screenWidth, 150);  
  background(255);
  
}


void draw() {

  fill(value);
translate(mouseX, mouseY)
  ellipse(mouseX, mouseY, 50, 50);

}

