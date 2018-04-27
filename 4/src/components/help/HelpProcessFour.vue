<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>为什么在线支付成功后额度没有立即增加？</h1>
            <p>这是因为在线支付系统需要经过密锁切换及内部验证程序，而这也是我们的保安程序之一，所以请您不必担心，款项一定不会丢失。如果您在在线支付超过30分钟后仍然还未收到您的款项，请与我们客服联系处理。</p>
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
                    withdraw:'/HelpProcess',
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
    p{
        line-height: 18px;
    }
}

</style>