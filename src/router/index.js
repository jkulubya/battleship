import Vue from 'vue'
import Router from 'vue-router'
import TileContainer from '@/components/Tile/TileContainer'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: TileContainer
        }
    ]
})
