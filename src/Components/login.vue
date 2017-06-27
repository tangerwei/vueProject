<template>
<el-dialog class="self-login-width" title="登录" :visible.sync="show">
  <el-form>
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="formLabelAlign.password"></el-input>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="show = false">取 消</el-button>
    <el-button type="primary" @click="login()">确 定</el-button>
  </div>
</el-dialog>
</template>
<script>
    export default {
        name:'loginForm',
        props:['showLoginForm'],
        data(){
            return {
                show:false,
                formLabelAlign:{
                    name:'',
                    password:''
                }
            }
        },
        watch:{
            showLoginForm:function(val){
                this.empty();
                this.show = true;
            }
        },
        methods:{
            empty(){
                this.formLabelAlign.name = '';
                this.formLabelAlign.password = '';
            },
            login(){
                //open loading
                this.$store.dispatch("openLoading");
                //login
                this.$store.dispatch({
                    type:"userlogin",
                    name:this.formLabelAlign.name,
                    password:this.formLabelAlign.password
                });
                //close loading
               setTimeout(() => {
                   this.$store.dispatch("closeLoading");
                   this.show = false
                   }, 3000);
                }
        }
    }
</script>
<style>
    .self-login-width .el-dialog--small{
        width:300px;
    }
</style>