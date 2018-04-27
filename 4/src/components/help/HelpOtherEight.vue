<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">请问各个游戏的注额为多少？</h1>
        <div class="detail">
            <p style="margin-top:0 ">真人游戏-最低下注1RMB 最高限额30万RMB （可根据不同类型会员进行调高注码额度）<br>彩票游戏-最低下注1RMB最高限额依照游戏及玩法不同，最高可到10000RMB<br>电子机率-最低下注0.2RMB最高限额依照游戏及玩法不同<br>如有任何疑问请咨询24小时在线客服！</p>
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
        p{
            line-height: 20px;
        }
    }

</style>