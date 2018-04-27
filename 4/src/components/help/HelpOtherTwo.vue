<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">为什么我会被登出？</h1>
        <div class="detail">
            <p style="margin-top: 0">您好，这是网页的保安程式之一，当您在一定的时间内没有使用有关的网页，那么有关的网页将不再活跃，并且无法浏览最新的页面，在此您必需重新登入；或者您在其余的设备登陆了那之前的设备将登出。若您重新登入后情况仍然一样请立即联系我们。</p>
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