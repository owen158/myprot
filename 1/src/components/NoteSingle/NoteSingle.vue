<template>
    <div class='NoteSingle' ref="BackG">
        <Top :text="userNew.text"></Top>
        <div class="wrapper">
            <div class="wrapper-box">
                <h2>联系方式</h2>
                <div class="solid"></div>
                <p class="item">
                    <span class="icon-kefu iconfont"></span>
                    <!--<a  href="javascript:void(0)">-->
                        <!--txwl18899-->
                    <!--</a>-->
                    <!--<a href="skype:txwl18899?chat">skype业务支持</a>-->
                    <a href="http://tb.53kf.com/webCompany.php?arg=10168597&style=1" style="color: rgb(46, 62, 78); display: block; height: 0.8rem;">
                      <img src="http://192.168.0.140:82/mobileTX/images393/zx.gif" alt="" style="height: 0.8rem; top: 0px; left: 0px;">
                    </a>
                </p>
                <p class="item">
                    <span class="iconfont icon-qq-copy"></span>
                    <a v-show="userNew.applet" style="display:block;" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3516862958&site=qq&menu=yes"><img  border="0" src="http://wpa.qq.com/pa?p=2:3516862958:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>3516862958</a>
                    <a v-if="!userNew.applet" href="javascript:void(0)">
                        3516862958
                    </a>
                </p>
                <p class="item">
                    <span class="iconfont icon-weixintubiao"></span>
                    db76878
                    <!--tiantiancaipiao@gamil.com-->
                </p>
                <div class="row" style="width: 80%;margin: 0 auto">
                    <router-link class="Bg-Btn" to="/">
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

            }
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            }
        },
        mounted:function(){
            this.setBackground();
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.NoteSingle,{
    width:100%;
    .Bg-BackGround;
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
                color:#0a0a0a;
            }
            p{
                position: relative;
                width:64%;
                margin: 0 auto;
                text-align: left;
                height: 0.8rem;
                line-height: 0.8rem;
                color:#0a0a0a;
                padding-left: 1rem;
                font-size: 0.25rem;
                span{
                    position: absolute;
                    left:0.2rem;
                    top:0;
                    width:0.5rem;
                    height: 0.5rem;
                    font-size: 0.4rem;
                    color:#0a0a0a;
                    text-align: center;
                }
                a{
                    position: relative;
                    color:#0a0a0a;
                    display: block;
                    img{
                        position: absolute;
                        top:0.12rem;
                        width: 1.6rem;
                        height: 0.5rem;
                        left: 1.5rem;
                    }
                }
            }
        }
    }
}
</style>
