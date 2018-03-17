<template>
    <div class='personalVip'>
        <Top :text = 'text'></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid"></div>
        <div class="personal row">
            <div class="item row item-top">
                <p class="col-6 tad-lf">用户名</p>
                <p class="col-6 tad-rf">gar157</p>
            </div>
            <div class="item row">
                <p class="col-6 tad-lf">真实姓名</p>
                <p class="col-6 tad-rf">发哥</p>
            </div>
            <div class="item row">
                <p class="col-6 tad-lf">手机号</p>
                <p class="col-6 tad-rf">136789741324</p>
            </div>
            <div class="item row">
                <p class="col-6 tad-lf">等级</p>
                <p class="col-6 tad-rf"></p>
            </div>
            <div class="item row">
                <p class="col-6 tad-lf">钱包余额</p>
                <p class="col-6 tad-rf">136789741324</p>
            </div>
            <div class="solid row"></div>
            <div class="item row item-top">
                <p class="col-6 tad-lf">注册时间</p>
                <p class="col-6 tad-rf">2017-9-21 10:26:35</p>
            </div>
            <div class="item row">
                <p class="col-6 tad-lf">上次登录时间</p>
                <p class="col-6 tad-rf">2017-9-21 10:26:35</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Ruten from '../Public/Ruten.vue'
    import Top from '../Public/Top.vue'
    export default {
        data () {
            return {
                text:{
                    title:'个人资料',
                    text:'INFORMATLON'
                },
                RouT:'/Personal'
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
.personalVip{
    min-height: 100%;
    background: @border-c1;
    font-size: 0;
    padding-top: 0.8rem;
    .personal{
        width: 100%;
        .item{
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            height: 0.8rem;
            font-size: 0.2rem;
            background: @bg-c2;
            .tad-lf,.tad-rf{
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                height: 0.8rem;
                line-height: 0.8rem;
                padding: 0 0.2rem;
                font-size: 0.3rem;
                color:@text-c6;
            }
            .tad-lf{
                text-align: left;
            }
            .tad-rf{
                text-align: right;
            }
        }
        .item-top{
            border-top:1px solid  @border-c2;
        }
        .item{
            border-bottom: 1px solid @border-c2;
        }
    }
}
</style>