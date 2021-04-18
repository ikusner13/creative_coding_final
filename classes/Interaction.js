class Interaction {
  constructor(interactionPages, mainIndex) {
    this.pages = interactionPages

    this.pageIndex = 0
    this.active = false

    this.mainIndex = mainIndex
  }

  update() {
    //if mouse hovers over interaction
    /*if (heroSprite.overlap(this.interactionSprite)) {
      //print("sprite overlaps")
      this.pages[this.pageIndex].show()
      this.active = true
    } else {
      this.pages[this.pageIndex].clear()
      this.pageIndex = 0
      this.active = false
    }*/
  }

  checkMousePress() {
    print("interaction check mouse press")
    if (this.active) {
      let currentPage = this.pages[this.pageIndex]
      // console.log("currentpage", currentPage)
      let currentPageButtons = currentPage.buttons
      for (let i = 0; i < currentPageButtons.length; i++) {
        let thisButton = currentPageButtons[i]
        if (thisButton.intersects(mouseX, mouseY)) {
          this.pageIndex = thisButton.consequenceIndex
          if (this.pageIndex == -1) {
            this.pageIndex = 0
            this.pages[this.pageIndex].clear()
            this.active = false
          } else {
            this.pages[this.pageIndex].show()
          }
        }
      }
    }
  }
}
