class BuyCollection {
  constructor() {}

  draw() {
    background(0)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  mousePressed() {
    this.sceneManager.showScene(BuyData)
  }

  drawScreen() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    for (let i = 0; i < 5; i++) {
      fill(0)
      rect(x, y, 300, 50)
      const collection = { name: "collection" }
      this.collectionText(collection, x, y)
      y = y + 50 + 20
    }
  }

  collectionText(collection, x, y) {
    fill(0)
    rect(x, y, 50, 25)
    fill(...COLOR)
    text(collection.name, x, y)
  }
}
