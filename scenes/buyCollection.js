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
    this.buyCollection = []
    this.collectionLinks = []
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    console.log("sceneArgsCollection", this.sceneArgs)
    console.log("buy collection", this.buyCollection)
    this.sceneArgs.forEach((collection) => {
      console.log("buy collections", collection)
      this.buyCollection.push(collection)
      this.collectionLinks.push(
        new Button(
          `${collection.name}\t\t\t\t$${collection.value}`,
          x,
          y,
          this.boxWidth,
          this.boxHeight,
          0,
          [65, 255, 0],
          collection
        )
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
          return e.name === collection.ref.name
        })
        console.log("args", args)
        this.sceneManager.showScene(BuyData, args)
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
