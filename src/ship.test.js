const Ship = require("./ship");
const Port = require("./port");
const Itinerary = require("./itinerary");

describe("constructor", () => {
  test("returns an object", () => {
    const port1 = new Port("port1");
    const itinerary = new Itinerary([port1]);
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });

  test("returns ship with given current port", () => {
    const port1 = new Port("port1");
    const port2 = new Port("port2");
    const itinerary = new Itinerary([port1, port2]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port1);
  });
});

describe("ship to set sail from port", () => {
  test("setSail from starting port", () => {
    const port1 = new Port("port1");
    const port2 = new Port("port2");
    const itinerary = new Itinerary([port1, port2]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toEqual(port1);
  });
});

describe("port object", () => {
  test("returns an object", () => {
    expect(new Port("Dover")).toBeInstanceOf(Object);
  });

  test("port has a name", () => {
    const port = new Port("Dover");
    expect(port.name).toEqual("Dover");
  });
});

describe("ship can dock at another port", () => {
  test("dock method", () => {
    const port1 = new Port("port1");
    const port2 = new Port("port2");
    const itinerary = new Itinerary([port1, port2]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(port2);
  });
});

describe("itinerary object", () => {
  test("returns an object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  test("itinerary can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itin1 = new Itinerary([dover, calais]);
    expect(itin1.ports).toEqual([dover, calais]);
  });

  test("reached the end of the itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itin1 = new Itinerary([dover, calais]);
    const ship = new Ship(itin1);
    ship.setSail();
    ship.dock();
    ship.setSail();
    expect(() => ship.dock()).toThrowError(
      "You have reached the end of the itinerary"
    );
  });
});

describe("add ships to port when it docks", () => {
  test("Port has ships property", () => {
    const dover = new Port("Dover");
    expect(dover.ships).toEqual([]);
  });

  test("add ship function", () => {
    const dover = new Port("Dover");
    const ship1 = {}
    dover.addShip(ship1);
    expect(dover.ships).toEqual([ship1]);
  });

  test("remove ship function", () => {
    const soton = new Port("Soton")
    const qmary = {}
    const barbara = {}
    soton.ships = [qmary, barbara]
    soton.removeShip(qmary);
    expect(soton.ships).toEqual([barbara]);
  });

  test("when ship is instantiated, it gets added to port", () => {
    const dover = new Port("Dover");
    const itin = new Itinerary([dover]);
    const ship1 = new Ship(itin);
    expect(dover.ships).toEqual([ship1]);
  });

  test("When ship docks at another port it is removed from the previous port and added to the new port", ()=>{
    const dover = new Port("Dover")
    const calais = new Port("Calais")
    const itin = new Itinerary([dover, calais])
    const ship1 = new Ship(itin)
    ship1.setSail()
    ship1.dock()
    expect(ship1.currentPort).toEqual(calais)
    expect(calais.ships).toContain(ship1)
  })
});
