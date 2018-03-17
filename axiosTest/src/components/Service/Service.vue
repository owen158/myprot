<template>
    <div class='Service'>
        <Top :text ='text'></Top>
        <div class="wrapper">
            <h2>联系方式</h2>
            <div class="tad">
                <!--sfdsfsd-->
                <span class="iconfont icon-skype skype"></span>sfsdfsfasfsadfsdfsasd
            </div>
            <div class="tad">
                <span class="iconfont icon-qq-copy QQ"></span> 78979465464654
            </div>
            <div class="tad">
                <span class="iconfont icon-youxiang Em"></span>45646
            </div>
            <div class="tad">
                <router-link class="main " to="/">
                    返回首页
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Top from '../Public/Top.vue'
    export default {
        data () {
            return {
                text:{
                    title:'客服',
                    text:'Service'
                },
            }
        },
        computed: {
        },
        mounted:function(){
        },
        methods:{
        },
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../../../static/css/style.less";
.Service{
    position: fixed;
    left:0;
    top:0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 30;
    .wrapper{
        width: 80%;
        margin: 3rem auto;
        height: 3.5rem;
        font-size: 0;
        background: #fff;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        h2{
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.3rem;
            color:#2f2f2f;
            border-bottom: 1px solid #e5e5e5;
        }
        .tad{
            text-align: left;
            width: 80%;
            margin: 0 auto;
            padding:0 0.5rem;
            height: 0.6rem;
            font-size: 0.3rem;
            color:#2f2f2f;
            line-height:0.6rem;
            span{
                font-size: 0.45rem;
                margin-right: 0.2rem;
            }
            .skype{
                color:#1B92D0;
            }
            .QQ{
                color:#6EB9FA;
            }
            .Em{
                color:#3CB267
            }
            .main{
                display: block;
                height: 0.6rem;
                line-height: 0.6rem;
                width: 100%;
                margin: 0 auto;
                font-size: 0.3rem;
                color:#fff;
                text-align: center;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;;
                background:@base;
            }
        }

    }

}
</style>