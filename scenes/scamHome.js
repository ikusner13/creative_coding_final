class ScamHome {
  constructor() {
    this.data = userData
    this.buttons = []
    this.boxWidth = 300
    this.boxHeight = 50
    this.space = 20
  }
  enter() {
    let x = this.sceneManager.bgWidth / 2
    let y = 100
    this.data.forEach((data) => {
      this.buttons.push(
        new Button(
          `${data.first_name} ${data.last_name}`,
          x,
          y,
          this.boxWidth,
          this.boxHeight,
          0,
          [65, 255, 0],
          data
        )
      )
      y = y + this.boxHeight + this.space
    })
    this.backButton = new Button(
      "Back",
      x,
      y,
      this.boxWidth,
      this.boxHeight,
      0,
      COLOR
    )
  }
  draw() {
    this.sceneManager.terminal()
    this.buttons.forEach((button) => button.show())
    this.backButton.show()
  }
  mousePressed() {
    if (this.backButton.intersects(mouseX, mouseY)) {
      this.sceneManager.showScene(Home)
    }
    this.buttons.forEach((button) => {
      if (button.intersects(mouseX, mouseY)) {
        const { id, first_name, last_name } = button.ref
        let obj = inventory.collectionsOwned.map((coll) => {
          let person = coll.collection.find(
            (p) => p.name === `${first_name} ${last_name}`
          )
          return person === undefined ? {} : person
        })
        let scam = {
          name: " ",
          phone: " ",
          email: " ",
          occupation: " ",
          birthday: " ",
          facebookID: " ",
          location: " ",
        }
        obj.forEach((o) => {
          if (o.name !== " ") scam.name = o.name
          if (o.phone !== " ") scam.phone = o.phone
          if (o.email !== " ") scam.email = o.email
          if (o.occupation !== " ") scam.occupation = o.occupation
          if (o.birthday !== " ") scam.birthday = o.birthday
          if (o.facebookID !== " ") scam.facebookID = o.facebookID
          if (o.location !== " ") scam.location = o.location
        })
        this.sceneManager.showScene(ScamData, scam)
      }
    })
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
}
