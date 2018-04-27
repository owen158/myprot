<template>
  <div class='Alipay PayPage'>
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
          <el-col @click="jhAcount" v-for="(v,key) in bankcard.PaymentList" :xs="8" :sm="6" :md="3" :lg="2" :xl="2">
            <el-radio border :label="key">支付{{key+1}}</el-radio>
          </el-col>
          <el-col :xs="8" :sm="6" :md="3" :lg="2" :xl="2" v-if="bankcard.PaymentList.length>0">
            <el-button class="tutorialB" border @click="jumpTutorial('支付宝')">支付教程</el-button>
          </el-col>

        </el-row>
        <div class="line-w"></div>

        <!--当是支付宝支付 ->  支付1 的时候-->
        <div v-if='JHjudgment.jh'>
          <el-form label-position="right"  :model="Amount" v-if="bankcard.PaymentList != ''">
            <el-form-item class="el-solid"  style="padding-left: 10px"  label="请选择金额">
              <span style="top: 0" class="Description" @click="show2 = !show2">限额说明</span>
            </el-form-item>
            <transition name="el-zoom-in-top">
              <div v-show="show2" class="PayPage-transition">
                <p>单笔限额(元){{bankcard.PaymentList[Number(radio2)].minquota}} - {{bankcard.PaymentList[Number(radio2)].maxquota}}</p>
              </div>
            </transition>
          </el-form>
        </div>

        <div style="margin-bottom: 0px;padding-top: 5px;" v-if='JHjudgment.jh'>
          <el-row style="background: #fff; padding: 0 4%">
            <el-col class="zhifubaoWarp"  v-for="(item,index) in options" :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="changeAcounmt(index)" :value="item.value" :class="{'active':index==num}" class="G--submit zhifubao">{{item.value}}</el-button>
            </el-col>
          </el-row>
          <div class="moneyTips">
            注：为了提高成功率，每笔实际支付金额浮动范围±0.08，三分钟不要重复提交相同金额订单。如有疑问请联系在线客服！
          </div>
        </div>

        <!--当不是支付宝支付 ->  支付1 的时候-->
        <div v-if='JHjudgment.type'>
        <el-form label-position="right" label-width="50px" :model="Amount" v-if="bankcard.PaymentList != ''">
          <el-form-item class="el-solid" label="金额">
            <el-input v-model="Amount.acounmt" placeholder="请输入金额"></el-input>
            <span style="top: 0" class="Description" @click="show2 = !show2">限额说明</span>
          </el-form-item>
          <div class="line-w"></div>
          <transition name="el-zoom-in-top">
            <div v-show="show2" class="PayPage-transition">
              <p>单笔限额(元){{bankcard.PaymentList[Number(radio2)].minquota}} - {{bankcard.PaymentList[Number(radio2)].maxquota}}</p>
            </div>
          </transition>
        </el-form>
        </div>

        <div style="margin-bottom: 0px;padding-top: 5px;" v-if="bankcard.PaymentList != ''">
          <el-row class="" style="height: 60px;line-height: 60px;background: #fff" v-if='JHjudgment.type'>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Amount.acounmt = 100" value="105" class="G--submit">100</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Amount.acounmt = 300" value="255" class="G--submit">300</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Amount.acounmt = 500" value="350" class="G--submit">500</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Amount.acounmt = 1000" value="505" class="G--submit">1000</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Amount.acounmt = 1500" value="980" class="G--submit">1500</el-button>
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
      num:0,
      radio2: 0,
      SizeValue: {
        min: 1,
        man: 500
      },
      options: [
        {
          value: "55",
          label: "55元"
        },
        {
          value: "105",
          label: "105元"
        },
        {
          value: "255",
          label: "255元"
        },
        {
          value: "505",
          label: "505元"
        },
        {
          value: "980",
          label: "980元"
        },
        {
          value: "1505",
          label: "1505元"
        },
        {
          value: "2580",
          label: "2580元"
        },
        {
          value: "3580",
          label: "3580元"
        },
        {
          value: "4980",
          label: "4980元"
        },
        {
          value: "5990",
          label: "5990元"
        },
        {
          value: "7990",
          label: "7990元"
        },
        {
          value: "9990",
          label: "9990元"
        }
      ],
      show2: false,
      Btnacounmt: "",
      Amount: {
        acounmt: "",
        scancode: "ali",
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
    },
    JHjudgment: {
      get: function () {
        let obj = {
          jh: "",
          type: ""
        };
        obj.jh =
          this.bankcard.PaymentList[this.radio2].paymentName === "JH" ? true : false;
          if (this.bankcard.PaymentList[this.radio2].paymentName === "JH") {
            //this.Amount.acounmt =  this.options[this.num].value;
            obj.type = false;
            return obj;
          } else {
            obj.type = true;
            return obj;
          }
      }
    },
    MoneySum: {
      get: function () {
        let tt = {
          min: this.bankcard.PaymentList[Number(this.radio2)].minquota,
          man: this.bankcard.PaymentList[Number(this.radio2)].maxquota
        };
        //this.Amount.acounmt = '';
        return tt;
      }
    }
  },
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
      let payName = vm.bankcard.PaymentList[Number(this.radio2)].paymentName;
      let Arr = vm.bankcard.pays;

      vm.$BugAliPay(vm, vm.MoneySum.min, vm.MoneySum.man, vm.Amount);
    },
    changeAcounmt(index){
      this.num = index;
      this.Amount.acounmt = this.options[index].value;
    }
  },
  mounted(){

  },
  created() {},
  components: {}
};
</script>
<style lang='less'>
@import "lottery.less";
.Alipay {
  width: 100%;
  background: #f2f2f2;
  font-size: 12px;
}
.moneyTips{
  padding: 0 5%;
  text-align: left;
  font-size: .23rem;
  line-height: 0.45rem;
}
  .active{
    color: #c12a23;
    border-color: #c12a23;
    outline: 0;
    background: #fbeae9;
  }
  .zhifubaoWarp{
    margin-bottom: 16px;
    width: 25%;
    text-align: center;
  }
  .zhifubao{
      width: 80%;
  }
</style>
