<template>
    <div id="Home">
        <router-view></router-view>
        <div class="footer row">
            <div class="item" >
                <router-link  class="col-d" to="/" :class="ActiveClass">
                    <span class="sup"><b class="iconfont icon-shouye"></b></span>
                    <span class="sub">首页</span>
                </router-link>
            </div>
            <div class="item">
                <router-link  class="col-d" to="/NoteSingle">
                    <span class="sup"><b class="iconfont icon-kefu"></b></span>
                    <span class="sub">客服</span>
                </router-link>
            </div>
            <div class="item">
                <router-link class="col-d" to="/deposit">
                    <span class="sup"><b class="iconfont icon-qukuan"></b></span>
                    <span class="sub">存取款</span>
                </router-link>
            </div>
            <div class="item">
                <router-link   class="col-d" to="/MemberCentre">
                    <span class="sup"><b class="iconfont icon-touxiang"></b></span>
                    <span class="sub">会员中心</span>
                </router-link>
            </div>
        </div>
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
                show1:true,
                show2:false,
                titleapp:false,
                selected:'1',
                active:'',

            }
        },
        computed: {
            userNew:function () {//个人
                return this.$store.state.userNew;
            },
            ActiveClass:{
                get:function () {
                   let obj = this.$route.params.name === "LooteryGame" || this.$route.params.name === "LiveVideo" || this.$route.params.name === "ElectronicGames"|| this.$route.params.name === "ElectronicGames" || this.$route.params.name === "Sportsevents" ? "router-link-exact-active" : '';
                    return obj
                },
                set:function () {

                }
            }
        },
        mounted() {
            vm = this;
        },
        methods:{
            dropoff:function () {
                let vm=this;
                vm.$BugNewdropOut(vm,{},'logout.do');
            },
            closeApp(){
                this.show1 = false;
                this.show2 = false;
            },
            Appload(){
                this.show1 = false;
                this.show2 = false;
                window.location.href=this.userNew.appsrc
            },

        },
        components: {
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../static/css/style.less";
    img{
        display: inline-block;
    }
    #somediv{
        width:100%;
        height: 100%;
        font-size: 0.5rem;
    }
    #Home {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: @colorOne;
    .footer{
        position: fixed;
        bottom:0;
        padding:0;
        height: 1rem;
        background: #f5f5f5;
        z-index: 50;
        border-top:1px solid @borOne;
        width:100%;
        font-size: 0;
        .item{
            height: 1rem;
            display: inline-block;
            vertical-align: top;
            width:24.9%;
        }
        a.router-link-exact-active{
            color:@text-c1;
        }
        a{
            display: block;
            width: 100%;
            color:@colorOne;
            border-bottom: none;
            font-size: 0.3rem;
            .sup,.sub{
                display: inline-block;
                width:100%;
                vertical-align: top;
            }
            .sup{
                position: relative;
                padding-top: 0.1rem;
                text-align: center;
                height: 0.6rem;
                b{
                    font-size: 0.45rem;
                }
            }
        }
    }
    }
    .uploadApp{
        position: fixed;
        bottom: 1.2rem;
        right:0.1rem;
        border:1px solid #d1dbe5;
        border-radius: 3px;
        color: #409eff;
        font-size: 0.26rem;
        width: 2.8rem;
        .content{
            line-height:0.6rem;
            height: 0.6rem;
            background: #ffffff;
            position: relative;
        }
        .dowload{
            padding-left: 0.2rem;
        }
        .content:after{
            content:" " ;
            position: absolute;
            left: 1.2rem;
            bottom: -0.2rem;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0.2rem 0.2rem 0 0.2rem;
            border-color: #fff transparent transparent transparent;
        }
    }
    .App-box{
        position: fixed;
        bottom:1.95rem;
        width: 100%;
        font-size: 0.3rem;
        .in-center{
            width: 97%;
            margin: 0 auto;
            background: #fff;
            padding: 0.1rem;
            overflow: hidden;
            border-radius: 0.1rem;
            border: 0.01rem solid #d1dbe5;
        }
        .title{
            width: 100%;
            padding: 0.15rem;
            color: #fff;
            margin: 0;
            font-size: 0.3rem;
            .Bg-Ganrett-Title;
            .borderRadius(0.1rem);
            text-align: left;

        }
        .text{
            font-size: 0.24rem;
            line-height: 0.4rem;
            text-align: left;
        }
        .load{
            /*padding: 0.07rem 0.15rem;*/
            font-size: 0.25rem;
            color: #fff;
            margin-right: 0.3rem;
            .borderRadius(0.06rem);
            .Bg-Btn;
            width: 2rem;
            text-align: center;
        }
    }
</style>
