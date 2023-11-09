class Ship {
  constructor(port) {
    this.startingPort = port;
  }

  setSail() {
    this.startingPort = "";
  }

  dock(nextPort) {
    this.startingPort = nextPort
  }
}



module.exports = Ship
