<template>
    <el-col :span="24">
        <el-menu :default-active="activeMenu" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户</template>
                <el-menu-item-group>
                    <template slot="title">个人信息</template>
                    <router-link to="/management/user/message"><el-menu-item index="1-1">账号信息</el-menu-item></router-link>
                    <router-link to="/management/user/authorization"><el-menu-item index="1-2">授权</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
    </el-col>
</template>
<script>
export default {
    name: "sidebar",
    data() {
        return {

        }
    },
    created(){
        const MenuMap = [{
            key:"1-1",
            value:"/management/user/message"
        },{
            key:"1-2",
            value:"/management/user/authorization"
        }];
        const currentRouter = this.$route.path;
        console.log(currentRouter);
        //init active menu
        //this.activeMenu = "1-1";
        for(var i = 0;i<MenuMap.length;i++){
            if(MenuMap[i].value == currentRouter){
                this.activeMenu = MenuMap[i].key;
                break;
            };
        }
    },
    methods: {
        collapse() {
            this.$store.dispatch({
                type: "module_sideBar/closeMenu"
            })
        }
    }
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
</style>
