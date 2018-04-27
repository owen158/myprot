<template>
    <div class='gameThree ' id="game-pt">
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/ElectronicGames">
                <img src="http://mobile.beike188.com/mobileYHH/image/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <p class="top-img"><img src="http://m.cqt56.com/src/components/home/game/img/playtech.jpg" alt=""></p>
        <div class="wrapperMg row" v-for="item in one">
            <p class="Mg-p">热门游戏</p>
            <ul class="Mg-List row">
                <li v-for="v in item.Card_Games">
                    <b :style="{background:'url('+v.src+') 0rem 0rem no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p style="border-right: 1px solid #fff" @click="EnterGame($event)" :data-Id="v.Game_code">开始游戏</p>
                    <p style="border-left: 1px solid #fff;" @click="try_game_link($event)" data-model="fun" :data-Id="v.Game_code">免费试玩</p>
                    <span>{{v.title}}</span>
                </li>
            </ul>
            <p class="Mg-p">累计奖池</p>
            <ul class="Mg-List row">
                <li v-for="v in item.Classic_Slots">
                    <b :style="{background:'url('+v.src+') 0rem 0rem no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>

                    <p style="border-right: 1px solid #fff" @click="EnterGame($event)" :data-Id="v.Game_code">开始游戏</p>
                    <p style="border-left: 1px solid #fff;" @click="try_game_link($event)" data-model="fun" :data-Id="v.Game_code">免费试玩</p>
                    <span>{{v.title}}</span>
                </li>
            </ul>
            <p class="Mg-p">老虎机</p>
            <ul class="Mg-List row">
                <li v-for="v in item.Fixed_Odds_Games">
                    <b :style="{background:'url('+v.src+') 0rem 0rem no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p style="border-right: 1px solid #fff" @click="EnterGame($event)" :data-Id="v.Game_code">开始游戏</p>
                    <p style="border-left: 1px solid #fff;" @click="try_game_link($event)" data-model="fun" :data-Id="v.Game_code">免费试玩</p>
                    <span>{{v.title}}</span>
                </li>
            </ul>
            <p class="Mg-p">刮刮乐</p>
            <ul class="Mg-List row">
                <li v-for="v in item.Scratch_Cards">
                    <b :style="{background:'url('+v.src+')',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p style="border-right: 1px solid #fff" @click="EnterGame($event)" :data-Id="v.Game_code">开始游戏</p>
                    <p style="border-left: 1px solid #fff;" @click="try_game_link($event)" data-model="fun" :data-Id="v.Game_code">免费试玩</p>
                    <span>{{v.title}}</span>
                </li>
            </ul>
            <p class="Mg-p">桌面</p>
            <ul class="Mg-List row">
                <li v-for="v in item.Table_Games">
                    <b :style="{background:'url('+v.src+')',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p style="border-right: 1px solid #fff" @click="EnterGame($event)" :data-Id="v.Game_code">开始游戏</p>
                    <p style="border-left: 1px solid #fff;" @click="try_game_link($event)" data-model="fun" :data-Id="v.Game_code">免费试玩</p>
                    <span>{{v.title}}</span>
                </li>
            </ul>
            <p class="Mg-p">卡牌</p>
            <ul class="Mg-List row">
                <li v-for="v in item.Video_Slots">
                    <b :style="{background:'url('+v.src+')',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p style="border-right: 1px solid #fff" @click="EnterGame($event)" :data-Id="v.Game_code">开始游戏</p>
                    <p style="border-left: 1px solid #fff;" @click="try_game_link($event)" data-model="fun" :data-Id="v.Game_code">免费试玩</p>
                    <span>{{v.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
var vm, el;
import Top from "../Top/Top.vue";
import Habanero from "./js/josn3";
export default {
  data() {
    return {
      one: Habanero,
      text: "PT电子",
      Fata: {
        gameType: "PT",
        model: "mobile",
        gameID: ""
      }
    };
  },
  computed: {
    //            jrg() {
    //                return this.$store.state.jrg;
    //            }
  },
  methods: {
    //            EnterGame:function (event) {
    //                vm = this;
    //                el = event.currentTarget;
    //                vm.Fata.gameID = el.getAttribute('data-Id');
    //                $.ajax({
    //                    type:"post",
    //                    url:vm.jrg+'checklogin.do',
    //                    async:true,
    //                    cache:false,
    //                    success: function (data) {
    //                        if(data.msg == "faild"){
    //                            vm.$router.push({path:'/login'});
    //                        }else if(data.msg == "islogin"){
    //                            vm.$router.push({path:'/login'});
    //                        }else if(data.msg == "success"){
    //                            vm.$store.dispatch("incrwaitionValue",true);
    //                            vm.$playgame(vm.Fata,vm.jrg+'User/forwardGame',vm)
    //                        }
    //                    },
    //                    error:function () {
    //                        vm.$store.dispatch("incrwaitionValue",false);
    //                    }
    //                })
    //            },
    //            try_game_link:function  (event) {
    //                el = event.currentTarget;
    //                vm.gameId = el.getAttribute('data-Id');
    //                window.open('http://cache.download.banner.happypenguin88.com/casinoclient.html?language=ZH-CN&game='+this.gameId+'&mode=offline&affiliates=1¤cy=CNY');
    //            }
  },
  created() {},
  components: {
    Top
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "./css/gamethree.less";
#game-pt {
  .wrapperMg {
    margin-top: 0;
  }
  .top-img {
    padding-bottom: 0.1rem;
    background: #fff;

    img {
      width: 20%;
    }
  }
  .Mg-p {
    background-image: linear-gradient(to bottom, #2d3574, #2d3572);
  }
  .Mg-List {
    li {
      height: 2.75rem;
      span {
        display: block;
        height: 0.35rem;
        font-size: 0.25rem;
        color: #000;
        border-top: 1px solid #666;
        border-bottom: 1px solid #666;
        text-align: center;
        line-height: 0.35rem;
      }
      p {
        display: inline-block;
        width: 49.8%;
        padding: 0.05rem 0.2rem;
        line-height: 0.3rem;
        height: 0.7rem;
        background-image: linear-gradient(to bottom, Crimson, Crimson);
      }
      p:nth-child(3) {
        background-image: linear-gradient(to bottom, #2d3574, #2d3572);
      }
      p:last-child {
        background-image: linear-gradient(to bottom, #28d8cb, #28d8cb);
      }
    }
  }
}
</style>