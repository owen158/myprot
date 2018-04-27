<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">提款什么时候可以到账？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">取款申请审核通过后，一般会在3-5分钟内为您进行线下转账。若逾时仍未收到款项，则可能是取款银行账号数据有误或银行账号小额管理费未缴等问题所造成的。财务人员在无法出款时都会及时进行通知，若玩家未填写有效的联络方式也会造成财务无法联系的情况发生，请您务必填写正确有效的联系信息。同时，您也可随时联系在线客服了解进度。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data() {
            return {
                Topobj: {
                    text: '问题详情',
                    withdraw: '/help',
                },
            }
        },
        computed: {},
        mounted: function() {},
        methods: {},
        created() {},
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";
    .HelpChildOne{
        height: 100%;
        background: #fff;
        .G_title{
            font-size: 14px;
        }
    }
    .helplogreg {
        font-size: 0;
        width: 100%;
        p{
            line-height: 20px;
            font-size: 13px;
        }

    }
</style>