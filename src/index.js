import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App/app.vue'
import routes from './Routers/router'
// import Vuex from 'vuex'
import store from './Store'
// use component
Vue.use(ElementUI);

new Vue({
    el: "#app",
    router: routes,
    store,
    render: h => h(App)
})