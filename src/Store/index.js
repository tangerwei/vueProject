import Vue from 'vue'
import Vuex from 'vuex'

import module_sideBar from './modules/sidebar'
import module_user from './modules/user'
//use state manage tool
Vue.use(Vuex);

const modules = {
    module_sideBar,
    module_user
}

export default new Vuex.Store({
    modules
})
