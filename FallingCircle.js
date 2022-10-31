class FallingCircle {
  constructor(x, y, r) {
    const options = {
      restitution: random(0.5, 0.9),
      friction: 0,
      mass: 0.8,
    };
    this.r = r;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, r, options);

    World.add(world, this.body);

    this.imgArr = [
      smilieImage1,
      smilieImage2,
      smilieImage3,
      smilieImage4,
      smilieImage5,
    ];

    this.randImg = random(this.imgArr);

    this.markedForDeletion = false;
  }
  isOffScreen() {
    var pos = this.body.position;
    return pos.y > height / 2 - this.r * 2;
  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  show() {
    const pos = this.body.position;
    push();
    const angle = this.body.angle;
    ellipseMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    imageMode(CENTER);
    image(this.randImg, 0, 0, this.r * 2, this.r * 2, 0, 0, 56, 56);
    pop();
  }
}
