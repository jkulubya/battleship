import Panel from '../models/Panel'
import mixins from '../mixins'

export function UPDATE_PANEL (state, { x, y, occupationType }) {
    let index = mixins.methods.getPanelIndex(x, y)
    let newPanel = new Panel(x, y)
    newPanel.OccupationType = occupationType
    state.firingBoard.Panels.splice(index, 1, newPanel)
}
