<template>
    <div id="PublicLoad" class='PublicLoad fixed'>
        <img src="http://192.168.0.140:82/mobileTX/images393/public/load.gif" alt="">
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.PublicLoad{
    padding-top: 5rem;
    z-index:100;
}
#PublicLoad{
    background:rgba(0,0,0,0.5);
}
</style>