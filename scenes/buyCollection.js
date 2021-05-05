class BuyCollection extends Collection {
  constructor() {
    super({ dataScreen: BuyData })
  }

  enter() {
    first = false
    this.buyCollection = []
    this.collectionLinks = []
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    this.sceneArgs.forEach((collection) => {
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
}
