<template>
    <div class='NoteSingle'>
        <Top :text="Topobj"></Top>
        <div  class="wrapper">
            <div class="wrapper-box">
                <h2>联系方式</h2>
                <div class="solid"></div>
                <p class="item">
                    <span class="icon-kefu iconfont"></span>
                    <a href="https://messenger.providesupport.net/messenger/0gjshd2e66zb71g4atk78y65k8.html" style="color: rgb(46, 62, 78); display: block; height: 0.8rem;">
                      <img src="http://mobile.beike188.com/mobileYHH/image/zx.gif" alt="" style="height: 0.8rem; top: 0px; left: 0px;">
                    </a>
                </p>
                <p class="item"><span class="iconfont icon-qq-copy"></span>
                    <a v-show="userNew.applet" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=5121228&site=qq&menu=yes" style="display: block;">
                        <img border="0" src="http://wpa.qq.com/pa?p=2:30080114:41" alt="点击这里给我发消息" title="点击这里给我发消息">
                        5121228
                    </a>
                    <a v-if="!userNew.applet" target="_blank" href="javascript:void(0)" style="display: block;">5121228</a>
                </p>
                <p class="item"><span class="iconfont icon-youxiang"></span>aomenyinhe2008@gmail.com
                </p>
                <div class="row" style="width: 80%;margin: 0 auto">
                    <router-link style="background: #c8a675" class="submit" to="/">
                        返回首页
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'客服',
                    withdraw:'/'
                }
            }
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            }
        },
        mounted:function(){

        },
        methods:{
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.NoteSingle{
    width:100%;
}
.NoteSingle{
    .solid{
        border-top: none;
    }
    .wrapper{
        position: fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.56);
        z-index: 300;
        .wrapper-box{
            width:80%;
            margin: 40% auto;
            background: #fff;
            border-radius: 5px;
            h2{
                font-size: 0.3rem;
                height: 0.7rem;
                line-height: 0.7rem;
                color:#333;
            }
            p{
                position: relative;
                width:64%;
                margin: 0 auto;
                text-align: left;
                height: 0.8rem;
                line-height: 0.8rem;
                color:#222;
                padding-left: 1rem;
                font-size: 0.25rem;
                span{
                    position: absolute;
                    left:0.2rem;
                    top:0;
                    width:0.5rem;
                    height: 0.5rem;
                    font-size: 0.4rem;
                    color:#222;
                    text-align: center;
                }
                a{
                    position: relative;
                    color:#222;
                    display: block;
                    img{
                        position: absolute;
                        top:0.12rem;
                        width: 1.6rem;
                        height: 0.5rem;
                        left: 1.3rem;
                    }
                }
            }
        }
    }
}
</style>
