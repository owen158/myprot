<template>
  <div class='HomeWrapper page' id="anchored-heading-template" style=" padding-bottom:110px">
    <el-header style="height: 46px;padding: 0">
      <div class="G_header">
        <div class="G_logo"></div>
      </div>
    </el-header>
    <bnner style="background: #586e75;"></bnner>
    <notice :content="annouationNew.announcement" style="background: #fff;"></notice>
    <el-main style="padding: 10px;" class="G_conterne">
      <el-row class="G_Title">
        <el-col :span="5">
          <div class="grid-content bg-purple-dark home_title">平台推荐</div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple-dark home_span">精彩荟萃,激情无限</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">
            <router-link style="color: #c8a675;display: block;text-align: right" class="G_Tad_text" to="/LiveVideo">
              更多
              <span class="el-icon-arrow-right"></span>
            </router-link>
          </div>
        </el-col>
      </el-row>
      <!--<p style="font-size: 0.25rem" ref="Htmls"></p>-->
      <el-row class="G_Game">

        <!--<el-col :span="6">-->
          <!--<div class="grid-content bg-purple-dark">-->
            <!--<router-link style="color: #222;display: block;text-align: right" to="/qipai">-->
              <!--<div class="G_tad_sup">-->
                <!--<img src="http://mobile.beike188.com/mobileYHH/images/Home/Chess/kyqp.png" alt="棋牌" style="width:85%;height:auto">-->
              <!--</div>-->
              <!--<div class="G_tad_sub">棋牌</div>-->
            <!--</router-link>-->
          <!--</div>-->
        <!--</el-col>-->
        <el-col :span="6" v-for="v in live">
          <div @click="EnterGame(v.Type,v.id,v.mobile)" class="grid-content bg-purple-dark">
            <div class="G_tad_sup">
              <span :class="v.img"></span>
            </div>
            <div class="G_tad_sub">{{v.title}}</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">
            <router-link style="color: #222;display: block;text-align: right" :to="{name:'BuyColor',params:{id:'VR'}}">
              <div class="G_tad_sup">
                <span class="x-icon-game-vr"></span>
              </div>
              <div class="G_tad_sub">VR彩票</div>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-main style="padding: 10px;" class="G_conterne">
      <el-row class="G_Title">
        <el-col :span="5">
          <div class="grid-content bg-purple-dark home_title">精选大促</div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple-dark  home_span">各种优惠为您撑腰</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">
            <router-link style="color: #c8a675;display: block;text-align: right" class="G_Tad_text" to="/discount">
              更多
              <span class="el-icon-arrow-right"></span>
            </router-link>
          </div>
        </el-col>
      </el-row>
      <el-row class="G_bnner">
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
            <div class="G_bnner_tad" @click="ImgOffer(0)"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
            <div class="G_bnner_sup" @click="ImgOffer(1)">
            </div>
            <div class="G_bnner_sub" @click="ImgOffer(2)">
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>

  </div>
</template>
<script>
var el, vm;
import Top from "../Top/Top.vue";
import notice from "../public/notice.vue";
import bnner from "./bnner.vue";
export default {
  data() {
    return {
      text: "",
      live: [
          {
              img: "x-icon-game-ag",
              title: "AGIN国际厅",
              Type: "AGIN",
              id: "",
              mobile: "mobile"
          },
          {
              img: "x-icon-game-bbin",
              title: "BBIN视讯",
              Type: "BBIN",
              id: "1",
              mobile: "mobile"
          },
          {
              img: "x-icon-game-sb",
              title: "申博视讯",
              Type: "SB",
              id: "3",
              mobile: ""
          },

          {
              img: "x-icon-game-og",
              title: "OG视讯",
              Type: "OG",
              id: "",
              mobile: ""
          },
          {
              img: "x-icon-game-mg",
              title: "MG电子",
              Type: "GAMEMG",
              id: "",
              mobile: ""
          },

          {
              img: "x-icon-game-pt",
              title: "PT电子",
              Type: "PT",
              id: "hb",
              mobile: "mobile"
          },
          {
              img: "x-icon-game-haba",
              title: "HB电子",
              Type: "GAMEHABA",
              id: "",
              mobile: ""
          },
//        {
//          img: "x-icon-game-cg",
//          title: "Cagayan88",
//          Type: "CG",
//          id: "",
//          mobile: ""
//        },

        //                    {img:'x-icon-game-bbin',title:'BBIN视讯'},

        //                    {img:'x-icon-game-ds',title:'DS太阳城'},



        //                    {img:'x-icon-game-vr',title:'VR彩票',Type:'BuyColor',id:'2',mobile:'MB'}
      ],

      codeArr: null,
      Fata: {
        gameType: "",
        gameID: "",
        model: ""
      }
    };
  },
  computed: {
    userNew: function() {
      //判断登录
      return this.$store.state.userNew;
    },
    annouationNew: function() {
      //判断登录
      return this.$store.state.annouationNew;
    }
  },
  mounted() {
    vm = this;
//    console.log(9)
//      alert(navigator.userAgent.toLowerCase())
//      vm.$refs.Htmls.innerHTML=navigator.userAgent.toLowerCase();
//      this.$message('这是一条消息提示');
      vm.$store.dispatch("incrObtain", {id: 7, data: { type: 2, cagent: vm.userNew.cagent }});
    vm.$store.dispatch("incrObtain", {id: 7, data: { type: 1, cagent: vm.userNew.cagent }});
  },
  methods: {
    EnterGame(type, id, mobile) {
      vm = this;
      el = event.currentTarget;
      vm.Fata.gameType = type;
      vm.Fata.gameID = id;
      vm.Fata.model = mobile;
      vm.$BugGameLink(vm, function() {
        if (vm.Fata.gameType === "GAMEMG" || vm.Fata.gameType === "GAMEHABA") {
          return vm.$router.push({ path: "/" + vm.Fata.gameType });
        }
        if (vm.Fata.gameType === "BuyColor") {
          return vm.$router.push({name: "BuyColor", params: { userId: "VR" }});
        }
        vm.$store.dispatch("incrgamepop", { id: 3, data: vm.Fata });
        vm.$router.push({ path: "/gamepublic" });
      });
    },

    ImgOffer(sum) {
        vm = this;
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      vm.$store.dispatch("inceuserNew", { id: 11, src: "" });
      setTimeout(() => {
        loading.close();
        vm.$store.dispatch("inceuserNew", {
          id: 11,
          src: vm.annouationNew.offer[Number(sum)].img2
        });
        vm.$router.push({ path: "/newuser" });
      }, 1000);
    }
  },
  created() {},
  components: {
    Top,
    bnner,
    notice
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.G_header {
  height: 46px;
  padding: 0;
  background: #fff;
  padding-top: 6px;
  .G_logo {
    width: 137px;
    height: 37px;
    background: url("http://mobile.beike188.com/mobileYHH/image/logo.png");
    background-size: cover;
    margin: auto;
  }
}
.G_conterne {
  margin-top: 10px;
  padding: 10px 10px;
  background: #fff;
}
.G_Title {
  height: 40px;
  font-size: 14px;
  line-height: 40px;
}
.G_Game {
  .G_tad_sup {
    height: 60px;
    width: 60px;
    margin: 0 auto;
  }
  .G_tad_sub {
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
  }
}
.G_bnner_tad {
  width: 3.2rem;
  height: 3.6rem;
  background: url("http://mobile.beike188.com/mobileYHH/image/Home/1.jpg");
  background-size: cover;
  margin: 0 auto;
}
.G_bnner_sup,
.G_bnner_sub {
  height: 1.75rem;
  width: 3.2rem;
  margin: 0 auto;
}
.G_bnner_sup {
  margin-bottom: 0.1rem;
  background: url("http://mobile.beike188.com/mobileYHH/image/Home/2.jpg");
  background-size: cover;
}
.G_bnner_sub {
  background: url("http://mobile.beike188.com/mobileYHH/image/Home/3.jpg");
  background-size: cover;
}
.HomeWrapper {
  padding-bottom: 0.35rem;
  font-size: 0;
}
.HomeWrapper {
  width: 100%;
  .home_title {
    font-size: 15px;
    color: #000;
    text-align: left;
  }
  .home_span {
    color: #999;
    text-align: left;
    font-size: 12px;
  }
}
</style>
