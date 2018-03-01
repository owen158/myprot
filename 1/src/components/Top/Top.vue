<template>
    <div class='TopHeader'>
        {{text}}
        <!--传统彩票真人视讯，-->
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String
            }
        },
        data () {
            return {}
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.TopHeader{
    position: fixed;
    width:100%;
    top:0;
    left:0;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.35rem;
    font-weight: 100;
    z-index: 8;
    .Bg-Header-Title;
}
</style>