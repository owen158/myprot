<template>
    <div class='Recharge' ref="BackG">
        <TopCounter :title="text" :Boo="true" :src="'/deposit'"></TopCounter>
        <el-container v-if="bankcard.judgment != false">
            <el-main v-if="bankcard.PaymentList !=''">
                <p v-if="bankcard.judgment === true" class="A-main-Title">存款金额（*范围 {{RadioId.min}}-{{RadioId.man}}
                    元）</p>
                <p v-if="bankcard.judgment === true" class="A-main-Title">请选择支付方式</p>
                <el-radio-group v-model="picked" size="mini">
                    <el-row>
                        <el-col v-for="(v,key) in bankcard.PaymentList" :xs="8" :sm="6" :md="3" :lg="2" :xl="2">
                            <el-radio border :label="key">支付{{key+1}}</el-radio>
                        </el-col>
                    </el-row>
                </el-radio-group>
                <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px"
                         class="demo-ruleForm">
                    <el-form-item label="金额" prop="acounmt">
                        <el-input type="text" v-model="ruleForm.acounmt"></el-input>
                    </el-form-item>
                    <div v-if="bankcard.type ==='5'">
                        <el-form-item label="" prop="region" v-if="(typeof RadioId.paymentName=='string') != true">
                            <el-select v-model="ruleForm.region" placeholder="请选择银行">
                                <el-option v-for=" v in RadioId.paymentName" :label="v.title"
                                           :value="v.bankcode"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <el-form-item style="text-align: center">
                        <el-button type="primary" @click="submitForm('ruleForm')">提 &nbsp; &nbsp;交</el-button>
                        <el-button @click="resetForm('ruleForm')">重 &nbsp; &nbsp;置</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
        <el-container v-if="bankcard.judgment === false">
            <el-main style="padding: 30px 10px">
                <p class="text">
                    {{bankcard.err}} 如有疑问？请联系
                    <router-link style="color:#ff7700;" to="/NoteSingle">
                        在线客服
                    </router-link>
                </p>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    var vm;
    export default {
        data() {
            let validatetname = (rule, value, callback) => {
                let name = /^[0-9]+([.]\d{1,2})?$/;
                if (!value) {
                    return callback(new Error("请输入金额"));
                }
                setTimeout(function () {
                    if (!name.test(value)) {
                        callback(new Error("请输入金额(例:0.00),最高保留两位小数"));
                    } else {
                        callback();
                    }
                }, 300);
            };
            return {
                text: "",
                bankcode: {
                    acounmt: "",
                    scancode: "",
                    payId: "",
                    mobile:'mobile'
                },
                Online: {
                    card: "",
                    acounmt: "",
                    bankcode: "",
                    list: null,
                    mobile: ""
                },
                picked: 0,
                Money: {
                    man: "0",
                    min: "0"
                },
                ruleForm: {
                    acounmt: "",
                    region: ""
                },
                rules: {
                    acounmt: [{validator: validatetname, trigger: "blur"}],
                    region: [{required: true, message: "请选择银行", trigger: "change"}]
                }
            };
        },
        computed: {
            userNew: function () {
                //判断登录
                return this.$store.state.userNew;
            },
            bankcard() {
                return this.$store.state.bankcard; //刷新
            },
            RadioId: {
                get: function () {
                    var obj = {id: "", min: "", man: "", paymentName: null, judgment: ""};
                    if (this.bankcard.PaymentList !== "" || this.bankcard.PaymentList !== null || this.bankcard.PaymentList !== undefined) {
                        this.ruleForm.region = '';
                        obj.id = this.bankcard.PaymentList[Number(this.picked)].id;
                        obj.min = this.bankcard.PaymentList[Number(this.picked)].minquota;
                        obj.man = this.bankcard.PaymentList[Number(this.picked)].maxquota;
                        obj.judgment = this.bankcard.judgment;
                        let cardName = this.bankcard.PaymentList[this.picked].paymentName;
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
                set: function (newValue) {
                }
            }
        },
        mounted: function () {
            vm = this;
            this.setBackground();
            if (vm.bankcard.type === "") {
                vm.$router.push({path: '/deposit'});
            } else {
                this.$nextTick(function () {
                    switch (vm.bankcard.type) {
                        case "6":
                            vm.text =  "支付宝";
                            break;
                        case "7":
                            vm.text = "微信";
                            break;
                        case "8":
                            vm.text =  "财付通";
                            break;
                        case "10":
                            vm.text =  "银联扫码";
                            break;
                        case "12":
                            vm.text =  "京东支付";
                            break;
                        case "14":
                            vm.text =  "快捷支付";
                            break;
                        default:
                            vm.text =  "网银";
                    }
                });
            }
        },
        methods: {
            setBackground() {
                this.$refs.BackG.style.minHeight = window.innerHeight + "px";
            },
            submitForm(formName) {
                let src, one;
                let vm = this;
                this.$refs[formName].validate(function (valid) {
                    if (valid) {
                        if (vm.ruleForm.acounmt < vm.RadioId.min || vm.ruleForm.acounmt > vm.RadioId.man) {
                            let text =
                                "金额不能低于" + vm.RadioId.min + "元 或 高于" + vm.RadioId.man;
                            vm.$alert(text, "系统提示", {
                                dangerouslyUseHTMLString: true
                            });
                            return;
                        }
                        if (vm.bankcard.type === "5") {
                            if (vm.RadioId.paymentName === "DC") {
                                src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                                one = "?bankcode=" + "B2C" + "&acounmt=" + vm.ruleForm.acounmt + "&" + "payId=" + vm.RadioId.id;
                                window.location.href = src + one;
                                return;
                            }
                            if (vm.RadioId.paymentName === "JFK") {
                                src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                                one = "?bankcode=" + "1003" + "&" + "appSence=1002" + "&" + "acounmt=" + vm.ruleForm.acounmt + "&" + "payId=" + vm.RadioId.id;
                                window.location.href = src + one;
                                return;
                            }
                            if (vm.RadioId.paymentName === "AK") {
                                src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                                one = "?bankcode= H5_ONLINE_BANK_PAY&mobile=mobile&acounmt=" + vm.ruleForm.acounmt + "&" + "payId=" + vm.RadioId.id;
                                window.location.href = src + one;
                                return;
                            }
                            if (vm.bankcard.PaymentList[vm.picked].paymentName === "BFT") {
                                src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                                one = "?bankcode=" + vm.ruleForm.region + "&" + "mobile=WAP_PAY_B2C" + "&" + "acounmt=" + vm.ruleForm.acounmt + "&" + "payId=" + vm.RadioId.id;
                                window.location.href = src + one;
                            }
                            if (vm.bankcard.PaymentList[vm.picked].paymentName === "XQ" || vm.bankcard.PaymentList[vm.picked].paymentName === "GC") {
                                src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                                one = "?bankcode=" + vm.ruleForm.region + "&" + "mobile=mobile&acounmt=" + vm.ruleForm.acounmt + "&" + "payId=" + vm.RadioId.id;
                                window.location.href = src + one;
                            }
                            src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                            one = "?bankcode=" + vm.ruleForm.region + "&" + "acounmt=" + vm.ruleForm.acounmt + "&" + "payId=" + vm.RadioId.id;
                            window.location.href = src + one;
                        } else {
                            let payName = vm.bankcard.PaymentList[vm.picked].paymentName;
                            vm.bankcode.payId = vm.RadioId.id;
                            switch (vm.bankcard.type) {
                                case "6":
                                    vm.bankcode.scancode = "ali";
                                    break;
                                case "7":
                                    vm.bankcode.scancode = "wx";
                                    break;
                                case "8":
                                    vm.bankcode.scancode = "cft";
                                    break;
                                case "10":
                                    vm.bankcode.scancode = "yl";
                                    if ("WF" == payName) {
                                        //WF接onlineBanking接口
                                        let src = vm.userNew.jrg + "PlatformPay/onlineBanking";
                                        let one =
                                            "?bankcode=WAP_UNION&acounmt=" +
                                            vm.ruleForm.acounmt +
                                            "&" +
                                            "payId=" +
                                            vm.bankcode.payId +
                                            "&mobile=mobile";
                                        window.location.href = src + one;
                                    }
                                    break;
                                case "12":
                                    vm.bankcode.scancode = "jd";
                                    break;
                                case "14":
                                    vm.bankcode.scancode = "kj";
                                    break;
                                default:
                                    vm.bankcode.scancode = null;
                            }
                            vm.bankcode.acounmt = vm.ruleForm.acounmt;
                            vm.$BugAliPay(vm, vm.bankcode);
                        }
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            vm = this;
        },
        components: {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../../../static/css/style.less";

    .Recharge {
        padding-top: 0.8rem;
        .Bg-BackGround;
        width: 100%;

    .el-radio--mini.is-bordered {
        margin: 5px 0;
    }

    .el-select {
        width: 100%;
    }

    .el-radio-group {
        width: 100%;
    }

    .A-main-Title {
        height: 0.45rem;
        line-height: 0.45rem;
        color: @size-color;
        font-size: 0.25rem;
        text-align: left;
        padding-left: 0.15rem;
    }

    .el-form-item__label {
        line-height: 20px;
        color: @size-color;
    }

    .el-form-item {
        text-align: left;
        margin-bottom: 17px;
    }

    .el-form--label-top .el-form-item__label {
        padding-bottom: 0;
        color: @size-color;
    }

    .text {
        font-size: 13px;
        color: @size-color;
    }

    .el-radio__label {
        color: @size-color;
    }

    .el-form-item__content {
        line-height: 30px;
    }

    .el-input__inner {
        height: 30px;
    }

    }
</style>