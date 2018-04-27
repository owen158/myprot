<template>
  <div class='ScanCodebankAlipay  PayPage'>
    <el-row v-if="!RadioId.judgment">
      <div class="NoList">
        <span class="el-icon-warning" style="color: red;"></span>暂无可选二维码，联系管理员配置
        <router-link style="color: #c8a675;font-weight: 900;" to="/NoteSingle">
          <span class="el-icon-service"></span>在线客服
        </router-link>
      </div>
    </el-row>
    <el-row v-show="RadioId.judgment">
      <div class="line-w"></div>
      <p class="bg-white" style="font-size: 14px;line-height: 30px;text-align: left;padding-left: 15px">只能扫描支付哦，如有疑问请联系<router-link style="color: #c8a675;font-weight: 900;" to="/NoteSingle">
        <span class="el-icon-service"></span>在线客服
      </router-link>
      </p>
      <div class="line-w"></div>
      <el-row class="bg-white">
        <el-card :body-style="{ padding: '5px'}">
          <img style="margin:0 auto;height: 150px;width: 150px;display: block" :src="RadioId.paymentName" class="image">
        </el-card>
        </el-col>
      </el-row>
      <div class="line-w"></div>
      <el-form label-position="right" label-width="80px" :model="Fata">
        <el-form-item class="" label="金额" >
          <el-input v-model="Fata.amount" placeholder="请输入金额"></el-input>
          <span style="top: 0" class="Description"  @click="show2 = !show2">限额说明</span>
        </el-form-item>
        <div class="line-w"></div>
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="PayPage-transition">
            <p> 单笔限额(元){{RadioId.min}} - {{RadioId.man}}</p>
          </div>
        </transition>
        <el-form-item class="" label="订单号" >
          <el-input v-model="Fata.orderNum" placeholder="请输入订单号后四位"></el-input>
        </el-form-item>
        <div class="line-w"></div>
      </el-form>
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
    var vm;
    export default {
        data () {
            return {
                show2:false,
                Fata:{
                    id:'',
                    amount:'',
                    orderNum:'',
                    transfertime:'',
                    type:''
                },
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            bankcard() {
                return this.$store.state.bankcard;//刷新
            },
            RadioId:{
                get: function () {
                    let obj = {id:'',min:'',man:"",paymentName:'',judgment:''};
                    if(this.bankcard.PaymentList !== "" || this.bankcard.PaymentList !== null || this.bankcard.PaymentList !== undefined){
                        obj.id=this.bankcard.PaymentList.id;
                        obj.min=this.bankcard.PaymentList.minquota;
                        obj.man=this.bankcard.PaymentList.maxquota;
                        obj.judgment = this.bankcard.judgment;
                        obj.paymentName = this.bankcard.PaymentList.accountimg
                    }
                    return obj;
                },
                set: function (newValue) {
                }
            },
            AmountTion:{//金额验证
                get: function () {
                    let th = this;
                    if(/^[0-9]+([.]\d{1,2})?$/.test(Number(th.Fata.amount))){
                        return Number(th.Fata.amount);
                    }else{
                        return false;
                    }
                },
                set: function (newValue) {
                    if(/^[0-9]+([.]\d{1,2})?$/.test(newValue)){
                        console.log(1);
                    }else{
                        console.log("请输入数字(例:0.00),最高保留两位小数")
                    }
                }
            },
        },
        mounted: function () {
        },
        methods: {
            GetDateT:function () {
                var d,s;
                d = new Date();
                s = d.getFullYear() + "-";             //取年份
                s += (d.getMonth() + 1)<10 ? '0'+(d.getMonth() + 1) + "-" : (d.getMonth() + 1) + "-";//取月份
                s += d.getDate() < 10 ? '0'+d.getDate() + " " : d.getDate();         //取日期
                s += d.getHours() < 10 ? '0'+d.getHours() + ":" : d.getHours() + ":";       //取小时
                s += d.getMinutes() <10 ? '0'+d.getMinutes() + ":" : d.getMinutes() + ":";    //取分
                s += d.getSeconds() <10 ? '0'+ d.getSeconds() : d.getSeconds();         //取秒
                return(s);
            },
            submit:function () {
                let vm = this;
                vm.$message.closeAll();
                if(vm.AmountTion === false){
                    vm.$alert('输入金额范围'+vm.RadioId.min+'~'+vm.RadioId.man+"元", '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    vm.Fata.amount='';
                    return;
                }
                if(Number(vm.Fata.amount) < vm.RadioId.min || Number(vm.Fata.amount) > vm.RadioId.man){
                    vm.$alert('输入金额范围'+vm.RadioId.min+'~'+vm.RadioId.man+"元", '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    vm.Fata.amount='';
                    return;
                }
                if(this.Fata.orderNum === ""){
                    vm.$message({
                        showClose: true,
                        message: '输入后四位订单号'
                    });
                    return;
                }
                vm.Fata.id = vm.RadioId.id;
                vm.Fata.transfertime = vm.GetDateT();
                vm.Fata.type = 3;
                vm.$getOrder(vm,vm.Fata);
            }
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  @import "lottery.less";
  .ScanCodebankAlipay{
    width: 100%;
    padding-bottom: 50px;
  }
</style>
