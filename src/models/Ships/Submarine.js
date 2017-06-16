import Ship from '../Ship.js'
import OccupationType from '../OccupationType.js'

export default class Submarine extends Ship {
    constructor () {
        super()
        this.Name = 'Submarine'
        this.Size = 3
        this.OccupationType = OccupationType.SUBMARINE
    }
}
