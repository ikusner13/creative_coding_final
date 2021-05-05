class BuyData extends ShowData {
  constructor() {
    super({ actionText: "buy" })
  }

  mousePressed() {
    if (this.actionButton.intersects(mouseX, mouseY)) {
      console.log("ref", this.actionButton.ref)
      if (inventory.money - this.actionButton.ref.value > 0) {
        console.log("if")
        collections = collections.filter((e) => {
          if (e.id === this.actionButton.ref.id) {
            let amount = this.actionButton.ref.value
            console.log("buy amount", amount)
            inventory.subtractMoney(amount)
            inventory.addCollection(e)
            console.log("my collections", inventory.collectionsOwned)
          }
          return e.id !== this.actionButton.ref.id
        })
        //add to inventory, remove from sale
      }
      this.sceneManager.showScene(BuyCollection, collections)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(BuyCollection, collections)
    }
  }
}
