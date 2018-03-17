<template>
    <div class='Ret'>
        <router-link class="tad " :to='RouT'>
            <i  class="icon iconfont">&#xe61f;</i>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            RouT: {
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
<style lang='less'>
@import "../../../static/css/style.less";
.Ret{
    position: fixed;
    top:0.18rem;
    left:0.2rem;
    width:0.5rem;
    height: 0.5rem;
    z-index: 50;
    a{
        display: block;
        width: 100%;
        height:100%;
        i{
            vertical-align: top;
            color:@text-c3;
            font-size: 0.5rem
        }
    }

}
</style>