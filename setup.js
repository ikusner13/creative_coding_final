var bkImage
let consolas
let userData
let collections

let inventory
let first = true
let mySound

const COLOR = [65, 255, 0]

function preload() {
  mySound = loadSound("assets/sound/2.31-steel-v4lley.webm.mp3")
  masterVolume(0.15)
  bkImage = loadImage("assets/scenes/room.jpg")
  consolas = loadFont("assets/Consolas.ttf")
  let dataobj = loadJSON("data.json", () => {
    userData = Object.entries(dataobj).map((data) => data[1])
  })
}

function setup() {
  mySound.setLoop(true)
  mySound.play()
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
  mgr.showScene(Intro)
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
      phone: Math.round(Math.random()) ? data.phone : " ",
      email: Math.round(Math.random()) ? data.email : " ",
      occupation: Math.round(Math.random()) ? data.occupation : " ",
      birthday: Math.round(Math.random()) ? data.birthday : " ",
      facebookID: Math.round(Math.random())
        ? `/${data.first_name}${data.id}`
        : " ",
      location: Math.round(Math.random()) ? data.city : " ",
    })
  })
}

function makeDataCollections() {
  let collections = []
  for (let i = 1; i <= 6; i++) {
    let data = makeData()
    let count = countProps(data)
    console.log("count", count)
    let collection = new DataCollection({
      id: i,
      data: data,
      name: `breach${i}`,
      value: count * 100, //Math.round(Math.floor(random(100, 2000)) / 100) * 100,
    })

    collections.push(collection)
  }
  return collections
}
function countProps(data) {
  console.log(data)
  let count = 0
  data.forEach((mydata) => {
    console.log("myd", mydata)
    for (let d in mydata) {
      if (mydata[d] !== " " && d !== "name") count++
    }
  })
  return count
}
