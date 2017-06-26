import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
//import getters from './getters'
//use state manage tool
Vue.use(Vuex);

var state = {
    userId:'9527'
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})
