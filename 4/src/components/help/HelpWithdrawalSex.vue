<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>当我在真人游戏赢了钱，我该如何提款？</h1>
            <p>将钱从游戏平台转入主账户后，请您点击“提款专区”输入您的取款密码，再按要求填写您要提取的金额，然后再点击确定，成功递交取款信息后，财务部将在3~5分钟内为您办理出款。</p>
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
    p{
        line-height: 18px;
    }
}

</style>