﻿<template>
  <div class='LotteryWrapper'>
    <div class="TopHeader">
      <div id="return" style="position: absolute;">
        <router-link class="iconfont icon-mjiantou-copy" to="/MemberCentre">
        </router-link>
      </div>存款
      <b style="position: absolute;width: 80px;right: 0;top: 0;color: #c8a675;font-size: 14px;" @click="PageJump()">
        存款记录
      </b>
    </div>
    <el-row class="G-Lottery">
      <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="2" v-for="v in bankcard.PlatformPay">
        <router-link :to="v.url">
          <div class="grid-content">
            <div v-if="v.url == '/kuaiJie'" class="recommond"></div>
            <span :class="[v.icon,'Gicon']"></span>{{v.title}}
            <i class="x-icon-lotter-active"></i>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row style="background: #f2f2f2;height: 5px;"></el-row>
    <transition :name="transitionName">
      <router-view class="Lottery_view row"></router-view>
    </transition>
  </div>
</template>
<script>
var el, Type;
import Top from "../Top/Top.vue";
export default {
  data() {
    return {
      Topobj: {
        text: "存款",
        withdraw: "/"
      },
      transitionName: "slide-left"
    };
  },
  computed: {
    tranfer() {
      return this.$store.state.pChannels;
    },
    userNew: function() {
      ////注册字段
      return this.$store.state.userNew;
    },
    bankcard: function() {
      return this.$store.state.bankcard;
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  },
  mounted() {
  },
  methods: {
    PageJump: function(event) {
      //
      let vm = this;
      vm.$store.dispatch("inceuserNew", { id: 3, type: "rechargeRecord" });
      vm.$router.push({ path: "/rechargeRecord" });
    },
//    bankcard: function() {
//      return this.$store.state.bankcard;
//    }
  },
  components: {
    Top
  }
};
</script>
<style lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.Lottery_view {
  position: absolute;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.G-Lottery {
  background: #fff;
  padding-bottom: 15px;
  padding-top: 15px;
  .el-col {
    padding: 0 15px;
    a {
      display: block;
      margin: 5px auto;
      height: 45px;
      /*background: rgb(239, 239, 244);*/
      border: 1px solid #dedede;
      i.x-icon-lotter-active {
        display: none;
      }
    }
    a.router-link-exact-active {
      position: relative;
      border: 1px solid #c8a675;
      i.x-icon-lotter-active {
        display: inline-block;
        position: absolute;
        bottom: 0px;
        right: 0;
        width: 22px;
        height: 22px;
      }
    }
  }
  .grid-content {
    position: relative;
    padding-left: 50px;
    text-align: left;
    font-size: 14px;
    line-height: 45px;
    .Gicon {
      position: absolute;
      left: 10px;
      top: 7px;
    }
  }
}
.LotteryWrapper {
  width: 100%;
}
.recommond{
  position: absolute;
  top:8px;
  right: 7px;
  width: 30px;
  height: 12px;
  background-image: url("http://mobile.beike188.com/mobileYHH/image/zftj.gif");
  -webkit-background-size:cover;
  background-size:cover;
}
</style>
