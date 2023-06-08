let comma;
let angle = 0;
let rotationSpeed = 0.035;

function preload() {
  comma = loadModel('comma-02.obj');
}

function setup() {
  createCanvas(700, 700, WEBGL);
  describe('Vertically rotating 3-d comma.');
}

function draw() {
  //background('rgba(0,0,0,0)');
  background('rgba(255,255,255,30)');
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // Set up lights for the scene
  directionalLight(20, 20, 20, -locX, -locY, -20);
    directionalLight(255, 255, 255, -1, -1, 10);
ambientLight(210, 210, 210);
  // Set up material properties for the comma
  let ambientColor = color(255, 255, 255);

  ambientMaterial(ambientColor);
  shininess(0);
  emissiveMaterial(10);
  
let c = color(255, 255, 255);
fill(c);

    rotateX(PI + -locY * 0.001);
    rotateY(angle);
  noStroke();
    scale(windowHeight * 2);
translate(-0.1, -0.017, 0);
  model(comma);
  
  angle += rotationSpeed;

}