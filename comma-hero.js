let comma;
let angle = 0;
let rotationSpeed = 0.010;
let scaleFactor = 1;
let transparency = 255;
let fadeAlpha = 0;

function preload() {
  comma = loadModel('https://res.cloudinary.com/diutinoag/raw/upload/v1685054308/comma-02.obj');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('container');
  describe('Vertically rotating 3-d comma.');
    
  window.addEventListener('scroll', handleScroll);
}

function draw() {
  background(255, 255, 255, transparency);
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // Set up lights for the scene
  directionalLight(20, 20, 20, -locX, -locY, -20);
  directionalLight(255, 255, 255, -1, -1, 10);
  ambientLight(210, 210, 210);
    
  // Set up material properties for the comma
  let ambientColor = color(255, 255, 255, transparency);
  ambientMaterial(ambientColor);
  shininess(0);
  emissiveMaterial(10);
  
  let c = color(255, 255, 255);
  fill(c);

  rotateX(PI);
  rotateY(angle);
  rotateZ(100);
  noStroke();
  
  scale(windowHeight * 2.4);
  translate(-0.1, -0.017, 0);
  scale(scaleFactor);
  
  model(comma);
  
  angle += rotationSpeed;
}

function handleScroll() {
  let scrollY = window.scrollY;
  scaleFactor = 1 + scrollY / 500; // Adjust the scaling factor based on scroll position
  transparency = map(scrollY, 0, document.documentElement.scrollHeight - window.innerHeight, 255, 0); // Adjust the transparency based on scroll position

}
