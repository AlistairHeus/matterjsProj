class MouseBall {
  constructor(x, y, r) {
    const options = {};
    this.r = r * 2;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, r, options);

    World.add(world, this.body);
  }

  show() {
    const pos = this.body.position;
    push();
    const angle = this.body.angle;
    ellipseMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    circle(0, 0, this.r * 2);
    pop();
  }
}
