<template>
    <div ref="Login" class='LogIn G_Form'>

        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple-dark">
                    <router-link class="el-icon-close" id="G-Login-return" to="/">
                </router-link>
                </div>
            </el-col>
            <el-col :span="20"><div class="grid-content bg-purple-dark">&nbsp;</div></el-col>
        </el-row>
        <div class="reg-header">
            <div class="loginLogo"></div>
            <div class="item" style="font-size: 0.4rem;font-weight: 900;color: #333;margin-top: 22px;">
                账号登录
                <!--<div :class="Active ===0 ? 'active' : ' ' " class="tad"  @click="activeClick(0)">登录</div>-->
                <!--<div :class="Active ===1 ? 'active' : ' ' "  class="tad"  @click="activeClick(1)">手机登录</div>-->
            </div>
        </div>
        <div class="el-col" v-if="Active === 0">
            <el-form label-position="right" label-width="" :model="obj" >
                <el-form-item label="">
                    <el-input   v-model="obj.tname" ref="Loginname" type="text" placeholder="请输入手机号/用户名" :minlength=5 :maxlength=11>
                        <i slot="prefix" class="el-input__icon iconfont icon-gerenzhongxin"></i>
                    </el-input>
                </el-form-item>
                <div   style="background-color: #c8c7cc;height: 1px;transform-origin: 50% 100%;transform: scaleY(.5);"></div>
                <el-form-item label="">
                    <el-input v-model="obj.tpwd"  :minlength=6 :maxlength=12 type="password" placeholder="密码">
                        <i slot="prefix" class="el-input__icon  iconfont icon-denglu3"></i>
                    </el-input>
                    <span @click="eye" v-if="eyes ===true" class="iconfont icon-mimaxianshi eye"></span>
                    <span @click="eye"  v-if="eyes ===false" class="iconfont icon-mimaxianshi1 eye"></span>
                    <!--<span></span>-->
                </el-form-item>
                <div  style="background-color: #c8c7cc;height: 1px;transform-origin: 50% 100%;transform: scaleY(.5);"></div>
                <!--<p class=""></p>-->
                <!--<el-row>-->
                    <!--<el-col :span="24">-->
                        <!--<p style="font-size: 14px;line-height: 0.6rem;height: 0.6rem;text-align: right">-->
                            <!--<router-link to="/Registered" style="color: #c8a675;">-->
                                <!--忘记密码-->
                            <!--</router-link>-->
                        <!--</p>-->
                    <!--</el-col>-->
                <!--</el-row>-->
            </el-form>

            <el-button style="width: 85%;height: 50px;" class="G-submit  el-button--primary"  @click="submit">登录</el-button>
        </div>
        <!--<div class="el-col" v-if="Active === 1">-->
            <!--<el-form label-position="right" label-width="" :model="loginPhone" >-->
                <!--<el-form-item label="">-->
                    <!--<el-input v-model="loginPhone.mobileNo" :minlength=10 :maxlength=13 type="text" placeholder="手机号码">-->
                        <!--<i slot="prefix" class="el-input__icon  iconfont icon-shouji"></i>-->
                    <!--</el-input>-->
                    <!--<el-button class="phone__" type="primary" @click="sendSubmit()" :loading="phoneObj.judgment">{{phoneObj.text}}</el-button>-->
                <!--</el-form-item>-->
                <!--<div class="line-w"></div>-->
                <!--<el-form-item label="">-->
                    <!--<el-input v-model="loginPhone.msgCode" :minlength=4 :maxlength=4 type="text" placeholder="验证码">-->
                        <!--<i slot="prefix" class="el-input__icon  iconfont icon-yanzhengma1"></i>-->
                    <!--</el-input>-->
                <!--</el-form-item>-->
                <!--<div class="line-w"></div>-->
            <!--</el-form>-->
            <!--<el-button class="G-submit el-button&#45;&#45;primary"  @click="PhoneSubmit">下一步</el-button>-->
        <!--</div>-->
        <el-row>
            <el-col :span="24">
                <div class="" style="line-height: 20px;height: 20px;font-size: 14px;text-align: right;width: 85%;margin: 0 auto;">
                    <router-link to="/Registered" style="color:#333">
                        快速注册
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <div ref="bottomLogo" class="G-Login--logo">
            <el-row>
                <el-col :span="8"><div class="grid-content bg-purple-dark">&nbsp;</div></el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-dark">
                        <div class="x-icon-logo-bottom" ></div>
                    </div>
                </el-col>
                <el-col :span="8"><div class="grid-content bg-purple-dark">&nbsp;</div></el-col>
            </el-row>
        </div>

    </div>
</template>
<script>
    var vm;
    export default {
        data() {
            return {
                Topobj:{
                    text:'账号登录',
                    withdraw:'/'
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                phoneObj:{
                    text:'发送验证码',
                    judgment:false
                },
                loginPhone:{
                    mobileNo:'',//手机号
                    msgCode:'',
                    isMobile:1,
                    cagent:''//字段
                },
                eyes:false,
                timeNum:59,
                Active:0,
                obj:{
                    tname:'',
                    tpwd:'',
                    imgcode:'',
                    savelogin:1,
                    isImgCode:'0',
                    isMobile:1
                }
            };
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            phonetext:{
                get:function () {
                    if(this.timeNum >59){
                        return '重新获取'+ this.timeNum +'秒';
                    }else{
                        return '发送验证码'
                    }
                }
            }
        },
        mounted() {
            vm = this;
            this.$nextTick(function () {
                this.$refs.Login.style.height =window.innerHeight+'px';
                this.$refs.Login.style.background="#fff";
                this.$refs.bottomLogo.style.bottom="20px";
            })
        },
        methods:{
            eye(){
                if(this.eyes === false){
                    document.getElementsByClassName('el-input__inner')[1].setAttribute('type','text')
                    this.eyes = true;
                }else if(this.eyes === true){

                    document.getElementsByClassName('el-input__inner')[1].setAttribute('type','password')
                    this.eyes = false;
                }
            },
            activeClick:function (Num) {
                this.Active =Number(Num);
            },
            ImgCode:function () {
//                this.LoginImg();
            },
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
            sendSubmit:function () {//发送验证码
                let vm = this;
                vm.$message.closeAll();
                let phone= {mobileNo:""};
                phone.mobileNo = vm.loginPhone.mobileNo;
                vm.$sendRegirstCode(vm,phone,'Mobile/sendLoginCode.do')
            },
            PhoneSubmit:function () {
                let vm = this;
                vm.$message.closeAll();
                vm.$phonelogin(vm,vm.loginPhone)
            },
            submit:function () {
                vm = this;
//                vm.obj.tname = vm.$refs.Loginname.value;
                vm.$BugLogin(vm,vm.obj);
            }
        },
        created() {
            vm = this;
        },
        components: {}
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../public/Form.less";
.LogIn{
    position: relative;
    padding-bottom:75px;
    width: 100%;
    .el-form{
        width: 85%;
        margin: 0 auto;
    }
    .el-form-item__content{
        position: relative;
    }
    .eye{
        position: absolute;
        font-size: 18px;
        top: 5px;
        right: 5px;
    }
    .reg-header{
        margin: 20px 0;
        .item{
            width:190px;
            margin: 0 auto;
            .tad{
                float: left;
                width: 93px;
                margin-top: 5px;
                border:1px solid #e5e5e5;
                height: 30px;
                font-size: 14px;
                text-align: center;
                line-height: 30px;
                border-radius: 30px;
            }
            .tad:first-child{
                border-right: none;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            .tad:last-child{
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }
            div.active{
                background: #c8a675;
                color: #fff;
            }
        }
    }
    .phone__{
        position: absolute;
        top:5px;
        right:5px;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
        border:1px solid #c8a675;
        color: #c8a675;
        background:#fff ;
        border-radius: 5px;
        font-size: 14px;

    }
    .el-button--primary:focus, .el-button--primary:hover{
        background: #c8a675;
        color: #fff;
    }
    .el-button.is-loading{
        position: absolute;
    }
    .el-checkbox{
        font-size: 0.2rem;
    }
    .G-Login-Title{
        height: 80px;
        line-height: 80px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        color: #222;
    }
    .bg-purple-dark-reg{
        text-align: right;
        line-height: 40px;
        height: 40px;
        margin-bottom: 50px;
        padding-right: 40px;

    a{
            font-size: 14px;
            text-align: right;
            color: #222333;
        }
    }
    #G-Login-return{
        font-size: 25px;
    }
    .G-Login--logo{
        width: 100%;
        font-size: 15px;
        position: absolute;
    }
}
.loginLogo{
  width: 166px;
  height: 44px;
  background: url("http://mobile.beike188.com/mobileYHH/image/logo.png");
  background-size: cover;
  margin: auto;
}
</style>
