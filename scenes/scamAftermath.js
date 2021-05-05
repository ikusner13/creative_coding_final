class ScamAftermath {
  constructor() {
    this.text = ""
    this.dataItems = 0
  }
  enter() {
    this.dataItems = this.countProperties()
    let name = this.sceneArgs[0].name
    switch (this.dataItems) {
      case 1:
        this.text = `using a piece of ${name} data that was taken from Facebook, you were able to get in contact with them and scam them about bill payments. Without much info you were only able to take a minimal amount of money from them `
        break
      case 2:
        this.text = `With a couple pieces of data obtained about ${name} from their information via Facebook, you are able to send them phishing messages, allowing you to get access to a bank card and take more money from them`
        break
      case 3:
        this.text = `Facebooks poor data practices has allowed you to obtain more than enough information to perform an efficient scam on ${name}. You perform a generic tech scam on them and make them pay a decent sum of money for a 'software fix'.`
        break
      case 4:
      case 5:
        this.text = `Because of data Facebook made available, you were able to more than easily get in contact with ${name}. You get access to their computer and perform a randsomware attack on them. They don't know any better and send you the money needed to unlock their computer, which of course you don't`
        break
      case 6:
        this.text = `All from Facebooks data breach you were able to get all the information you needed to extort all the money you wanted out of them  `
        break
      default:
        break
    }
  }
  draw() {
    this.sceneManager.terminal()
    const x = this.sceneManager.bgWidth
    const y = this.sceneManager.bgWidth
    fill(...COLOR)
    let startx = x / 2
    let starty = y
    text(this.text, startx, starty / 2, x - 50, starty / 2)
    text(
      `You get $${this.dataItems * 100}`,
      startx,
      starty / 2,
      x - 50,
      starty / 2 - 200
    )
    starty += 200

    if (Math.floor(frameCount / 30) % 2 == 0) {
      text("Click to start ", x / 2, y / 2 + 150)
    }
  }
  mousePressed() {
    this.sceneManager.showScene(ScamHome)
  }
  countProperties() {
    let count = 0
    for (let c in this.sceneArgs[0]) {
      if (this.sceneArgs[0][c] !== " " && c !== "name") count++
    }
    return count
  }
}
