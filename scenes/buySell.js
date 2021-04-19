class BuySell {
  constructor() {
    this.buyWidth = 150
    this.buyHeight = 200
  }
  draw() {
    //image(this.sceneManager.bkImage, 0, 0)
    background(0)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  mousePressed() {
    const bgWidth = this.sceneManager.bgWidth
    const bgHeight = this.sceneManager.bgHeight

    const maxBuyX = bgWidth / 2 - this.buyWidth / 2
    const minBuyX = bgWidth / 2 - this.buyWidth * 1.5

    const maxBuyY = bgHeight / 2 + this.buyHeight / 2
    const minBuyY = bgHeight / 2 - this.buyHeight / 2

    const maxSellX = bgWidth / 2 + this.buyWidth * 1.5
    const minSellX = bgWidth / 2 + this.buyWidth / 2
    if (
      mouseX > minBuyX &&
      mouseX < maxBuyX &&
      mouseY > minBuyY &&
      mouseY < maxBuyY
    ) {
      console.log("BUY")
      this.sceneManager.showScene(BuyCollection)
    }
    if (
      mouseX > minSellX &&
      mouseX < maxSellX &&
      mouseY > minBuyY &&
      mouseY < maxBuyY
    ) {
      console.log("Sell")
      this.sceneManager.showScene(SellCollection)
    }
  }

  drawScreen() {
    const bgWidth = this.sceneManager.bgWidth
    const bgHeight = this.sceneManager.bgHeight

    fill(...COLOR)
    stroke(0)
    text("buy", bgWidth / 2 - this.buyWidth, bgHeight / 2)
    text("sell", bgWidth / 2 + this.buyWidth, bgHeight / 2)
    rect(
      bgWidth / 2 - this.buyWidth,
      bgHeight / 2,
      this.buyWidth,
      this.buyHeight
    )
    rect(
      bgWidth / 2 + this.buyWidth,
      bgHeight / 2,
      this.buyWidth,
      this.buyHeight
    )
  }
}
