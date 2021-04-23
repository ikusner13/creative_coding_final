class DataCollection {
  constructor(props) {
    this.id = props.id
    this.collection = props.data
    this.name = props.name
    this.value = props.value
  }

  getCollection() {
    return this.collection
  }
}
