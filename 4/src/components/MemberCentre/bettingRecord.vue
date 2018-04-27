<template>
    <div class='bettingRecord Record'>
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
            <el-col :span="8">
                <div class="grid-content bg-purple-dark">
                    <span class="Save">{{item.type}}</span>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-dark data" style="height: 25px;line-height: 25px;">
                    {{item.time.split("+")[1]}}
                </div>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <div class="grid-content bg-purple-dark Types">
                    下注金额
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{item.betAmount}}
                </div>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <div class="grid-content bg-purple-dark Types">
                    派彩金额
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{item.Payout}}
                </div>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <div class="grid-content bg-purple-dark Types">
                    输赢金额
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{item.netAmount}}
                </div>
            </el-col>
        </el-row>
        <el-row v-if="Recharge.column != ''" style="margin-top: 5px;background: #fff">
            <el-col :span="8">
                <div class="grid-content bg-purple-dark Types">
                    下注金额小计
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{Recharge.column.betamountSum}}元
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-dark Types">
                    派彩金额小计
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{Recharge.column.payoutSum}}元
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-dark Types">
                    输赢金额小计
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{Recharge.column.netAmountSum}}元
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-dark Types">
                    下注金额总计
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{Recharge.column.betamountTotal}}元
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-dark Types">
                    派彩金额总计
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{Recharge.column.payoutTotal}}元
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-dark Types">
                    输赢金额总计
                </div>
                <div class="grid-content bg-purple-dark status">
                    {{Recharge.column.netAmountTotal}}元
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
                    text:'投注记录',
                    withdraw:'/'
                },
                typepage:"bettingRecord",
                startDate: '',// 开始时间
                endDate: '', //结束时间
                timej:false,
                canEdit:false,
                bettingRecord:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    type:'ALL'
                }
            }
        },
        computed: {
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            },
        },
        mounted: function () {
            this.$nextTick(function () {
                this.bettingRecord.bdate = this.$time(0);
                this.bettingRecord.edate =this.$time(0)
            })
        },
        methods: {
            handleCurrentChange(val) {
                let vm = this;
                vm.$message.closeAll();
                vm.bettingRecord.pageNo=val;
                vm.$store.dispatch("recording", {id: 3,data: vm.bettingRecord});
            },
            showMsg:function (data) {
                let vm = this;
                if(data.judgment === 1){
                    vm.$message.closeAll();
                    this.bettingRecord.bdate=data.bdate;
                    this.bettingRecord.edate = data.edate;
                    this.bettingRecord.type = data.Type;
                    this.timej = false;
                    vm.$store.dispatch("recording", {id: 3,data: vm.bettingRecord});
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
@import "css/Record.less";
.bettingRecord{
    font-size: 13px;
    .Save{
        float: left;
        height: 25px;
        line-height: 25px;
        text-align: center;
        padding: 0 3px;
        background: #ff695a;
        border-radius: 5px;
        color: #fff;
    }
}
</style>