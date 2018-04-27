<template>
    <div class='apply'>
        <Top :text="Topobj"></Top>
        <div class="bnner">
            <div class="imgText">
                <!--<img src="http://mobile.beike188.com/mobileYHH/image/Home/dailiren_banner01.fabdecc.png" alt="">-->
            </div>
        </div>
        <!--<notice :content="annouationNew.announcement" style="background:#fff3e2;color: #e97a0d;"></notice>-->
        <el-container>
            <el-main>
                <el-row>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="ifon">
                            <p>累计服务</p>
                            <p>2777</p>
                            <p>名代理</p>
                        </div>
                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="ifon ifonTwo">
                            <p>平均每周</p>
                            <p>268万</p>
                            <p>代理出款</p>
                        </div>
                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="ifon ifonThree">
                            <p>昨日新增</p>
                            <p>24</p>
                            <p>名会员</p>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <el-container>
            <el-main class="Accumulate">
                <div class="ifon">
                    <img style="width: 100%" src="http://mobile.beike188.com/mobileYHH/image/Home/dailiren_01.c8739c6.png" alt="">
                </div>
            </el-main>
        </el-container>
        <el-container>
            <el-main class="member">
                <div class="ifon">
                    <img style="width: 100%" src="http://mobile.beike188.com/mobileYHH/image/Home/dailiren_02.2ee9775.png" alt="">
                </div>
            </el-main>
        </el-container>
        <el-container >
            <el-main style="padding-bottom: 80px;">
                <h2>1.直属会员佣金计算方式</h2>
                <div class="text">直属有效洗码量总和 × 1‰</div>
                <h2>2.团队佣金计算方式</h2>
                <div class="text">团队有效洗码量总和 × 0.1‰</div>
                <p class="texts">
                    例如： A会员发展B会员与C会员，B会员发展D和E会员，C会员发展F和G会员，A会员佣金 = (B+C) × 1‰ + (D+E+F+G) × 0.1‰
                </p>
                <p class="texts">
                    <br>
                    * 会员必须为有效会员
                    <br>
                    * 有效会员必须为30天内有入款记录，非有效会员洗码量不列入佣金
                </p>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    import notice from '../public/notice.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:"申请成为高级代理人",
                    withdraw:'/',
                },
            }
        },
        computed: {
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            }
        },
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top,
            notice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.apply{
    width: 100%;
    .bnner{
        position: relative;
        width: 100%;
        height: 3.8rem;
        background: url("http://mobile.beike188.com/mobileYHH/image/Home/dailiren_banner.e8d3ed5.png");
        background-size:cover;
        .imgText{
            position: absolute;
            margin-left: 4.3rem;
            margin-top: 30px;
            width: 2.7rem;
            height: 1.4rem;
            background: url(http://mobile.beike188.com/mobileYHH/image/Home/dailiren_banner01.fabdecc.png) 50% no-repeat;
            background-size: cover;
        }
    }
    .el-main{
        padding: 15px 5px;
        background: #fff;
    }
    .ifon{
        font-size: 12px;
        width: 95%;
        margin: 0 auto;
        padding: 0 10px;
        background: #f08a76;
        border-radius: 8px;
        color: #fff;
        p{
            text-align: left;
        }
        p:nth-child(1),p:nth-child(3){
            line-height: 24px;
        }
        p:nth-child(2){
            line-height: 26px;
            font-size: 20px;
            font-weight: 700;

        }
    }
    .ifonTwo{
        background: #d9b889;
    }
    .ifonThree{
        background: #f9ae6b;
    }
    .Accumulate{
        background:#fff7f0;
        .ifon{
            width: 100%;
            background: transparent;
        }
    }
    .member{
        .ifon{
            width: 100%;
            background: transparent;
        }
    }
    h2{
        font-size: 15px;
        text-align: left;
        padding-left: 15px;
        font-weight: 800;
        color: #000;
    }
    .text{
        font-size: 14px;
        text-align: left;
        padding-left: 30px;
        line-height: 24px;
        margin-bottom: 10px;
    }
    .texts{
        font-size: 12px;
        text-align: left;
        padding-left: 15px;
        line-height: 18px;
    }
}
</style>