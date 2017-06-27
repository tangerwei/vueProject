<template>
<div id="app">
<!-- 路由出口 -->
<div class="line"></div>
<el-col :span="2">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-submenu v-for="item in items">
      <template v-if = "item.title" slot="title"><i class="el-icon-menu"></i>{{item.title}}</template>
      <el-menu-item-group v-if="item.childs.length>0">
        <el-menu-item v-for="itemChild in item.childs">
        {{itemChild}}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
      <!--<el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>-->
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item v-if="!isLogined" index="3" @click="openLogin()"><i class="el-icon-setting"></i>登录</el-menu-item>
      <el-menu-item v-if="isLogined" index="3"><i class="el-icon-setting"></i>用户信息</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="32">
  <router-view></router-view>
  </el-col>
<loginForm :show-login-form="showLoginForm"></loginForm>
<!-- 路由匹配到的组件将渲染在这里 -->
</div>
</template>
<script>
import { mapState } from 'vuex'
import loginForm from '../Components/login.vue'
  export default {
    components:{
      'loginForm':loginForm
      },
    data() {
      return {
        showLoginForm:false,
        items:[{title:"第一组",childs:["选项1","选项2"]},{title:"第二组",childs:["选项1","选项2"]}]
      };
    },
    created(){
      // this.isLogined = true;
    },
    computed:{
      isLogined(){
        console.log(this.$store.state.isLogined);
        return this.$store.state.isLogined;
      }
    },
    methods: {
      openLogin(){
        this.showLoginForm=!this.showLoginForm;
      }
    }
  }
</script>