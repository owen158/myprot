<template>
    <div class='Registered fixed'>
        <div class="RegisteredBox">
            <Top :text="text"></Top>
            <Ruten :RouT="RouT"></Ruten>
            <div class="formWrapper">
                <div class="Promptbox"></div>
                <form action="">
                    <div class="item-form">
                        <label for="userName"><i class="iconfont icon-denglu"></i></label>
                        <input id="userName" v-model="reg.userName" v-Blur v-focus name="ruserName" minlength="5" maxlength="10" type="text" placeholder="用户名">
                        <!--<p class="prompt"></p>-->
                    </div>
                    <div class="item-form">
                        <label for="passWord"><i ></i></label>
                        <input id="passWord" v-model="reg.passWord" v-Blur v-focus name="rpassWord" minlength="6" maxlength="12" type="password" placeholder="密码">
                        <!--<p class="prompt"></p>-->
                    </div>
                    <div class="item-form">
                        <label for="repassWord"><i class="iconfont icon-mm"></i></label>
                        <input id="repassWord" v-model="reg.repassWord" v-Blur v-focus name="rrepassWord" minlength="6" maxlength="12" type="password" placeholder="确认密码">
                        <!--<p class="prompt"></p>-->
                    </div>
                    <div class="item-form">
                        <label for="realName"><i class="iconfont icon-denglu"></i></label>
                        <input id="realName" v-model="reg.realName" v-Blur v-focus name="rrealName" minlength="2" maxlength="4" type="text" placeholder="真实姓名必须与您的银行账户相同">
                        <!--<p class="prompt"></p>-->
                    </div>
                    <div class="item-form">
                        <label for="mobileNo"><i></i></label>
                        <input id="mobileNo"  v-model="reg.mobileNo" v-Blur v-focus name="rmobileNo" maxlength="11" type="text" placeholder="手机号码">
                        <!--<p class="prompt"></p>-->
                    </div>
                    <div class="item-form">
                        <label for="qkpwd"><i></i></label>
                        <input id="qkpwd" v-model="reg.qkpwd" v-Blur v-focus name="rqkpwd" type="password" maxlength="4" placeholder="请输入4位数字的资金密码">
                        <!--<p class="prompt"></p>-->
                    </div>
                    <div class="item-form">
                        <label for="code"><i class="iconfont icon-code"></i></label>
                        <input  id="code" v-num v-model="reg.imgcode" v-Blur v-focus name="rimgcode" type="text" maxlength="4" placeholder="验证码">
                        <img ref="imgcode" @click="LoginImg()" src="" id="ImgCode" class="ImgCode" alt="">
                        <!--<p class="prompt"></p>-->
                    </div>
                </form>
                <div class="logRegisterSubmit" @click="submit">注 册</div>
                <router-link class="logRegisterSubmit " to='/login'>
                    登录
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                text:{
                    title:'注册',
                    text:"Registered"
                },
                RouT:'/',
                reg:{
                    userName:'',//用户名
                    passWord: '',//密码
                    repassWord:'',//确认密码
                    mobileNo:'',//手机号
                    imgcode:'',//验证码
                    reguuid:'',//token
                    qkpwd:'',//取款密码
                    reqkpwd:'',//确认取款密码
                    realName:'',//真实姓名
                    cagent:'',//字段
                    isMobile:1,//类型
                    proxyname:''//
                }
            }
        },
        computed: {
            jrg:function () {////url
                return this.$store.state.jrg;
            },
            cagent:function () {////url
                return this.$store.state.cagent;
            }
        },
        mounted: function () {
            vm = this;
            vm.LoginImg();
        },
        methods: {
            LoginImg:function () {
                vm =this;
                vm.$refs.imgcode.src = vm.jrg+'validateCode?timesp'+(new Date()).valueOf();
            },
            submit:function () {
                vm =this;
                vm.$register.call(this,vm,vm.reg,'User/register');
            }
        },
        created(){
        },
        components: {
            Top,
            Ruten
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
@import "../public/logRegister.less";
.Registered{
    padding-top: 0.8rem;
    background:@bg-c1;
}
.RegisteredBox{
    min-height: 100%;
    padding-bottom: 1rem;
}
</style>