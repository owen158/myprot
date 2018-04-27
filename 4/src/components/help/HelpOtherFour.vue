<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">为什么要进行验证？</h1>
        <div class="detail">
            <p style="margin-top: 0">验证信息主要是为了确保您的账户安全。我们要验证的是手机验证、邮箱验证、银行卡验证。</p>
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