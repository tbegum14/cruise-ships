const Ship = require("./ship");
const Port = require("./port");

describe("constructor", () => {
  test("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  test("returns ship with given starting port", () => {
    const port = new Port("port1");
    const ship = new Ship(port);
    expect(ship.startingPort).toBe(port);
  });
});

describe("ship to set sail from port", () => {
  test("setSail from starting port", () => {
    const ship = new Ship("Dover");
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});

describe("port object", () => {
  test("returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  test("port has a name", () => {
    const port = new Port("Dover");
    expect(port.name).toEqual("Dover");
  });
});

describe("ship can dock at another port", () => {
  test("dock method", () => {
    const port = new Port("Dover");
    const port1 = new Port("Southampton");
    const ship = new Ship(port);
    ship.setSail();
    ship.dock(port1);
    expect(ship.startingPort.name).toEqual("Southampton");
  });
});
