<template>
    <div class='TransferRecords'>
        <Top :text="Topobj"></Top>
        <div class="filter"  @click="timej = true">筛选</div>
        <h1 v-if="Recharge.judgment === true" style="padding-left: 15px;font-weight: 900">
            本月
        </h1>
        <el-row class="rowbg"  v-if="Recharge.judgment === true" v-for="item in Recharge.data">
            <el-col :span="24"  style="padding-bottom: 0.1rem">
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <span  class="Save">{{item.t_type}}</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <span class="status">{{item.type}}</span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class=" bg-purple-dark data">
                        {{item.time.split("+")[1]}}
                    </div>
                </el-col>
            </el-col>
           <el-col :span="8">
               <div class="Types">金额</div>
               <div class="status">{{item.t_money}}元</div>
           </el-col>
           <el-col :span="8">
               <div class="Types">转前金额</div>
               <div class="status">{{item.old_money}}元</div>
           </el-col>
           <el-col :span="8">
               <div class="Types">转后金额</div>
               <div class="status">{{item.new_money}}元</div>
           </el-col>
        </el-row>
        <el-row v-if=" Number(Recharge.total) != 0" style="margin-top: 0.25rem">
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
                    text:'转账记录',
                    withdraw:'/'
                },
                typepage:"TransferRecords",
                startDate: '',// 开始时间
                endDate: '', //结束时间
                timej:false,
                canEdit:false,
                TransferRecords:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    Type:'',
                    Ttype:''
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
                this.TransferRecords.bdate = this.$time(0);
                this.TransferRecords.edate =this.$time(0)
            })
        },
        methods: {
            handleCurrentChange(val) {
                let vm = this;
                vm.TransferRecords.pageNo=val;
                vm.$store.dispatch("recording", {id: 5, data: vm.TransferRecords});
            },
            showMsg:function (data) {
                let vm = this;
                if(data.judgment === 1){
                    this.TransferRecords.bdate=data.bdate;
                    this.TransferRecords.edate = data.edate;
                    this.TransferRecords.Type = data.Type;
                    this.TransferRecords.Ttype = data.status;
                    this.timej = false;
                    vm.$store.dispatch("recording", {id: 5, data: vm.TransferRecords});
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
/*@import "css/Record.less";*/
.TransferRecords{
    width: 100%;
    font-size: 0px;
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
    h1{
        line-height: 0.8rem;
        font-size: 0.3rem;
        text-align: left;
    }
    .Save{
        display:  block;
        padding:0.05rem;
        text-align: center;
        background: #ff695a;
        border-radius: 5px;
        font-size: 0.3rem;
        color: #fff;
    }
    .rowbg{
        background: #fff;
        padding: 0.1rem;
        border-bottom: 1px solid #d1dbe5;
    }
    .today{
        line-height: 0.8rem;
        font-size: 0.3rem;
        text-align: center;
    }
    .data{
        line-height: 0.4rem;
        font-size: 0.22rem;
        padding-left: 0.1rem;
        text-align: left;
    }
    .Types{
        line-height: 0.4rem;
        font-size: 0.32rem;
        text-align: center;
        color: #333;
        font-weight: 700;

    }
    .status{
        line-height: 0.4rem;
        font-size: 0.25rem;
        text-align: center;
    }
}

</style>