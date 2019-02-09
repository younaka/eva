import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
