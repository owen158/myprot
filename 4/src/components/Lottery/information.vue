<template>
    <div class='information PayPage'>
        <el-row class="G-item">
            汇款前，请点击索要银行账号 <b @click="show4 = !show4" >银行卡号</b>
            <!--<router-link class="el-icon-arrow-right rf" style="font-size: 15px;color: #666;" to="/FirstDeposit">-->
            <!--</router-link>-->
        </el-row>

        <transition name="el-fade-in">
            <div v-show="show4" class="transition-box">
                <el-row >
                    <el-col :span="24" >
                        <el-card id="card" :body-style="{ padding: '0px' }" style="width: 100%" >
                            <div v-for="item in bankcard.cardinfo" v-if="bankcard.cardinfo !=''">
                                <div class="Htad">
                                    <span>银行户名</span>{{item.realname}}
                                </div>
                                <div class="Htad">
                                    <span>银行账户</span>{{item.cardno}}
                                </div>
                                <div class="Htad">
                                    <span>银行名称</span>{{item.bankname}}
                                </div>
                                <div class="Htad">
                                    <span>开户行地址</span>{{item.bankaddress}}
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </transition>
        <el-form ref="form" :model="CardObj" label-width="90px">

            <div class="line-w"></div>
            <el-form-item class="el-solid" label="存款方式">
                <div  class="el-form-item__content el-form-item__select">
                    <div  @click="show1= !show1" class="el-input" data-id="information">
                        {{paymentDatatext}}
                        <span class="el-icon-arrow-right rf"></span>
                    </div>
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item class="el-solid" label="存款人姓名" >
                <el-input v-model="CardObj.name" placeholder="请输入真实姓名" :minlength="2" :maxlength="10"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item class="el-solid" label="银行卡号"  >
                <el-input v-model="CardObj.account" placeholder="卡号" :minlength="4" :maxlength="19"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item class="el-solid" label="存款时间">
                <el-input v-model="CardObj.ctime" :disabled="true"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item class="el-solid" label="金额" >
                <el-input v-model="CardObj.amount" type="text" placeholder="请输入100-2000000"></el-input>
                <span style="top: 0;" class="Description"  @click="show2 = !show2">限额说明</span>
            </el-form-item>
            <transition name="el-zoom-in-top">
                <div v-show="show2" class="PayPage-transition_">
                    <p> 单笔限额(元)100 - 2000000</p>
                    <p> 每日限额(元)2000000</p>
                </div>
            </transition>
            <div class="line-w"></div>
            <div style="margin-bottom: 0px;">
                <el-row class="" style="height: 60px;line-height: 60px;">
                    <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                        <el-button  size="small" @click="CardObj.amount = 100" value="100" class="G--submit">100</el-button>
                    </el-col>
                    <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                        <el-button  size="small" @click="CardObj.amount = 300" value="300" class="G--submit">300</el-button>
                    </el-col>
                    <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                        <el-button   size="small" @click="CardObj.amount = 500"value="500" class="G--submit">500</el-button>
                    </el-col>
                    <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                        <el-button   size="small" @click="CardObj.amount = 1000" value="1000" class="G--submit">1000</el-button>
                    </el-col>
                    <el-col :xs="4" :sm="3" :md="2" :lg="1" :xl="1">
                        <el-button  size="small" @click="CardObj.amount = 1500" value="1500" class="G--submit">1500</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-form>
        <el-form style="margin-top: 5px;" ref="form" :model="CardObj" label-width="100px">
            <div class="line-w"></div>
            <el-form-item label="是否申请彩金">
                <div  class="el-form-item__content el-form-item__select">
                    <div @click="show3 = !show3" class="el-input" data-id="Discount">
                        {{DiscountDatatext}}
                        <span class="el-icon-arrow-right rf"></span>
                    </div>
                </div>
            </el-form-item>
            <div class="line-w"></div>
        </el-form>
        <el-button type="primary"  @click="submit" class="G-submit" >下一步</el-button>
        <transition name="el-zoom-in-bottom">
            <div v-show="show1" class="transitionselect">
                <div class="header"><span  @click="show1 = !show1" class="G_iocn el-icon-arrow-left"></span>付款方式</div>
                <el-row>
                    <el-col :span="24" v-for="v in  paymentData" >
                        <div  @click="information($event)"  class="grid-content bg-purple information" :data-value="v.value" :data-text="v.text">
                            {{v.text}}
                            <span style="color: #409eff"  v-if="CardObj.type === v.value" class="rf el-icon-check"></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </transition>
        <transition name="el-zoom-in-bottom">
            <div v-show="show3" class="transitionselect">
                <div class="header"><span  @click="show3 = !show3" class="G_iocn el-icon-arrow-left"></span>选择优惠</div>
                <el-row>
                    <el-col :span="24" v-for="v in  DiscountData" >
                        <div  @click="informationone($event)"  class="grid-content bg-purple Discount" :data-value="v.value" :data-text="v.text">
                            {{v.text}}
                            <span style="" v-if="CardObj.caijin ===v.value" class="lf el-icon-success"></span>
                            <span style=""  v-if="CardObj.caijin!= v.value" class="lf "></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </transition>
        <div class="G-Warm" style="padding: 20px;">
            <h2 class="G_info_title">
                温馨提示
            </h2>
            <p class="G_info_p_title">为确保您的款项及时到帐，请您留意以下几点：</p>
            <p class="G_info_text">1.每次存款前，请先至本页面查看最新的收款账户。<br>请勿自行存款至旧账户，若存款至旧账户，本公司将无法查收，恕不负责。</p>
            <p class="G_info_text">2.请使用同行存款，加快您的入款速度。</p>
            <p class="G_info_text">3.支持非本人开户账户进行存款。</p>
            <p class="G_info_text">
                4.若不清楚操作步骤，可
                <router-link style="color:#b81109;" to="/HelpProcess">
                    点此
                </router-link>
                查看存款范例。
            </p>
            <p class="G_info_text">支付遇到困难？联系
                 <router-link style="color:#b81109;" to="/NoteSingle">
                    在线客服
                </router-link>
                获得帮助
            </p>
        </div>
    </div>
</template>
<script>
    var vm;
    export default {
        data () {
            return {
                show1: false,
                show2: false,
                show3:false,
                show4:false,
                paymentData:[
                    {text:'网银转账',value:'1'},
                    {text:'支付宝',value:'2'},
                    {text:'财付通',value:'3'},
                    {text:'微信',value:'4'},
                    {text:'ATM自动柜员机',value:'5'},
                    {text:'ATM现金入款',value:'6'},
                    {text:'银行柜台',value:'7'}
                ],
                DiscountData:[
                    {text:'不申请',value:'0'},
                    {text:'申请',value:'1'}
                ],
                DiscountDatatext:"不申请",
                paymentDatatext:'网银转账',
                CardObj:{
                    name:'',
                    account:'',
                    amount:'',
                    ctime:'',
                    type:'1',
                    caijin:'0'
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            bankcard:function () {
                return this.$store.state.bankcard;
            },
        },
        mounted() {
            vm=this;
            vm.CardObj.ctime= vm.GetDateT();
        },
        ready() {
        },
        methods:{
            information:function (event) {//存款方式
                let vm = this;
                let el = event.currentTarget;
                vm.paymentDatatext = el.getAttribute('data-text');
                vm.CardObj.type=el.getAttribute('data-value');
                vm.show1 = false;
            },
            informationone:function (event) {//存款方式
                let vm = this;
                let el = event.currentTarget;
                vm.DiscountDatatext = el.getAttribute('data-text');
                vm.CardObj.caijin=el.getAttribute('data-value');
                vm.show3 = false;
            },
            acounmt:function (event) {//获取金额
                let el = event.currentTarget;
                this.CardObj.amount=el.getAttribute('value')
            },
            submit:function () {//提交表单
                vm=this;
                vm.$message.closeAll();
                vm.$BugNewBankPay(vm,vm.CardObj);
            },
            GetDateT:function () {
                var d,s;
                d = new Date();
                s = d.getFullYear() + "-";             //取年份
                s += (d.getMonth() + 1)<10 ? '0'+(d.getMonth() + 1) + "-" : (d.getMonth() + 1) + "-";//取月份
                s += d.getDate() < 10 ? '0'+d.getDate() + " " : d.getDate()+" ";         //取日期
                s += d.getHours() < 10 ? '0'+d.getHours() + ":" : d.getHours() + ":";       //取小时
                s += d.getMinutes() <10 ? '0'+d.getMinutes() + ":" : d.getMinutes() + ":";    //取分
                s += d.getSeconds() <10 ? '0'+ d.getSeconds() : d.getSeconds();         //取秒
                return(s);
            }
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "lottery.less";
.information{
    width: 100%;
    background: #f2f2f2;
    padding-bottom: 50px;
    font-size: 12px;
    .G-item{
        background: #fff;
        font-size:0.28rem;
        text-align: left;
        padding: 20px 15px;
        margin-bottom: 5px;
        color:#ff695a;
        b{
            font-size: 0.3rem;
            color: #fff;
            padding: 0.05rem 0.15rem ;
            background: #ff695a;
            border-radius: 0.1rem;
        }
    }
    #card{
        /*padding-top: 0.2rem;*/
        padding: 0.2rem;
        height:2rem;
        .Htad{
            height: 0.4rem;
            text-align: left;
            line-height: 0.4rem;
            span{
                display: inline-block;
                width: 1.5rem;
                text-align: right;
                padding-right: 0.15rem;
                font-weight: 900;
            }
        }
    }
    .el-radio--small,.is-bordered{
        margin-bottom: 10px;
    }
    .el-input.is-disabled .el-input__inner{
        background-color: #f5f7fa;
        border-color: #dfe4ed;
        color: #999;
        cursor: not-allowed;
    }
    .el-form-item__select{
        text-align: left;
        padding-left: 15px;
        position: relative;
        span{
            position: absolute;
            right: 0;
            top:10px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
        }
    }
}
</style>
