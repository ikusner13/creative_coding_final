class SellCollection {
  constructor() {
    this.collection = new Array(6).fill({ name: "collection", amount: 100 })
    this.sellLinks = []
    this.boxWidth = 300
    this.boxHeight = 50
    this.space = 20
    this.backButton = null
  }

  draw() {
    background(200)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    this.collection.forEach((collection) => {
      this.sellLinks.push(
        new Button("Sell", x + 175, y, 50, this.boxHeight, 0, COLOR)
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

  mousePressed() {
    this.sellLinks.forEach((button, index) => {
      if (button.intersects(mouseX, mouseY)) {
        console.log("sell", index)
      }
    })
    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(BuySell)
    }
  }

  drawScreen() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    this.collection.forEach((collection) => {
      fill(0)
      stroke(200, 100)
      rect(x, y, 300, 50)
      this.collectionText(collection, x, y)
      y = y + 50 + 20
    })

    this.sellLinks.forEach((button) => {
      button.show()
    })
    this.backButton.show()
  }

  collectionText(collection, x, y) {
    stroke(0)
    textAlign(LEFT)
    fill(...COLOR)
    text(`$${collection.amount}`, x - 140, y)
    textAlign(CENTER)
    text(collection.name, x, y)
  }
}
