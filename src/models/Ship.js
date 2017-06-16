export default class Ship {
    Name;
    Size;
    Hits;
    OccupationType;

    get IsSunk () {
        return this.Hits >= this.Size
    }
}
