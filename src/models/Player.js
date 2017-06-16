import GameBoard from './Gameboard.js'
import FiringBoard from './FiringBoard.js'
import Destroyer from './Ships/Destroyer.js'
import Submarine from './Ships/Submarine.js'
import Cruiser from './Ships/Cruiser.js'
import Battleship from './Ships/Battleship.js'
import Carrier from './Ships/Carrier.js'

export default class Player {
    constructor (name) {
        this.name = name
        this.FiringBoard = new FiringBoard()
        this.GameBoard = new GameBoard()
        this.Ships.push(
            new Destroyer(),
            new Submarine(),
            new Cruiser(),
            new Battleship(),
            new Carrier())
    }

    Name;
    GameBoard;
    FiringBoard;
    Ships = [];

    get HasLost () {
        let shipsSunk = this.Ships.reduce((previousVal, ship) => {
            if (ship.isSunk) return previousVal + 1
            return previousVal
        }, 0)

        return shipsSunk === 5
    }
}
