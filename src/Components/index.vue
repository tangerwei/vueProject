<template>
    <el-row>
        <el-col :span="24" class="header">
            <el-col :span="siderBarwith" class="logo">
                <div class="self-logo-container">
                    <img :src="logosrc" alt="logo">
                </div>
            </el-col>
            <el-col :span="24 - siderBarwith"></el-col>
        </el-col>
        <el-col :span="24" class="body">
            <el-col :span="siderBarwith">
                <router-view name="sidebar"></router-view>
            </el-col>
            <el-col :span="24 - siderBarwith">
                <router-view name="content"></router-view>
            </el-col>
        </el-col>
    </el-row>
</template>
<script>
import sidebar from "./SiderBar/siderbar.vue"
export default {
    data() {
        return {
            siderBarwith: 4,
            logosrc:"../static/images/logo.jpg"
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
            this.siderBarwith = val ? 4 : 2;
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    height: 60px;
}
.self-logo-container{
    height:100%;
    width:100%;
    text-align:center;
    &>img{
        height:100%;
        width:auto;
    }
}
</style>
