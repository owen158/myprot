<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>我进行游戏有安全保障吗？</h1>
            <p>我公司运用不同种类的安全技术，为广大玩家建立一个安全、稳定且极具隐私的游戏环境。<br>(1)物理安全<br>我们的服务器放置在高度安全性的特定场所，进出的工作人员必须全部通过安全检查。<br>(2)安全保护<br>我们的服务器通过防火墙系统被保护。<br>(3)数据完整性<br>玩家通过浏览器与我们的服务器之间进行的所有通信是被严格加密的。</p>
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
                    withdraw:'/HelpAccount',
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
            line-height: 19px;
        }
    }

</style>