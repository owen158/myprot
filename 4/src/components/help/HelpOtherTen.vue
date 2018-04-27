<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">你们的流水红利政策是怎么样的？</h1>
        <div class="detail">
            <p style="margin-top:0 ">目前我们有以下红利：<br>新用户首存红利<br>澳门银河娱乐场、钻石厅娱乐场有周返水红利<br>快乐彩周返水红利<br>体育周返水红利<br>银行转账存提款“报销”存款手续费优惠红利</p>
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