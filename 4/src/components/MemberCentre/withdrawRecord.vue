<template>
    <div class='withdrawRecord Record'>
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
        <el-row class="rowbg"  v-if="Recharge.judgment === true" v-for="item in Recharge.data">
            <el-col :span="24">
                <el-col :span="3">
                    <div class="grid-content bg-purple-dark">
                        <span  class="Save">取</span>
                    </div>
                </el-col>
                <el-col :span="1">
                    <div>
                        &nbsp;
                    </div>
                </el-col>
                <el-col :span="20">
                    <div class="grid-content bg-purple-dark" style="text-align:left;line-height: 25px;">
                        <span class="status">{{item.card_num}}</span>
                    </div>
                </el-col>
            </el-col>
            <!--<el-col :span="4">-->
                <!--<div class=" bg-purple-dark today" style="line-height: 36px;font-size: 16px;">-->
                    <!--{{item.time.split("+")[0]}}-->
                <!--</div>-->
            <!--</el-col>-->
            <el-col :span="6">
                <div class="Types" style="text-align: center">取款金额</div>
                <div class="status" style="text-align: center">{{item.amount}}元</div>
            </el-col>
            <el-col :span="6">
                <div class="Types">手续费</div>
                <div class="status">{{item.money}}元</div>
            </el-col>
            <el-col :span="6">
                <div class="Types">实收金额</div>
                <div class="status">{{item.amount_paid}}元</div>
            </el-col>
            <el-col :span="6">
                <div class="Types">状态</div>
                <div class="status">{{item.status}}</div>
            </el-col>
            <el-col :span="24" v-if="item.rmk != ''">
                <div class="rmk" style="text-align: left;font-weight:900">备注:</div>
                <div class="rmk" style="color: #999;font-size: 12px;line-height: 14px;text-align: left;text-indent: 18px;">{{item.rmk}}</div>
            </el-col>
            <el-col :span="24">
                <div class=" bg-purple-dark data" style="margin-top: 5px;">
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
    import dataTime from "./data-time.vue"
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'提现记录',
                    withdraw:'/'
                },
                typepage:"withdrawRecord",
                startDate: '',// 开始时间
                endDate: '', //结束时间
                timej:false,
                canEdit:false,
                withdrawRecord:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    status:''
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
                this.withdrawRecord.bdate = this.$time(0);
                this.withdrawRecord.edate =this.$time(0)
            })
        },
        methods: {
            handleCurrentChange(val) {
                let vm = this;
                vm.TransferRecords.pageNo=val;
                vm.$store.dispatch("recording", {id: 9, data: vm.withdrawRecord});
            },
            showMsg:function (data) {
                let vm = this;
                if(data.judgment === 1){
                    this.withdrawRecord.bdate=data.bdate;
                    this.withdrawRecord.edate = data.edate;
                    this.withdrawRecord.status = data.Type;
                    this.timej = false;
                    vm.$store.dispatch("recording", {id: 9, data: vm.withdrawRecord});
                }else if(data.judgment === 0){
                    this.timej = false;
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
        },
        created(){
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
.withdrawRecord{
    font-size: 13px;
    .Save{
        display:  block;
        width: 25px;
        margin: 0 auto;
        line-height: 25px;
        height: 25px;
        text-align: center;
        background: #ff695a;
        border-radius: 13px;
        color: #fff;
    }
    .rmk{
        line-height: 22px;
        text-align: left;
        font-size: 14px;
    }
}
</style>