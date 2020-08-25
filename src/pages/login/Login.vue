<template>
    <div class="login-container">
        <div class="top-login"></div>
        <el-form :model="ruleForm2" :rules="rules2"
            status-icon
            ref="ruleForm2" 
            label-position="left" 
            label-width="0px" 
            class="demo-ruleForm login-page">
            <h3 class="title" style="margin-bottom:10px;">天航局西南分公司驾驶舱</h3>
            <el-form-item prop="username">
                <el-input
                    v-model="ruleForm2.username" 
                    auto-complete="off" 
                    placeholder="用户名"
                    size="mini"
                    show-text
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    v-model="ruleForm2.password" 
                    auto-complete="off" 
                    placeholder="密码"
                    size="mini"
                    show-password
                    
                ></el-input>
            </el-form-item>
            <el-checkbox 
                v-model="checked"
                class="rememberme"
                size="mini"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
                
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return {
            logining: false,
            ruleForm2: {
                username: '',
                password: '',
            },
            rules2: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        handleSubmit(event){
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    this.logining = true;
                    console.log('登录表单:',this.ruleForm2);
                    if(this.ruleForm2.username === 'admin' && 
                        this.ruleForm2.password === '123456'){
                            this.logining = false;
                            sessionStorage.setItem('user', this.ruleForm2.username);//保存登录信息
                            this.$router.push({path: '/secretaryPage'});
                    }else{
                        this.logining = false;
                        this.$alert('用户名或密码错误!', '错误信息', {
                            confirmButtonText: 'ok' 
                        })
                    }
                }else{
                    console.log('登录失败!');
                    return false;
                }
            })
        },
        ...mapMutations(['changeLogin']),
        login() {
            let _this = this;
            if(this.ruleForm2.username === '' || this.ruleForm2.password === '') {
                this.$alert('账号或密码不能为空');
            } else {
                this.axios({
                    method: 'post',
                    url: '/user/login',
                    data: _this.ruleForm2
                }).then(res => {
                    console.log(res.data);
                    //根据输入的用户名或许token和用户权限
                    _this.roles = this.data.data.body.roles;
                    _this.userToken = 'Bearer' + this.data.data.body.token;
                    _this.changeLogin({ Authorization: _this.userToken });
                    if(this.roles === ''){
                        _this.$router.push({path: '/secretaryPage'});
                        this.$alert('登录成功!');
                    } 
                }).catch(error => {
                    this.$alert('账号或密码错误');
                })
            }
        }
    }
};
</script>

<style scoped>
.title {
    color: #666;
    text-align: center;
    font-size: 12px;
}
.login-container {
    background-image: url('../../assets/app_bg.jpg');
    width: 100vw;
    height:100vh;
    background-size: 100% 100%;
}
.top-login {
    width: 100%;
    height: 80px;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: auto;
    width: 300px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px #cac6c6;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
    font-size: 8px;
}
.login-container >>> .el-checkbox__label {
    font-size: 12px;
}
.login-container >>> .el-form-item {
    margin-bottom: 16px;
}
</style>