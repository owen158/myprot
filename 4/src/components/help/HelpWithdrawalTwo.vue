<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>提款限额是多少？</h1>
            <p>单笔提款最低金额100元，最高200万，每日提款上限200万。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'问题详情',
                    withdraw:'/HelpWithdrawal',
                },
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";

.HelpProcess{
    font-size: 0;
    width: 100%;
}

</style>