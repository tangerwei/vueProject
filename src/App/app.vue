<template>
<div id="app">
<!-- 路由出口 -->
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="dialogVisible = true">login</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><router-link :to="{path:'/error404',query: { userid: id }}">404</router-link></el-menu-item>
</el-menu>
<div class="line"></div>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  size="tiny"
  :before-close="handleClose">
  <span>{{$store.state.userId}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
<!-- 路由匹配到的组件将渲染在这里 -->
<router-view></router-view>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        id:10086,
        userId:"",
        loginUserId:this.$store.state.userId,
        dialogVisible: false
      };
    },
    created(){
      this.loginUserId = this.$store.state.userId;
    },
    methods: {
      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
        // console.log(this.$store.state.userId);
        // console.log(this.loginUserId);
      },
      login(){
        this.$store.dispatch({
          type:'loginUser',
          userId:this.userId
        });
      }
    }
  }
</script>