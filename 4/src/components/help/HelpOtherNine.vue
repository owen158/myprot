<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">如何证明游戏结果是实时的？</h1>
        <div class="detail">
            <p style="margin-top:0 ">您好，您可以通过游戏的视频影像进行监查，视频内的画面均为现场娱乐城所播放的画面是同步的。我们每一个视频上都配备一个确认真实性电话，您可拨打此号码确认所有游戏结果均为真实的实时结果。</p>
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