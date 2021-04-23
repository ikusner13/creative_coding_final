class FinishScam {
  constructor() {}

  draw() {
    this.sceneManager.terminal()
    const name = this.sceneArgs
    const x = this.sceneManager.bgWidth / 2
    const y = this.sceneManager.bgWidth / 2
    text(`You scammed ${name} `, x, y)
  }

  mousePressed() {
    this.sceneManager.showScene(ScamHome)
  }
}
