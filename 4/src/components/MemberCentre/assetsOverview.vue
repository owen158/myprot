<template>
    <div class='assetsOverview'>
        <Top :text="Topobj" style="background: #1dabed;color: #fff;border-bottom: none"></Top>
        <el-container>
            <el-row class="bg">
                <el-main>
                    <el-col :span="8" class="Money">
                        <div class="grid-content bg-purple-dark">&nbsp;</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-dark Money">{{userNew.userMoney}}</div>
                        <div class="grid-content bg-purple-dark user">总资产(元)</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-dark">&nbsp;</div>
                    </el-col>
                </el-main>
            </el-row>
        </el-container>
        <el-row style="height: 100px;width:100%;background: #fff;"></el-row>
        <h2 class="">
            资金明细
            <span @click="TypeInquireAll" class="rf" style="padding-right: 15px;">刷新额度</span>
        </h2>
        <div class="transition-game">
            <el-row v-for="(v,key) in game">
                <div class="gamebox">
                    <i :class="v.cls"></i>{{v.name}}
                    <span class="gameMoney">{{v.Money}}</span>
                </div>
                <b v-if="v.Money === '维护中'"></b>
            </el-row>
        </div>
        <div class="footerNav">
            <el-row>
                <el-col :span="12">
                    <router-link style="" class="tikuan" to="/Withdrawals">
                        提款
                    </router-link>
                </el-col>
                <el-col :span="12">
                    <router-link class="cunkuan" to="/information">
                        存款
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Top from "../Top/Top.vue";
export default {
  data() {
    return {
      Topobj: {
        text: "",
        withdraw: "/"
      },
      game: [
        //游戏列表
        {
          name: "主账户",
          type: "WALLET",
          cls: "x-icon-game-logo",
          Money: "0.00"
        },
        {
          name: "IG 彩票（新）",
          type: "IGPJ",
          cls: "x-icon-game-XIG",
          Money: "维护中"
        },
        { name: "IG 彩票", type: "IG", cls: "x-icon-game-JIG", Money: "0.00" },
        { name: "VR 彩票", type: "VR", cls: "x-icon-game-vr", Money: "0.00" },
        // {name:'BG 彩票/视讯',type:'BG'},
        {
          name: "Cagayan88视讯",
          type: "CG",
          cls: "x-icon-game-cg",
          Money: "0.00"
        },
        { name: "DS视讯", type: "DS", cls: "x-icon-game-ds", Money: "1.00" },
        {
          name: "AGIN国际厅/YOPLAY",
          type: "AGIN",
          cls: "x-icon-game-ag",
          Money: "0.00"
        },
        {
          name: "申博视讯(TGP)",
          type: "SB",
          cls: "x-icon-game-sb",
          Money: "2.00"
        },
        { name: "OG视讯", type: "OG", cls: "x-icon-game-og", Money: "0.00" },
        {
          name: "BBIN 视讯/电子",
          type: "BBIN",
          cls: "x-icon-game-bbin",
          Money: "0.00"
        },
        { name: "PT电子", type: "PT", cls: "x-icon-game-pt", Money: "5.00" },
        { name: "MG电子", type: "MG", cls: "x-icon-game-mg", Money: "0.00" },
        {
          name: "HABA电子",
          type: "HABA",
          cls: "x-icon-game-haba",
          Money: "0.00"
        },
        { name: "皇冠体育", type: "HG", cls: "x-icon-game-hg", Money: "0.00" },
        { name: "开元棋牌", type: "KYQP", cls: "x-icon-game-kyqp", Money: "0.00" }
      ]
    };
  },
  computed: {
    userNew: function() {
      //判断登录
      return this.$store.state.userNew;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.TypeInquireAll();
    });
  },
  methods: {
    TypeInquireAll: function() {
      //查询所有余额
      let vm = this;
      for (let i = 0; i < vm.game.length; i++) {
        vm.game[i].Money = "加载中...";
        vm.$BugNewRefresh(vm, { BType: vm.game[i].type });
      }
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
.assetsOverview {
  padding-bottom: 50px;
  width: 100%;
  .bg {
    width: 100%;
    height: 170px;
    background: #fff
      url("http://mobile.beike188.com/mobileYHH/image/zichan_blue.887b1d7.png")
      no-repeat;
    background-size: 100% 100%;
  }
  .Money {
    font-size: 22px;
    color: #fff;
    font-weight: 900;
  }
  .bg-purple-dark {
    color: #fff;
    line-height: 25px;
  }
  h2 {
    height: 35px;
    line-height: 35px;
    text-align: left;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 15px;
    font-size: 14px;
    background: #f2f2f2;
  }
  .user {
    font-size: 14px;
  }
  .transition-game {
    height: 100%;
    width: 100%;
    padding-bottom: 80px;
    background: #fff;
    overflow: auto;
    .el-row {
      position: relative;
      height: 60px;
      width: 100%;
    }
    .el-row {
      border-bottom: 1px solid #c8c7cc;
      i {
        position: absolute;
        display: inline-block;
        width: 59px;
        height: 59px;
        left: 8px;
        top: 0;
      }
      .gameMoney {
        font-size: 14px;
        float: right;
      }
      .gamebox {
        height: 60px;
        line-height: 60px;
        padding-left: 80px;
        padding-right: 15px;
        text-align: left;
        font-size: 14px;
      }
      b {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .footerNav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 5px;
    background: #f2f2f2;
    height: 50px;
    a {
      display: block;
      font-size: 18px;
      font-weight: 900;
      width: 90%;
      background: #fff;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      text-align: center;
      color: #c8a675;
      border-radius: 5px;
    }
    .tikuan {
      background: #fff;
      border: 1px solid #c8a675;
    }
    .cunkuan {
      background: #c8a675;
      color: #fff;
    }
  }
}
</style>