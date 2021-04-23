class SellCollection {
  constructor() {
    this.collectionLinks = []
    this.buyCollection = []
    this.boxWidth = 300
    this.boxHeight = 50
    this.space = 20
    this.backButton = null
  }

  draw() {
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    this.buyCollection = []
    this.collectionLinks = []
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    console.log("sceneArgsCollection", this.sceneArgs)
    console.log("buy collection", this.buyCollection)
    inventory.collectionsOwned.forEach((collection) => {
      console.log("sell collections", collection)
      this.buyCollection.push(collection)
      this.collectionLinks.push(
        new Button(collection.name, x, y, this.boxWidth, this.boxHeight, 0, [
          65,
          255,
          0,
        ])
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
    this.collectionLinks.forEach((collection, index) => {
      if (collection.intersects(mouseX, mouseY)) {
        let args = this.buyCollection.find((e) => {
          return e.name === collection.displayText
        })
        console.log("args", args)
        this.sceneManager.showScene(SellData, args)
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

  collectionText(collection, x, y) {
    stroke(0)
    textAlign(LEFT)
    fill(...COLOR)
    text(`$${collection.value}`, x - 140, y)
    textAlign(CENTER)
    text(collection.name, x, y)
  }
}
