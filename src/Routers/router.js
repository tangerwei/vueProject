import Vue from 'vue'
import Router from 'vue-router'

//login page
import login from '../Components/login.vue'
//login 
import index from '../Components/index.vue'

import error404 from '../Components/404.vue'

var routes = [
    {
        path: "/",
        redirect: '/login'
    }, {
        path: "/login",
        component: login
    }, {
        path: "/error404",
        component: error404
    }
]

import sidebar from '../Components/SiderBar/siderbar.vue'

import userMessage from '../Components/User/userMessage.vue'

import userAuthorization from '../Components/User/userAuthorization.vue'
//create management router map
var initManagement = {
    path: "/management",
    component: index,
    children: [{
        path: "default",
        redirect: "user/message"
    }]
}
// defined management map
var managementMapList = [{
    path: "user/message",
    components: {
        sidebar: sidebar,
        content: userMessage
    }
},{
    path: "user/authorization",
    components: {
        sidebar: sidebar,
        content: userAuthorization
    }
}]

function createRouterMap(ManagementMap) {
    if (Array.isArray(ManagementMap)) {
        ManagementMap.map(function(v){
            initManagement.children.push(v);
        });
    }
    return initManagement;
}
routes.push(createRouterMap(managementMapList));
// console.log(routes);
Vue.use(Router);

var router = new Router({
    routes
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