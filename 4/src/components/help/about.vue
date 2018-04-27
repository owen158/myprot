<template>
    <div class='G_About'>
        <Top :text="Topobj"></Top>
        <el-row class="G_Nav">
            <el-col :span="8">
                <div class="grid-content bg-purple G_tad">
                    <router-link class="G_Tad_text" to="/aboutOne">
                        公司简介
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light G_tad">
                    <router-link class="G_Tad_text" to="/aboutTwo">
                        发展历程
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple G_tad">
                    <router-link class="G_Tad_text" to="/aboutThree">
                        旗下会员
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <transition :name="transitionName">
            <router-view class="ount_view "></router-view>
        </transition>
    </div>
</template>
<script>
import Top from "../Top/Top.vue";
export default {
  data() {
    return {
      Topobj: {
        text: "最新优惠",
        withdraw: "/LiveVideo"
      },
      activeName: "second",
      transitionName: "slide-left"
    };
  },
  computed: {},
  mounted: function() {},
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {},
  components: {
    Top
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.ount_view {
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
.G_About {
  font-size: 0;
  background: #fff;
  width: 100%;
  z-index: 15;
  .G_Nav {
    height: 40px;
    margin-bottom: 3px;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    .G_tad {
      display: block;
      .G_Tad_text {
        display: block;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        color: #666;
      }
      .router-link-exact-active {
        color: #c8a675;
        border-bottom: 2px solid #c8a675;
        background: #fff;
      }
    }
  }
}
</style>