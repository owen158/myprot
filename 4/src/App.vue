<template>
  <div ref="App" id="app">
    <router-view></router-view>
  </div>
</template>
<script>
var vm;
export default {
  data() {
    return {};
  },
  computed: {
    CloseNew: function() {
      ////系统提示框
      return this.$store.state.CloseNew;
    },
    userNew: function() {
      //个人
      return this.$store.state.userNew;
    },
    waiting: function() {
      //等待
      return this.$store.state.waiting;
    },
    bankcard: function() {
      //个人
      return this.$store.state.bankcard;
    }
  },
  mounted() {
    vm = this;
    vm.$store.dispatch("inceuserNew", { id: 13, data:Pay.CARDLISTS });
    vm.$store.dispatch('inceuserNew', {id: 19, charge:Pay.CHARGEARR});
    console.log(this.userNew.iphonex)
      if(this.userNew.iphonex === '1'){
          var oMeta = document.createElement('meta');
          oMeta.charset = 'utf-8';
          oMeta.content = 'viewport-fit=cover';
          document.getElementsByTagName('head')[0].appendChild(oMeta);
          document.getElementById('app').style.marginTop = '1.6rem';
      }
    this.$nextTick(function () {

    })

  },
  methods: {},
  components: {
  }
};
</script>
<style lang="less">
@import "../static/css/style.less";
/*lodding*/

.el-message .el-icon-success {
  font-size: 14px;
}
.el-message .el-icon-error {
  font-size: 14px;
}
.el-message .el-icon-warning {
  font-size: 14px;
}
.el-message-box__wrapper {
  .el-message-box {
    width: 90%;
    margin: 0 auto;
  }
}
.el-loading-spinner i {
  font-size: 24px;
}
.el-loading-spinner .el-loading-text {
  text-align: center;
}
.line-w {
  height: 1px;
  width: 100%;
  border-bottom: 1px solid #c8c7cc;
}
.TopHeader {
  position: relative;
  width: 100%;
  z-index: 8;
  background: #fff;
  font-size: 17px;
  height: 40px;
  font-weight: 900;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #c4c4c4;
  a {
    display: block;
    width: 100%;
    font-size: 25px;
    height: 100%;
  }
}
.el-message {
  font-size: 16px;
}
#return {
  font-size: 20px;
  width: 39px;
  height: 39px;
  line-height: 39px;
  z-index: 30;
  /*a{*/
  /*float: left;*/
  /*width: 39px;*/
  /*height: 39px;*/
  /*line-height: 39px;*/
  /*background: #fff;*/
  /*}*/
  /*i{*/
  /*font-size: 20px;*/
  /*color: #696969;*/
  /*}*/
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}
.page {
  background: #efeff4;
}
.tutorialB {
  margin-bottom: 0.2rem !important;
  font-size: 12px !important;
  width: 79.69px !important;
  height: 32px !important;
  line-height: 32px !important;
  padding: 0px !important;
  color: #d62f27 !important;
}
</style>
