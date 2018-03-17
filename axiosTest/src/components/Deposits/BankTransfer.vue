<template>
    <div class='BankTransfer page-box'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid"></div>
        <div class="formWrapper">
            <div class="title row">
                汇款前请联系客服确认汇款信息  <router-link class="tad" to="/Service"> 在线客服</router-link>
            </div>
            <div class="height-row"></div>
            <form action="">
                <p class="title-text">汇款人姓名（* 转账账号对应的姓名）</p>
                <div class="item-form solid-bottom">
                    <input type="text" placeholder="真实姓名">
                </div>
                <div class="height-row"></div>
                <p class="title-text">支付账号（*列如：*** 9558，可填下后4位）</p>
                <div class="item-form solid-bottom">
                    <input v-num minlength="14" maxlength="19" type="text" placeholder="卡号">
                </div>
                <div class="height-row"></div>
                <p class="title-text">存款金额</p>
                <div class="item-form solid-bottom">
                    <input v-model="Money" v-numd type="text" minlength="14" maxlength="19" placeholder="金额">
                </div>
                <div class="height-row"></div>
                <p class="title-text">存款时间</p>
                <div class="item-form solid-bottom"  ref="time">
                    <input type="text"  disabled value="2017-9-23 19:25:36"  placeholder="时间">
                </div>
                <div class="height-row"></div>
                <div class="row">
                    <p class="title-text col-6">存款时间</p>
                    <p class="title-text col-6">是否申请彩金</p>
                </div>
                <div id="item" class="item-form " style="border:none">
                    <div class="col-6">
                        <select name="" id="">
                            <option value="">网银转账</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <select name="" id="">
                            <option value="">申请</option>
                            <option value="">不申请</option>
                        </select>
                    </div>
                </div>
            </form>
            <div class="solid"></div>
            <div class="Tips">
                <h2></h2>
                <p>*转帐完成后请保留单据作为核对证明。</p>
                <p>*必须填写表单内容，不能为空。</p>
                <p>*每笔转帐请提交一次</p>
            </div>
            <div @click="submit()" class="Submit">确认</div>
        </div>
    </div>
</template>

<script>
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                RouT:'/DepositsChild',
                text:{
                    title:'银行汇款',
                    text:'Bank Tanfer'
                },
                Money:''
            }
        },
        computed: {},
        mounted: function () {
            this.$refs.time.style.background = 'dimgray';
            this.$refs.time.style.border = 'none'
        },
        methods: {
            submit:function () {
            }
        },
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
.BankTransfer{
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
    .formWrapper{
        .title-text{
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: left;
            padding-left: 0.3rem;
            font-size: 0.3rem;
            color:@text-c6;
        }
        .item-form{
            select{
                margin-top: 0rem;
                width: 3rem;
                height: 0.7rem;
                margin-left: 0.1rem;
                /*background: @bg-c5;*/
                .box-sizing;
                color:@text-c1;
                border:1px solid @border-c2;
            }
            input:disabled{
                background: @bg-c4;
                color:@text-c1;
            }
            input{
                padding-left: 0.42rem;
            }
        }
        #item{
            background:@bg-c1 ;
        }
    }
    .Tips{
        p{
            color:@text-c3;
        }
    }
}
</style>