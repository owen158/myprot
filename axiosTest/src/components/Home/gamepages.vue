<template>
    <div class="gamepages">
        <div class="gamebox">
            <h2 >{{gamepages.title}} <i @click="dorp()" class="rf icon-cuo iconfont"></i> </h2>
            <div class="solid"></div>
            <div class="main ">
                <p class="lf">用户名</p>
                <p class="rf">{{user.userName}}</p>
            </div>
            <div class="main">
                <p class="lf">账户余额</p>
                <p class="rf">{{user.userMoney}}</p>
            </div>
            <div class="main">
                <p class="lf">游戏余额</p>
                <p class="rf">{{user.gameMoney}}</p>
            </div>
            <div class="main">
                <router-link class="tad" to="">
                    转入
                </router-link>
                <router-link class="tad" to="">
                    转出
                </router-link>
            </div>
            <div class="solid"></div>
            <div @click="submit()" class="btn-game">进入游戏</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        computed: {
            user:function () {////url
                return this.$store.state.user;
            },
            gamepages:function () {////url
                return this.$store.state.gamepages;
            }
        },
        mounted: function () {
        },
        methods: {
            dorp:function () {
//                return vm.$router.push({path:'/login'})
                this.$store.dispatch('inceuser',{id:'6',judgment:false});
            },
            submit:function () {
                this.$store.dispatch('inceuser',{id:'6',judgment:false});
                if(this.gamepages.src === undefined){
                   this.$store.dispatch("incesystemtext",'游戏链接获取失败');
                   this.$store.dispatch("inceation",'1');
                   return;
                }
                window.location.href = this.gamepages.src;
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
.gamepages{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,0.6);
    .gamebox{
        width: 90%;
        height: 4.54rem;
        background: @bg-c1;
        margin: 50% auto;
         .border(3px);
        h2{
            height: 0.7rem;
            line-height: 0.7rem;
            font-size: 0.3rem;
            color:@text-c3;
            font-weight: 900;
            .box-sizing;
            .rf{
                font-size: 0.4rem;
                margin-right: 0.2rem;
            }
        }
        .main{
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.35rem;
            width: 90%;
            .box-sizing;
            border-bottom: 1px solid @bg-c4;
            margin: 0 auto;
            .tad{
                float: left;
                width: 40%;
                margin: 0.02rem 5%;
                font-size: 0.25rem;
                height: 0.55rem;
                line-height: 0.55rem;
                background: #000;
                color:@text-c2;
                .box-sizing;
                .border(3px);
            }
        }
        .btn-game{
            width: 90%;
            font-size: 0.3rem;
            margin: 0.05rem auto;
            background: @bg-c4;
            height: 0.6rem;
            line-height: 0.6rem;
            .box-sizing;
            color:@text-c3;
            font-weight: 900;
            .border(3px);
        }
        .main p:nth-child(1){
            color:@text-c7;
        }
        .main p:nth-child(2){
            color:@text-c6;
        }
    }
}
</style>