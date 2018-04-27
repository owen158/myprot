<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">为何我的账号会被冻结？</h1>
        <div class="detail">

            <p style="margin-top: 0">输入五次错误密码系统为了您的账号资金安全将自动冻结您的游戏账号，届时请您联系24小时在线
            	 <router-link style="color: rgb(200, 166, 117);" to="/NoteSingle">
                    	在线客服
                </router-link>
            	协助处理。
            </p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'问题详情',
                    withdraw:'/HelpOther',
                },
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";
    .HelpOtherOne{
        height: 100%;
        background: #fff;
    }
    .HelpProcess{
        font-size: 0;
        width: 100%;
    }

</style>