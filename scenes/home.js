class Home {
  constructor() {
    this.buyWidth = 150
    this.buyHeight = 200
    this.scamButton = null
    this.buySellButton = null
  }
  draw() {
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    const bgWidth = this.sceneManager.bgWidth
    const bgHeight = this.sceneManager.bgHeight

    this.scamButton = new Button(
      "Scam",
      bgWidth / 2 - this.buyWidth,
      bgHeight / 2,
      this.buyWidth,
      this.buyHeight,
      0,
      [65, 255, 0]
    )
    this.buySellButton = new Button(
      "Buy/Sell",
      bgWidth / 2 + this.buyWidth,
      bgHeight / 2,
      this.buyWidth,
      this.buyHeight,
      0,
      [65, 255, 0]
    )
  }

  mousePressed() {
    if (this.scamButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(ScamHome)
    }

    if (this.buySellButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(BuySell)
    }
  }

  drawScreen() {
    this.scamButton.show()
    this.buySellButton.show()
  }
}
