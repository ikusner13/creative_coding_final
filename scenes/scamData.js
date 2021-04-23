class ScamData extends ShowData {
  constructor() {
    super({ actionText: "scam" })
  }
  enter() {
    this.collection = [this.sceneArgs]
    let x = this.sceneManager.bgWidth / 2
    let y = this.yStart
    const buyX = x - this.boxWidth / 4
    const backX = x + this.boxWidth / 4
    const Y =
      y + (this.boxHeight + this.space) * this.collection.length - this.space
    const width = this.boxWidth / 2
    const height = this.boxHeight * (3 / 4)
    this.actionButton = new Button(
      this.actionText,
      buyX,
      Y,
      width,
      height,
      0,
      COLOR
    )
    this.backButton = new Button("Back", backX, Y, width, height, 0, COLOR)
  }
  mousePressed() {
    if (this.actionButton.intersects(mouseX, mouseY)) {
      let amount = this.countProperties() * 100
      inventory.addMoney(amount)
      //add to inventory, remove from sale
      this.sceneManager.showScene(ScamHome)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(ScamHome)
    }
  }
  countProperties() {
    let count = 0
    for (let c in this.collection[0]) {
      if (this.collection[0][c] !== " " && c !== "name") count++
    }
    return count
  }
}
