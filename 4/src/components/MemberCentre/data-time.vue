<template>
    <div class='data-time'>
        <el-container>
            <el-header style="height: 40px;">
                <span @click="closedwon" class="down el-icon-arrow-left"></span> 筛选
            </el-header>
            <h1>时间</h1>
            <el-main>
                <el-row>
                    <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                        <div class="grid-content bg-purple-dark">
                            <el-button :type="Active ===0 ? 'primary' : ' ' " @click="Active =0" size="mini">&nbsp;今&nbsp;&nbsp;&nbsp;&nbsp;天&nbsp;</el-button>
                        </div>
                    </el-col>
                    <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                        <div class="grid-content bg-purple-dark">
                            <el-button :type="Active ===1 ? 'primary' : ' ' " @click="Active =1" size="mini">&nbsp;一&nbsp;&nbsp;&nbsp;&nbsp;周&nbsp;</el-button>
                        </div>
                    </el-col>
                    <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                        <div class="grid-content bg-purple-dark">
                            <el-button :type="Active ===2 ? 'primary' : ' ' " @click="Active =2" size="mini">&nbsp;一&nbsp;个&nbsp;月</el-button>
                        </div>
                    </el-col>
                    <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                        <div class="grid-content bg-purple-dark">
                            <el-button :type="Active ===3 ? 'primary' : ' ' " @click="Active =3" size="mini">&nbsp;自&nbsp;定&nbsp;义</el-button>
                        </div>

                    </el-col>
                </el-row>
                <transition name="el-zoom-in-top">
                    <div v-show="ActiveTimeTion" class="Action-Time">
                        <el-col :span="11">
                            <div class="grid-content bg-purple-dark">
                                <span class="demonstration">起始时间</span>
                                <el-date-picker class="reset-el-26 maxw-120" v-model="ActiveValue.bdate" align="right" type="date" size="mini" placeholder="选择日期" ref="picker1" :editable="canEdit" format="yyyy年MM月dd日" value-format="yyyy-MM-dd" :picker-options="pickerOptions1">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="2">
                            <div class="grid-content bg-purple-dark" style="padding-top: 40px;text-align: center">
                                <label for="">至</label>
                            </div>
                        </el-col>
                        <el-col :span="11">
                            <div class="grid-content bg-purple-dark">
                                <span class="demonstration">截止时间</span>
                                <el-date-picker class="reset-el-26 maxw-120" v-model="ActiveValue.edate" type="date" size="mini" format="yyyy年MM月dd日" value-format="yyyy-MM-dd" placeholder="选择日期" ref="picker2" :editable="canEdit" :picker-options="pickerOptions0">
                                </el-date-picker>
                            </div>
                        </el-col>
                    </div>
                </transition>
            </el-main>
            <el-row v-if="typepage ==='capitalRecord'">
                <h1>分类</h1>
                <el-main>
                    <el-row>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveType ===0 ? 'primary' : ' ' " @click="ActiveType=0" size="mini">&nbsp;全&nbsp;&nbsp;&nbsp;&nbsp;部&nbsp;</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveType ===1 ? 'primary' : ' ' " @click="ActiveType=1" size="mini">&nbsp;网&nbsp;&nbsp;&nbsp;&nbsp;银&nbsp;</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveType ===2 ? 'primary' : ' ' " @click="ActiveType=2" size="mini">&nbsp;微&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveType ===3 ? 'primary' : ' ' " @click="ActiveType=3" size="mini">&nbsp;支&nbsp;付&nbsp;宝</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveType ===4 ? 'primary' : ' ' " @click="ActiveType=4" size="mini">&nbsp;微&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <h1>状态</h1>
                <el-main>
                    <el-row>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===0 ? 'primary' : ' ' " @click="ActiveStatus=0" size="mini">&nbsp;所&nbsp;&nbsp;&nbsp;&nbsp;有&nbsp;</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===1 ? 'primary' : ' ' " @click="ActiveStatus=1" size="mini">&nbsp;处&nbsp;理&nbsp;中</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===2 ? 'primary' : ' ' " @click="ActiveStatus=2" size="mini">交易失败</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===3 ? 'primary' : ' ' " @click="ActiveStatus=3" size="mini">交易成功</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <h1></h1>
                <el-button type="primary" class="G-submit" @click="sendMsgToparent">下一步</el-button>
            </el-row>
            <el-row v-if="typepage ==='bettingRecord'">
                <h1>游戏类型</h1>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark" @click="ActiveSelect = true" style="text-align: left">
                                {{bettingType.name}}
                                <span style="float: right" class="el-icon-arrow-right "></span>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <transition name="el-zoom-in-bottom">
                    <div v-show="ActiveSelect" class="SelectList">
                        <el-row @click="ActiveSelect = !ActiveSelect" style="position: absolute;height: 210px;width: 100%;background: rgba(0,0,0,0.1);top: 0;left: 0"></el-row>
                        <el-row class="ListBox">
                            <el-col :span="24" v-for="(v,key) in gamerechar">
                                <div @click="ActiveSelectClick(key)" class="grid-content bg-purple-dark">
                                    {{v.name}}
                                    <span v-if="ActiveType === key" class="rf el-icon-check TypeActive"></span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </transition>
                <h1></h1>
                <el-button type="primary" class="G-submit" @click="sendMsgToparent">下一步</el-button>
            </el-row>
            <el-row v-if="typepage === 'TransferRecords'">
                <h1>游戏类型</h1>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark" @click="ActiveSelect = true" style="text-align: left">
                                {{TransferType.name}}
                                <span style="float: right" class="el-icon-arrow-right ">
                                </span>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <transition name="el-zoom-in-bottom">
                    <div v-show="ActiveSelect" class="SelectList">
                        <el-row @click="ActiveSelect = false" style="position: absolute;height: 210px;width: 100%;background: rgba(0,0,0,0.1);top: 0;left: 0;z-index: 10"></el-row>
                        <el-row class="ListBox">
                            <el-col :span="24" v-for="(v,key) in game">
                                <div @click="ActiveSelectClick(key)" class="grid-content bg-purple-dark" style="text-align: left">
                                    {{v.name}}
                                    <!--<span v-if="ActiveSelect === key" class="rf el-icon-check TypeActive"></span>-->
                                    <span v-if="ActiveType === key" class="rf el-icon-check TypeActive"></span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </transition>
                <h1>分类</h1>
                <el-main>
                    <el-row>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===0 ? 'primary' : ' ' " @click="ActiveStatus=0" size="mini">&nbsp;全&nbsp;&nbsp;&nbsp;&nbsp;部&nbsp;</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===1 ? 'primary' : ' ' " @click="ActiveStatus=1" size="mini">转入游戏</el-button>
                            </div>
                        </el-col>
                        <el-col :xs="5" :sm="4" :md="3" :lg="2" :xl="1">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===2 ? 'primary' : ' ' " @click="ActiveStatus=2" size="mini">转入平台</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <h1></h1>
                <el-button type="primary" class="G-submit" @click="sendMsgToparent">下一步</el-button>
            </el-row>
            <el-row v-if="typepage === 'rechargeRecord'">
                <h1>分类</h1>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">
                                <el-button :type="ActiveStatus ===0 ? 'primary' : ' ' " @click="ActiveStatus=0" size="mini">全部</el-button>
                                <el-button :type="ActiveStatus ===1 ? 'primary' : ' ' " @click="ActiveStatus=1" size="mini">加款</el-button>
                                <el-button :type="ActiveStatus ===2 ? 'primary' : ' ' " @click="ActiveStatus=2" size="mini">扣款</el-button>
                                <el-button :type="ActiveStatus ===3 ? 'primary' : ' ' " @click="ActiveStatus=3" size="mini">彩金</el-button>
                                <el-button :type="ActiveStatus ===4 ? 'primary' : ' ' " @click="ActiveStatus=4" size="mini">优惠</el-button>
                                <el-button :type="ActiveStatus ===5 ? 'primary' : ' ' " @click="ActiveStatus=5" size="mini">提款</el-button>
                                <el-button :type="ActiveStatus ===6 ? 'primary' : ' ' " @click="ActiveStatus=6" size="mini">反水</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <h1></h1>
                <el-button type="primary" class="G-submit" @click="sendMsgToparent">下一步</el-button>
            </el-row>
            <el-row v-if="typepage === 'withdrawRecord'">
                <h1>状态</h1>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark" style="text-align: left">
                                <el-button :type="ActiveStatus ===0 ? 'primary' : ' ' " @click="ActiveStatus=0" size="mini">所有</el-button>
                                <el-button :type="ActiveStatus ===1 ? 'primary' : ' ' " @click="ActiveStatus=1" size="mini">处理中</el-button>
                                <el-button :type="ActiveStatus ===2 ? 'primary' : ' ' " @click="ActiveStatus=2" size="mini">未通过</el-button>
                                <el-button :type="ActiveStatus ===3 ? 'primary' : ' ' " @click="ActiveStatus=3" size="mini">已通过</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-main>
                <h1></h1>
                <el-button type="primary" class="G-submit" @click="sendMsgToparent">下一步</el-button>
            </el-row>
        </el-container>
    </div>
</template>
<script>
let vueIns = null;
export default {
  props: {
    typepage: {
      type: String
    }
  },
  data() {
    return {
      Active: 0, //时间
      //                ActiveData:false,
      ActiveType: 0, //分类
      ActiveStatus: 0,
      ActiveSelect: false,
      canEdit: false,
      startDate: "",
      endDate: "",
      gamerechar: [
        //游戏列表ALL
        { name: "全部", type: "ALL" },
        { name: "IG彩票（新）", type: "IGPJ" },
        { name: "IG彩票", type: "IG" },
        //                    {name:'BG彩票',type:'BGLOTTERY'},
        { name: "VR 彩票", type: "VR" },
        { name: "Cagayan88视讯", type: "CG" },
        { name: "DS视讯", type: "DS" },
        { name: "AGIN国际厅", type: "AG" },
        //                    {name:'BG视讯',type:'BG'},
        { name: "BBIN 视讯", type: "BBIN" },
        { name: "申博视讯", type: "SHENBO" },
        { name: "OG视讯", type: "OG" },
        { name: "皇冠体育", type: "HG" },
        { name: "BBIN电子", type: "BBINGAME" },
        { name: "PT电子", type: "PT" },
        { name: "申博电子(TGP)", type: "TGP" },
        { name: "MG电子", type: "MG" },
        { name: "YOPLAY电子", type: "YOPLAY" },
        { name: "HABA电子", type: "HABA" },
        { name: "皇冠体育", type: "HG", id: "", model: "MB" },
        { name: "开元棋牌", type: "KYQP", id: "", model: "" }
      ],
      game: [
        //游戏列表
        { name: "全部", type: "", id: "", model: "" },
        { name: "IG 彩票（新）", type: "IGPJ", id: "", model: "" },
        { name: "IG 彩票", type: "IG", id: "", model: "" },
        { name: "VR 彩票", type: "VR", id: "", model: "" },
        // {name:'BG 彩票/视讯',type:'BG'},
        { name: "Cagayan88视讯", type: "CG", id: "", model: "" },
        { name: "DS视讯", type: "DS", id: "", model: "" },
        {
          name: "AGIN国际厅/YOPLAY电子",
          type: "AGIN",
          id: "",
          model: "mobile"
        },
        { name: "申博视讯(TGP)", type: "SB", id: "3", model: "" },
        { name: "OG视讯", type: "OG", id: "", model: "" },
        { name: "BBIN 视讯/电子", type: "BBIN", id: "", model: "" },
        { name: "PT电子", type: "PT", id: "", model: "" },
        { name: "MG电子", type: "MG", id: "", model: "" },
        { name: "HABA电子", type: "HABA", id: "", model: "" },
        { name: "皇冠体育", type: "HG", id: "", model: "MB" },
        { name: "开元棋牌", type: "KYQP", id: "", model: "" }
      ],
      ActiveValue: {
        bdate: "",
        edate: ""
      },
      pickerOptions0: {
        disabledDate(time) {
          // 最多只能选择一年的
          let ayearAgo = Date.now() - 3600 * 1000 * 24 * 30;
          return (
            time.getTime() > Date.now() ||
            time.getTime() < ayearAgo ||
            (vueIns.ActiveValue.bdate &&
              vueIns.ActiveValue.bdate.getTime &&
              time.getTime() < vueIns.ActiveValue.bdate.getTime())
          );
        }
      },
      pickerOptions1: {
        disabledDate(time) {
          // 最多只能选择一年的
          let ayearAgo = Date.now() - 3600 * 1000 * 24 * 30;
          return (
            time.getTime() > Date.now() ||
            time.getTime() < ayearAgo ||
            (vueIns.ActiveValue.edate &&
              vueIns.ActiveValue.edate.getTime &&
              time.getTime() > vueIns.ActiveValue.edate.getTime())
          );
        }
      }
    };
  },
  computed: {
    //            game:function () {//判断登录
    //                return this.$store.state.game;
    //            },
    ActiveTimeTion: {
      //时间
      get: function() {
        if (Number(this.Active) === 0) {
          this.ActiveValue.bdate = this.$time(0);
          this.ActiveValue.edate = this.$time(0);
          return false;
        } else if (Number(this.Active) === 1) {
          this.ActiveValue.bdate = this.$time(7000);
          this.ActiveValue.edate = this.$time(0);
          return false;
        } else if (Number(this.Active) === 2) {
          this.ActiveValue.bdate = this.$time(30000);
          this.ActiveValue.edate = this.$time(0);
          return false;
        } else if (Number(this.Active) === 3) {
          return true;
        }
      },
      set: function() {}
    },
    capitalType: {
      //充值类型
      get: function() {
        let sum = Number(this.ActiveType);
        if (sum === 0) {
          return "";
        } else if (sum === 1) {
          return "网银";
        } else if (sum === 2) {
          return "微信";
        } else if (sum === 3) {
          return "支付宝";
        } else if (sum === 4) {
          return "银行汇款";
        }
      },
      set: function() {}
    },
    capitalStatus: {
      //充值状态
      get: function() {
        let sum = Number(this.ActiveStatus);
        if (sum === 0) {
          return "";
        } else if (sum === 1) {
          return "处理中";
        } else if (sum === 2) {
          return "交易失败";
        } else if (sum === 3) {
          return "交易成功";
        }
      },
      set: function() {}
    },
    bettingType: {
      get: function() {
        this.ActiveSelect = false;
        return {
          type: this.gamerechar[Number(this.ActiveType)].type,
          name: this.gamerechar[Number(this.ActiveType)].name
        };
      },
      set: function() {}
    },
    TransferStatus: {
      get: function() {
        let sum = Number(this.ActiveStatus);
        if (sum === 0) {
          return "";
        } else if (sum === 1) {
          return "OUT";
        } else if (sum === 2) {
          return "IN";
        }
      },
      set: function() {}
    },
    TransferType: {
      get: function() {
        this.ActiveSelect = false;
        return {
          type: this.game[Number(this.ActiveType)].type,
          name: this.game[Number(this.ActiveType)].name
        };
      }
    },
    rechargeStatus: {
      get: function() {
        let sum = Number(this.ActiveStatus);
        return sum;
      }
    },
    withdrawStatus: {
      get: function() {
        let sum = Number(this.ActiveStatus);
        if (sum === 0) {
          return "";
        } else if (sum === 1) {
          return "0";
        } else if (sum === 2) {
          return "2";
        } else if (sum === 3) {
          return "1";
        }
      }
    }
  },
  mounted: function() {},
  methods: {
    closedwon: function() {
      this.$emit("listenToChildEvent", { judgment: 0 });
    },
    ActiveSelectClick: function(sum) {
      this.ActiveType = sum;
      this.ActiveSelect = false;
    },
    sendMsgToparent: function() {
      if (this.typepage === "capitalRecord") {
        this.$emit("listenToChildEvent", {
          bdate: this.ActiveValue.bdate,
          edate: this.ActiveValue.edate,
          Type: this.capitalType,
          status: this.capitalStatus,
          judgment: 1
        });
      } else if (this.typepage === "bettingRecord") {
        this.$emit("listenToChildEvent", {
          bdate: this.ActiveValue.bdate,
          edate: this.ActiveValue.edate,
          Type: this.bettingType.type,
          judgment: 1
        });
      } else if (this.typepage === "TransferRecords") {
        this.$emit("listenToChildEvent", {
          bdate: this.ActiveValue.bdate,
          edate: this.ActiveValue.edate,
          status: this.TransferStatus,
          Type: this.TransferType.type,
          judgment: 1
        });
      } else if (this.typepage === "rechargeRecord") {
        this.$emit("listenToChildEvent", {
          bdate: this.ActiveValue.bdate,
          edate: this.ActiveValue.edate,
          Type: this.rechargeStatus,
          judgment: 1
        });
      } else if (this.typepage === "withdrawRecord") {
        this.$emit("listenToChildEvent", {
          bdate: this.ActiveValue.bdate,
          edate: this.ActiveValue.edate,
          Type: this.withdrawStatus,
          judgment: 1
        });
      }
    }
  },
  created() {
    vueIns = this;
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.data-time {
  position: fixed;
  width: 100%;
  font-size: 14px;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 15;
  background: rgba(255, 255, 255, 1);
  overflow: auto;
  .el-header {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
    padding: 0;
    border-bottom: 1px solid #c4c4c4;
    .down {
      position: absolute;
      left: 8px;
      top: 8px;
      font-size: 24px;
    }
  }
  h1 {
    background: #f2f2f2;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    text-align: left;
    padding-left: 15px;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 125px;
  }
  .grid-content {
    text-align: center;
  }
  .el-main {
    padding: 15px;
  }
  .bg-purple-dark {
    margin: 5px 0;
  }
  .demonstration {
    display: block;
    line-height: 35px;
    text-align: center;
    font-size: 13px;
    color: #999;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 0;
  }
  .el-button--mini,
  .el-button--mini.is-round {
    padding: 7px 5px;
  }
  .Action-Time {
    border-top: 1px solid #e5e5e5;
    margin-top: 20px;
    height: 65px;
  }
  .TypeActive {
    color: #409eff;
  }
  .SelectList {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 16;
    padding-top: 210px;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    .ListBox {
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 0 15px 30px 15px;
      background: #fff;
      .el-col {
        padding: 13px 0;
        border-bottom: 1px solid #e5e5e5;
        text-align: left;
      }
    }
  }
}
</style>