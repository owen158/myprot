<template>
    <div class='NotFoundComponent fixed'>
        <Top :text="Topobj"></Top>
        <div class="bg">
            <img style="width: 100%" src="http://mobile.beike188.com/mobileYHH/image/public/404.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import Top from  './Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'系统提示',
                    withdraw:'/'
                },
            }
        },
        components: {
            Top,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
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