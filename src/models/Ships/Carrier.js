import Ship from '../Ship.js'
import OccupationType from '../OccupationType.js'

export default class Carrier extends Ship {
    constructor () {
        super()
        this.Name = 'Aircraft Carrier'
        this.Size = 5
        this.OccupationType = OccupationType.CARRIER
    }
}
