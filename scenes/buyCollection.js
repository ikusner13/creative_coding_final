class BuyCollection {
  constructor() {}

  draw() {
    background(0)
    this.drawScreen()
  }

  mousePressed() {
    this.sceneManager.showScene(BuyData)
  }

  drawScreen() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    for (let i = 0; i < 5; i++) {
      rectMode(CENTER)
      textAlign(CENTER)
      fill(0, 255, 0)
      rect(x, y, 300, 50)
      const collection = { name: "collection" }
      this.collectionText(collection, x, y)
      y = y + 50 + 20
    }
  }

  collectionText(collection, x, y) {
    rectMode(CENTER)
    fill(0)
    rect(x, y, 50, 25)
    fill(255)
    text(collection.name, x, y)
  }
}
