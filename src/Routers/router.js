import Vue from 'vue'
import Router from 'vue-router'

//login page
import login from '../Components/login.vue'
//login 
import index from '../Components/index.vue'

import error404 from '../Components/404.vue'

const RouterMap = [
    {
        path: "/",
        redirect: '/login'
    }, {
        path: "/login",
        component: login
    }, {
        path: "/error404",
        component: error404
    },, {
        path: "/management",
        redirect:'/management/user'
    }, {
        path: "/management/:id",
        component: index
    }
]

Vue.use(Router);

var router = new Router({
    routes: RouterMap
})
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
});
export default router;