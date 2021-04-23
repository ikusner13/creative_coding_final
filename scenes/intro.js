class Intro {
  constructor() {
    this.howto = "How to play: "
    this.intro =
      "You are a scammer. Your goal is to take advantage of Facebook data that has been leaked in different breaches to perform scams on those people. The more information you obtain about someone, the better"
    this.play =
      "First obtain data by buying different breaches with your money (seen in top right). You will only obtain parts of someones personal infromation in each breach. Obtain all parts of a certian person's info to make more money off their scam. Sell breaches you bought to make money also"
  }

  draw() {
    this.sceneManager.terminal()
    const x = this.sceneManager.bgWidth
    const y = this.sceneManager.bgWidth
    fill(...COLOR)
    text(this.intro, x / 2, y - 100, x - 50, y - 50)
    text(this.howto, x / 2, y / 2)
    text(this.play, x / 2, y, x - 50, y - 50)
    if (Math.floor(frameCount / 30) % 2 == 0) {
      text("Click to start ", x / 2, y / 2 + 150)
    }
  }

  mousePressed() {
    this.sceneManager.showScene(Home)
  }
}
