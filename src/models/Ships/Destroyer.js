import Ship from '../Ship.js'
import OccupationType from '../OccupationType.js'

export default class Destroyer extends Ship {
    constructor () {
        super()
        this.Name = 'Destroyer'
        this.Size = 2
        this.OccupationType = OccupationType.DESTROYER
    }
}
