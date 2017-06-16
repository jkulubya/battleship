import Ship from '../Ship.js'
import OccupationType from '../OccupationType.js'

export default class Battleship extends Ship {
    constructor () {
        super()
        this.Name = 'Battleship'
        this.Size = 4
        this.OccupationType = OccupationType.BATTLESHIP
    }
}
