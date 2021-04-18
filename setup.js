var bkImage

function preload() {
  bkImage = loadImage("assets/scenes/room.jpg")
}

function setup() {
  createCanvas(bkImage.width, bkImage.height)
  textAlign(CENTER)
  rectMode(CENTER)

  var mgr = new SceneManager()
  mgr.bkImage = bkImage // inject bkImage property
  mgr.bgWidth = bkImage.width
  mgr.bgHeight = bkImage.height
  mgr.wire()
  mgr.showScene(BuySell)
}
