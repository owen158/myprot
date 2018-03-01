﻿<template>
    <div class='LotteryWrapper' ref="BackG">
        <Top :text="userNew.text"></Top>
        <div class="NoBox">
            <div  class="row item" data-Type="">
                <router-link to="/deposit">
                    <i class="iconfont icon-homedeposit"></i>在线存款
                </router-link>
                <router-link to="/Withdrawals">
                    <i class="iconfont icon-kuanyi20guanqiantixianjilu"></i>在线取款
                </router-link>
                <router-link to="/userBankCard" v-if="bankcard.judgmentcardNum != false">
                    <i class="iconfont icon-yinhangqia"></i>银行卡
                </router-link>
                <router-link to="/userCapitalPwd" v-if="bankcard.judgmentcardNum === false">
                    <i class="iconfont icon-addbank"></i>添加银行卡
                </router-link>
            </div>
        </div>
        <transition :name="transitionName" >
            <router-view class="Lottery_view row"></router-view>
        </transition>
    </div>
</template>
<script>
    var el,Type;
    import Top from '../Top/Top.vue';
    export default {
        data () {
            return {
                transitionName: 'slide-left'
            }
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            },
            bankcard:function () {
                return this.$store.state.bankcard;
            }
        },
        mounted:function(){
            this.setBackground();
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            bankcard:function () {
                return this.$store.state.bankcard;
            }
        },
        created () {
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.Lottery_view {
    position: absolute;
    .Bg-BackGround;
    transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
.LotteryWrapper{
    width:100%;
    padding-top: 0.8rem;
    .Bg-BackGround;
    font-size:0;
    .item{
        height: 0.8rem;
        .Bg-Nav-Title;
        font-size: 0.3rem;
        text-align: left;
        line-height: 0.8rem;
        a{
            float: left;
            width: 33.3%;
            font-size:0.25rem;
            padding-left: 1rem;
            color: #fff;
            position: relative;
            i{
                display: block;
                position: absolute;
                width:0.5rem;
                height: 0.5rem;
                left:0.2rem;
                top:0rem;
                font-size: 0.5rem;
            }
        }
        a.router-link-active{
            .Bg-Nav-Title-Active;
        }
    }
}
</style>
