<template>
    <div class='interchange'>
        <Top style="font-weight: 700;font-size: 17px;" :text="Topobj"></Top>
        <router-link style="font-size: 14px;position: absolute;top: 0;right: 10px;z-index: 20;color: #c8a675;line-height: 40px;font-weight: 900;" to="/Online">
           先去存款
        </router-link>
        <el-form style="margin-top: 10px;" label-position="right" label-width="60px" :model="tran">
            <div class="line-w"></div>
            <el-form-item label="转出">
                <div class="el-form-item__content" style="text-align: left;padding-left: 15px;" @click="show2 = !show2">
                    {{game[outNum].name}}(￥{{game[outNum].Money}})<span class="el-icon-arrow-right error"></span>
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="转入">
                <div class="el-form-item__content" style="text-align: left;padding-left: 15px;" @click="show1 = !show1">
                    {{game[toNum].name}}(￥{{game[toNum].Money}})<span class="el-icon-arrow-right error"></span>
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="金额">
                <el-input v-model="tran.credit" :maxlength=8 placeholder="金额"></el-input>
                <span @click="AllMoney()" class="All">全部转入</span>
            </el-form-item>
        </el-form>
        <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">
                <div style="height: 200px;" @click="show2 = !show2"></div>
                <div class="transition-game">
                    <el-row v-for="(v,key) in game"  >
                        <div class="gamebox" @click="Out(v.type,v.Money,v.name,key)" :data-type="v.type" :data-money="v.Money" :data-name="v.name">
                            <i :class="v.cls"></i>{{v.name}}    <span class="gameMoney">{{v.Money}}</span>
                        </div>
                        <!--<b @click="show2 = !show2" v-if="toNum === key"></b>-->
                        <b @click="show2 = !show2" v-if="v.Money === '维护中'"></b>
                    </el-row>
                </div>
            </div>
        </transition>
        <transition name="el-zoom-in-bottom">
            <div v-show="show1" class="transition-box">
                <div style="height: 200px;" @click="show1 = !show1"></div>
                <div class="transition-game">
                    <el-row v-for="(v,key) in game">
                        <div class="gamebox" @click="To(v.type,v.Money,v.name,key)" :data-type="v.type" :data-money="v.Money" :data-name="v.name">
                            <i :class="v.cls"></i>{{v.name}}    <span class="gameMoney">{{v.Money}}</span>
                        </div>
                        <!--<b @click="show1 = !show1" v-if="outNum === key"></b>-->
                        <b @click="show1 = !show1" v-if="v.Money === '维护中'"></b>
                    </el-row>
                </div>
            </div>
        </transition>
        <el-button @click="submit" class="G-submit el-button--primary">确定转账</el-button>
    </div>
</template>

<script>
    var Boo=false,Type,vm;
    import Top from '../Top/Top.vue';
    export default {
        data () {
            return {
                show2: false,
                show1: false,
                Topobj:{
                    text:'财务互转',
                    withdraw:'/'
                },
                left:'',
                right:"",
                Money:{
                    min:1,
                    man:100000
                },
                tran:{
                    credit:'',
                    type:'',
                    imgcode:null,
                    uuid:'',
                    isImgCode:'0'
                },
                obj:'',
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:''
                },
                outNum:0,
                toNum:1,
                TurnOut:{//计算属性使用
                    name:"主账户",
                    type:"WALLET",
                    Money:'0.00',
//                    uuid:'',
                },
                TurnInto:{//计算属性使用
                    name:"IG 彩票（新）",
                    type:"IGPJ",
                    Money:'',
//                    uuid:''
                },
                game:[//游戏列表
                    {name:"主账户",type:'WALLET',cls:"x-icon-game-logo",Money:'0.00'},
                    {name:'IG 彩票（新）',type:'IGPJ',cls:'x-icon-game-XIG',Money:'维护中'},
                    {name:'IG 彩票',type:'IG',cls:'x-icon-game-JIG',Money:'0.00'},
                    {name:'VR 彩票',type:'VR',cls:'x-icon-game-vr',Money:'0.00'},
                    // {name:'BG 彩票/视讯',type:'BG'},
                    {name:'Cagayan88视讯',type:'CG',cls:'x-icon-game-cg',Money:'0.00'},
                    {name:'DS视讯',type:'DS',cls:'x-icon-game-ds',Money:'1.00'},
                    {name:'AGIN国际厅/YOPLAY电子',type:'AGIN',cls:'x-icon-game-ag',Money:'0.00'},
                    {name:'申博视讯(TGP)',type:'SB',cls:'x-icon-game-sb',Money:'2.00'},
                    {name:'OG视讯',type:'OG',cls:'x-icon-game-og',Money:'0.00'},
                    {name:'BBIN 视讯/电子',type:'BBIN',cls:'x-icon-game-bbin',Money:'0.00'},
                    {name:'PT电子',type:'PT',cls:'x-icon-game-pt',Money:'5.00'},
                    {name:'MG电子',type:'MG',cls:'x-icon-game-mg',Money:'0.00'},
                    {name:'HABA电子',type:'HABA',cls:'x-icon-game-haba',Money:'0.00'},
                    {name:'皇冠体育',type:'HG',cls:'x-icon-game-hg',Money:'0.00'},
                    {name:'开元棋牌',type:'KYQP',cls:'x-icon-game-kyqp',Money:'0.00'}
                ],
                Onekey:{
                    type:'',
                    uuid:'',
                    credit:""
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
//            LordMoney:{//主账户
//                get: function () {
//                    return {
//                        name:this.game[this.outNum].name,
//                        type:this.game[this.outNum].type,
//                        Money:this.game[this.outNum].Money,
//                    }
//                },
//                set:function (news) {
//                    this.TurnOut.name = news.name;
//                    this.TurnOut.type = news.type;
//                    this.TurnOut.Money = news.Money;
//                }
//            },
//            GameMoney:{//入
//                get: function () {
//                    return {
//                        name:this.game[this.toNum].name,
//                        type:this.game[this.toNum].type ,
//                        Money:this.game[this.toNum].Money,
////                        uuid:this.TurnInto.uuid
//                    }
//                },
//                set:function (news) {
//                    this.TurnInto.name = news.name;
//                    this.TurnInto.type = news.type;
//                    this.TurnInto.Money = news.Money;
////                    this.TurnInto.uuid = news.uuid
//                }
//            },
//            allmoney:{
//                get:function () {
//                    return {
//                        outmoney:this.TurnOut.Money,
//                        outname:this.TurnOut.name ,
//                        tomoney:this.TurnInto.Money,
//                        toname:this.TurnInto.name
////                        uuid:this.TurnInto.uuid
//                    }
//                },
//                set:function () {
//
//                }
//            }
        },
        watch: {
        },
        mounted() {
            vm=this;
            this.$nextTick(function () {
                vm.TypeInquireAll();
            });
        },
        methods:{
            Out:function (type,money,name,Num) {
                let vm = this;
                this.TurnOut = {name:name, type: type, Money: money};
                this.outNum = Num;
                vm.show2 =  false;
                if(this.outNum != 0){
                    this.toNum = 0;
                }else{
                    this.toNum = 1;
                }
            },
            To:function (type,money,name,Num) {
                this.TurnInto = {name:name, type: type, Money: money};
                this.toNum = Num;
                vm.show1 =  false;
                if(this.toNum != 0){
                    this.outNum = 0;
                }else{
                    this.outNum = 1;
                }
            },
            AllMoney:function () {
                vm.tran.credit = this.game[this.outNum].Money > 100000 ? 100000 : this.game[this.outNum].Money
            },
            TypeInquireAll:function () {//查询所有余额
                vm = this;
                for(let i=0;i<vm.game.length;i++){
                    vm.game[i].Money = "加载中...";
                    vm.$BugNewRefresh(vm,{BType:vm.game[i].type});
                }
            },
            submit:function () {
                vm=this;
                vm.$message.closeAll();
                if(vm.userNew.userkey === ""){
                    return vm.$router.push({path:'/interchange'});
                }
                let min = vm.Money.min;
                let man = vm.Money.man;
                vm.tran.credit = Math.floor(Number(vm.tran.credit));
//                'User/TransferTo' // 转账到游戏
                if(this.game[this.outNum].name === "主账户"){
                    vm.tran.type = this.game[this.toNum].type;
                    vm.$BugNewtransfer(vm,vm.tran,min,man,'User/TransferTo')
                }else if(this.game[this.toNum].name === "主账户"){
                    vm.tran.type= this.game[this.outNum].type;
                    vm.$BugNewtransfer(vm,vm.tran,min,man,'User/TransferFrom');
                    return;
                }
//                if(this.TurnOut.name != "主账户" && this.TurnInto.name != "主账户"){
//                    vm.tran.type= this.TurnOut.type;
//                    let objss ={
//                        credit:vm.tran.credit,
//                        type:this.TurnInto.type,
//                        imgcode:null,
//                        uuid:'',
//                        isImgCode:'0'
//                    }
//                    vm.$Bugtransfer(vm,vm.tran,min,man,'User/TransferFrom',objss,'User/TransferTo')
//                }
////                'User/TransferFrom' //转账到品台
//                if(Number(vm.toNum) === 0){
//                   vm.tran.type= vm.LordMoney.type;
//                   vm.$BugNewtransfer(vm,vm.tran,min,man,'User/TransferFrom')
//                }
            }
        },
        created() {
            vm=this;
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.interchange{
    position:relative;
    width: 100%;
    font-size: 0;
    padding-bottom: 80px;
    input{
        outline: none;
        border:none;
    }
    .el-form-item{
        position: relative;
        background: #fff;
        height: 56px;
        padding-top: 7px;
        margin-bottom: 0;
    }
    .el-form-item__label{
        font-weight: 900;
        color: #222;
    }
    .All{
        position: absolute;
        top:0;
        right: 15px;
        color: #c8a675;

    }
    .ImgCode{
        position: absolute;
        right: 15px;
        top:0;
        height: 40px;
        width: 70px;
        border:1px solid #fff;
    }
    .el-form-item__content{
        position: relative;
        .error{
            position: absolute;
            right: 15px;
            top:15px;
        }
    }
}
.transition-box{
    position:fixed;
    background:rgba(0,0,0,0.4);
    overflow:hidden;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    .transition-game{
        height: 100%;
        width: 100%;
        background: #fff;
        overflow: auto;
        padding-bottom: 200px;
    }
    .el-row{
        position: relative;
        height: 60px;
        width: 100%;
    }
    .el-row{
        border-bottom: 1px solid #c8c7cc;
        i{
            position: absolute;
            display: inline-block;
            width: 59px;
            height: 59px;
            left: 8px;
            top:0;
        }
        .gameMoney{
            font-size: 14px;
            float: right;
        }
        .gamebox{
            height: 60px;
            line-height: 60px;
            padding-left: 80px;
            padding-right: 15px;
            text-align: left;
            font-size: 14px;
        }
        b{
            position: absolute;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            background: rgba(255,255,255,0.6);
        }
    }
    .el-row:last-child{
        margin-bottom: 30px;
    }
}

</style>


<!--credit:10-->
<!--type:IGPJ-->
<!--imgcode:-->
<!--uuid:8a78bbde-4d81-4fe8-aac0-eb9520a2ee54-->
<!--isImgCode:0-->

<!--credit:13570.00-->
<!--type:IGPJ-->
<!--imgcode:-->
<!--uuid:eaf0dce7-85d6-4315-ae8e-f5896e7f6dc1-->
<!--isImgCode:0-->