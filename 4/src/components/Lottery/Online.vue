<template>
  <div class='Online PayPage'>
    <div class="line-w"></div>
    <el-row v-if="!bankcard.judgment">
      <div class="NoList">
        <span class="el-icon-warning" style="color: red;"></span>没有可用支付商列表！
        <router-link style="color: #c8a675;font-weight: 900;" to="/NoteSingle">
          <span class="el-icon-service"></span>在线客服
        </router-link>
      </div>
    </el-row>
    <el-row v-if="bankcard.PaymentList !=''">
      <el-row v-show="RadioId.judgment">
        <el-radio-group style="display: block;margin-top: 0px;padding-top: 10px" v-model="radio2" size="small">
          <el-row class="">
            <el-col v-for="(v,key) in bankcard.PaymentList" :xs="8" :sm="6" :md="3" :lg="2" :xl="2">
              <el-radio border :label="key">支付{{key+1}}</el-radio>
            </el-col>
          </el-row>
        </el-radio-group>
        <div class="line-w"></div>
        <el-form label-position="right" label-width="80px" :model="Online">
          <el-form-item class="" label="金额">
            <el-input v-model="Online.acounmt" placeholder="请输入金额"></el-input>
            <span style="top: 0" class="Description" @click="show2 = !show2">限额说明</span>
          </el-form-item>
          <div class="line-w"></div>
          <transition name="el-zoom-in-top">
            <div v-show="show2" class="PayPage-transition">
              <p> 单笔限额(元){{RadioId.min}} - {{RadioId.man}}</p>
            </div>
          </transition>
        </el-form>
        <div style="margin-bottom: 10px;">
          <el-row class="" style="height: 60px;line-height: 60px;background: #fff">
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Online.acounmt = 100" value="100" class="G--submit">100</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Online.acounmt = 300" value="300" class="G--submit">300</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Online.acounmt = 500" value="500" class="G--submit">500</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Online.acounmt = 1000" value="1000" class="G--submit">1000</el-button>
            </el-col>
            <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
              <el-button size="small" @click="Online.acounmt = 1500" value="1500" class="G--submit">1500</el-button>
            </el-col>
          </el-row>
          <div class="line-w"></div>
        </div>
        <el-form label-position="right" label-width="80px" :model="Online">
          <el-form-item label="银行列表" v-if="(typeof RadioId.paymentName=='string') != true">
            <div class="select-box" @click="bankshow = !bankshow">
              {{Online.scancode === "" ? "请选择支付列表" : text}}
              <span class="el-icon-arrow-right rf"></span>
            </div>
          </el-form-item>
          <div class="line-w" v-if="(typeof RadioId.paymentName=='string') != true"></div>
        </el-form>
        <el-button @click="submit" type="primary" class="G-submit">下一步</el-button>
        <transition name="el-zoom-in-bottom">
          <div v-show="bankshow" class="bank-transition-box">
            <div class="Title-box">
              <span class="el-icon-close" @click="bankshow = !bankshow"></span>
            </div>
            <div class="G_List">
              <el-row @click="Banklist">
                <el-col :span="24" v-for=" v in RadioId.paymentName">
                  <div class="grid-content bg-purple-dark" @click="Obtainclick(v.bankcode,v.title)">
                    {{v.title}}
                    <span style="color: #409eff" v-if="v.bankcode === Online.scancode" class="rf el-icon-check"></span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </transition>
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
    </el-row>
  </div>
</template>
<script>
//    var arr=
export default {
  data() {
    return {
      bankshow: false,
      radio2: 0,
      SizeValue: { min: 1, man: 500 },
      show2: false,
      text: "",
      Online: {
        acounmt: "",
        scancode: "",
        payId: ""
      }
    };
  },
  computed: {
    bankcard() {
      return this.$store.state.bankcard; //刷新
    },
    userNew() {
      //判断登录
      return this.$store.state.userNew;
    },
    RadioId: {
      get() {
        var obj = { id: "", min: "", man: "", paymentName: null, judgment: "" };
        if (
          this.bankcard.PaymentList !== "" ||
          this.bankcard.PaymentList !== null ||
          this.bankcard.PaymentList !== undefined
        ) {
            this.Online.scancode ='';
          obj.id = this.bankcard.PaymentList[Number(this.radio2)].id;
          obj.min = this.bankcard.PaymentList[Number(this.radio2)].minquota;
          obj.man = this.bankcard.PaymentList[Number(this.radio2)].maxquota;
          obj.judgment = this.bankcard.judgment;
          let cardName = this.bankcard.PaymentList[Number(this.radio2)].paymentName;
          for (let key in this.userNew.cardlist) {
            if (key === cardName) {
              obj.paymentName = this.userNew.cardlist[key];
            }
          }
          if (obj.paymentName === null) {
            obj.paymentName = cardName;
          }
          return obj;
        }
      },
      set(newValue) {}
    }
  },
  created() {
      if(this.bankcard.PlatformPay != ''){
          if(this.bankcard.PlatformPay[0].url != '/Online'){
              this.$router.push({ path: this.bankcard.PlatformPay[0].url});
          }
      }
  },
  methods: {
    acounmt(event) {
      let el = event.currentTarget;
      this.Online.acounmt = el.getAttribute("value");
    },
    Banklist(event) {},
    Obtainclick(code, text) {
      //获取code
      let vm = this;
      this.Online.scancode = code;
      vm.text = text;
      vm.bankshow = false;
    },
      listName(el){
          return el === "DC" ||  el ==="YEE" || el ==="JH" || el ==="XZF" || el ==="JFK" || el ==="AK" || el ==='YLX' ? true:false;
      },
    submit() {
      let vm = this, src, one;
      vm.$message.closeAll();
      var amount = vm.Online.acounmt;
      if (amount != null && amount != "" && amount != "0") {
        var exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
        if (!exp.test(amount)) {
          vm.$alert("输入金额范围" + vm.RadioId.min + "~" + vm.RadioId.man + "元", "系统提示框", {dangerouslyUseHTMLString: true});
          vm.Online.acounmt = "";
          return;
        }
      } else {
        vm.$alert("输入金额范围" + vm.RadioId.min + "~" + vm.RadioId.man + "元", "系统提示框", {dangerouslyUseHTMLString: true});
        vm.Online.acounmt = "";
        return;
      }
      if (Number(vm.Online.acounmt) < vm.RadioId.min || Number(vm.Online.acounmt) > vm.RadioId.man) {
        vm.$alert("输入金额范围" + vm.RadioId.min + "~" + vm.RadioId.man + "元", "系统提示框", {dangerouslyUseHTMLString: true});
        vm.Online.acounmt = "";
        return;
      }
      if(vm.listName(this.bankcard.PaymentList[Number(this.radio2)].paymentName)){
          Pay.newOpenWindow(vm.userNew.jrg + "PlatformPay/onlineBanking",this.bankcard.PaymentList[Number(this.radio2)].paymentName,vm.Online.acounmt,vm.RadioId.id,vm.Online.scancode,vm);
      }else{
          if(vm.Online.scancode === ''){
              vm.$alert("请选择银行", "系统提示框", {dangerouslyUseHTMLString: true});
              return;
          }
          Pay.newOpenWindow(vm.userNew.jrg + "PlatformPay/onlineBanking",this.bankcard.PaymentList[Number(this.radio2)].paymentName,vm.Online.acounmt,vm.RadioId.id,vm.Online.scancode,vm);
      }
    }
  }
};
</script>
<style lang='less'>
@import "lottery.less";
.Online {
  width: 100%;
  background: #f2f2f2;
  font-size: 12px;
  .select-box {
    position: relative;
    text-align: left;
    padding-left: 15px;
    span {
      position: absolute;
      width: 40px;
      right: 0;
      top: 0;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  }
  .bank-transition-box {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    padding-top: 240px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    .G_List {
      width: 100%;
      height: 100%;
      padding: 15px 15px;
      overflow: auto;
      background: #fff;
    }
    .el-col {
      position: relative;
      text-align: left;
      height: 45px;
      line-height: 45px;
      font-size: 16px;
      border-bottom: 1px solid #e5e5e5;
      span {
        position: absolute;
        right: 5px;
        top: 15px;
      }
    }
    .Title-box {
      height: 30px;
      line-height: 30px;
      background: #fff;
      text-align: right;
      padding-right: 15px;
      font-size: 25px;
    }
  }
}
</style>
