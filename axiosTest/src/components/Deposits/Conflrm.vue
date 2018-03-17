<template>
    <div class='Conflrm page-box'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid row"></div>
        <p class="height-row"></p>
        <div class="title row">
            只能扫描支付哦，如有疑问请联系  <router-link class="tad" to="/Service"> 在线客服</router-link>
        </div>
        <div class="solid"></div>
        <div class="PaymentCodeBox row">
            <div class="PaymentCode">
                <div class="imgCode">
                    <img width="100%" height="100%" src="" alt="">
                </div>
            </div>
            <div class="title-text">
                扫描二维码付款成功后，填写汇款信息！
            </div>
        </div>
        <div class="formWrapper">
            <form action="">
                <div class="item-form">
                    <label for="">
                        <i class="iconfont icon-qukuan"></i>
                    </label>
                    <input type="text" placeholder="金额">
                </div>
                <p class="m-text"> * 单笔限额 {{min}}-{{man}}</p>
                <div class="item-form">
                    <label for="">
                        <i class="iconfont icon-chongzhijilu"></i>
                    </label>
                    <input type="text" placeholder="订单号">
                </div>
                <p class="m-text"> * 请填写您订单号的后四位</p>
            </form>
            <div class="Submit">确认</div>
        </div>
        <div class="Tips">
            <h2>温馨提示</h2>
            <p>1.申请的存款金额必须与实际存款金额一致</p>
            <p>2.成功存款后，可点击【历史记录】查看详情</p>
            <p>3.支付遇到困难？请联系客服人员获得帮助</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                RouT:'/ScanCode',
                text:{
                    title:'确认支付',
                    text:'Conflrm Payment'
                },
                min:0,
                man:3000
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
.Conflrm{
    .title{
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: left;
        padding-left: 0.3rem;
        font-size: 0.3rem;
        color:@text-c7;
        .tad{
            color:@text-c8;
        }

    }
    .PaymentCodeBox{
        .PaymentCode{
            padding-top: 0.25rem;
            height: 3.5rem;
            .imgCode{
                display: block;
                margin: 0 auto;
                width: 150px;
                height: 150px;
            }
        }
        .title-text{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.3rem;
            color:@text-c6
        }
    }
    .formWrapper{
        .m-text{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.3rem;
            text-align: left;
            padding-left: 0.3rem;
            color:@text-c3
        }
    }

}
</style>