<template>
    <div class='ElectronicGames'>
        <el-row class="G_game" v-for="v in Loattery">
            <div class="grid-content G_img bg-purple" :style="{background:'url('+v.img+')',backgroundSize:'cover'}"></div>
            <el-col :span="24">
                <div class="grid-content bg-purple-light G_title">{{v.title}}</div>
                <div class="grid-content bg-purple-light G_text">{{v.text}}</div>
                <div class="grid-content bg-purple-light G_btn">
                    <span @click="EnterGame(v.gameType,v.id,v.mobile)">{{v.sub}}</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
var el, vm;
import Top from "../Top/Top.vue";
export default {
  data() {
    return {
      activeName: "second",
      Loattery: [
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/dt.png",
          title: "大厅",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "0",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/dzpk.png",
          title: "德州扑克 ",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "620",
          mobile: "",
          text: ""
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/images/Home/Chess/ebg.png",
          title: "二八杠",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "720",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/qznn.png",
          title: "抢庄牛牛",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "830",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/zjh.png",
          title: "炸金花",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "220",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/sg.png",
          title: "三公",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "860",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/yzlh.png",
          title: "押庄龙虎",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "900",
          mobile: "",
          text: ""
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/images/Home/Chess/esyd.png",
          title: "21点",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "600",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/tbnn.png",
          title: "通比牛牛",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "870",
          mobile: "",
          text: ""
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/images/Home/Chess/qhb.png",
          title: "抢红包",
          sub: "开始游戏",
          gameType: "KYQP",
          id: "880",
          mobile: "",
          text: ""
        }
      ],
      Topobj: {
        text: "电子游戏",
        withdraw: "/"
      },
      Fata: {
        gameType: "",
        gameID: "",
        model: ""
      },
      input21: ""
    };
  },
  computed: {
    userNew: function() {
      //判断登录
      return this.$store.state.userNew;
    }
  },
  mounted() {},
  methods: {
    EnterGame: function(type, id, moblie) {
      vm = this;
      vm.Fata.gameType = type;
      vm.Fata.gameID = id;
      vm.Fata.model = moblie;
      if (vm.Fata.gameType === "GAMEMG" || vm.Fata.gameType === "GAMEHABA") {
        return vm.$router.push({ path: "/" + vm.Fata.gameType });
      } else {
        vm.$BugGameLink(vm, function() {
          vm.$store.dispatch("incrgamepop", { id: 3, data: vm.Fata });
          vm.$router.push({ path: "/gamepublic" });
        });
      }
    }
  },
  components: {
    Top
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.ElectronicGames {
  font-size: 0;
}
</style>
