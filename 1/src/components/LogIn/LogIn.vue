<template>
    <div class='LogIn reg'  ref="BackG">
        <el-container >
            <TopCounter :title="'登录'" :src="'/'" :Boo="true"></TopCounter>
            <!--<Top :text=""></Top>-->
            <!--<withdraw :src="withdraw"></withdraw>-->
            <el-main>
                <p class="Title row" style="margin-top: 0.2rem"><span class="x-icon-logo"></span></p>
                <el-form label-position="right" status-icon :rules="rules" ref="ruleForm2" label-width="0px" :model="obj">
                    <el-form-item label="" prop="tname">
                        <el-input v-model="obj.tname" type="text" placeholder="用户名">
                            <i slot="prefix" class="iconfont icon-denglu"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="tpwd">
                        <el-input v-model="obj.tpwd" type="password" placeholder="密码">
                            <i slot="prefix" class="iconfont icon-mm"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="imgcode">
                        <el-input v-model="obj.imgcode" type="text" placeholder="验证码">
                            <i slot="prefix" class="iconfont icon-code" ></i>
                        </el-input>
                        <img @click="LoginImg()" ref="ImgCode" id="ImgCode" alt="">
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
                <el-row>
                    <el-col :span="24">
                        <router-link class="text" to="/Registered">
                            立即注册
                        </router-link>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    var vm;
    export default {
        data () {
            let validatetname = (rule, value, callback) => {
                let name =/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/;
                if (!value) {
                    return callback(new Error('请输入用户名'));
                }
                setTimeout( function() {
                    if (!name.test(value)) {
                        callback(new Error('用户名非数字开头，5-10位字母，数字组成'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatetpwd = (rule, value, callback) => {
                let tion =/^[0-9A-Za-z]{6,12}$/;
                if (!value) {
                    return callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatetcode = (rule, value, callback) => {
                let tion =/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请正确输入验证码'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('请正确输入验证码'));
                    }else{
                        callback();
                    }
                },300);
            };
            return {
                withdraw:'/',
                obj:{
                    tname:'',
                    tpwd:'',
                    imgcode:'',
                    savelogin:1,
                    isMobile:1
                },
                rules:{
                    tname: [{ validator: validatetname, trigger: 'blur' }],
                    tpwd:[{ validator: validatetpwd, trigger: 'blur' }],
                    imgcode:[{ validator: validatetcode, trigger: 'blur' }],
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm = this;
            vm.LoginImg();
            vm.setBackground();
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.$BugLogin(vm,vm.obj);
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
//            submit:function () {
//                vm = this;
//                vm.obj.tname = vm.$refs.Loginname.value;
//                vm.$BugLogin(vm,vm.obj);
//            }
        },
        created() {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.LogIn{
    .Bg-BackGround;
    padding-top: 0.8rem;
   .text{
       display: block;
       font-size: 14px;
       line-height: 0.8rem;
       color:@size-color;
   }

}
</style>