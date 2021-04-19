class BuySell {
  constructor() {
    this.buyWidth = 150
    this.buyHeight = 200
    this.sellButton = null
    this.buyButton = null
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
  }

  mousePressed() {
    if (this.buyButton.intersects(mouseX, mouseY)) {
      console.log("buy")
      this.sceneManager.showScene(BuyCollection, collections)
    }

    if (this.sellButton.intersects(mouseX, mouseY)) {
      console.log("sell")
      this.sceneManager.showScene(SellCollection)
    }
  }

  drawScreen() {
    this.sellButton.show()
    this.buyButton.show()
  }
}
