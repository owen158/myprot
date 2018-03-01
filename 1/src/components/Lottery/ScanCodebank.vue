<template>
  <div class="ScanCodebank" ref="BackGr">
    <el-container >
      <Top :text="text"></Top>
      <withdraw :src="withdraw"></withdraw>
      <el-main v-show="judgment">
        <div class="G-error">
          <span class="el-icon-warning" style="color: red;padding-right: 3px;"></span>暂无可选二维码，联系管理员配置
          <router-link class="Lcode-a" to="/NoteSingle">在线客服</router-link>
        </div>
      </el-main>
      <el-main v-if="!judgment">
        <div class="G-error">
          只能扫描支付哦，如有疑问请联系
          <router-link class="Lcode-a" to="/NoteSingle">在线客服</router-link>
        </div>
        <div class="line-bor"></div>
        <el-row>
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="12" >
            <el-card :body-style="{ padding: '2.5%' }">
              <img style="width: 95%;" :src="UImg" alt="">
            </el-card>
          </el-col>
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="24">
            <div class="info">扫描二维码付款成功后，填写汇款信息！</div>
          </el-col>
        </el-row>
        <div class="line-bor"></div>
        <el-form label-position="top" label-width="0" status-icon :rules="rules2" :model="Fata" ref="ruleForm2">
          <el-form-item :label="amounts" prop="amount">
            <el-input v-model="Fata.amount" placeholder="请输入存款金额"></el-input>
          </el-form-item>
          <el-form-item label="* 请填写您订单号的后四位" prop="password">
            <el-input v-model="Fata.orderNum" type="text" placeholder="请输入后4位订单号"></el-input>
          </el-form-item>
          <div class="A-text">
            <br>
            1.申请的存款金额必须与实际存款金额一致<br> <br>
            2.成功存款后，可点击【历史记录】查看详情<br> <br>
            3.支付遇到困难？请联系客服人员获得帮助<br> <br>
          </div>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="submitForm('ruleForm2')">提 交</el-button>
            <el-button @click="resetForm('ruleForm2')">重 置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>

  </div>
</template>
<script>
  var vm;
  import withdraw from '../public/return.vue'
  import Top from '../Top/Top.vue'
    export default {
        data () {
            var validatePass = (rule, value, callback) => {
                let ation=/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请填写您订单号的后四位'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('*请填写您订单号的后四位'));
                    }else{
                        callback();
                    }
                },300);
            };
            var validatecredit = (rule, value, callback) => {
                let name =/^[0-9]+([.]\d{1,2})?$/;
                if (!value) {
                    return callback(new Error('请输入金额'));
                }
                setTimeout( function() {
                    if (!name.test(value)) {
                        callback(new Error('请输入金额(例:100)'));
                    }else{
                        if(Number(value) <= 0 ){
                            return callback(new Error('请输入金额(例:100),不能小于、等于0'));
                        }
                        if(Number(value) < vm.min || Number(value) > vm.man){
                            return callback(new Error('请输入金额'+vm.min+'-'+vm.man));
                        }
                        callback();
                    }
                },300);
            };
            return {
                text:'确认支付',
                man:'*',
                min:'*',
                withdraw:'/ScanCode',
                judgment:true,
                Fata:{
                    id:'',
                    amount:'',
                    orderNum:'',
                    transfertime:'',
                    type:''
                },
                rules2: {
                    amount: [
                        { validator: validatecredit, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                },
                UImg:'',
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            Scan:function () {//进入type
                return this.$store.state.Scan;
            },
            amounts:{
                get:function (){
                    return "单笔限额"+this.min+'-'+this.man;
                }
            }
        },
        mounted: function () {
            vm = this;
            vm.$nextTick(function () {
                this.setBackground()
            })
            console.log(vm.Scan)
            if(vm.Scan === null){
               return vm.$router.push({path:'/ScanCode'});
            }else{
                vm.Fata.type =  vm.Scan;
                vm.$ajax({type:vm.Scan},'alipayPaymentScanCode/getQRCode',function (data) {
                    if(data.status === "success"){
                        if(data.msg != undefined){
                             vm.judgment = true;
                            return
                        }else{
                            vm.Fata.id = data.id;
                            vm.judgment = false;
                            vm.Fata.amount = '';
                            vm.Fata.orderNum = '';
                            vm.man = data.maxquota;
                            vm.min = data.minquota;
                            vm.UImg =data.accountimg
                        }
                    }else{
                        vm.$router.push({path:'/ScanCode'});
                    }
                });
                vm.Fata.transfertime=vm.GetDateT();
            }
        },
        methods: {
            setBackground(){
                this.$refs.BackGr.style.height = window.innerHeight+'px';
            },
            drot:function () {
              this.webApp = false;
            },
            GetDateT:function () {
                var d,s;
                d = new Date();
                s = d.getFullYear() + "-";             //取年份
                s = s + (d.getMonth() + 1) + "-";//取月份
                s += d.getDate() + " ";         //取日期
                s += d.getHours() + ":";       //取小时
                s += d.getMinutes() + ":";    //取分
                s += d.getSeconds();         //取秒
                return(s);
            },
            submitForm(formName) {
                this.$refs[formName].validate(function(valid) {
                    if (valid) {

                        vm.$getOrder(vm,vm.Fata);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        components: {
            Top,
            withdraw
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  @import "../../../static/css/style.less";
.ScanCodebank{
  padding-top: 0.8rem;
  min-height: 100%;
  .Bg-BackGround;
  width:100%;
  .G-error{
    font-size: 14px;
    text-align: left;
    color:@size-color;
    line-height: 30px;
    a{
      color: #409eff;
    }
  }
  .line-bor{
    height: 1px;
    background-color: #bfbfbf;
  }
  .el-form-item__label{
    line-height: 20px;
    color:@size-color;
  }
  .el-form-item{
    text-align: left;
    margin-bottom: 17px;
  }
  .el-form--label-top .el-form-item__label{
    float: left;
    padding-bottom: 0;
  }
  .el-form-item__content{
    line-height: 30px;
  }
  .el-input__inner{
    height: 30px;
  }
  .el-card{
    margin-top: 15px;
  }
  .info{
    font-size: 14px;
    line-height: 30px;
    text-align: left;
    color:@size-info;
  }
  .A-text{
    font-size: 0.25rem;
    text-align: left;
    color:@size-info;
  }
}
</style>
