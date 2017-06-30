// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import store from './store'
import Vue from 'vue'
import mixins from './mixins'
require('./assets/reset.css')

Vue.config.productionTip = false
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
