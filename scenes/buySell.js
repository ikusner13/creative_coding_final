class BuySell {
  constructor() {
    this.buyWidth = 150
    this.buyHeight = 200
  }
  draw() {
    //image(this.sceneManager.bkImage, 0, 0)
    background(0)
    this.drawScreen()
  }

  keyPressed() {
    if (key === "1") {
      this.sceneManager.showScene(BuyCollection)
    }
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
    }
    if (
      mouseX > minSellX &&
      mouseX < maxSellX &&
      mouseY > minBuyY &&
      mouseY < maxBuyY
    ) {
      console.log("Sell")
    }
  }

  drawScreen() {
    const bgWidth = this.sceneManager.bgWidth
    const bgHeight = this.sceneManager.bgHeight
    rectMode(CENTER)
    stroke(0, 255, 0)
    strokeWeight(2)
    fill(0)
    const mainWindow_w = 575
    const mainWindow_h = 350
    rect(bgWidth / 2, bgHeight / 2, mainWindow_w, mainWindow_h)
    fill(0, 255, 0)
    rect(bgWidth / 2, bgHeight / 2 - mainWindow_h / 2, mainWindow_w, 25)

    fill(255, 40)
    stroke(150)
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
