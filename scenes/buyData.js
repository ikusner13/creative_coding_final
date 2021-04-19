class BuyData {
  constructor() {
    this.boxWidth = 300
    this.boxHeight = 50
    this.yStart = 100
    this.space = 20
    this.items = 5
    this.collection = new Array(5).fill({
      name: "fdjskajgkdjsaklgjlasfjda",
      phoneNumber: "phone",
      address: "address",
      occupation: "occupation",
    })
  }

  draw() {
    background(0)
    this.sceneManager.terminal()
    this.drawScreen()
  }

  mousePressed() {
    const width = this.sceneManager.bgWidth / 2
    const xMax = width + this.boxWidth / 2
    const xMin = width - this.boxWidth / 2

    const yStart = this.yStart
    const yIncrement = this.boxHeight + this.space

    let yPos = yStart
    for (let i = 0; i < this.items; i++) {
      if (
        mouseY > yPos - this.boxHeight / 2 &&
        mouseY < yPos + this.boxHeight / 2 &&
        mouseX > xMin &&
        mouseX < xMax
      ) {
        console.log("mousePressed", i)
      }
      yPos += yIncrement
    }

    if (
      mouseY > yPos - this.boxHeight / 2 &&
      mouseY < yPos + this.boxHeight / 2 &&
      mouseX > xMin &&
      mouseX < width
    ) {
      console.log("BUY")
      this.sceneManager.showScene(BuyCollection)
    }
    if (
      mouseY > yPos - this.boxHeight / 2 &&
      mouseY < yPos + this.boxHeight / 2 &&
      mouseX > width &&
      mouseX < xMax
    ) {
      console.log("BACK")
      this.sceneManager.showScene(BuyCollection)
    }
  }

  drawScreen() {
    let x = this.sceneManager.bgWidth / 2
    let y = this.yStart

    this.collection.forEach((info) => {
      fill(0, 255, 0)
      rect(x, y, 300, 50)
      this.dataInfo(info, x, y)
      y = y + 50 + 20
    })

    fill(0, 255, 0)
    rect(x - 300 / 4, y, 150, 50)
    fill(255)
    text("BUY", x - 300 / 4, y)
    fill(0, 255, 0)
    rect(x + 300 / 4, y, 150, 50)
    fill(255)
    text("BACK", x + 300 / 4, y)
  }

  dataInfo(info, x, y) {
    fill(255)
    const { name, ...data } = info
    textAlign(LEFT)
    text(name, x - this.boxWidth / 2 + 10, y)
    for (const d in data) {
      text(`${d}: ${data[d]}`, x, y - 10)
      y += 10
    }
    textAlign(CENTER)
  }
}
