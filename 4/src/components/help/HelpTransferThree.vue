<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>游戏和游戏之间可以互相转账吗？</h1>
            <p>我公司支持游戏与游戏之间进行直接转账！若您需要将B游戏的账户金额转至C游戏时，直接选择转出平台为B游戏，转人平台为C游戏，即可向C游戏进行转账。</p>
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