<template>
    <div class='Tenpay PayPage'>
        <div class="line-w"></div>
        <el-row v-if="!bankcard.judgment">
            <div class="NoList">
                <span class="el-icon-warning" style="color: red;"></span>没有可用支付商列表！
                <router-link style="color: #c8a675;font-weight: 900;" to="/NoteSingle">
                    <span class="el-icon-service"></span>在线客服
                </router-link>
            </div>
        </el-row>
        <el-row v-show="bankcard.judgment">
            <el-radio-group style="display: block;margin-top: 0px;padding-top: 10px" v-model="radio2" size="small">
                <el-row class="el-solid">
                    <el-col v-for="(v,key) in bankcard.PaymentList" :xs="8" :sm="6" :md="3" :lg="2" :xl="2">
                        <el-radio border :label="key">支付{{key+1}}</el-radio>
                    </el-col>
                    <el-col :xs="8" :sm="6" :md="3" :lg="2" :xl="2" v-if="bankcard.PaymentList.length>0">
                      <el-button class="tutorialB" border @click="jumpTutorial('财付通支付')">支付教程</el-button>
                    </el-col>
                </el-row>
                <div class="line-w"></div>
                <el-form label-position="right" label-width="50px" :model="Amount" v-if="bankcard.PaymentList != ''">
                    <el-form-item class="el-solid" label="金额">
                        <el-input v-model="Amount.acounmt" placeholder="请输入金额"></el-input>
                        <span style="top: 0" class="Description" @click="show2 = !show2">限额说明</span>
                    </el-form-item>
                    <div class="line-w"></div>
                    <transition name="el-zoom-in-top">
                        <div v-show="show2" class="PayPage-transition">
                            <p> 单笔限额(元){{bankcard.PaymentList[Number(radio2)].minquota}} - {{bankcard.PaymentList[Number(radio2)].maxquota}}</p>
                        </div>
                    </transition>
                </el-form>
                <div style="margin-bottom: 10px;">
                    <el-row class="" style="background: #fff;height: 60px;line-height: 60px;">
                        <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                            <el-button size="small" @click="Amount.acounmt = 100" value="100" class="G--submit">100</el-button>
                        </el-col>
                        <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                            <el-button size="small" @click="Amount.acounmt = 300" value="300" class="G--submit">300</el-button>
                        </el-col>
                        <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                            <el-button size="small" @click="Amount.acounmt = 500" value="500" class="G--submit">500</el-button>
                        </el-col>
                        <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                            <el-button size="small" @click="Amount.acounmt = 1000" value="1000" class="G--submit">1000</el-button>
                        </el-col>
                        <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                            <el-button size="small" @click="Amount.acounmt = 1500" value="1500" class="G--submit">1500</el-button>
                        </el-col>
                    </el-row>
                </div>
            </el-radio-group>
            <el-button @click="submit" type="primary" class="G-submit">下一步</el-button>
            <div class="G-Warm">
                <h2 class="G_info_title">
                    温馨提示
                </h2>
                <p class="G_info_p_title">为确保您的款项及时到帐，请您留意以下几点：</p>
                <p class="G_info_text"> 1.若您支付遇到困难，可 <router-link style="color:#b81109;" to="/HelpProcess">点此</router-link> 查看存款范例。</p>
                <p class="G_info_text"> 2.若您支付过程中遇到问题未完成支付，请重新下单。</p>
                <p class="G_info_text"> 3.支付遇到困难？联系<router-link style="color:#b81109;" to="/NoteSingle">在线客服</router-link>获得帮助</p>
            </div>
        </el-row>
    </div>
</template>
<script>
  import jumpTutorial from "./jumpTutorial.js";
export default {
  data() {
    return {
      radio2: 0,
      SizeValue: {
        min: 1,
        man: 500
      },
      show2: false,
      Btnacounmt: "",
      Amount: {
        acounmt: "",
        scancode: "cft",
        payId: "",
        mobile: "mobile"
      }
    };
  },
  computed: {
    bankcard() {
      return this.$store.state.bankcard; //刷新
    },
    AmountTion: {
      //金额验证
      get: function() {
        let th = this;
        if (!isNaN(th.Amount.acounmt)) {
          return Number(th.Amount.acounmt);
        } else {
          return false;
        }
      },
      set: function(newValue) {
        if (/^[0-9]+([.]\d{1,2})?$/.test(newValue)) {
          console.log(1);
        } else {
          console.log("请输入数字(例:0.00),最高保留两位小数");
        }
      }
    }
  },
  mounted: function() {},
  methods: {
    jumpTutorial(ee) {
      let vm = this;
      jumpTutorial(vm, ee);
    },
    acounmt: function(event) {
      let el = event.currentTarget;
      this.Amount.acounmt = el.getAttribute("value");
    },
    submit: function() {
      let vm = this;
      vm.$message.closeAll();
      vm.Amount.payId = vm.bankcard.PaymentList[Number(this.radio2)].id;
      let minquota = this.bankcard.PaymentList[Number(this.radio2)].minquota;
      let maxquota = this.bankcard.PaymentList[Number(this.radio2)].maxquota;

      let payName = vm.bankcard.PaymentList[Number(this.radio2)].paymentName;
      let Arr = vm.bankcard.pays;

      vm.$BugAliPay(vm, minquota, maxquota, vm.Amount);
    }
  },
  created() {},
  components: {}
};
</script>
<style lang='less'>
@import "lottery.less";
.Tenpay {
  width: 100%;
  background: #f2f2f2;
  font-size: 12px;
}
</style>
