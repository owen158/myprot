<template>
    <div class='Withdrawals'>
        <Top :text="Topobj"></Top>
        <el-row v-if="typeof userNew.whether === 'boolean' ">
            <el-row class="Addcardpass"  v-show="userNew.whether">
                <p class="text">
                    申请提款需先设置提款密码,请先设置
                </p>
                <router-link class="AddPass" to="/modifybankpass">
                    立即设置
                </router-link>
            </el-row>
            <el-container v-if="userNew.whether === false">
                <el-main v-if="bankcard.judgmentcardNum != true">
                    <el-row>
                        <el-col :span="24">
                            <el-card :body-style="{ padding: '0px' }">
                                <router-link class="Addcard" to="/userCapitalPwd">
                                    <span class="el-icon-circle-plus-outline add"></span>
                                    点击此处新增银行卡
                                </router-link>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row class="text">
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark">请先添加银行卡,添加后即可进行转出提款</div>
                        </el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-row>

        <el-row v-show="bankcard.judgmentcardNum">
            <el-row class="G-card">
                <el-col :span="24">
                    <div class="G-card-left">
                        到账银行卡
                    </div>
                    <div class="G-card-right">
                        <div class="G-card-box">
                            <div class="G-card-name">&nbsp;{{bankcard.cardNum.bank_name}}&nbsp;</div>
                            <div class="line-w"></div>
                            <div class="G-card-num">&nbsp;{{bankcard.cardNum.card_num}}&nbsp;</div>
                            <i class="x-icon-lotter-active"></i>
                        </div>
                        <router-link to="/userBankCard">
                            更换银行卡
                        </router-link>
                    </div>
                </el-col>
            </el-row>
            <div class="line-w"></div>
            <el-form label-position="right" label-width="100px">
                <el-form-item label="账户余额" style="margin-bottom: 20px;">
                    <span class="lf">{{userNew.userMoney}}元</span>
                </el-form-item>
                <el-form-item label="要求打码量">
                    <el-input size="mini" :value="bankcard.Config.marking_quantity"   :disabled="true"></el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="完成打码量">
                    <el-input size="mini" :value="bankcard.Config.user_quantity" :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <el-form style="margin-top: 10px;" label-position="right" label-width="100px" :model="tk" >
                <el-form-item label="提交金额">
                    <el-input size="mini" type="text" :maxlength=8 v-model="tk.credit" placeholder="请输入 ￥100-500000"></el-input>
                    <span class="Description"  @click="show2 = !show2">限额说明</span>
                </el-form-item>
                <transition name="el-zoom-in-top">
                    <div v-show="show2" class="transition-boxW">
                        <p> 单笔限额(元){{SizeValue.min}} - {{SizeValue.man}}</p>
                    </div>
                </transition>
                <div class="line-w"></div>
                <el-form-item label="提款密码">
                    <el-input  size="mini" type="password"  v-model="tk.password" :maxlength='4' placeholder="提款密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="tkmoney()" class="G-submit el-button--primary">下一步</el-button>
            <div class="G-Warm">
                <p>提取遇到困难</p>
                <p>联系
                   <router-link style="color:#b81109;" to="/NoteSingle">
                    	在线客服
                	</router-link>
                    获得帮助</p>
            </div>
        </el-row>
    </div>
</template>

<script>
    var vm;
    import Top from '../Top/Top.vue';
    export default {
        data () {
            return {
                tk:{
                    credit:'',
                    password:'',
                    cardid:''
                },
                text:'',
                Money:{
                    min:0,
                    man:1
                },
                SizeValue:{
                    min:100,
                    man:500000
                },
                show2: false,
                Topobj:{
                    text:'提款',
                    withdraw:'/'
                },
                obj:null,
                show:false,
            }
        },
        computed: {
            bankcard:function () {
                return this.$store.state.bankcard;
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            TransTion:{//金额验证
                get: function () {
                    let vm = this;
                    if(/^[0-9]+([.]\d{1,2})?$/.test(vm.tk.credit)){
                        return Number(vm.tk.credit);
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
        mounted() {
            vm=this;
            this.$nextTick(function (){
                if(vm.bankcard.judgmentcardNum === true){
//                    console.log(1)
//                    vm.$store.dispatch("incrObtain", {id: 1});
                }
            })
        },
        methods:{
            tkmoney:function () {
                let vm;
                vm=this;
                vm.tk.cardid = vm.bankcard.cardNum.id;
                vm.$message.closeAll();
                if(vm.TransTion === false){
                    vm.$alert('输入金额范围'+vm.SizeValue.min+'~'+vm.SizeValue.man+"元", '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    vm.tk.credit='';
                    return;
                }
                if(Number(vm.tk.credit)  < vm.SizeValue.min || Number(vm.tk.credit)  > vm.SizeValue.man){
                    vm.$alert('输入金额范围'+vm.SizeValue.min+'~'+vm.SizeValue.man+"元", '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    vm.tk.credit='';
                    return;
                }
                if(!/^[0-9]{4}$/.test(vm.tk.password)){
                    vm.tk.password = "";
                    vm.$alert('请输入资金密码', '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                    return;
                }
                if(vm.bankcard.Config.marking_quantity === ""){
                    return vm.$router.push({path:"/Withdrawals"});
                }
                if((Number(vm.bankcard.Config.marking_quantity) > Number(vm.bankcard.Config.user_quantity)) && (Number(vm.bankcard.Config.withdraw_fee)> 0 || Number(vm.bankcard.Config.withdraw_manage_fee) > 0)){
                    vm.$confirm("未完成打码量,提款将收取"+vm.bankcard.Config.withdrawConfig +"%的费率,"+'且今日提款次数过多，提款将收取' + vm.bankcard.Config.withdraw_fee + '%的手续费和'+vm.bankcard.Config.withdraw_manage_fee+'元的行政费,是否继续提款？', '系统提示', {
                        confirmButtonText: '确认',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        vm.$BugNewWithDraw(vm,vm.tk)
                    }).catch(() => {
                        vm.tk.credit='';
                        vm.tk.password =""
                    });
                    return;
                }else if(Number(vm.bankcard.Config.marking_quantity) > Number(vm.bankcard.Config.user_quantity)){
                    vm.$confirm("未完成打码量,提款将收取"+vm.bankcard.Config.withdrawConfig +"%的费率,是否继续提款？", '系统提示', {
                        confirmButtonText: '确认',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        vm.$BugNewWithDraw(vm,vm.tk)
                    }).catch(() => {
                        vm.tk.credit='';
                        vm.tk.password =""
                    });
                    return ;
                }else if(Number(vm.bankcard.Config.withdraw_fee) > 0 || Number(vm.bankcard.Config.withdraw_manage_fee) > 0){
                    vm.$confirm("今日提款次数过多，提款将收取"+vm.bankcard.Config.withdraw_fee +"%的费率+"+vm.bankcard.Config.withdraw_manage_fee+'的行政费,是否继续提款？', '系统提示', {
                        confirmButtonText: '确认',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        vm.$BugNewWithDraw(vm,vm.tk)
                    }).catch(() => {
                        vm.tk.credit='';
                        vm.tk.password =""
                    });
                    return;
                }else{
                    vm.$BugNewWithDraw(vm,vm.tk)
                }
            },
//            fun:function () {
//                vm=this;
//                vm.show = false;
//            },
//            fun1:function () {
//                vm=this;
//                vm.show = false;
//                vm.$BugNewWithDraw(vm,vm.tk)
//            }
        },
        created(){
            vm=this;
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.Withdrawals{
    width:100%;
    padding-bottom: 50px;
    font-size: 0;
    .el-form-item{
        background: #fff;
        height: 55px;
        padding-top: 7px;
        margin-bottom: 0;
    }
    .Addcardpass{
        height: 250px;
        font-size: 16px;
        background: #fff;
        .text{
            margin: 50px 0;
            text-align:center;
            line-height: 30px;
        }
        .AddPass{
            display: block;
            width: 200px;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            font-weight: 900;
            margin: 0 auto;
            background: #c8a675;
            color: #fff;
            border-radius: 5px;
        }
    }
    .el-form-item__label{
        font-weight: 900;
        color: #333;
    }
    .drawalsTop{
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: left;
        padding-left: 0.25rem;
        font-size: 0.25rem;
        color:@text-c4;
    }
    .text{
        font-size: 14px;
        line-height: 60px;
    }
    .Addcard{
        display: block;
        width: 100%;
        /*height: 100px;*/
        padding: 1rem;
        color:#c8a675;
        font-size: 0.25rem;
        .add{
            font-size: 1rem;
            display: block;
            color:#c8a675;
            margin-bottom:0.5rem;
        }
    }
    input{
        border: none;
        outline: none;
        font-size: 15px;
    }
    .G-card{
        height: 180px;
        background: #fff;
    }
    .line-w{
        height: 1px;
        width: 100%;
        border-bottom: 1px solid #c8c7cc;

    }
    .G-card-left,.G-card-right{
        float: left;
    }
    .G-card-left{
        width: 100px;
        font-size: 16px;
        padding-top: 30px;
        color: #333;
        font-weight: 900;

    }
    .G-card-box{
        position: relative;
        margin-top: 15px;
        border:1px solid #c8a675;
        width: 200px;
        height: 100px;
        i{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 20px;
            height: 20px;
        }
    }
    .G-card-right{
        a{
            display: block;
            line-height: 30px;
            font-size: 15px;
            text-align: left;
            margin-top: 15px;
            color: #c8a675;
        }
    }
    .G-card-name{
        font-size: 20px;
        line-height: 60px;
        font-weight: 900;
    }
    .G-card-num{
        line-height: 40px;
        font-size: 14px;
    }
    span.Description{
        position: absolute;
        font-size: 14px;
        right: 0px;
        top:0;
        height: 50px;
        width: 100px;
        color: #c8a675;
    }
    .G-Warm{
        margin: 30px 20px;
    p{
        line-height: 24px;
        font-size: 15px;
        text-align: left;
    }
    }
    .el-form-item__content{
        position: relative;
    }
    .transition-boxW{
        background: #f2f2f2;
        padding: 10px 15px;
        p{
            line-height: 20px;
            font-size: 16px;
            text-align: right;
        }
    }
}

</style>
