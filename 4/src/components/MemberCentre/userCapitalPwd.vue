<template>
    <div class='userCapitalPwd G_Form'>
        <Top :text="Topobj"></Top>
        <div class="row Carpittitle" >
            为了您账户安全，真实姓名需要与绑定银行卡姓名一致
        </div>
        <el-form label-position="right" label-width="90px" :model="addtext">
            <el-form-item label="真实姓名">
                <el-input :maxlength=10 :minlength=2 type="text" placeholder="请输入持卡人名字" v-model="addtext.cardUserName"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="银行卡号">
                <el-input :maxlength=19 :minlength=13 type="text" placeholder="请输入银行卡号" v-model.trim="addtext.cardNum"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="银行种类">
                <div class="Item" @click="show2 = !show2" >
                    <b :class="Activeation.title === '选择银行种类' ?  'testcolor': 'testscolor'">
                        {{Activeation.title}}
                    </b>
                    <span class="rf el-icon-arrow-right"></span>
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="开户行地址">
                <el-input :maxlength=50 :minlength=0 type="text" placeholder="请输入开户行地址" v-model="addtext.cardAddress"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="资金密码">
                <el-input :maxlength=4 :minlength=4 type="password" placeholder="资金密码" v-model="addtext.password"></el-input>
            </el-form-item>
        </el-form>
        <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="CardList">
                <div class="title" @click="show2 = !show2"></div>
                <el-row class="content">
                    <el-col :span="24" v-for="(item,key) in cardlist">
                        <div class="card-grid-content bg-purple-dark" @click="ActiveSum(key)">
                            {{item.title}}
                            <span v-if="ActiveNum === key" class="rf el-icon-check TypeActive"></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </transition>
        <el-row>
            <el-col :span="24">
                <div class="Text">
                    请绑定持卡人本人的银行卡并确认卡号,避免后期提款无法到账
                </div>
            </el-col>
        </el-row>
        <el-button class="G-submit  el-button--primary" @click="addcard" >下一步</el-button>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                show2:false,
                Topobj:{
                    text:'新增银行卡',
                    withdraw:'/'
                },
                ActiveNum:0,
                cardlist:[
                    {title:"选择银行种类",id:""},
                    {title:"中国农业银行",id:"1"},
                    {title:"中国银行",id:"2"},
                    {title:"交通银行",id:"3"},
                    {title:"中国建设银行",id:"4"},
                    {title:"中国工商银行",id:"5"},
                    {title:"中国邮政储蓄银行",id:"6"},
                    {title:"招商银行",id:"7"},
                    {title:"浦发银行",id:"8"},
                    {title:"中国光大银行",id:"9"},
                    {title:"中信银行",id:"10"},
                    {title:"平安银行",id:"11"},
                    {title:"中国民生银行",id:"12"},
                    {title:"华夏银行",id:"13"},
                    {title:"广发银行",id:"14"},
                    {title:"北京银行",id:"15"},
                    {title:"上海银行",id:"16"},
                    {title:"兴业银行",id:"17"},
                ],
                addtext:{
                    cardUserName:'',
                    cardNum:'',
                    cardAddress:'',
                    password:'',
                    bankCode:''
                }
            }
        },
        mounted() {
            vm=this;
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            Activeation:{
                set:function () {
                },
                get:function () {
                    return {
                        title:this.cardlist[Number(this.ActiveNum)].title,
                        id:this.cardlist[Number(this.ActiveNum)].id
                    }
                }
            }
        },
        methods: {
            ActiveSum:function (sum) {
                this.ActiveNum = Number(sum);
                this.show2 = false;
            },
            addcard:function () {
                vm=this;
                vm.$message.closeAll();
                vm.addtext.bankCode = this.Activeation.id;
                vm.$BugNewAddCard(vm,vm.addtext);
            }
        },
        created() {
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../public/Form.less";
@import "../../../static/css/style.less";
.userCapitalPwd{
    width: 100%;
    font-size: 0;
    .el-form-item{
    }
    .el-form{
        padding: 0 15px;
        background: #fff;
    }
    .Item{
        text-align: left;
        padding-left: 15px;
        position: relative;
        span{
            position: absolute;
            right: 7px;
            top:7px;
            font-size: 24px;
        }
        .testcolor{
            color: #b5bdcc;  
        }
        .testscolor{
            color:#5a5e66;
        }
    }
    .Text{
        margin-top: 16px;
        padding: 0 15px;
        line-height: 22px;
        text-align: left;
        font-size: 14px;
    }
    .Carpittitle{
        height: 0.6rem;
        font-size: 0.22rem;
        line-height: 0.6rem;
        color:#b3b3b3;
        text-align: left;
        padding-left: 0.15rem;
    }
    .CardList{
        position: fixed;
        top:0;
        right:0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background: rgba(0,0,0,0.6);
        z-index: 15;
        padding-top: 210px;
        .title{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            margin: 0;
            height: 210px;
        }
        .content{
            height: 100%;
            width: 100%;
            overflow: auto;
            background: #fff;
            padding: 0 15px;
        }
        .card-grid-content{
            /*height: 40px;*/
            font-size: 14px;
            border-top: 1px solid #e5e5e5;
            padding: 12px 0;
            text-align: left;
        }
    }
    .TypeActive{
        color:#409eff;
    }
}
</style>