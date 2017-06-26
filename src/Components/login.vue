<template>
<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
<el-dialog title="登录地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item v-if="isRegister" label="邮箱" prop="email" :rules="[{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
    <el-input v-model="formLabelAlign.email" ></el-input>
  </el-form-item>
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

</template>
<script>
    export default {
        data(){
            return {
                islogin : this.$store.islogin,
                labelPosition:'left',
                formLabelAlign:{
                    name:'',
                    password:''
                }
            }
        },
        created(){
            console.log('sd');
        },
        methods:{
            login(){
                this.$store.dispatch({
                    type:'login',
                    name:this.formLabelAlign.name,
                    password:this.formLabelAlign.password
                });
            },
            register(){
                this.isRegister = true;
            }
        }
    }
</script>