import OccupationType from '../models/OccupationType'

export function START_GAME ({ commit }) {
    console.log('game started')
}

export function SHOOT_SHOT ({ commit }, panel) {
    // send shot to server and save response
    let payload = {
        x: panel.Coordinates.x,
        y: panel.Coordinates.y,
        occupationType: OccupationType.HIT
    }
    commit('UPDATE_PANEL', payload)
}

export function RECEIVE_SHOT ({ commit }) {

}
