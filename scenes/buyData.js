class BuyData extends ShowData {
  constructor() {
    super({ actionText: "buy" })
  }

  mousePressed() {
    if (this.actionButton.intersects(mouseX, mouseY)) {
      collections = collections.filter((e) => {
        if (e.name === this.sceneArgs.name) {
          inventory.subtractMoney(100)
          inventory.addCollection(e)
          console.log("my collections", inventory.collectionsOwned)
        }
        return e.name !== this.sceneArgs.name
      })
      //add to inventory, remove from sale
      this.sceneManager.showScene(BuyCollection, collections)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(BuyCollection, collections)
    }
  }
}
