import Vue from 'vue'
import { Menu, MenuItem, Submenu } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App/app.vue'
import routes from './Routers/router'
import Vuex from 'vuex'
// use component
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);


new Vue({
    el: "#app",
    router: routes,
    render: h => h(App)
})