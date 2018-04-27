<template>
    <div class='FirstDeposit'>
        <Top :text="Topobj"></Top>
        <div class="info">
            <div class="title">快捷支付送1%  次次存，次次送</div>
            <div class="center desc">单笔存款最高9999.99元现金红利</div>
            <div class="status mt10">状态：<span>进行中</span></div>
            <div class="content mt10">
                <p>活动时间：即日起</p>
                <p>活动对象：澳门银河官网所有会员</p>
                <p>活动内容：为感谢全球客户对澳门银河的厚爱，澳门银河官网长期回馈银行卡存款客户。&nbsp;</p>
                <p>使用：网银转账/支付宝转账/手机银行转账/ATM转账/柜台转账至我司指定的银行卡，即可获赠存款金额的1%的现金红利。（不限次数）</p>
                <p>例：（存1000元，系统送1%即为10元，到账金额为1010元。）</p>
                <p>优惠规则与条款：</p>
                <p>1.存款到账后无需申请系统自动发放至账号内；</p>
                <p>2.赠送彩金需存款+彩金1倍流水取款；</p>
                <p>3.如发现任何人/团体/组织以不诚实的方式合伙套取红利或其他利益，账号及所有户内余额将被取消；&nbsp;</p>
                <p>4.澳门银河网将保留对本次活动的修改、订正和最终解释权。</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue';
    export default {
        data () {
            return {
                Topobj:{
                    text:'详情',
                    withdraw:'/'
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
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.FirstDeposit{
    background: #fff;
    padding-bottom: 100px;
    width: 100%;
    .info{
        font-size: 14px;
        .title,.center,.status{
            font-size: 14px;
            margin: 0;
            line-height: 25px;
        }
        .status{
            span{
                color: red;
                font-size: 12px;
            }
        }
        .content{
            p{
                text-align: left;
                padding: 0 15px;
                line-height: 24px;
                text-indent: 24px;
                margin-bottom: 5px;
            }
        }
        .title{
            margin-top: 15px;
        }
    }
}
</style>