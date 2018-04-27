﻿<template>
    <div class='GameList'>
        <div class="BuyBox">
            <div class="BuyNav">
                <span @click="Rightleft()" id="Buyleft"><img src="http://mobile.beike188.com/mobileYHH/image/BuyColor/left.png" alt=""></span>
                <div class="BuyNavBox">
                    <ul class="BuyNavList">
                        <li @click="ListAll($event)" v-for="v in List">
                            <router-link class="col-d" :to="v.url">
                                {{v.text}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <span @click="LertRight()" id="Buyright"><img src="http://mobile.beike188.com/mobileYHH/image/BuyColor/right.png" alt=""></span>
            </div>
        </div>
        <transition :name="transitionName" >
            <router-view class="CardView"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        props:{
            List:{
                type:Array
            }
        },
        data () {
            return {
                Num:0,
                transitionName: 'slide-left',
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        mounted() {
            $('.BuyNavList li:nth-child(1)').addClass('active')
        },
        methods:{
            LertRight:function () {//左边
                var Withd = $('.BuyNavList li').width();
                var Len = $('.BuyNavList li').length;
                this.Num++;
                $('#Buyleft').show()
                if(Len-3 == this.Num){
                    $('#Buyright').hide()
                }
                $('.BuyNavList').css('left',-this.Num*Withd+'px');
            },
            ListAll:function (event) {
               var  el = event.currentTarget;
                $(el).addClass('active').siblings('.active').removeClass('active')
            },
            Rightleft:function () {//右边
                this.Num--;
                var Withd = $('.BuyNavList li').width();
                var Len = $('.BuyNavList li').length;
                $('#Buyright').show()
                if(this.Num == 0){
                    $('#Buyleft').hide()
                }
                $('.BuyNavList').css('left',-this.Num*Withd+'px');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../BuyCoolor/BuyColor.less";
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .CardView {
        position: absolute;
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
    .GameList{
    width:100%;

}
.BuyBox,{
    width:100%;
}
.BuyBox{
    width:100%;
    font-size:0;
.BuyNav{
    width:100%;
    height: 0.7rem;
    padding-left:0.8rem;
    padding-right:0.8rem;
    border-bottom: 1px solid #bfbfbf;
    position: relative;
#Buyleft,#Buyright{
    position: absolute;
    width:0.8rem;
    height: 0.7rem;
img{
    width: 25%;
    margin-top: 0.23rem;
}
}
#Buyleft{
    display: none;
    left:0rem;
    top:0rem;
}
#Buyright{
    top:0rem;
    right:0rem;

}
}
.BuyNavBox{
    position: relative;
    width:100%;
    overflow: hidden;
    height: 0.7rem;
.BuyNavList{
    position: absolute;
    left:0;
    top:0;
    transition: left 2s;
    -moz-transition: left 0.5s;	/* Firefox 4 */
    -webkit-transition: left 0.5s;	/* Safari 和 Chrome */
    -o-transition:left 0.5s;
    height:0.67rem;
    width: 16rem;
li{
    font-size: 0.3rem;
    float: left;
    height:0.67rem;
    width: 2rem;
    border-bottom: 2px solid transparent;
a{
    width: 100%;
    line-height:0.67rem;
    display: block;
}
}
li.active{
    border-bottom: 2px solid #219be4;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1);
}
}
}
}
</style>