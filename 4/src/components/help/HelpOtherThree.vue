<template>
    <div class='HelpProcess HelpOtherOne'>
        <Top :text="Topobj"></Top>
        <h1 class="G_title">为什么我浏览的页面不能正常显示？</h1>
        <div class="detail">
            <p style="margin-top: 0">低版本浏览器不支持HTML5, CSS3, jQuery2.0等网页程序，很可能造成网页功能缺失。若当前您使用的浏览器为IE8或更低版本， 建议您使用IE10、IE11、火狐或谷歌浏览器，以获取最佳体验效果！</p>
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