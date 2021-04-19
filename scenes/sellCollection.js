class SellCollection {
  constructor() {
    this.collection = {
      name: "collection",
    }
  }

  draw() {
    background(200)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  mousePressed() {
    this.sceneManager.showScene(BuyData)
  }

  drawScreen() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    for (let i = 0; i < 6; i++) {
      fill(0)
      stroke(200, 100)
      rect(x, y, 300, 50)
      rect(x + 175, y, 50, 50)
      this.collectionText(this.collection, x, y)
      y = y + 50 + 20
    }
  }

  collectionText(collection, x, y) {
    stroke(0)
    textAlign(LEFT)
    fill(...COLOR)
    text("$100", x - 140, y)
    textAlign(CENTER)
    text(collection.name, x, y)
    text("sell", x + 175, y)
  }
}
