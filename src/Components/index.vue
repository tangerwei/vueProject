<template>
    <el-row>
        <el-col :span="24" class="header">
            <el-col :span="siderBarwith" class="logo">
                <img :src="collapsed?'../static/login.jpg':'simple-logo'"></img>
            </el-col>
            <el-col :span="24 - siderBarwith"></el-col>
        </el-col>
        <el-col :span="24" class="body">
            <sidebar :span="siderBarwith"></sidebar>
            <el-col :span="24 - siderBarwith">
                
            </el-col>
        </el-col>
    </el-row>
</template>
<script>
import sidebar from "./SiderBar/siderbar.vue"
export default {
    data() {
        return {
            siderBarwith: 5
        }
    },
    components: {
        sidebar
    },
    computed: {
        collapsed() {
            return this.$store.state.module_sideBar.menu_isopen;
        }
    },
    watch:{
        collapsed(val){
            this.siderBarwith = val ? 5 : 2;
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    height: 60px;
}
</style>
