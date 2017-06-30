import Panel from './Panel.js'

export default class GameBoard {
    constructor () {
        this.Panels = []
        for (var i = 1; i <= 10; i++) {
            for (var j = 1; j <= 10; j++) {
                this.Panels.push(new Panel(j, i))
            }
        }
    }

    Panels;
}
