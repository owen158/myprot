<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">别人可以用我的账户进行交易吗？</h1>
        <div class="detail">
            <p style="margin-top: 0">会员有责任确保自己的帐户及登入资料的保密性。以用户名称及密码进行的任何网上交易将被视为有效。</p>
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