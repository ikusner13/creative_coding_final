class Inventory {
  constructor() {
    this.collectionsOwned = []
    this.money = 2500
    this.scamsPerformed = {}
    this.totalScams = 0
  }
  addCollection(collection) {
    this.collectionsOwned.push(collection)
  }
  addMoney(amount) {
    this.money = this.money + amount
  }
  subtractMoney(amount) {
    this.money = this.money - amount
  }
  scammed(collection) {
    console.log(collection)
    if (this.scamsPerformed.hasOwnProperty(collection.name)) {
      this.scamsPerformed[collection.name].timesAttacked =
        this.scamsPerformed[collection.name].timesAttacked + 1
      this.scamsPerformed[collection.name].resources = this.countProperties(
        collection
      )
    } else {
      let count = this.countProperties(collection)
      this.scamsPerformed[collection.name] = {
        timesAttacked: 1,
        resources: count,
      }
    }
    this.totalScams = this.totalScams + 1
    console.log("scams", this.scamsPerformed)
  }
  countProperties(collection) {
    let count = 0
    for (let c in collection) {
      if (collection[c] !== " " && c !== "name") count++
    }
    console.log("count", count)
    return count
  }
}
