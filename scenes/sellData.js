class SellData extends ShowData {
  constructor() {
    super({ actionText: "sell" })
  }

  mousePressed() {
    if (this.actionButton.intersects(mouseX, mouseY)) {
      inventory.collectionsOwned.filter((e) => {
        if (e.name === this.sceneArgs.name) {
          inventory.addMoney(100)
          inventory.collectionsOwned = inventory.collectionsOwned.filter(
            (coll) => coll.id !== e.id
          )
        }
        return e.name !== this.sceneArgs.name
      })
      //add to inventory, remove from sale
      this.sceneManager.showScene(SellCollection, collections)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(SellCollection, collections)
    }
  }
}
