<template>
    <div class='NotFoundComponent fixed'>
        <Top></Top>
        <withdraw :src="withdraw"></withdraw>
        <div class="bg">
            <img width="100%" src="http://192.168.0.140:82/mobileTX/images393/public/34324.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import withdraw from '../public/return.vue'
    import Top from  './Top.vue'
    export default {
        data () {
            return {
                text:'系统提示',
                withdraw:'/'
            }
        },
        components: {
            Top,
            withdraw
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.NotFoundComponent{
    font-size: 0.3rem;
    z-index: 19;
    background: #fff;
    .bg{
        width:100%;
        margin-top: 1rem;
    }
}
</style>