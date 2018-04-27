<template>
    <div class='capitalRecord'>
        <Top :text="Topobj"></Top>
        <div class="filter"  @click="timej = true">筛选</div>
        <h1 v-if="Recharge.judgment === true" style="padding-left: 15px;font-weight: 900">
            本月
        </h1>
        <el-row>
            <el-col :span="24" v-if="Recharge.judgment === false">
                <div class="grid-content bg-purple-dark norecording">
                   <span class="el-icon-warning"></span> 暂无记录
                </div>
            </el-col>
        </el-row>
        <el-row class="rowbg" v-if="Recharge.judgment === true" v-for="item in Recharge.data">
            <el-col :span="3">
                <div class="grid-content bg-purple-dark">
                    <span class="Save">存</span>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-dark today">
                    {{item.time.split("+")[0]}}
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple-dark Types">
                    {{item.pay_type}}
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{item.trade_status}}
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark Amount">
                    {{item.order_amount}}元
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark Remarks">
                    备注
                </div>
                <div class="grid-content bg-purple-dark text">
                    {{item.rmk}}
                </div>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark data">
                    {{item.time.split("+")[1]}}
                </div>
            </el-col>
        </el-row>
        <el-row v-if=" Number(Recharge.total) != 0">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="Recharge.page"
                    :page-size="Recharge.size"
                    background
                    layout="prev, pager, next"
                    :total="Recharge.total">
            </el-pagination>
        </el-row>
        <transition name="el-zoom-in-bottom">
            <dataTime :typepage="typepage" v-show="timej" v-on:listenToChildEvent="showMsg"></dataTime>
        </transition>
    </div>
</template>
<script>
    let vueIns = null;
    import dataTime from "./data-time.vue"
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'充值记录',
                    withdraw:'/'
                },
                typepage:"capitalRecord",
                startDate: '',// 开始时间
                endDate: '', //结束时间
                timej:false,
                canEdit:false,
                rechargeRecord:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    Type:'',
                    status:''
                },
            }
        },
        computed: {
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            },
        },
        mounted: function () {
            this.$nextTick(function () {
                this.rechargeRecord.bdate = this.$time(0);
                this.rechargeRecord.edate =this.$time(0)
            })
        },
        methods: {
            handleCurrentChange(val) {
                let vm = this;
                vm.rechargeRecord.pageNo=val;
                vm.$store.dispatch("recording", {id: 1,data: vm.rechargeRecord});
            },
            showMsg:function (data) {
                let vm = this;
                if(data.judgment === 1){
                    this.rechargeRecord.bdate=data.bdate;
                    this.rechargeRecord.edate = data.edate;
                    this.rechargeRecord.Type = data.Type;
                    this.rechargeRecord.status = data.status;
                    this.timej = false;
                    vm.$store.dispatch("recording", {id: 1,data: vm.rechargeRecord});
                }else if(data.judgment === 0){
                    this.timej = false;
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
        },
        created(){
            vueIns = this
        },
        components: {
            Top,
            dataTime
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.capitalRecord{
    padding-bottom: 50px;
    width: 100%;
    font-size: 13px;
    .Save{
        display:  block;
        margin: 3px auto;
        height: 25px;
        line-height: 25px;
        text-align: center;
        width: 25px;
        background: #ff695a;
        border-radius: 50%;
        color: #fff;

    }
    .filter{
        position: absolute;
        top:0;
        right: 0;
        font-size: 14px;
        z-index: 15;
        color: #c8a675;
        font-weight: 800;
        padding: 13px 10px;
    }
    .norecording{
        height: 80px;
        line-height: 80px;
        font-size: 18px;
    }
    .time{
        font-size: 12px;
    }
    .data{
        font-size: 13px;
        padding-left: 12px;
        line-height: 30px;
    }
    .today{
        line-height: 32px;
        font-size: 13px;
        text-align: left;
    }
    .time,.Types,.status,.Remarks,.text{
        line-height: 18px;
    }
    .Remarks{
        font-weight: 900;
        color: #222;
        text-align: center;
    }
    .text{
        font-size: 12px;
        text-align: center;
        text-indent: 5px;
    }
    .Types{
        font-weight: 900;
        color: #222;
    }
    .status{
        color: #999;
    }
    .Amount{
        line-height: 32px;
        text-align: center;
    }
    .rowbg{
        background: #fff;
        text-align: left;
        padding: 17px 10px;
    }
    ._title{
        line-height: 20px;
        margin: 0;
        padding: 0 10px;
        text-align: left;
        font-size: 14px;
        font-weight: 900;
    }
    .rowbg:not(:first-child){
        border-top: 1px solid #e5e5e5;
    }
    .el-pagination{
        margin-top: 15px;
    }

    .el-pager>li.number, .tag {
        border-radius:0;
    }
    .el-pager>li.active{
        background: #C8A675;
        color:#fff;
    }
}
</style>