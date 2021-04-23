class Collection {
  constructor(props) {
    this.collectionLinks = []
    this.buyCollection = []
    this.boxWidth = 300
    this.boxHeight = 50
    this.space = 20
    this.backButton = null
    this.dataScreen = props.dataScreen
  }
  draw() {
    this.sceneManager.terminal()
    this.drawScreen()
  }
  mousePressed() {
    this.collectionLinks.forEach((collection, index) => {
      if (collection.intersects(mouseX, mouseY)) {
        let args = this.buyCollection.find((e) => {
          return e.name === collection.ref.name
        })
        this.sceneManager.showScene(this.dataScreen, args)
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
