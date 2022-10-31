let engine;
let world;
let alphaBridge;
let mouseBall;
let smilies = [];
let canvasHeight = 600;
let canvasWidth = 600;
let creationLimit = 0;
let smilieImage1, smilieImage2, smilieImage3, smilieImage4, smilieImage5;
let brgArr = [];

const {
  Engine,
  World,
  Composites,
  Composite,
  Bodies,
  Mouse,
  Body,
  MouseConstraint,
  Constraint,
} = Matter;

function preload() {
  smilieImage1 = loadImage("./assets/e-0.png");
  smilieImage2 = loadImage("./assets/e-1.png");
  smilieImage3 = loadImage("./assets/e-2.png");
  smilieImage4 = loadImage("./assets/e-3.png");
  smilieImage5 = loadImage("./assets/e-4.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  engine = Engine.create();
  world = engine.world;

  mouseBall = new MouseBall(0, 0, 32);
  alphaBridge = new AlphabetBridge(0.32, 0, -0.32, 0);
}

function mouseMoved() {
  Body.setPosition(mouseBall.body, { x: mouseX, y: mouseY });
  brgArr = Composite.allBodies(alphaBridge.composite);

  return false;
}

function draw() {
  background(0);

  creationLimit++;

  if (creationLimit % 32 === 0) {
    smilies.push(new FallingCircle(random(40, canvasWidth), 50, 16));
  }

  Engine.update(engine);
  alphaBridge.show();
  for (smilie of smilies) {
    smilie.show();
  }
}
