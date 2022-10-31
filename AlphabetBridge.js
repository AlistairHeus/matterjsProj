class AlphabetBridge {
  constructor(xOffsetA, yOffsetA, xOffsetB, yOffsetB) {
    this.welcomeText = [
      "K",
      "e",
      "e",
      "p",
      "s",
      "c",
      "r",
      "o",
      "o",
      "o",
      "o",
      "l",
      "l",
      "i",
      "n",
      "g",
    ];

    this.bridge = Composites.stack(
      200,
      canvasWidth - 200,
      this.welcomeText.length,
      1,
      0,
      0,
      function (x, y) {
        return Bodies.rectangle(x - 20, y, 32, 32, {
          friction: 0.3,
          restitution: 0.6,
        });
      }
    );

    this.composite = Composites.chain(
      this.bridge,
      xOffsetA,
      yOffsetA,
      xOffsetB,
      yOffsetB,
      {
        stiffness: 0.5,
        length: 0,
      }
    );

    World.add(world, [
      this.composite,
      Constraint.create({
        pointA: { x: canvasWidth / 8, y: canvasHeight / 2 },
        bodyB: this.bridge.bodies[0],
        pointB: { x: -25, y: 0 },
        length: 0.5,
        stiffness: 0.1,
      }),
      Constraint.create({
        pointA: { x: canvasWidth - canvasWidth / 8, y: canvasHeight / 2 },
        bodyB: this.bridge.bodies[this.bridge.bodies.length - 1],
        pointB: { x: 25, y: 0 },
        length: 5,
        stiffness: 0.1,
      }),
    ]);
  }

  show() {
    let parr = [];
    parr = Composite.allBodies(this.composite);

    for (var i = 0; i < parr.length; i++) {
      push();
      var pos = parr[i].position;
      var angle = parr[i].angle;
      rectMode(CENTER);
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      textSize(32);
      textStyle(BOLD);
      text(this.welcomeText[i], 0, 0, 32, 32);
      pop();
    }
  }
}
