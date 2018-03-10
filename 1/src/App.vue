<template>
  <div id="app" style="position: relative">
    <router-view></router-view>
    <el-dialog
            :title="gamepop.gametitle"
            :visible.sync="gamepop.judgment"
            width="90%"
            :before-close="handleClose"
            center>
      <div class="item">账户名称 : <span class="info">{{userNew.userName}}</span></div>
      <div class="item">游戏余额 : <span class="info">{{userNew.gameMoney}}</span></div>
      <div class="item">中心钱包 : <span class="info">{{userNew.userMoney}}</span></div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="gamestop">取 消</el-button>
          <el-button type="primary" @click="Game">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  var vm;
export default {
    data () {
        return {
        }
    },
    computed: {
        gamepop:function () {//游戏专用
            return this.$store.state.gamepop;
        },
        bankcard:function () {//个人
            return this.$store.state.bankcard;
        },
        userNew:function () {//个人
            return this.$store.state.userNew;
        },
    },
    mounted() {
        vm = this;
        document.title =vm.userNew.Pname;
        this.$nextTick(function () {
            var time =setInterval(function () {//pay.js 加载完成后关闭定时器
                if(typeof cardlist != 'undefined'){
//                    vm.$store.dispatch('inceuserNew', {id: 12, data:Pays});
                    vm.$store.dispatch('inceuserNew', {id: 13, data:cardlist});
                    clearInterval(time);
                }
            },100)
        })
    },
    methods:{
        handleClose(done) {
            done();
        },
        Game:function () {
            vm = this;
            vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
            if(vm.gamepop.src != "" || vm.gamepop.src  != undefined || vm.gamepop.src != null){
                window.location.href = vm.gamepop.src;
            }
        },
        gamestop:function () {
            vm=this;
            vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
        }
    },
    components: {
    }
}
</script>
<style lang="less">
@import "../static/css/style.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @text-c2;
  /*公用系统提示*/
  .el-dialog--center .el-dialog__footer{
    padding-bottom: 15px;
  }
  el-dialog{
    font-size: 0;
  }
  .el-dialog__header{
    border-bottom: 1px solid #d1dbe5;
  }
  .el-dialog__footer{
    border-top: 1px solid #d1dbe5;
    padding: 0px 5px 10px;
  }
  .el-dialog__title{
    font-size: 0.35rem;
    display: block;
    line-height: 45px;
  }
  .rnkey{
    position: fixed;
    top:0;
    left:0;
    font-size: 0;
    z-index: 30;
    i{
      font-size: 0.5rem;
    }
  }
  .TopHeader{
    position: fixed;
    width:100%;
    top:0;
    left:0;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.35rem;
    font-weight: 100;
    z-index: 8;
    .Bg-Header-Title;
  }
  .el-dialog--center .el-dialog__header{
    padding:0;
  }
  .el-dialog--center .el-dialog__body{
    padding: 0;
  }
  .el-dialog__body{
    .item {
      width: 90%;
      text-align: left;
      margin: 0 auto;
      height: 25px;
      line-height: 25px;
      font-size: 14px;
      padding: 0rem 0.15rem;
      border-bottom: 1px solid #d1dbe5;
    }
    .item:last-child {
      border-bottom: none;
    }
    .info {
      float: right;
      font-size: 12px;
    }
    }
}

</style>
