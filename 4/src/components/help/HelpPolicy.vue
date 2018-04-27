<template>
    <div class='helplogreg'>
        <Top :text="Topobj"></Top>
        <!--<h2 class="G_hlep_title">-->
            <!--<el-row class="G_hlpe_Policy_title">-->
                <!--<el-col :span="12">-->
                    <!--<span class="x-icon-help-Policy G_tad_logo"></span>-->
                <!--</el-col>-->
                <!--<el-col :span="12" >-->
                   <!--<span class="G_tad_text">您当前的等级</span>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</h2>-->
        <h2 style="background: #fff;margin-top: 5px;" class="G_title">会员制度</h2>
        <div style="background: #fff;" class="detail">
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess23.png" alt="">
            </p>
            <p>会员等级共分为0、1、2、3、4、5个等级；</p>
            <p class="">注册存款玩家自动升级成1星级，2，3，4，5星级根据有效投注额自动分配</p>
            <p class="">星级设定：每周一系统自动根据您上周投注进行自动升级。</p>
            <h1 class="">洗码规则</h1>
            <p class="">结算要求：<br>1.洗码低于1元人民币不予以结算<br>2.最高上限：洗码返水无上限，多投多送；<br>3.取款要求：洗码返水可以进行投注，也可以直接申请取款；<br>4.老虎机游戏中：视频游戏、视频扑克、桌面和卡牌游戏、迷你桌面和卡牌游戏、手机桌面、卡牌游戏、多旋转老虎机和老虎机奖金翻倍投注</p>
            <p>【多旋转老虎机包括全景电影（Cinerama）、海洋公主（Ocean Princess）、三倍利润（Triple Profits）、赌徒（Wild Gambler (gtswg)）】 等特惠游戏不享受此优惠；</p>
            <p>最终解释权由澳门银河所有。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'会员制度',
                    withdraw:'/help',
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
    @import "style.less";
    .helplogreg{
        width: 100%;
    .TopHeader{
        font-size: 16px;
        font-weight: bold;
    }
    .G_hlpe_Policy_title{
        .G_tad_logo,.G_tad_text{
            display: block;
            height: 80px;
            line-height: 80px;
            margin: 10px auto;
        }
        .G_tad_text{
            border-left:1px solid #e5e5e5;
            font-size: 18px;
            font-weight: bold;
            color: #000;
            text-align: center;
        }
    }
    }
</style>