<template>
    <div class='load'>
    </div>
</template>

<script>
    export default {
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
.load{
    position: fixed;
    width: 100%;
    min-height: 100%;
    top:0;
    left:0;
    bottom: 0;
    overflow: auto;
    background: rgba(0,0,0,0.5);
    z-index: 30;
}
</style>