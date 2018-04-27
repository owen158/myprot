<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">请问各个游戏的注额为多少？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">真人游戏-最低下注1RMB 最高限额30万RMB （可根据不同类型会员进行调高注码额度）<br>彩票游戏-最低下注1RMB最高限额依照游戏及玩法不同，最高可到10000RMB<br>电子机率-最低下注0.2RMB最高限额依照游戏及玩法不同<br>如有任何疑问请咨询24小时在线客服！</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data() {
            return {
                Topobj: {
                    text: '问题详情',
                    withdraw: '/help',
                },
            }
        },
        computed: {},
        mounted: function() {},
        methods: {},
        created() {},
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";
    .HelpChildOne{
        height: 100%;
        background: #fff;
        .G_title{
            font-size: 14px;
        }
    }
    .helplogreg {
        font-size: 0;
        width: 100%;
        p{
            line-height: 20px;
            font-size: 13px;
        }

    }
</style>