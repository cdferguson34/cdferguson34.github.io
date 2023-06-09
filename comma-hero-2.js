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
  var canvas = createCanvas(windowWidth/2.5, windowWidth/2.5, WEBGL);
  canvas.parent('container');
  describe('Vertically rotating 3-d comma.');
    
  window.addEventListener('scroll', handleScroll);
}

function draw() {
  background(255, 255, 255, transparency);
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // Set up lights for the scene
  directionalLight(50, 50, 50, -locX, -locY, -20);
  directionalLight(50, 50, 50, -1, -1, 10);
  ambientLight(255, 255, 255);
    
  // Set up material properties for the comma
  let ambientColor = color(230, 230, 230, transparency);
  ambientMaterial(ambientColor);
  shininess(1000);
  
  let c = color(150, 150, 150);
  fill(c);

  rotateX(PI);
  rotateY(angle);

  noStroke();
  
  scale(windowWidth * 0.9);
  translate(-0.1, -0.018, 0);
  //scale(scaleFactor);
  
  model(comma);
  
  angle += rotationSpeed;
}

function handleScroll() {
  let scrollY = window.scrollY;
  scaleFactor = 1 + scrollY / 400; // Adjust the scaling factor based on scroll position
  transparency = map(
    scrollY,
    0,
    document.documentElement.scrollHeight - window.innerHeight,
    255,
    0
  ); // Adjust the transparency based on scroll position

  // Update the canvas size based on scroll position
  let newCanvasWidth = map(
    scrollY,
    0,
    document.documentElement.scrollHeight - window.innerHeight,
    windowWidth / 2.5,
    windowWidth
  );
  let newCanvasHeight = map(
    scrollY,
    0,
    document.documentElement.scrollHeight - window.innerHeight,
    windowWidth / 2.5,
    windowHeight
  );
  resizeCanvas(newCanvasWidth, newCanvasHeight);
}
