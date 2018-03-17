<template>
    <div class='Home row'>
        <div class="HomeTop">
        </div>
        <div class="bnner">
            <img width="100%" src="http://192.168.0.140/newMobel/bnner.png" alt="">
        </div>
        <div class="notice"></div>
        <div class="solid"></div>
        <div class="gameLottery row">
            <ul class="list">
                <li class="item" v-for="v in game">
                    <router-link class="tad live" :to='v.src'>
                        <img :src="v.img" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

    export default {
        data () {
            return {
                text:'',
                game:[
                    {img:'http://192.168.0.140/newMobel/x-live.png',src:'/AllColor'},
                    {img:'http://192.168.0.140/newMobel/x-live.png',src:'/AlwaysColor'},
                    {img:'http://192.168.0.140/newMobel/x-live.png',src:'/LiveVideo'},
                    {img:'http://192.168.0.140/newMobel/x-live.png',src:'/ElectronicGames'},
                    {img:'http://192.168.0.140/newMobel/x-live.png',src:''}
                ]
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
.HomeTop{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 0.8rem;
    padding-top: 0.05rem;
    text-align: center;
    background: @bg-c2;
    color:@text-c3;
    z-index: 10;
}
.Home{
    background:@bg-c1;
    padding-bottom: 1rem;
    font-size:0;
    .notice{
        height: 0.5rem;
        background: @bg-c2;
        margin: 0.3rem 0.2rem;
        .border(2px);
    }

    .gameLottery{
        width: 90%;
        padding-bottom: 1rem;
        margin:0.2rem auto;
        .list{
            width: 100%;
            .item{
                float: left;
                width: 48%;
                margin: 0.1rem 1%;
                height: 2.1rem;
                .border(2px);
                overflow: hidden;
                border:3px solid @bg-c2;
                .tad{
                    display: block;
                    width: 100%;

                    height: 100%;
                    img{
                        width: 100%;
                    }
                }
                /*.live{*/
                    /*background: url("http://192.168.0.140/newMobel/live.png") no-repeat;*/
                    /*background-size: 100% 100%;*/
                /*}*/
                /*.slots{*/
                    /*background: url("http://192.168.0.140/newMobel/slots.png") no-repeat;*/
                    /*background-size: 100% 100%;*/
                /*}*/
                /*.lottery-b{*/
                    /*background: url("http://192.168.0.140/newMobel/lottery-b.png") no-repeat;*/
                    /*background-size: 100% 100%;*/
                /*}*/
                /*.lottery-i{*/
                    /*background: url("http://192.168.0.140/newMobel/lottery-i.png") no-repeat;*/
                    /*background-size: 100% 100%;*/
                /*}*/
                /*.sports{*/
                    /*background: url("http://192.168.0.140/newMobel/sports.png") no-repeat;*/
                    /*background-size: 100% 100%;*/
                /*}*/
            }
        }
    }

}
</style>