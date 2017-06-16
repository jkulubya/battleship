import Coordinates from './Coordinate.js'
import OccupationType from './OccupationType.js'

export default class Panel {
    constructor (x, y) {
        this.Coordinates = Coordinates(x, y)
        this.OccupationType = OccupationType.EMPTY
    }

    get IsOccupied () {
        return this.OccupationType === OccupationType.BATTLESHIP ||
                this.OccupationType === OccupationType.CARRIER ||
                this.OccupationType === OccupationType.CRUISER ||
                this.OccupationType === OccupationType.DESTROYER ||
                this.OccupationType === OccupationType.SUBMARINE
    }

    Coordinates;
    OccupationType;

    // israndom available method?
}
