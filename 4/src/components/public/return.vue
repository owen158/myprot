<template>
    <div id='return' @click="goto" class="iconfont icon-mjiantou-copy" v-if="src != ''"></div>
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
        methods: {
            goto:function () {
                if(this.src !="/"){
                    this.$router.push({path:this.src})
                }else{
                    this.$router.go(-1);

                }
            }
        },
        created(){
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
/*#return{*/
    /*font-size: 20px;*/
    /*width: 39px;*/
    /*height: 39px;*/
    /*line-height: 39px;*/
    /*z-index: 30;*/
    /*!*a{*!*/
        /*!*float: left;*!*/
        /*!*width: 39px;*!*/
        /*!*height: 39px;*!*/
        /*!*line-height: 39px;*!*/
        /*!*background: #fff;*!*/
    /*!*}*!*/
    /*!*i{*!*/
        /*!*font-size: 20px;*!*/
        /*!*color: #696969;*!*/
    /*!*}*!*/
/*}*/
</style>