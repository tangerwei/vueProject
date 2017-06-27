import Vue from 'vue'
import Router from 'vue-router'

//component
import login from '../Components/login.vue'
import error404 from '../Components/404.vue'

const RouterMap = [
    {
        path:"/",
        redirect: '/login'
    },{
        path:"/error404",
        component:error404
    }
    ]

Vue.use(Router);

export default new Router({
    routes:RouterMap
})