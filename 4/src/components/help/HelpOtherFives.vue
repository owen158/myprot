<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">我可以只试玩而不下注吗？</h1>
        <div class="detail">
            <p style="margin-top: 0">针对一些游戏我们支持试玩，可选择试玩通道进行试玩。</p>
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