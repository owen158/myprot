<template>
    <div class='Login fixed'>
        <div class="loginbox row">
            <Top :text="text"></Top>
            <Ruten :RouT="RouT"></Ruten>
            <div class="formWrapper">
                <div class="Promptbox"></div>
                <form action="">
                    <div class="item-form">
                        <label for="tname">
                            <i class="iconfont icon-denglu"></i>
                        </label>
                        <input id="tname" name="ltname"  ref="tname" v-focus type="text" minlength="5" maxlength="10" placeholder="用户名">
                    </div>
                    <div class="item-form">
                        <label for="tpwd">
                            <i class="iconfont icon-mm"></i>
                        </label>
                        <input id="tpwd" name="ltpwd" v-model="login.tpwd" minlength="6" maxlength="12" v-focus type="password" placeholder="密码">
                    </div>
                    <div class="item-form">
                        <label for="code">
                            <i class="iconfont icon-code"></i>
                        </label>
                        <input id="code"  name="limgcode" v-num v-model="login.imgcode" maxlength="4" v-focus type="text" placeholder="验证码">
                        <img ref="imgcode" @click="LoginImg()" src="" id="ImgCode" class="ImgCode" alt="">
                    </div>
                </form>
                <div class="logRegisterSubmit" @click="submit">456</div>
                <router-link class="logRegisterSubmit " to='/Registered'>
                    注册账号
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    var vm;
    import  Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                text:{
                    title:'登录',
                    text:"Login"
                },
                RouT:'/',
                login:{
                    tname:'',
                    tpwd:'',
                    imgcode:'',
                    savelogin:1,
                    isMobile:1
                }
            }
        },
        computed: {
            cagent:function () {//系统提示
                return this.$store.state.cagent;
            },
            jrg:function () {////url
                return this.$store.state.jrg;
            },
        },
        mounted: function () {
            this.LoginImg();
        },
        methods: {
            LoginImg:function () {
                vm =this;
                vm.$refs.imgcode.src = vm.jrg+'validateCode?timesp'+(new Date()).valueOf();
            },
            submit:function () {
                vm = this;
                vm.login.tname = vm.$refs.tname.value;
                vm.$login(vm,vm.login,'login.do');
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
    .Login{
        font-size: 0;
        padding-top: 0.8rem;
        background:@bg-c1;
    }
    .loginbox{
        min-height: 100%;
        padding-bottom: 1rem;
    }
</style>