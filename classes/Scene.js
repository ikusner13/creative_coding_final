/// <reference path="../p5.d/p5.global-mode.d.ts" />
const keys = {
  W: 83,
  S: 87,
  A: 65,
  D: 68,
}

class Scene {
  constructor({ bgImage, pageDesign, interactions }) {
    this.bgImage = bgImage
    this.interactions = interactions

    // the background image width and height
    // are the only vars we need to pull out
    // from pageLayout
    this.bgWidth = pageDesign.bgImageWidth
    this.bgHeight = pageDesign.bgImageHeight
    this.next = 0
  }

  update() {
    if (this.bgImage) {
      image(this.bgImage, 0, 0, this.bgWidth, this.bgHeight)
    } else {
      push()
      fill(50)
      noStroke()
      rect(0, 0, this.bgWidth, this.bgHeight)
      pop()
    }
  }
}

class Hub extends Scene {
  constructor(props) {
    super(props)
    this.sprite = props.sprite
    this.bounds = props.pageDesign.bounds
    this.interactions = props.interactions
  }

  update() {
    super.update()
    drawSprites()
    this.moveHero()

    for (let i = 0; i < this.interactions.length; i++) {
      this.interactions[i].update(this.sprite)
    }
  }
  moveHero() {
    if (keyIsDown(keys.A)) {
      print("A down")
      if (this.sprite.position.x > this.bounds[3]) {
        print(this.bounds[3])
        this.sprite.changeAnimation("walk")
        this.sprite.mirrorX(-1)
        this.sprite.velocity.x = -2
      } else {
        this.sprite.velocity.x = 0
      }
    } else if (keyIsDown(keys.D)) {
      if (this.sprite.position.x < this.bounds[1]) {
        this.sprite.changeAnimation("walk")
        this.sprite.mirrorX(1)
        this.sprite.velocity.x = 2
      } else {
        this.sprite.velocity.x = 0
      }
    } else if (keyIsDown(keys.S)) {
      if (this.sprite.position.y > this.bounds[0]) {
        this.sprite.changeAnimation("walk")
        this.sprite.velocity.y = -2
      } else {
        this.sprite.velocity.y = 0
      }
    } else if (keyIsDown(keys.W)) {
      if (this.sprite.position.y < this.bounds[2]) {
        this.sprite.changeAnimation("walk")
        this.sprite.velocity.y = 2
      } else {
        this.sprite.velocity.y = 0
      }
    } else {
      this.sprite.changeAnimation("stand")
      this.sprite.velocity.x = 0
      this.sprite.velocity.y = 0
    }
  }
}

class DataScreen extends Scene {
  constructor(props) {
    super(props)
  }
  update() {
    super.update()
    push()
    rectMode(CENTER)
    stroke(0, 255, 0)
    strokeWeight(2)
    fill(0)
    const mainWindow_w = 575
    const mainWindow_h = 350
    rect(this.bgWidth / 2, this.bgHeight / 2, mainWindow_w, mainWindow_h)
    fill(0, 255, 0)
    rect(
      this.bgWidth / 2,
      this.bgHeight / 2 - mainWindow_h / 2,
      mainWindow_w,
      25
    )

    fill(255, 40)
    stroke(150)
    text("buy", this.bgWidth / 2 - 150, this.bgHeight / 2)
    text("sell", this.bgWidth / 2 + 150, this.bgHeight / 2)
    rect(this.bgWidth / 2 - 150, this.bgHeight / 2, 150, 200)
    rect(this.bgWidth / 2 + 150, this.bgHeight / 2, 150, 200)
    pop()
  }
  checkMousePress() {
    console.log("pressed")
    /*
    for (let i = 0; i < this.interactions.length; i++) {
      let p = this.interactions[i].checkMousePress()

      print(p)

      if (p !== -1) {
        return true
      }
      return false
    }*/
  }
}

class DataViewScreen extends Scene {
  constructor(props) {
    super(props)
    this.log = props.log
  }

  update() {
    super.update()
    let x = 100
    let y = 100
    this.log.map((collection) => {
      fill(0, 255, 0)
      rect(x, y, 300, 50)
      y = y + 50 + 20
    })
  }
}

class DataSingleView extends Scene {
  constructor(props) {
    super(props)
    this.log = props.log
  }

  update() {
    super.update()
    let x = 100
    let y = 100
    this.log.map((collection) => {
      fill(0, 255, 0)
      rect(x, y, 300, 50)
      y = y + 50 + 20
    })
  }
}
