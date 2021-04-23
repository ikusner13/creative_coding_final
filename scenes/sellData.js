class SellData {
  constructor() {
    this.boxWidth = 675
    this.boxHeight = 60
    this.yStart = 75
    this.space = 10
    this.items = 5
    this.collection = []
    this.sellButton = null
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
    this.sellButton = new Button("Sell", buyX, Y, width, height, 0, COLOR)
    this.backButton = new Button("Back", backX, Y, width, height, 0, COLOR)
  }

  mousePressed() {
    if (this.sellButton.intersects(mouseX, mouseY)) {
      console.log(this.collection)

      inventory.collectionsOwned.filter((e) => {
        console.log("e", e)
        if (e.name === this.sceneArgs.name) {
          inventory.addMoney(100)
          inventory.collectionsOwned = inventory.collectionsOwned.filter(
            (coll) => coll.id !== e.id
          )
          console.log("my collections", inventory.collectionsOwned)
        }
        return e.name !== this.sceneArgs.name
      })
      //add to inventory, remove from sale
      this.sceneManager.showScene(SellCollection, collections)
    }

    if (this.backButton.intersects(mouseX, mouseY)) {
      console.log("back")
      this.sceneManager.showScene(SellCollection, collections)
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

    this.sellButton.show()
    this.backButton.show()
  }

  dataInfo(info, x, y) {
    let _y = y
    fill(...COLOR)
    const { name, ...data } = info
    textAlign(LEFT)
    text(name, x - this.boxWidth / 2 + 5, _y)

    //textAlign(RIGHT)
    let i = 0
    for (const d in data) {
      if (i < 3) {
        //textAlign(LEFT)
        text(
          `${d}: ${data[d]}`,
          x - this.boxWidth / 2 + textWidth(name) + 10,
          _y - 10
        )
        _y += 16
      } else {
        if (i === 3) _y = y
        let maxLength = Math.max(
          textWidth(`${data.occupation} occupation:`),
          textWidth(`${data.email} email:`),
          textWidth(`${data.phone} phone:`)
        )

        text(
          `${d}: ${data[d]}`,
          x - this.boxWidth / 2 + textWidth(name) + maxLength + 20,
          _y - 10
        )
        _y += 16
      }
      i++
    }
    textAlign(CENTER)
  }
}
