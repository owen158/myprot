<template>
  <div class='classification'>
    <el-container class="container">
      <el-header style="height: 40px;">
        分类
      </el-header>
      <el-container>
        <el-aside width="75px">

          <router-link class="G_Tad" to="/LiveVideo">
            真人
          </router-link>
          <router-link class="G_Tad" to="/ElectronicGames">
            电子
          </router-link>
          <router-link class="G_Tad" to="/Sportsevents">
            体育
          </router-link>
          <router-link class="G_Tad" :to="{name:'BuyColor',params:{id:'IG'}}">
            彩票
          </router-link>
          <router-link class="G_Tad" to="/qipai">
            棋牌
          </router-link>
          <router-link class="G_Tad" to="/discount">
            优惠
          </router-link>
          <router-link class="G_Tad" to="/help">
            帮助
          </router-link>
          <router-link class="G_Tad" to="/aboutOne">
            关于
          </router-link>
        </el-aside>
        <el-main>
          <transition name="el-zoom-in-bottom">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted: function() {},
  methods: {
    open() {
      this.$alert("暂未开放，敬请期待", "系统提示框", {
        confirmButtonText: "确定"
      });
    },
    EnterGame(type, id, mobile) {
      let vm = this;
      vm.$BugGameLink(vm, function() {
        vm.$store.dispatch("incrgamepop", {
          id: 3,
          data: { gameType: type, gameID: id, model: mobile }
        });
        vm.$router.push({ path: "/gamepublic" });
      });
    }
  },
  created() {},
  components: {}
};
</script>
<style lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
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

.classification {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  background: #f2f2f2;
  .container {
    width: 100%;
    overflow: auto;
    min-height: 100%;
  }
  .el-main {
    padding: 10px 10px 50px 10px;
    background: #f2f2f2;
  }
  .el-header {
    line-height: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: 900;
    background: #fff;
    border-bottom: 1px solid #c4c4c4;
  }
  .el-aside {
    background: #fff;
    .G_Tad {
      display: block;
      height: 55px;
      text-align: center;
      line-height: 55px;
      color: #000;
      font-size: 15px;
    }
    .G_Tad:not(:first-child) {
      border-top: 1px solid #e6dede;
    }
  }
  .router-link-exact-active {
    background: #f5f5f9;
  }
  .G_game {
    position: relative;
    padding-left: 115px;
    margin-bottom: 5px;
    font-size: 14px;
    .G_title {
      height: 25px;
      line-height: 25px;
      font-weight: 700;
    }
    .bg-purple-light {
      padding-left: 10px;
      text-align: left;
    }
    .G_text {
      height: 25px;
      line-height: 25px;
      color: #8e8787;
      font-size: 12px;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 5px;
    }
    .G_img {
      position: absolute;
      left: 0;
      top: 0;
      width: 115px;
      height: 85px;
    }
    .G_btn {
      height: 30px;
      span,
      a {
        display: block;
        height: 23px;
        line-height: 23px;
        width: 70px;
        color: #c8a675;
        text-align: center;
        border-radius: 15px;
        border: 1px solid #c8a675;
      }
      .span {
        display: block;
        height: 23px;
        line-height: 23px;
        width: 70px;
        color: #c8a675;
        text-align: center;
        border-radius: 15px;
        border: 1px solid #c8a675;
      }
    }
  }
}
</style>