/// <reference path="./p5.d/p5.global-mode.d.ts" />
//    All 8-bit game template assets can be found here:

//    https://drive.google.com/drive/folders/1tmxqe3M4MmvdkCXFCZdoDhmwMw8dlxa0?usp=sharing

// Example Scene Global Variables
// (to expand this template to include
//  multiple scenes, make a global
//  array variable called scenes)
let exampleScene
let exampleScene2
let exampleSceneBGImage

// Hero Sprite Global Variables
let heroSprite
let heroWalkAnimation
let heroStandAnimation

// Example Interaction Global Variables
let exampleInteractionSpriteAnimation
let exampleInteractionSprite
let exampleInteractionSprite2
let exampleInteractionSpriteW = 150
let exampleInteractionSpriteH = 150

let index = 1
let scenes = []

function preload() {
  // Load the bg image for our scene
  exampleSceneBGImage = loadImage("assets/scenes/room.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  // CREATE PAGE DESIGN
  // (can be used for all scenes)
  // ****************************
  let bgImageWidth = 600
  let byImageHeight = bgImageWidth
  let textBoxWidth = bgImageWidth * 0.6
  let marginLeft = bgImageWidth * 0.2
  let marginTop = 10
  let verticalPadding = 10
  let textBoxHeight = 50
  let buttonHeight = 25
  let bgColor = color(0)
  let textColor = color(255)
  let buttonBGColor = color(255)
  let buttonTextColor = color(0)

  let pageDesign = new PageDesign(
    bgImageWidth,
    byImageHeight,
    marginLeft,
    marginTop,
    verticalPadding,
    textBoxWidth,
    textBoxHeight,
    buttonHeight,
    bgColor,
    textColor,
    buttonBGColor,
    buttonTextColor
  )

  // CREATE INTERACTION PAGES
  // (this is the scripted interaction
  // that will happen when our hero
  // approaches the interaction sprite)

  let tempIndex
  let tempPageText
  let tempChoices
  let tempConsequences
  let interactionPages = []

  // page 0

  // page 3
  tempIndex = 0
  tempPageText = "sell"
  tempChoices = []
  tempConsequences = []
  interactionPages[tempIndex] = new Page(
    tempPageText,
    tempChoices,
    tempConsequences,
    pageDesign
  )

  tempIndex = 1
  tempPageText = "buy"
  tempChoices = []
  tempConsequences = []
  interactionPages[tempIndex] = new Page(
    tempPageText,
    tempChoices,
    tempConsequences,
    pageDesign
  )

  // CREATE OUR INTERACTION
  let exampleInteraction = new Interaction(interactionPages, 0)
  let buyInteraction = new Interaction(interactionPages, 0)
  let sellInteraction = new Interaction(interactionPages, 0)

  exampleScene = new DataScreen({
    bgImage: null,
    interactions: [exampleInteraction],
    pageDesign: pageDesign,
  })
  scenes.push(exampleScene)

  exampleScene2 = new DataViewScreen({
    bgImage: null,
    interactionPages: [exampleInteraction],
    pageDesign: pageDesign,
    log: [1, 2, 3, 4],
  })
  scenes.push(exampleScene2)
}

function draw() {
  // OH the simplicity, elegance and beauty :)
  scenes[index].update()
}

function mousePressed() {
  exampleScene.checkMousePress()
}
