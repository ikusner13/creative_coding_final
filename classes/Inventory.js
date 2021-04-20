class Inventory {
  constructor() {
    this.collectionsOwned = []
    this.money = 500
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
}
