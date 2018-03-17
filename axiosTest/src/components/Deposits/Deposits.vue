<template>
    <div ref="Deposits" class='Deposits'>
        <div class='HomeTop'>
            {{text}}
        </div>
        <div class="solid"></div>
        <div class="DepositsBox">
            <div class="row">
                <router-link class="item col-4" to="DepositsChild">
                    <span class="iconfont icon-cunkuan"></span>
                    存款
                </router-link>
                <router-link class="item col-4" to="Withdrawals">
                    <span class="iconfont tad icon-yinhangqiaqukuan"></span>
                    取款
                </router-link>
                <router-link  class="item col-4" to="userBankCard">
                    <span class="iconfont tad icon-addbank"></span>
                    银行卡管理
                </router-link>
            </div>
        </div>
        <div class="solid"></div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                text:'存取款',
                card:false
            }
        },
        computed: {
        },
        mounted:function(){
        },
        methods:{
        },
        created(){
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.Deposits{
    font-size: 0;
   .DepositsBox{
       background:#17161b;
       width: 100%;
       .item{
           height: 0.8rem;
           line-height: 0.8rem;
           .box-sizing;
           font-size: 0.28rem;
       }
       .router-link-active{
           color:@text-c3;
           border-bottom: 2px solid @border-c2;
       }
   }
    .HomeTop{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        /*background: @bg-c2;*/
        font-weight: 900;
        font-size: 0.3rem;
        color:@text-c3;
        z-index: 10;
        background: -prefix-linear-zgradient(top,@bg-c1,@bg-c2);
        background: linear-gradient(180deg,@bg-c1,@bg-c2);
    }
}
</style>