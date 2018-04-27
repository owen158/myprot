<template>
    <div class='rechargeRecord Record' style="padding:0 0 50px 0">
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
            <el-col :span="3">
                <div class="grid-content bg-purple-dark">
                    <span  class="Save">{{item.t_type}}</span>
                </div>
            </el-col>
            <el-col :span="21">
               <el-row>
                   <el-col :span="7">
                       <div class=" bg-purple-dark data" style="line-height: 16px;text-align: left;padding-left: 5px;">
                           {{item.time.split("+")[1]}}
                       </div>
                   </el-col>
                   <el-col :span="3">
                       <div class="Types" style="font-weight: 100">金额:</div>
                       <div class="Types" style="font-weight: 100">钱包:</div>
                   </el-col>
                   <el-col :span="7">
                       <div class="status" style="text-align: left">{{item.amount}}元</div>
                       <div class="status" style="text-align: left">{{item.new_money}}元</div>
                   </el-col>
                   <el-col :span="7">
                       <div class="status" style="text-align: left;line-height: 32px; white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            overflow: hidden;">{{item.rmk}}</div>
                   </el-col>
               </el-row>
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
                    text:'资金流水',
                    withdraw:'/'
                },
                typepage:"rechargeRecord",
                startDate: '',// 开始时间
                endDate: '', //结束时间
                timej:false,
                canEdit:false,
                rechargeRecord:{
                    pageSize:5,
                    pageNo:1,
                    startTime:'',
                    endTime:'',
                    type:"0"
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
                this.rechargeRecord.startTime = this.$time(0);
                this.rechargeRecord.endTime =this.$time(0)
            })
        },
        methods: {
            handleCurrentChange(val) {
                let vm = this;
                vm.rechargeRecord.pageNo=val;
                vm.$store.dispatch("recording", {id: 7, data: vm.rechargeRecord});
            },
            showMsg:function (data) {
                let vm = this;
                if(data.judgment === 1){
                    this.rechargeRecord.startTime=data.bdate;
                    this.rechargeRecord.endTime = data.edate;
                    this.rechargeRecord.type = data.Type;
                    this.timej = false;
                    vm.$store.dispatch("recording", {id: 7, data: vm.rechargeRecord});
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
.rechargeRecord{

    font-size: 13px;
    .Save{
        float: left;
        margin: 5px auto;
        padding: 5px;
        text-align: center;
        background: #ff695a;
        border-radius: 5px;
        color: #fff;

    }
}
</style>