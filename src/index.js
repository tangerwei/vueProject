import Vue from 'vue'
import {Menu,MenuItem,Submenu} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App/app.vue'

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);

new Vue({
    el: "#app",
    render: h => h(App)
})