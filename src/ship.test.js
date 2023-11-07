const Ship = require("./ship")

describe("constructor", ()=>{
    test("returns an object", ()=>{
        expect(new Ship()).toBeInstanceOf(Object)
    })

    test("returns ship with given starting port", ()=>{
        const ship = new Ship("Dover")
        expect(ship.startingPort).toBe("Dover")
    })
})