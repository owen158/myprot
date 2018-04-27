<template>
  <div id="AllColor" class='Choose'>
    <h2 class="title">视讯彩频道</h2>
    <el-row>
      <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Popular">
        <div class="grid-content bg-purple" @click="EnterGame(v.id)">
          <div class="sup">
            <img :src="v.img" alt="">
          </div>
          <div class="sub">
            {{v.title}}
          </div>
        </div>
      </el-col>
    </el-row>
    <h2 class="title">国彩频道</h2>
    <el-row>
      <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in AlwaysColor">
        <div class="grid-content bg-purple" @click="EnterGame(v.id)">
          <div class="sup">
            <img :src="v.img" alt="">
          </div>
          <div class="sub">
            {{v.title}}
          </div>
        </div>
      </el-col>
    </el-row>

    <h2 class="title">高频彩频道</h2>
    <el-row>
      <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in heightColor">
        <div class="grid-content bg-purple" @click="EnterGame(v.id)">
          <div class="sup">
            <img :src="v.img" alt="">
          </div>
          <div class="sub">
            {{v.title}}
          </div>
        </div>
      </el-col>
    </el-row>

    <h2 class="title">VR动画彩频道</h2>
    <el-row>
      <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in VRanimate">
        <div class="grid-content bg-purple" @click="EnterGame(v.id)">
          <div class="sup">
            <img :src="v.img" alt="">
          </div>
          <div class="sub">
            {{v.title}}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
var el, vm;
export default {
  data() {
    return {
      Popular: [
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_vrjx2.png",
          title: "VR金星1.5分彩",
          id: "1"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_sc2.png",
          title: "VR赛车",
          id: "2"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_sfc2.png",
          title: "VR3分彩",
          id: "11"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_vrhs2.png",
          title: "VR火星5分彩 ",
          id: "12"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_ft2.png",
          title: "VR快艇",
          id: "13"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_vrbjl2.png",
          title: "VR百家乐",
          id: "15"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/officail_vrsix2.png",
          title: "VR六合彩",
          id: "16"
        }
      ],
      AlwaysColor: [
        {
          img: "http://mobile.beike188.com/mobileYHH/image/Home/Choose/ssc.png",
          title: "重庆时时彩",
          id: "3"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/xjsc.png",
          title: "新疆时时彩",
          id: "4"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/tjsc.png",
          title: "天津时时彩",
          id: "5"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/gd115.png",
          title: "广东11选5",
          id: "6"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/jx115.png",
          title: "江西11选5",
          id: "7"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/image/Home/Choose/bjc.png",
          title: "北京赛车",
          id: "8"
        },
        {
          img:
            "http://mobile.beike188.com/mobileYHH/image/Home/Choose/jsk3.png",
          title: "江苏快三",
          id: "9"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/image/Home/Choose/xyc.png",
          title: "幸运28",
          id: "10"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/image/Home/Choose/lhc.png",
          title: "香港六合彩",
          id: "14"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/VRgame/vrsdsyxw.png",
          title: "山东11选5",
          id: "19"
        }
      ],
      heightColor: [
        //高频彩
        {
          img: "http://mobile.beike188.com/mobileYHH/VRgame/vrsx.png",
          title: "水星分分彩",
          id: "34"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/VRgame/vrmx.png",
          title: "木星赛车",
          id: "35"
        }
      ],
      VRanimate: [
        //VR动画彩
        {
          img: "http://mobile.beike188.com/mobileYHH/VRgame/vrsm.png",
          title: "赛马",
          id: "36"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/VRgame/vryy.png",
          title: "游泳",
          id: "37"
        },
        {
          img: "http://mobile.beike188.com/mobileYHH/VRgame/vrzxc.png",
          title: "自行车",
          id: "38"
        }
      ],
      Fata: {
        gameType: "VR",
        gameID: "",
        model: ""
      }
    };
  },
  mounted: function() {},
  computed: {
    userNew: function() {
      //判断登录
      return this.$store.state.userNew;
    }
  },
  methods: {
    EnterGame: function(id) {
      vm = this;
      el = event.currentTarget;
      vm.Fata.gameID = id;
      vm.$BugGameLink(vm, function() {
        vm.$store.dispatch("incrgamepop", { id: 3, data: vm.Fata });
        vm.$router.push({ path: "/gamepublic" });
      });
    }
  },
  created() {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.Choose {
  background: #f2f2f2;
  min-height: 100%;
  width: 100%;
  font-size: 12px;
  padding-bottom: 50px;
  margin: 0rem auto;
  .title {
    line-height: 40px;
    height: 40px;
    font-size: 18px;
    text-align: left;
    margin-bottom: 0;
    text-indent: 20px;
  }
  .grid-content {
    margin: 4px auto;
    background: #fff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding-top: 10px;
    width: 95%;
    height: 85px;
    .sup {
      position: relative;
      margin: 5px auto;
      width: 40px;
      height: 40px;
      img {
        position: absolute;
        width: 40px;
        right: 0px;
        top: 0px;
        height: 40px;
      }
    }
    .sub {
      height: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      overflow: hidden;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
