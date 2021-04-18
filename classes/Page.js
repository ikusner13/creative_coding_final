class Page {
  constructor(pageText, choices, consequences, pageDesign) {
    this.pageText = pageText
    this.choices = choices
    this.consequences = consequences
    this.PD = pageDesign

    // create convenience variables
    // to make layout easier
    this.pageTextY =
      this.PD.bgImageHeight + this.PD.marginTop + this.PD.verticalPadding
    this.firstButtonY =
      this.pageTextY + this.PD.textBoxHeight + this.PD.verticalPadding

    // convenience variable for the page
    // area underneath our bg image
    this.pageBG_X = 0
    this.pageBG_Y = this.PD.bgImageHeight
    this.pageBG_W = this.PD.bgImageWidth
    this.pageBG_H = windowHeight - this.pageBG_Y
  }

  show() {
    this.clear()

    // print current page number to console
    // for debug purposes
    //   print(this.scenario)
    //   print(this.choices)

    // Draw Scenario Text
    textSize(16)
    fill(this.PD.textColor)
    textAlign(CENTER, CENTER)

    text(
      this.pageText,
      this.PD.marginLeft,
      this.pageTextY,
      this.PD.textBoxWidth,
      this.PD.textBoxHeight
    )
  }

  clear() {
    fill(this.PD.bgColor)
    rect(this.pageBG_X, this.pageBG_Y, this.pageBG_W, this.pageBG_H)
  }
}
