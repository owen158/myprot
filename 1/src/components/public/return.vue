<template>
    <div id='return'>
        <router-link :to="src">
            <i class="iconfont icon-mjiantou-copy"></i>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: {
            src: {
                type: String
            }
        },
        data () {
            return {}
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
#return{
    position: fixed;
    top:0;
    left:0;
    font-size: 0;
    z-index: 30;
    a{
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    i{
        font-size: 0.5rem;
        color:@text-c3
    }
}
</style>