class SellCollection extends Collection {
  constructor() {
    super({ dataScreen: SellData })
  }

  enter() {
    this.buyCollection = []
    this.collectionLinks = []
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    inventory.collectionsOwned.forEach((collection) => {
      this.buyCollection.push(collection)
      this.collectionLinks.push(
        new Button(
          collection.name,
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
