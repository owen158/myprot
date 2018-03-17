
<template>
    <div class='Transfer'>
        <Top :text = 'text'></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid"></div>
    </div>
</template>
<script>
    import Ruten from '../Public/Ruten.vue'
    import Top from '../Public/Top.vue'
    export default {
        data () {
            return {
                text:{
                    title:'平台互转',
                    text:'WALLET'
                },
                RouT:'/Personal'
            }
        },
        computed: {

        },
        mounted: function () {
        },
        methods: {

        },
        created(){
        },
        components: {
            Top,
            Ruten
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.Transfer{
    padding-top: 0.8rem;
}
</style>