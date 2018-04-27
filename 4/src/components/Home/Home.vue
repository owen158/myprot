<template>
    <div class="Home-content">
        <transition :name="transitionName">
            <router-view class="app_view"></router-view>
        </transition>
        <el-footer class="footer" style="height: 50px;padding: 3px 0;background:#fff;">
            <el-row >
                <el-col :span="5">
                    <div class="grid-content G_nav_tad bg-purple">
                        <router-link  class="G_Tad" to="/AppPage">
                            <span class="G_sup Home x-icon" style="font-size: 20px;"></span>
                            <span class="G_sub">首页</span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content G_nav_tad bg-purple">
                        <router-link  class="G_Tad" to="/LiveVideo">
                            <span class="G_sup ction x-icon" style="font-size: 20px;"></span>
                            <span class="G_sub">分类</span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content G_nav_tad bg-purple" style="position: relative">
                        <div class="row"  v-if="userNew.userName != ''">
                            <router-link  class="G_Tad" to="/Lottery" >
                                <span class="G_sup" style="font-size: 20px;position: relative">
                                    <div class="G_displaaa x-icon"></div>
                                </span>
                                <span style="color: #c8a675;" class="G_sub">存款</span>
                            </router-link>
                        </div>
                        <div v-if="userNew.userName === ''">
                            <router-link  class="G_Tad" to="/Registered">
                                <span class="G_sup" style="font-size: 20px;position: relative">
                                    <div class="G_displaa x-icon"></div>
                                </span>
                                <span style="color: #c8a675;" class="G_sub">注册</span>
                            </router-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content G_nav_tad bg-purple">
                        <router-link  class="G_Tad" to="/NoteSingle">
                            <span class="G_sup service x-icon" style="font-size: 20px;width: 25px"></span>
                            <span class="G_sub">客服</span>
                        </router-link>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content G_nav_tad bg-purple">
                        <router-link v-if="userNew.userName != ''"  class="G_Tad" to="/MemberCentre">
                            <div>
                                <span class="G_sup personal x-icon" style="font-size: 20px;"></span>
                                <span class="G_sub">会员中心</span>
                            </div>
                        </router-link>
                        <router-link v-if="userNew.userName === ''"  class="G_Tad" to="/login">
                            <div >
                                <span class="G_sup personal x-icon" style="font-size: 20px;"></span>
                                <span class="G_sub">登录</span>
                            </div>
                        </router-link>

                    </div>
                </el-col>
            </el-row>
        </el-footer>
        <div v-show="userNew.applet">
            <div class="uploadApp" v-show="show1">
                <div class="content">
                    <div class="lf dowload" @click="show2 = !show2">
                        <span class="el-icon-upload"></span> 下载APP
                    </div>
                    <div class="rf" style="padding:0 10px;" @click="closeApp()">
                        <span class="el-icon-close"></span>
                    </div>
                </div>
            </div>
            <transition name="el-zoom-in-center">
                <div v-show="show2" class="App-box">
                    <div class="in-center">
                        <h2 class="title">安装指南 <span class="el-icon-close rf" @click="show2 = !show2"></span></h2>
                        <p class="text">
                            1.点击右下角“安装”。应用会自动在后台运行安装
                        </p>
                        <p class="text">2.打开设置>通用>设备管理</p>
                        <p class="text">
                            3.点击“Youland Information Technology(ShangHai)Co.,Ltd.”后，
                            选择“信任”
                        </p>
                        <p class="text" >
                            4.您已成功安装 IOS APP
                        </p>
                        <span class="rf text load" @click="Appload">立即安装</span>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
var vm;
export default {
    data () {
        return {
            App:true,
            titleapp:false,
            selected:'1',
            active:'',
            show1:true,
            show2:false,
            transitionName: 'slide-left'
        }
    },
    computed: {
        userNew:function () {//个人
            return this.$store.state.userNew;
        },
        annouationNew:function () {//公告
            return this.$store.state.annouationNew;
        },
        bankcard: function() {
            return this.$store.state.bankcard;
        }
    },
    mounted() {
    },
    methods:{
        closeApp(){
            this.show1 = false;
            this.show2 = false;
        },
        Appload(){
            this.show1 = false;
            this.show2 = false;
            window.location.href=this.userNew.appsrc
        }
    },
    components: {
    }
}
</script>
<style lang="less">
    .el-message .el-icon-success{
        font-size: 14px;
    }
    .el-message .el-icon-error{
        font-size: 14px;
    }
    .el-message .el-icon-warning{font-size: 14px;}
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .app_view {
        position: absolute;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
    .Bnner{
        width:100%;
        height:3rem;
        overflow: hidden;
        .swiper-container{
            height:3rem;
            .swiper-wrapper{
                height:3rem;
                .swiper-slide{
                    height:3rem;
                    img{
                        height: 100%;
                    }
                }
            }
        }
    }
    .Home-content{
        width: 100%;
    }
    /*<!--APP下载-->*/
    img{
        display: inline-block;
    }
    #somediv{
        width:100%;
        height: 100%;
        font-size: 0.5rem;
    }
    .footer{
        position: fixed;
        height: 50px;
        bottom:0;
        left:0;
        border-top: 1px solid #c4c4c4;
        padding: 3px 0;
        background: #fff;
        width: 100%;
    .G_nav_tad{

        font-size: 0px;
    .G_Tad{
        display: block;
        background: #fff;
        height: 42px;
    .G_sup{
        display: block;
        margin: 0 auto;
        height: 24px;
        width: 23px;

    }
    .G_displaaa,.G_displaa{
        position: absolute;
        top:-25px;
        width: 45px;
        height: 45px;
        left: -11px;
        border-radius: 50%;
    }
    .G_displaaa{
        background-position:  -258px -228px;
    }
    .G_displaa{
        background-position:  -302px -228px;
    }
    .G_sub{
        display: block;
        text-align: center;
        line-height: 20px;
        background: #fff;
        font-size: 14px;
    }
    }
    .x-icon{
        background: url('http://mobile.beike188.com/mobileYHH/image/icon.png');
        background-size:500px 500px;
    }
    .Home,.ction,.deposit,.service,.personal{

    }
    .ction{

        background-position:-4px -193px;
    }
    .Home{

        background-position:-54px -193px;
    }
    .service{
        background-position:-28px -193px;
    }
    .personal{

        background-position:-79px -193px;
    }
    a.router-link-exact-active{
    .Home{
        background-position:-54px -217px;
    }
    .ction{
        background-position:-5px -217px;
    }
    .G_sub{
        color: #c8a675;
    }
        .service{
            background-position:-27px -217px;
        }
        .personal{
            background-position:-79px -217px;
        }
    }
    }
    }
    .uploadApp{
        position: fixed;
        bottom: 59px;
        right: 3px;
        border:1px solid #d1dbe5;
        border-radius: 3px;
        color: #409eff;
        font-size: 14px;
        width: 150px;
    .content{
        line-height: 30px;
        height: 30px;
        background: #ffffff;
        position: relative;
    }
    .dowload{
        padding-left: 10px;
    }
    .content:after{
        content:" " ;
        position: absolute;
        left: 62px;
        bottom: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: #fff transparent transparent transparent;
    }
    }
    .App-box{
        position: fixed;
        bottom: 105px;
        height: 150px;
        width: 100%;
        font-size: 15px;
    .in-center{
        width: 95%;
        margin: 0 auto;
        background: #fff;
        height: 160px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #d1dbe5;
    }
    .title{
        width: 100%;
        padding: 8px;
        color: #fff;
        background: #1dabed;
        border-radius: 5px;
        text-align: left;

    }
    .text{
        font-size: 12px;
        line-height: 18px;
        text-align: left;
    }
    .load{
        padding: 3px 7px;
        font-size: 14px;
        color: #fff;
        margin-right: 15px;
        border-radius: 3px;
        background: linear-gradient(90deg,#a01f0a 0%, #e91e1e 100%);
        animation: gradientChange 2s infinite;
    }
    }
    @keyframes gradientChange  {
        100% {
            background: linear-gradient(90deg,  #e91e1e 0%, #6f27b0 100%);
        }
    }
</style>
