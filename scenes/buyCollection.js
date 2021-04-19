class BuyCollection {
  constructor() {
    this.collectionLinks = []
    this.buyCollection = []
    this.boxWidth = 300
    this.boxHeight = 50
    this.space = 20
    this.backButton = null
  }

  draw() {
    background(0)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    for (let i = 0; i < 5; i++) {
      this.buyCollection.push({ name: "collection" + i })
      this.collectionLinks.push(
        new Button("collection", x, y, this.boxWidth, this.boxHeight, 0, [
          65,
          255,
          0,
        ])
      )
      y = y + this.boxHeight + this.space
    }
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
    this.collectionLinks.forEach((collection) => {
      if (collection.intersects(mouseX, mouseY)) {
        this.sceneManager.showScene(BuyData)
      }
    })

    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(BuySell)
    }
  }

  drawScreen() {
    this.collectionLinks.forEach((collection) => {
      collection.show()
    })
    this.backButton.show()
  }
}
