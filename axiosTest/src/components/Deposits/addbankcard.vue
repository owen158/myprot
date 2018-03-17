<template>
    <div class='addbankcard'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid"></div>
        <div class="formWrapper">
            <form action="" class="row">
                <p class="item-text">
                    为了您的账户安全，真实姓名需要与绑定银行卡姓名一致
                </p>
                <div class="item-form">
                    <label for="name">
                        姓名 :
                        <!--<i class="iconfont icon-gerenziliao"></i>-->
                    </label>
                    <input id="name" type="text" placeholder="请输入真实姓名" minlength="2" maxlength="4">
                </div>
                <div class="item-form">
                    <label for="cardNum">
                        银行卡号 :
                    </label>
                    <input id="cardNum" v-num type="text" placeholder="请输入银行卡号">
                </div>
                <div class="item-form">
                    <label for="cardName">
                           银行 :
                    </label>
                    <select class="select" name="" id="cardName">
                        <option value="">选择银行种类</option>
                        <option value="1">中国农业银行</option>
                        <option value="2">中国银行</option>
                        <option value="3">交通银行</option>
                        <option value="4">中国建设银行</option>
                        <option value="5">中国工商银行</option>
                        <option value="6">中国邮政储蓄银行</option>
                        <option value="7">招商银行</option>
                        <option value="8">浦发银行</option>
                        <option value="9">中国光大银行</option>
                        <option value="10">中信银行</option>
                        <option value="11">平安银行</option>
                        <option value="12">中国民生银行</option>
                        <option value="13">华夏银行</option>
                        <option value="14">广发银行</option>
                        <option value="15">北京银行</option>
                        <option value="16">上海银行</option>
                        <option value="17">兴业银行</option>
                    </select>
                </div>
                <div class="item-form solid-bottom">
                    <label for="">开户行地址 :</label>
                    <select class="select" name="" id="">
                        <option value="123">选择-省</option>
                    </select>
                    <select name="" id="">
                        <option value="123">选择-市</option>
                    </select>
                </div>
                <div class="solid"></div>
                <p style="height: 0.3rem"></p>
                <div class="solid"></div>
                <div class="item-form solid-bottom">
                    <label for="">
                        资金密码
                    </label>
                    <input type="password" placeholder="资金密码">
                </div>
                <div class="solid"></div>
            </form>
            <div class="Submit">提交</div>
        </div>
    </div>
</template>

<script>
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                RouT:'/userBankCard',
                text:{
                    title:'添加银行卡',
                    text:'Bank Card'
                },
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top,
            Ruten
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
@import "../public/logRegister.less";
.addbankcard{
    min-height: 100%;
    padding-bottom: 0.8rem;
    padding-top: 0.9rem;
    background: @bg-c1;
    .box-sizing;
    .item-text{
        margin-top: 0.2rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.25rem;
        padding-left: 0.25rem;
        text-align: left;
        color:@text-c5;
    }
    .formWrapper{
        form{
            .item-form{
                height:1rem;
                input{
                    margin-top: 0.26rem;
                    padding-left: 2rem;
                }
                label{
                    width: 1.9rem;
                    line-height: 1rem;
                    text-align: right;
                }
                select{
                    margin-top: 0.26rem;
                }
                .select{
                    margin-left: 2rem;
                }
            }
        }
    }
}
</style>