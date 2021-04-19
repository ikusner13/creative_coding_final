class BuyData {
  constructor() {
    this.boxWidth = 500
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
      stroke(200, 100)
      fill(0)
      rect(x, y, this.boxWidth, this.boxHeight)
      this.dataInfo(info, x, y)
      y = y + this.boxHeight + this.space
    })

    //fill(0)
    //stroke(200, 100)
    rect(x - this.boxWidth / 4, y, this.boxWidth / 2, this.boxHeight)
      .stroke(255)
      .fill(255)
    fill(...COLOR)
    text("BUY", x - this.boxWidth / 4, y)
    fill(0)
    stroke(200, 100)
    rect(x + this.boxWidth / 4, y, this.boxWidth / 2, this.boxHeight)
    fill(...COLOR)
    text("BACK", x + this.boxWidth / 4, y)
  }

  dataInfo(info, x, y) {
    fill(...COLOR)
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
