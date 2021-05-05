class BuySell {
  constructor() {
    this.buyWidth = 150
    this.buyHeight = 200
    this.sellButton = null
    this.buyButton = null
    this.backButton = null
  }
  draw() {
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    const bgWidth = this.sceneManager.bgWidth
    const bgHeight = this.sceneManager.bgHeight

    this.sellButton = new Button(
      "Sell",
      bgWidth / 2 - this.buyWidth,
      bgHeight / 2,
      this.buyWidth,
      this.buyHeight,
      0,
      [65, 255, 0]
    )
    this.buyButton = new Button(
      "Buy",
      bgWidth / 2 + this.buyWidth,
      bgHeight / 2,
      this.buyWidth,
      this.buyHeight,
      0,
      [65, 255, 0]
    )
    this.backButton = new Button(
      "Back",
      bgWidth / 2,
      bgHeight / 2 + this.buyHeight,
      this.buyWidth / 2,
      this.buyHeight / 2,
      0,
      COLOR
    )
  }

  mousePressed() {
    if (this.buyButton.intersects(mouseX, mouseY)) {
      first
        ? this.sceneManager.showScene(BuyIntro)
        : this.sceneManager.showScene(BuyCollection, collections)
    }

    if (this.sellButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(SellCollection)
    }
    if (this.backButton.intersects(mouseX, mouseY)) {
      console.log("back")
      this.sceneManager.showScene(Home)
    }
  }

  drawScreen() {
    this.sellButton.show()
    this.buyButton.show()
    this.backButton.show()
  }
}
