<template>
<div id="app">
<!-- 路由出口 -->
<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link :to="{path:'/login',query: { userid: id }}">login</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><router-link :to="{path:'/error404',query: { userid: id }}">404</router-link></el-menu-item>
</el-menu>
<div class="line"></div>
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
        id:10086
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>