import Vue from 'vue'

export function START_GAME ({ commit }) {
    console.log('game started')
}

export function SHOOT_SHOT ({ commit, socket }, panel) {
    let payload = {
        x: panel.Coordinates.x,
        y: panel.Coordinates.y
    }

    let vinstance = new Vue()
    vinstance.$socket.emit('FIRE_SHOT', payload)
}

export function RECEIVE_FIRE_SHOT_RESULT ({ commit }, payload) {
    commit('UPDATE_PANEL', payload)
}

export function socket_receiveFireShotResult ({ dispatch }, message) { // eslint-disable-line
    dispatch('RECEIVE_FIRE_SHOT_RESULT', message)
}
