class BuyData {
  constructor() {
    this.boxWidth = 500
    this.boxHeight = 50
    this.yStart = 100
    this.space = 20
    this.items = 5
    this.collection = new Array(5).fill({
      name: "Ian Kusner",
      phoneNumber: "123-456-7890",
      address: "1234 west main st.",
      occupation: "Avacado Farmer",
    })
    this.buyButton = null
    this.backButton = null
  }

  draw() {
    background(0)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    let x = this.sceneManager.bgWidth / 2
    let y = this.yStart
    const buyX = x - this.boxWidth / 4
    const backX = x + this.boxWidth / 4
    const Y = y + (this.boxHeight + this.space) * this.collection.length
    const width = this.boxWidth / 2
    const height = this.boxHeight
    this.buyButton = new Button("Buy", buyX, Y, width, height, 0, COLOR)
    this.backButton = new Button("Back", backX, Y, width, height, 0, COLOR)
  }

  mousePressed() {
    if (this.buyButton.intersects(mouseX, mouseY)) {
      console.log("buy")
      //add to inventory, remove from sale
      this.sceneManager.showScene(BuyCollection)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      console.log("back")
      this.sceneManager.showScene(BuyCollection)
    }
  }

  drawScreen() {
    let x = this.sceneManager.bgWidth / 2
    let y = this.yStart

    this.collection.forEach((info) => {
      stroke(200, 100)
      fill(0)
      rect(x, y, this.boxWidth, this.boxHeight)
      this.dataInfo(info, x, y)
      y = y + this.boxHeight + this.space
    })

    this.buyButton.show()
    this.backButton.show()
  }

  dataInfo(info, x, y) {
    fill(...COLOR)
    const { name, ...data } = info
    textAlign(LEFT)
    text(name, x - this.boxWidth / 2 + 10, y)
    for (const d in data) {
      text(`${d}: ${data[d]}`, x, y - 10)
      y += 16
    }
    textAlign(CENTER)
  }
}
