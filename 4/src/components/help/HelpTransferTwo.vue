<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>为什么游戏前要先进行转账？</h1>
            <p>为了您更好，更顺利的体验游戏，我们会提示您在进入游戏前进行转账，避免进入游戏之后需要登出游戏来进行转账的反复操作；同时，您可任意将额度转至多个游戏账户中，体验不同游戏的欢乐与刺激！</p>
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
                    withdraw:'/HelpTransfer',
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

    .HelpProcess{
        font-size: 0;
        width: 100%;
    }

</style>