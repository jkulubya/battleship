import Panel from './Panels.js'

export default class GameBoard {
    constructor () {
        this.Panels = []
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                this.Panels.push(new Panel(i, j))
            }
        }
    }

    Panels;
}
