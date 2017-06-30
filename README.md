# vueProject

#### 组件参考

http://tech.163.com/special/00097UHL/tech_datalist.js?callback=data_callback
http://tech.163.com/special/00097UHL/tech_datalist_2.js?callback=data_callback

http://vuex.vuejs.org/zh-cn/actions.html
https://cn.vuejs.org/v2/guide/state-management.html
http://router.vuejs.org/zh-cn/api/route-object.html


web
http://mint-ui.github.io/docs/#/zh-cn2/tabbar


pc
http://element.eleme.io/#/zh-CN/component/installation


modules 下
//get moduleA's state
this.$store.state.module_A
//调用moduleA的action(必须设置namespaced:true)
this.$store.dispatch({
    type:"moduleA/login"
})
//所以并不允许action重名