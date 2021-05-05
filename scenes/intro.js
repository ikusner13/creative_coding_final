const pages = [
  [
    "I am not a fan of Facebook's various data practices. From their data security, to the collecting of your personal data, for their sketchy use of your personal data. I don't the data sharing they're invloved in and the targeted ad campaigns you get from them.",
    "The inspiration for this game came from the news that half a billion Facebook records had leaked online due to their negligence. This came after an exploit that enabled seeing the phone number linked to every facebook account",
  ],
  [
    "How to play: ",
    "You are a scammer. Your goal is to take advantage of Facebook data that has been leaked in different breaches to perform scams on those people. The more information you obtain about someone, the better",
    "First obtain data by buying different breaches with your money (seen in top right). You will only obtain parts of someones personal infromation in each breach. Obtain all parts of a certian person's info to make more money off their scam. Sell breaches you bought to make money also",
    "To scam someone multiple times you must obtain more pieces of data about them. If you scam them with 2 pieces of data, you must obtain a third to scam them again for more money. Once you scam them with all 6 peices of possible data, you can no longer scam them",
    "The more scams you perform the more your data sets are valued on the sell market ",
  ],
]

class Intro {
  constructor() {
    this.startIndex = 0
    this.pages = pages
  }

  draw() {
    this.sceneManager.terminal()
    const x = this.sceneManager.bgWidth
    const y = this.sceneManager.bgWidth
    fill(...COLOR)
    let startx = x / 2
    let starty = y
    this.pages[this.startIndex].forEach((myText) => {
      text(myText, startx, starty / 2, x - 50, starty / 2)
      starty += 200
    })
    if (Math.floor(frameCount / 30) % 2 == 0) {
      text("Click to continue ", x / 2, y / 2 + 150)
    }
  }

  mousePressed() {
    if (this.startIndex === this.pages.length - 1) {
      this.sceneManager.showScene(Home)
    } else {
      this.startIndex = this.startIndex + 1
    }
  }
}
