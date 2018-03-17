<template>
  <div id="app">
    <span id="copy" @click="menu()" class="iconfont icon-tubiaozhizuomoban-copy"></span>
    <div  ref="wrapperBoxL"  class="wrapperBoxL">
        <h2>导航</h2>
        <div @click="mainbox"  class="main">
          <span class="iconfont icon-shouye"></span>
          <router-link class="tad " to="/">
            首页
          </router-link>
        </div>
        <div @click="mainbox"  class="main">
          <span class="iconfont icon-caipiao"></span>
          <router-link class="tad " to="/AllColor">
            传统彩
          </router-link>
        </div>
        <div @click="mainbox" class="main">
          <span class="iconfont icon-guanfang1"></span>
          <router-link class="tad " to="/AlwaysColor">
            官方彩
          </router-link>
        </div>
        <div @click="mainbox" class="main">
          <span class="iconfont icon-shixun"></span>
          <router-link class="tad " to="/">
            真人视讯
          </router-link>
        </div>
        <div @click="mainbox"  class="main">
          <span class="iconfont icon-dianziyouxi"></span>
          <router-link class="tad " to="/">
            电子游戏
          </router-link>
        </div>
        <div @click="mainbox"  class="main">
          <span class="iconfont  icon-tiyu"></span>
          <router-link class="tad " to="/">
              体育赛事
          </router-link>
        </div>
        <h2>个人中心</h2>
        <div v-if="login != true" class="row">
            <div @click="mainbox"  class="main">
                <span class="iconfont icon-denglu1"></span>
                <router-link class="tad " to="/Login">
                    登录
                </router-link>
            </div>
            <div @click="mainbox"  class="main">
                <span class="iconfont icon-freg"></span>
                <router-link class="tad " to="/Registered">
                    注册
                </router-link>
            </div>
        </div>
        <div class="row" v-if="login == true">
            <div @click="mainbox" class="main">
                <span class="iconfont icon-user"></span>
                <router-link class="tad " to="/Personal">
                    个人中心
                </router-link>
            </div>
        </div>
        <div @click="mainbox" class="main">
          <span class="iconfont icon-kefu"></span>
          <router-link class="tad " to="/Service">
              客服
          </router-link>
        </div>
        <!--<div @click="mainbox" class="main">-->
          <!--<span class="iconfont icon-wuqiacunqukuan"></span>-->
          <!--<router-link class="tad " to="/Deposits">-->
              <!--存取款-->
          <!--</router-link>-->
        <!--</div>-->

    </div>
    <div @click="wrapperBox()" ref="wrapperBoxR" class="wrapperBoxR">
    </div>
    <router-view></router-view>
      <!--<transition name="fade">-->
      <div class="onloadding" v-show="onLoading">

      </div>
      <!--</transition>-->
      <transition name="fade">
          <system v-show="system"></system>
      </transition>
      <gamepages v-show="gamepages.judgment"></gamepages>
      <div class="Footerbox">
      <div class="item col-3">
        <router-link class="tad " to="/">
          <span class="iconfont icon-shouye"></span>
          <p>首页</p>
        </router-link>
      </div>
      <div class="item col-3">
        <router-link class="tad " to="/Service">
          <span class="iconfont icon-kefu"></span>
          <p>客服</p>
        </router-link>
      </div>
      <div class="item col-3">
        <router-link ref="Deposits" class="tad " to="/DepositsChild">
          <span class="iconfont icon-wuqiacunqukuan"></span>
          <p>存取款</p>
        </router-link>
      </div>
      <div class="item col-3">
        <router-link class="tad " to="/Personal">
          <span class="iconfont icon-user"></span>
          <p>个人中心</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import gamepages  from '@/components/Home/gamepages.vue'
    import system from '@/components/Public/system.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
      system:function () {//系统提示
        return this.$store.state.system;
      },
      login:function () {//系统提示
          return this.$store.state.login;
      },
      onLoading:function () {//系统提示
          return this.$store.state.onLoading;
      },
      gamepages:function () {////url
          return this.$store.state.gamepages;
      },
  },
  mounted: function () {
      this.$store.dispatch("incrajax",{id:0});
//      this.$store.dispatch('inceuser',{id:'7',src:'',judgment:true});
  },
  methods: {
      menu:function () {
          this.$refs.wrapperBoxL.style.left=0+'%';
          this.$refs.wrapperBoxR.style.right=0+'%';
      },
      wrapperBox:function () {
          this.$refs.wrapperBoxL.style.left=-50+'%';
          this.$refs.wrapperBoxR.style.right=-50+'%';
      },
      mainbox:function () {
          this.$refs.wrapperBoxL.style.left=-50+'%';
          this.$refs.wrapperBoxR.style.right=-50+'%';
      }
  },
  created(){
  },
  components: {
      system,
      gamepages
  }
}
</script>

<style lang="less">
@import "../static/css/style.less";
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
.onloadding{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 100;
    background:rgba(0,0,0,0.8);
}
body{
    background: @bg-c1;
}
#app {
    font-family:Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #f5f5f9;*/
  padding-top: 0.8rem;
}
.wrapperBoxR,.wrapperBoxL{
  position: fixed;
  width: 50%;
  height: 100%;
  z-index: 13;
  transition: all 0.2s;
  background: rgba(0,0,0,0.5);
  overflow: auto;
}
.wrapperBoxR{
  top:0;
  right:-50%;
  border-left:1px solid rgba(0,0,0,0.5);
}
.wrapperBoxL{
  top:0;
  background: @bg-c1;
  border-right:1px solid rgba(0,0,0,0.5);
  left:-50%;
  h2{
    font-size:0.3rem;
    height:0.8rem;
    line-height:0.8rem;
    padding-left:0.2rem;
    text-align:left;
    background:@text-c5;
    color:#fff;
  }
  .main{
    width:100%;
    line-height:0.7rem;
    text-align:left;
    padding-left:0.3rem;
    font-size:0.3rem;
    background:@bg-c2;
    height:0.7rem;
    border-bottom:1px solid #3a3a3a;
    span{
      font-size:0.3rem;
      color:#fff;
    }
    a{
      font-size:0.3rem;
      display:inline-block;
      height:0.7rem;
      width:70%;
      color:#999;
    }
  }
}
#copy{
  position: fixed;
  top:0.2rem;
  left:0.2rem;
  color:@text-c3;
  font-size: 0.44rem;
  z-index: 12;
}
  .Footerbox{
    position: fixed;
    left:0;
    bottom:0;
    font-size: 0;
    width: 100%;
    height: 0.8rem;
    background: @bg-c2;
    .item{
      height: 0.8rem;
      .tad{
        display: block;
        text-align: center;
        color:@text-c5;
        font-size: 0.3rem;
        span{
          display: inline-block;
          margin: 0 auto;
          width: 0.4rem;
          line-height: 0.4rem;
          font-size: 0.37rem;
          height: 0.4rem;
        }
        p{
          height: 0.4rem;
          line-height: 0.4rem;
            font-weight: 900;
          font-size: 0.3rem;
        }
      }
     a.router-link-exact-active{
       color: @text-c3;
     }
    }
  }
</style>
