<template>
    <div class='DiscountOner' style="width: 100%">
        <el-row style="width:93%;margin: 0 auto">
            <el-col :span="24" v-for="(o, index) in 2" :key="o">
                <el-card>
                    <img src="http://mobile.beike188.com/mobileYHH/image/discournt/bnneroffer1.jpg" class="image">
                    <div class="hder">
                       <h2>星级酒店天天住</h2>
                        <!--<div class="bottom clearfix">-->
                            <!--<time class="time">{{ currentDate }}</time>-->
                            <!--<el-button type="text" class="button">操作按钮</el-button>-->
                        <!--</div>-->
                        <div class="text">
                            成为澳门银河尊贵会员既享独家全国酒店免费预定，24小时服务
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.DiscountOner{
    .el-card__body{
        padding: 10px;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    .el-card{
        margin-bottom: 3px;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }
.hder{
    /*width: 345px;*/
    margin: 0 auto;
    font-size: 14px;
h2{
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-weight: bold;
}
.text{
    font-size: 12px;
    text-align: left;
}
}
.image {
    width: 100%;
    /*height: 130px;*/
    margin: 0 auto;
    display: block;
}
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
}
</style>