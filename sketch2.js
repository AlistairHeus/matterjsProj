// let engine;
// let world;
// let alphaBridge;
// let mConstraint;
// const {
//   Engine,
//   World,
//   Composites,
//   Composite,
//   Bodies,
//   Mouse,
//   Body,
//   MouseConstraint,
//   Constraint,
// } = Matter;

// function setup() {
//   const canvas = createCanvas(windowWidth, windowHeight);

//   engine = Engine.create();
//   world = engine.world;

//   alphaBridge = new AlphabetBridge(
//     windowWidth - 520,
//     windowHeight - 400,
//     7,
//     7,
//     0,
//     0
//   );

//   const mouse = Mouse.create(canvas.elt);

//   const options = {
//     mouse: mouse,
//   };

//   mConstraint = MouseConstraint.create(engine, options);
//   World.add(world, mConstraint);
// }

// function draw() {
//   background(0);
//   Engine.update(engine);

//   alphaBridge.show();
// }
