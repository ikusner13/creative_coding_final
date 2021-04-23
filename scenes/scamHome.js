class ScamHome {
  constructor() {
    this.data = userData
    this.buttons = []
    this.boxWidth = 300
    this.boxHeight = 50
    this.space = 20
  }
  enter() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    this.data.forEach((data) => {
      this.buttons.push(
        new Button(
          `${data.first_name} ${data.last_name}`,
          x,
          y,
          this.boxWidth,
          this.boxHeight,
          0,
          [65, 255, 0]
        )
      )
      y = y + this.boxHeight + this.space
    })
    this.backButton = new Button(
      "Back",
      x,
      y,
      this.boxWidth,
      this.boxHeight,
      0,
      COLOR
    )
  }
  draw() {
    this.sceneManager.terminal()
    this.buttons.forEach((button) => button.show())
    this.backButton.show()
  }
  mousePressed() {
    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(Home)
    }
    this.buttons.forEach((button) => {
      console.log(button)
      if (button.intersects(mouseX, mouseY)) {
        this.sceneManager.showScene(FinishScam, button.displayText)
      }
    })
  }
}
