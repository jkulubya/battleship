import Ship from '../Ship.js'
import OccupationType from '../OccupationType.js'

export default class Cruiser extends Ship {
    constructor () {
        super()
        this.Name = 'Cruiser'
        this.Size = 3
        this.OccupationType = OccupationType.CRUISER
    }
}
