<template>
    <div class='TopHeader'>
        <withdraw style="position: absolute" :src="text.withdraw"></withdraw>{{text.text}}
        <!--传统彩票真人视讯，-->
    </div>
</template>

<script>
    import withdraw from '../public/return.vue'
    export default {
        props: {
            text: {
                type: Object
            }
        },
        data () {
            return {
            }
        },
        components: {
            withdraw
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
/*.TopHeader{*/
    /*position: relative;*/
    /*width:100%;*/
    /*z-index: 8;*/
    /*background: #fff;*/
    /*font-size: 14px;*/
    /*height: 40px;*/
    /*font-weight: 700;*/
    /*line-height: 40px;*/
    /*text-align: center;*/
    /*border-bottom: 1px solid #c4c4c4;*/
/*}*/
</style>