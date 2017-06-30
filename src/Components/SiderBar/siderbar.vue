<template>
    <el-col :span="span">
        <el-menu class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户</template>
                <el-menu-item-group>
                    <template slot="title">个人信息</template>
                    <el-menu-item index="1-1"><router-link to="/management/user/message">账号信息</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link to="/management/user/authorization">授权</router-link></el-menu-item>
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
    props: ["span"],
    data() {
        return {

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
