<template>
    <div class='userBankCard'>
        <div class="WithdrawalsCard row">
            <div class="CardNumBj" v-if="bankcard.cardNum != ''">
                <p class="bankname">{{bankcard.cardNum.card_username}}</p>
                <p class="bank">{{bankcard.cardNum.bank_name}}</p>
                <p class="bankNum">{{bankcard.cardNum.card_num}}</p>
                <!--<i @click="delect()" :data-id="bankcard.cardNum.id">删除</i>-->
                <div v-show="ctpop" class="delectpop" >
                    <div class="delectBox">
                        <h2>删除银行卡</h2>
                        <div class="solid"></div>
                        <div class="A-Form">
                            <form action="">
                                <p class="A-main-Title">取款密码</p>
                                <div class="A-item">
                                    <input v-num minlength="4" maxlength="6" v-model="userId.password" id="cardb" type="password" placeholder="取款密码">
                                </div>
                            </form>
                            <div class="A-btn">
                                <div class="col-6">
                                    <div class="submit"  @click="qrdelect($event)">确 认</div>
                                </div>
                                <div class="col-6">
                                    <div class="submit" @click="redelect()">关 闭</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row title" v-if="bankcard.cardNum != ''">
                温馨提示 ： 如需修改绑定银行卡信息，请联系
                <router-link to="/NoteSingle">
                    在线客服
                </router-link>
            </div>
            <div class="addcard" v-if="bankcard.cardNum === ''">
                <router-link to="/userCapitalPwd">
                    <i class="iconfont icon-addbank"></i>添加银行卡
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    var vm,el;
    export default {
        data () {
            return {
                userId:{
                    cardId:'',
                    password:""
                },
                ctpop:false
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            bankcard:function () {
                return this.$store.state.bankcard;
            }
        },
        mounted() {
        },
        methods:{
            delect:function () {
                vm=this;
                vm.ctpop=true;
            },
            qrdelect:function (event) {
                vm=this;
                el=event.currentTarget;
                vm.userId.cardId= vm.bankcard.cardNum.id;
                if(vm.userId.password == ""){
                    vm.$alert('请输入取款密码', '系统提示', {
                        dangerouslyUseHTMLString: true
                    });
                    return;
                }
                vm.$BugNewdeletebank(vm,vm.userId)
            },
            redelect:function () {
                vm=this;
                vm.userId.password="";
                vm.ctpop=false;
            }
        },
        created() {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.userBankCard{
    width:100%;
    .addcard{
        height: 3rem;
        width: 95%;
        margin: 0.1rem auto;
        background: #fff;
        border-radius: 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        a{
            display: block;
            width: 100%;;
            line-height: 3rem;
            height: 3rem;
            color:#0a0a0a;
            font-size: 0.5rem;
            i{
                font-size: 0.6rem;
            }
        }
    }
    .CardNumBj{
        height: 1.8rem;
        padding-top: 0.3rem;
        border-radius: 3px;
        background: url(http://192.168.0.140:82/mobileTX/images393/Lottery/cardbj.png) no-repeat;
        background-size:100% 100%;
        position: relative;
        padding-left: 20%;
        i{
            position: absolute;
            right:0.1rem;
            top:0.1rem;
            width:0.6rem;
            height: 0.3rem;
            font-size: 0.2rem;
            line-height: 0.3rem;
            border-radius: 3px;
            font-style:normal;
            background:@size-color;
        }
        p{
            text-align: left;
            padding-left: 0.2rem;
        }
        .bankname,.bank{
            height: 0.4rem;
            line-height: 0.4rem;
            color:@size-color;
        }
        .bankname{
            font-size: 0.3rem;
            font-weight: 800;
        }
        .bank{
            font-size: 0.22rem;
        }
        .bankNum{
            height: 0.7rem;
            font-weight: 100;
            line-height: 0.7rem;
            color:@size-color;
            font-size: 0.32rem;
        }
    }
    .title{
        height: 0.8rem;
        line-height: 0.8rem;
        color:@size-color;
        font-size: 0.25rem;
        a{
            color: @text-c1;
        }
    }
}
.delectpop{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    font-size: 0;
    background: rgba(34, 32, 49,0.9);
    z-index: 103;
    .delectBox{
        width:90%;
        height: 3.3rem;
        background: @bg-c1;
        border-radius: 3px;
        margin: 3rem auto;
        h2{
            font-size: 0.35rem;
            font-weight: 100;
            height: 0.8rem;
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;
            color:@text-c2;
            line-height: 0.8rem;
        }
        .solid{
            border-top: none;
        }
        form{
            .A-main-Title{
                height: 0.45rem;
                line-height: 0.45rem;
                color:@text-c2;
                font-size: 0.25rem;
                text-align: left;
                padding-left: 0.15rem;
            }
            .A-main-Title:nth-child(1){
                border-top-left-radius:2px;
                border-top-right-radius: 2px;
            }
            .A-item{
                background: @bg-c5;
                border:1px solid @bor-c1;
                label{
                    display: none;
                }
                input{
                    padding-left: 0.25rem;
                }
            }
        }
        .A-btn>div{
            padding: 0 0.1rem;
        }
        .A-btn>div:nth-child(1) div{
            color:@text-c3;
        }
        .A-btn>div:nth-child(2) div{
            color:@text-c3
        }
    }
}
</style>