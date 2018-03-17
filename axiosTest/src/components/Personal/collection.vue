<!---->
<template>
    <div class='collection page-box'>
        <Top :text = 'text'></Top>
        <Ruten :RouT="RouT"></Ruten>
    </div>
</template>

<script>
    import Ruten from '../Public/Ruten.vue'
    import Top from '../Public/Top.vue'
    export default {
        data () {
            return {
                text:{
                    title:'优惠活动',
                    text:'Promotions'
                },
                RouT:'/Personal'
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
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

</style>