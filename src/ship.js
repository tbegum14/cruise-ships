
class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null
    this.currentPort.addShip(this)
  }

  setSail() {
    this.previousPort = this.currentPort
    this.previousPort.removeShip(this)
    this.currentPort = null
  }

  dock() {
    const newIndex = this.itinerary.ports.indexOf(this.previousPort)+1
    if (newIndex>this.itinerary.ports.length-1){
        throw new Error("You have reached the end of the itinerary")
    }
    this.currentPort = this.itinerary.ports[newIndex];
    this.currentPort.addShip(this)
  }
}

module.exports = Ship;
