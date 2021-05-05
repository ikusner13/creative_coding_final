class BuyIntro {
  constructor() {
    this.p1 =
      "Due to Facebook's poor data practices and a big security vulnerability in their database, user's data was stolen by various hackers and is now being sold by them on black market sites"
    this.p2 =
      "In this data breach you have user's name, phone number, address, facebook link, occupation, email. From this pleathera of information that you got just off of a Facebook leak, you can easily perform various scam attacks on these people"
  }
  draw() {
    this.sceneManager.terminal()
    const x = this.sceneManager.bgWidth
    const y = this.sceneManager.bgWidth
    fill(...COLOR)
    text(this.p1, x / 2, y - 100, x - 50, y - 50)
    text(this.p2, x / 2, y, x - 50, y - 50)
    if (Math.floor(frameCount / 30) % 2 == 0) {
      text("Click to continue ", x / 2, y / 2 + 150)
    }
  }
  mousePressed() {
    this.sceneManager.showScene(BuyCollection, collections)
  }
}
