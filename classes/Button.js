class Button {
  constructor(displayText, x, y, width, height, bgColor, textColor) {
    this.displayText = displayText
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.bgColor = bgColor
    this.textColor = textColor
  }

  show() {
    textSize(14)
    stroke(200, 100)
    !this.intersects(mouseX, mouseY) ? fill(this.bgColor) : fill(50)
    rect(this.x, this.y, this.width, this.height)

    stroke(0)
    fill(...this.textColor)
    text(
      this.displayText,
      this.x,
      this.y
      //this.width,
      //this.height
    )
  }

  intersects(x, y) {
    const xMax = this.x + this.width / 2
    const xMin = this.x - this.width / 2

    const yMax = this.y + this.height / 2
    const yMin = this.y - this.height / 2
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
      return true
    } else {
      return false
    }
  }
}
