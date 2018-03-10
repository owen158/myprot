<template>
    <div class='NotFoundComponent fixed'>
        <TopCounter :title="'系统提示'" :Boo="true" :src="'/'"></TopCounter>
        <div class="bg">
            <img width="100%" src="http://192.168.0.140:82/mobileTX/images393/public/34324.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
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