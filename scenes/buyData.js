class BuyData {
  constructor() {
    this.boxWidth = 675
    this.boxHeight = 60
    this.yStart = 75
    this.space = 10
    this.items = 5
    this.collection = []
    this.buyButton = null
    this.backButton = null
  }

  draw() {
    this.sceneManager.terminal()
    this.drawScreen()
  }

  enter() {
    this.collection = this.sceneArgs.collection
    let x = this.sceneManager.bgWidth / 2
    let y = this.yStart
    const buyX = x - this.boxWidth / 4
    const backX = x + this.boxWidth / 4
    const Y =
      y + (this.boxHeight + this.space) * this.collection.length - this.space
    const width = this.boxWidth / 2
    const height = this.boxHeight * (3 / 4)
    this.buyButton = new Button("Buy", buyX, Y, width, height, 0, COLOR)
    this.backButton = new Button("Back", backX, Y, width, height, 0, COLOR)
  }

  mousePressed() {
    if (this.buyButton.intersects(mouseX, mouseY)) {
      collections = collections.filter((e) => {
        return e.name !== this.sceneArgs.name
      })
      //add to inventory, remove from sale
      this.sceneManager.showScene(BuyCollection, collections)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      console.log("back")
      this.sceneManager.showScene(BuyCollection, collections)
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
    let _y = y
    fill(...COLOR)
    const { name, ...data } = info
    textAlign(LEFT)
    text(name, x - this.boxWidth / 2 + 5, _y)

    let i = 0
    for (const d in data) {
      if (i < 3) {
        textAlign(LEFT)
        text(
          `${d}: ${data[d]}`,
          x - this.boxWidth / 2 + textWidth(name) + 10,
          _y - 10
        )
        _y += 16
      } else {
        if (i === 3) _y = y
        let max =
          textWidth(`${data.occupation} occupation:`) >
          textWidth(`${data.email} email:`)
            ? textWidth("occupation: ") + textWidth(data.occupation)
            : textWidth("email: ") + textWidth(data.email)
        text(
          `${d}: ${data[d]}`,
          x - this.boxWidth / 2 + textWidth(name) + max + 20,
          _y - 10
        )
        _y += 16
      }
      i++
    }
    textAlign(CENTER)
  }
}
