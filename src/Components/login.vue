<template>
    <el-form :model="user" ref="loginform" label-position="left" label-width="100px" class="demo-dynamic self-login-form">
        <h3 class="title">系统登录</h3>
        <el-form-item label="账号" :rules="[{required:true,message:'账号不能为空'}]">
            <el-input v-model="user.account" placeholder="请输入账号或者邮箱" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" :rules="[{required:true,message:'密码不能为空'}]">
            <el-input v-model="user.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="">
            <el-checkbox :model="checked" checked class="remember">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%" @click="login()">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            user: {
                account: 'admin',
                password: '111111'
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch({
                type: "module_user/login",
                user: this.user
            });
            this.$router.push("/management");
        }
    }
}
</script>
<style lang="scss" scoped>
.self-login-form {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
}
</style>