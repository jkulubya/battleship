import Vue from 'vue'
import Router from 'vue-router'
// import AppContainer from '../AppContainer'
import PlaceShips from '../PlaceShips'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: PlaceShips
        }
    ]
})
