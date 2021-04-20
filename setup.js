var bkImage
let consolas
let userData
let collections

let inventory

const COLOR = [65, 255, 0]

function preload() {
  bkImage = loadImage("assets/scenes/room.jpg")
  consolas = loadFont("assets/Consolas.ttf")
  let dataobj = loadJSON("data.json", () => {
    userData = Object.entries(dataobj).map((data) => data[1])
  })
}

function setup() {
  userData = makeData()
  collections = makeDataCollections()
  createCanvas(bkImage.width, bkImage.height)
  textAlign(CENTER)
  rectMode(CENTER)
  textFont(consolas)
  textSize(12)

  inventory = new Inventory()

  var mgr = new SceneManager()
  mgr.inventory = inventory
  mgr.bkImage = bkImage // inject bkImage property
  mgr.terminal = terminalBackground
  mgr.bgWidth = bkImage.width
  mgr.bgHeight = bkImage.height
  mgr.wire()
  mgr.showScene(BuySell)
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
  text(
    `MONEY:${inventory.money}`,
    mainWindow_w - 10,
    bgHeight / 2 - mainWindow_h / 2 + 25
  )
  pop()
}

function makeData() {
  return userData.map((data) => {
    return new Data({
      name: `${data.first_name} ${data.last_name}`,
      phone: data.phone,
      email: data.email,
      occupation: data.occupation,
      birthday: data.birthday,
      facebookID: `/${data.first_name}${data.id}`,
      location: data.city,
    })
  })
}

function makeDataCollections() {
  let collectionData = []
  let collections = []
  for (let i = 0; i < userData.length; i++) {
    if (i !== 0 && i % 7 == 0) {
      collections.push(
        new DataCollection({
          data: collectionData,
          name: `collection${i}`,
          value: random(10, 5000),
        })
      )
      collectionData = []
    }
    collectionData.push(userData[i])
  }
  collections.push(
    new DataCollection({
      data: collectionData,
      name: `collection${userData.length}`,
      value: Math.floor(random(10, 5000)),
    })
  )

  return collections
}
