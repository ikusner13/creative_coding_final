class ShowData {
  constructor(props) {
    this.boxWidth = 675
    this.boxHeight = 60
    this.yStart = 75
    this.space = 10
    this.items = 5
    this.collection = []
    this.actionButton = null
    this.backButton = null
    this.actionText = props.actionText
  }
  draw() {
    this.sceneManager.terminal()
    this.drawScreen()
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

    this.actionButton.show()
    this.backButton.show()
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
