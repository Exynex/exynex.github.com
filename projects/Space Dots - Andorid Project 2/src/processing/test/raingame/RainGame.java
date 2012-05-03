package processing.test.raingame;

import processing.core.*; 

import android.view.MotionEvent; 
import android.view.KeyEvent; 
import android.graphics.Bitmap; 
import java.io.*; 
import java.util.*; 

public class RainGame extends PApplet {

Boxy[] boxy = new Boxy[51];

Button replay = new Button(20, 120, 180, 50, " Replay",  66, 150);
Button main   = new Button(20, 190, 180, 50, " Main Menu", 55, 220);
Button start  = new Button(50, 132, 190, 50, "Start Game", 90, 164);

int count = 0;
int countControl = 0;
int time = 0;
int minutes = 0;
String score = "";

int clr;

int speed = 5;

boolean gameGo = false;
boolean gameOver = false;
boolean mainMenu = true;

PFont font;
PImage b;

public void setup() {
 
//For Android = size(screenWidth, screenHeight);
//For Standard = size(800, 500);
  smooth();
  orientation(PORTRAIT); 


  clr = color(0, 0, 255);

  font = loadFont("Courier-48.vlw");
  b = loadImage("kspaceduel.png");

  for (int i = 0; i < 51; i++) {
    boxy[i] = new Boxy();
  }
}

public void draw() {

  fill(255);
  textFont(font, 18);
  stroke(100);
  strokeWeight(4);

  if ( mainMenu ) {
    background(0);

    fill(0, 0, 255, 255);
    text("    Do not touch \n   the raindrops!", 35, 50); 
    noStroke();
    start.draw();
    if ( start.clicked ) {
      gameGo = true;
      mainMenu = false;
      start = new Button(50, 132, 190, 50, "Start Game", 90, 164);
    }
  }

  if ( gameGo ) {
    background(0);
    if (countControl != second() ) {
      countControl = second();
      count++;
      time = count;
      println(count);

      if (time%15 == 0) {
        speed += 2;
        clr = color(random(0, 255), random(0, 255), random(0, 255));
      }
    }
    for (int i = 0; i < 51; i++) {
      boxy[i].draw();
    }
    fill(255);
    if (time == 60) {
      minutes += 1; 
      time = 0;
      count = 0;
    }
    if (time < 10) {
      text(minutes + ":0" + time, 30, 30);
    }
    else {
      text(minutes + ":" + time, 30, 30);
    }
    score = minutes + ":" + time;
  }

  if ( gameOver ) {
    gameGo = false;
    background(0);
    fill(255, 0, 0, 170);
    //rect(150, 70, 330, 80);
    //rect(230, 150, 160, 70);
    fill(255);
    text(" Game Over!", 38, 50);
    if (time < 10) {
      text(minutes + ":0" + time, 80, 100);
    }
    else {
      text(minutes + ":" + time, 80, 100);
    }
    replay.draw();
    main.draw();
    // play the file
  }

  if ( replay.clicked ) {
    gameOver = false;
    gameGo = true; 
    count = 0;
    minutes = 0;
    speed = 5;
    clr = color(0, 0, 255);
    replay = new Button(20, 120, 180, 50, " Replay",  66, 150);
  }

  if ( main.clicked ) {
    gameOver = false;
    gameGo = false;
    mainMenu = true;
    count = 0;
    minutes = 0;
  }



  pushMatrix();
  translate(mouseX-10, mouseY-70);
  image(b, 0, 0, 20, 20);

  popMatrix();
}

public void mouseClicked() {
  println("MouseX: " + mouseX + " -- " + "MouseY: " + mouseY);
  if ( mainMenu ) {
    start.mouseClicked();
  }
  if ( gameOver ) {
    replay.mouseClicked();
    main.mouseClicked();
  }
}






class Boxy {

  float x = random(10, width);
  float y = random(0, height);

  Boxy() {
  }

  public void draw() { 
    fill(clr);
    noStroke();
    rect(x, y, 7, 10);

    if ( y < height ) {
      y += speed;
    }
    else {
      x = random(0, width);
      y = random(0, height/20);
    }

    if ( mouseX > x && mouseX-5 < x + 9 && mouseY > y && mouseY-35 < y + 12 ) {
      gameOver = true;
    }
  }
}
class Button {

  int x;
  int y;
  int _x;
  int _y;
  String txt;
  int x2;
  int y2;

  boolean clicked = false;

  Button(int xPos, int yPos, int xSize, int ySize, String ln, int xPos2, int yPos2) {
    x = xPos;
    y = yPos;
    _x = xSize;
    _y = ySize;
    txt = ln;
    x2 = xPos2;
    y2 = yPos2;
  }

  public void draw() {
    if (mouseX > x && mouseX < x + _x &&
      mouseY > y && mouseY < y + _y) {
      strokeWeight(4);
      stroke(255);
      strokeCap(ROUND);
      fill(0, 206, 255, 255);
    }
    else {
      strokeWeight(4);
      stroke(255);
      strokeCap(ROUND);
      fill(0, 206, 255, 0);
    }
    rect(x, y, _x, _y);
    fill(255);
    text(txt, x2, y2);
  }

  public void mouseClicked() {
    if (mouseX > x && mouseX < x + _x &&
      mouseY > y && mouseY < y + _y) {
      clicked = true;
    }
  }
}



  public int sketchWidth() { return screenWidth; }
  public int sketchHeight() { return screenHeight; }
}
