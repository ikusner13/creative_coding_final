var bkImage
let consolas

const COLOR = [65, 255, 0]

function preload() {
  bkImage = loadImage("assets/scenes/room.jpg")
  consolas = loadFont("assets/Consolas.ttf")
}

function setup() {
  createCanvas(bkImage.width, bkImage.height)
  textAlign(CENTER)
  rectMode(CENTER)
  textFont(consolas)
  stroke(0)
  fill(65, 255, 0)

  var mgr = new SceneManager()
  mgr.bkImage = bkImage // inject bkImage property
  mgr.terminal = terminalBackground
  mgr.bgWidth = bkImage.width
  mgr.bgHeight = bkImage.height
  mgr.wire()
  mgr.showScene(SellCollection)
}

function terminalBackground() {
  push()
  const bgWidth = bkImage.width
  const bgHeight = bkImage.height
  stroke(65, 255, 0)
  strokeWeight(1)
  fill(0)
  const mainWindow_w = bgWidth
  const mainWindow_h = bgHeight
  rect(bgWidth / 2, bgHeight / 2, mainWindow_w - 2, mainWindow_h - 2)
  fill(0)
  stroke(65, 255, 0)
  rect(bgWidth / 2, bgHeight / 2 - mainWindow_h / 2 + 19, mainWindow_w - 2, 35)

  strokeWeight(1)
  textAlign(RIGHT)
  fill(65, 255, 0)
  stroke(0)
  text("MONEY:", mainWindow_w - 10, bgHeight / 2 - mainWindow_h / 2 + 25)
  pop()
}
