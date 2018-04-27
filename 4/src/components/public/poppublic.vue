<template>
    <div class='interchange'>
        <Top style="font-weight: 700;font-size: 17px;" :text="Topobj"></Top>
        <router-link style="font-size: 14px;position: absolute;top: 0;right: 10px;z-index: 20;color: #c8a675;line-height: 40px;font-weight: 900;" to="/Online">
            先去存款
        </router-link>
        <el-form style="margin-top: 10px;" :label-position="labelPosition" label-width="60px" :model="tran">
            <div class="line-w"></div>
            <el-form-item label="转出">
                <!--<div class="el-form-item__content" style="text-align: left;padding-left: 15px;" @click="show2 = !show2">-->
                    <!--{{allmoney.outname}}(￥{{allmoney.outmoney}})<span class="el-icon-arrow-right error"></span>-->
                <!--</div>-->
                <div class="el-form-item__content" style="text-align: left;padding-left: 15px;">
                    {{allmoney.outname}}(￥{{allmoney.outmoney}})
                    <!--<span class="el-icon-arrow-right error"></span>-->
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="转入">
                <div class="el-form-item__content" style="text-align: left;padding-left: 15px;" >
                    {{GameMoney.name}}(￥{{GameMoney.Money}})
                    <!--<span class="el-icon-arrow-right"></span> @click="show1 = !show1"-->
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="金额">
                <el-input :disabled='GameMoney.Money === "维护中"' v-model="tran.credit" placeholder="金额"></el-input>
                <!--<span @click="Allmoney()" class="All">全部转入</span>-->
            </el-form-item>
            <!--<div class="line-w"></div>-->
            <!--<el-form-item label="验证码">-"维护中"->
                <!--<el-input v-model="tran.imgcode" placeholder="验证码"></el-input>-->
                <!--<img @click="LoginImg()" ref="ImgCode" class="ImgCode" id="ImgCode" alt="验证码">-->
            <!--</el-form-item>-->
        </el-form>
        <transition name="el-zoom-in-bottom">
            <!--主账户-->
            <div v-show="show2" class="transition-boxGame">
                <div style="height: 200px;" @click="show2 = !show2"></div>
                <div class="transition-game">
                    <el-row v-for="(v,key) in game">
                        <div class="gameboxGame"  @click="Out(v.type,v.Money,v.name,key)">
                            <i :class="v.cls"></i>{{v.name}}
                            <span class="gameMoney">{{v.Money}}</span>
                        </div>
                        <!--<b @click="show2 = !show2"></b>-->
                        <!--<b @click="show2 = !show2" v-if="GameMoney.id === key"></b>-->
                        <b @click="show2 = !show2"></b>
                        <!--<b @click="show2 = !show2" v-if="v.Money === '0.00'"></b>-->
                    </el-row>
                </div>
            </div>
        </transition>
        <transition name="el-zoom-in-bottom">
            <div v-show="show1" class="transition-boxGame">
                <div style="height: 200px;" @click="show1 = !show1"></div>
                <div class="transition-game">
                    <el-row v-for="v in game">
                        <div class="gameboxGame" @click="To($event)" :data-type="v.type" :data-money="v.Money" :data-name="v.name">
                            <i :class="v.cls"></i>{{v.name}}    <span class="gameMoney">{{v.Money}}</span>
                        </div>
                        <!--<b @click="show2 = !show2" v-if="v.Money === '0.00'"></b>-->
                    </el-row>
                </div>
            </div>
        </transition>
        <el-button  class="G-submit"  type="primary" style="margin-right: 10px;" @click="submit()">确定转账</el-button>
        <el-button type="info" class="G-submit"  style="background: #fff!important;color: #333!important;" @click="EnterGame()">直接游戏</el-button>
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
                labelPosition: 'right',
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
                TurnOut:{//计算属性使用
                    name:"主账户",
                    type:"",
                    Money:'0.00'
                },
                TurnInto:{//计算属性使用
                    name:"IG 彩票（新）",
                    type:"IGPJ",
                    Money:''
                },
                outNum:0,
                game:[//游戏列表
                    {name:"主账户",type:'WALLET',cls:"x-icon-game-logo",Money:'0.00'},
                    {name:'IG 彩票（新）',type:'IGPJ',cls:'x-icon-game-XIG',Money:'0.00'},
                    {name:'IG 彩票',type:'IG',cls:'x-icon-game-JIG',Money:'0.00'},
                    {name:'VR 彩票',type:'VR',cls:'x-icon-game-vr',Money:'0.00'},
                    {name:'Cagayan88视讯',type:'CG',cls:'x-icon-game-cg',Money:'15.00'},
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
            gamepop:function () {
                return this.$store.state.gamepop;
            },
            GameMoney:{//获取到当前游戏type 进行计算.
                get: function () {
                    var gamecontent={name:'', type:'', Money:'',id:''};
                    var type = this.gamepop.data.gameType;
                    if(type === "IGPJLOTTERY" || type === "IGPJLOTTO"){
                        type = "IGPJ"
                    }
                    if(type === "IGLOTTERY" || type === "IGLOTTO"){
                        type = "IG"
                    }
                    if(type === 'YOPLAY'){
                        type  = 'AGIN'
                    }
                    for(let i=1;i<this.game.length;i++){
                        if(this.game[i].type === type){
                            gamecontent.name = this.game[i].name;
                            gamecontent.type = this.game[i].type;
                            gamecontent.Money  = this.game[i].Money;
                            gamecontent.id = i;
                        }
                    }
                    return gamecontent;
                },
                // setter
                set: function (newValue) {
                    this.TurnInto.name=newValue.name;
                    this.TurnInto.type = newValue.type;
                    this.TurnInto.Money = newValue.Money;
                }
            },
            allmoney:{
                get:function () {
                    return {
                        outmoney:this.game[this.outNum].Money,
                        outname:this.game[this.outNum].name ,
                    }
                },
                set:function () {

                }
            }
        },
        watch: {
        },
        mounted() {
            vm=this;
            this.$nextTick(function () {
                if(this.gamepop.data.gameType === "" || this.gamepop.data.gameType === null || this.gamepop.data.gameType === undefined){
                    this.$router.go(-1);
                }else{
                    vm.TypeInquireAll();
//                    vm.LoginImg();
                }
            });
        },
        methods:{
            Allmoney:function () {
                let vm = this;
                vm.tran.credit = this.game[this.outNum].Money > 100000 ? 100000 : this.game[this.outNum].Money;
            },
            Out:function (type,money,name,Num) {//转出中心钱包事件
                let vm = this;
                this.TurnOut = {name:name, type: type, Money: money};
                this.outNum = Num;
                vm.show2 =  false;
            },
            TypeInquireAll:function () {//查询所有余额
                vm = this;
                for(let i=0;i<vm.game.length;i++){
                    vm.game[i].Money = "加载中...";
                    vm.$BugNewRefresh(vm,{BType:vm.game[i].type});
                }
            },
            EnterGame:function () {//加载游戏
                vm = this;
//                console.log(this.gamepop.data);
                vm.$BugPlaygame(vm,this.gamepop.data,vm.userNew.jrg+'User/forwardGame');
            },
            submit:function () {// 余额互转
                vm=this;
                if(vm.GameMoney.Money === "维护中"){
                    return;
                }
                vm.$message.closeAll();
                if(vm.userNew.userkey === ""){
                    return vm.$router.push({path:'/AppPage'});
                }
                let min = vm.Money.min;
                let man = vm.Money.man;
                vm.tran.type=vm.GameMoney.type;
                vm.tran.credit = Math.floor(Number(vm.tran.credit));
                if(this.game[this.outNum].name === "主账户"){
                    vm.tran.type = vm.GameMoney.type;
                    vm.$BugNewtransfer(vm,vm.tran,min,man,'User/TransferTo');
                    return;
                }
//                if(this.TurnOut.name != "主账户" && this.GameMoney.name != "主账户"){
//                    vm.tran.type= vm.TurnOut.type;
//                    let objss ={
//                        credit:vm.tran.credit,
//                        type:vm.GameMoney.type,
//                        imgcode:null,
//                        uuid:'',
//                        isImgCode:'0'
//                    }
//                    vm.$Bugtransfer(vm,vm.tran,min,man,'User/TransferFrom',objss,'User/TransferTo')
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
    @import "../../../static/css/style.less";
    .interchange{
        position:relative;
        width: 100%;
        font-size: 0;
        padding-bottom: 80px;
        .G-submit{
            width: 100px;
        }
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
    .transition-boxGame{
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
    .gameboxGame{
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
        background: rgba(255,255,255,0.3);
    }
    }
    .el-row:last-child{
        margin-bottom: 30px;
    }
    }


</style>