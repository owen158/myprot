﻿<template>
    <div class='interchange add' ref="BackG">
        <TopCounter :title="'平台互转'" :Boo="true" :src="'/MemberCentre'"></TopCounter>
        <div class="interchangeBox row">
            <div class="title">
                <div class="col-6">
                    <p>中心钱包</p>
                    <p class="" style="font-size: 0.25rem;">{{userNew.userMoney}}</p>
                </div>
                <div @click="TypeInquireAll()" class="col-6">
                    <b class="iconfont icon-shuaxin1"></b>一键查询
                </div>
            </div>
        </div>
        <ul class="GameListBox row" ref="content">
            <li @click="TypeInquire($event)" class="col-4" v-for="v in game" :data-Type="v.type">
                <p>{{v.name}}</p>
                <span class="Orgrise">-</span>
            </li>
        </ul>
        <p class="tran">提示：互转金额￥ <span style="color:#bbb">{{Money.min}}</span> &nbsp;~  <span  style="color:#bbb">{{Money.man}}</span></p>
        <div class="row TypeInterchange">
            <div class="ipt lect">
                <div class="col-5">
                    <select  @change="transfer()"  ref="tranIn" name="" id="in">
                        <option value="中心钱包">中心钱包</option>
                        <option :value="v.type" v-for="v in game">{{v.name}}</option>
                    </select>
                </div>
                <div class="col-2 trans" @click="transferAll()" style="">
                    <i class="iconfont icon-zhuanhuan"></i>
                </div>
                <div class="col-5">
                    <select  name="" @change="transfer_right()" ref="tranOut" id="out">
                        <option :value="v.type" v-for="v in game" :data-type="v.type" :data-id="v.id">{{v.name}}</option>
                        <option value="中心钱包">中心钱包</option>
                    </select>
                </div>
            </div>
            <el-container>
                <el-main>
                    <el-form label-position="right" label-width="0px" status-icon :rules="rules2" :model="tran" ref="ruleForm2">
                        <el-form-item label="" prop="credit">
                            <el-input v-model="tran.credit" placeholder="金额">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="" prop="imgcode">
                            <el-input v-model="tran.imgcode" placeholder="验证码">
                            </el-input>
                            <img @click="LoginImg()" ref="ImgCode" id="ImgCode" alt="">
                        </el-form-item>
                        <el-form-item style="text-align: center">
                            <el-button type="primary" @click="submitForm('ruleForm2')">提 交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重 置</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    var Boo=false,Type,vm;
    export default {
        data () {
            var validatePass = (rule, value, callback) => {
                let ation=/^[0-9]{4}$/;
                if (!value) {
                    vm.LoginImg();
                    return callback(new Error('请输入验证码'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('确认验证码'));
                    }else{
                        callback();
                    }
                },300);
            };
            var validatecredit = (rule, value, callback) => {
                let name =/^[0-9]+([.]\d{0})?$/;
                if (!value) {
                    vm.LoginImg();
                    return callback(new Error('请输入金额'));
                }
                setTimeout( function() {
                    if (!name.test(value)) {
                        callback(new Error('请输入金额(例:1),不能小于、等于0'));
                    }else{
                        if(Number(value) <= 0 ){
                            return callback(new Error('请输入金额(例:1),不能小于、等于0'));
                        }
                        if(Number(value) < vm.Money.min || Number(value) > vm.Money.man){
                            return callback(new Error('请输入金额'+vm.Money.min+'-'+vm.Money.man+',不能带小数'));
                        }
                        callback();
                    }
                },300);
            };
            return {
                left:'',
                right:"",
                Money:{
                    min:1,
                    man:100000
                },
                tran:{
                    credit:'',
                    type:'',
                    imgcode:'',
                    uuid:''
                },
                obj:'',
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:''
                },
                Onekey:{
                    type:'',
                    uuid:'',
                    credit:""
                },
                rules2: {
                    credit: [
                        { validator: validatecredit, trigger: 'blur' }
                    ],
                    imgcode: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                },
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            game() {
                return this.$store.state.game;//获取游戏列表
            }
        },
        watch: {
        },
        mounted() {
            vm=this;
            this.$nextTick(function () {
                vm.LoginImg();
                vm.TypeInquireAll();
                vm.setBackground();
            });
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            submitForm(formName) {
                this.$refs[formName].validate(function(valid) {
                    if (valid) {
                        vm.$ajax.call(this,{userKey:vm.userNew.userkey},'User/getToken',function (objmsg) {
                            vm.tran.uuid=objmsg.msg;
                            if($('#in').val() === '中心钱包'){
                                vm.tran.type=$('#out').val();
                                vm.$BugNewtransfer(vm,vm.tran,'User/TransferTo')
                            }else if($('#out').val() === '中心钱包'){
                                vm.tran.type=$('#in').val();
                                vm.$BugNewtransfer(vm,vm.tran,'User/TransferFrom')
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
            transfer:function () {//原生js
                vm.LoginImg();
                vm.tran.imgcode="";
                vm.tran.credit='';
                var a=$('#out option').length-1;
                var key = document.getElementById('in').options[window.document.getElementById("in").selectedIndex].text;
                key = key.indexOf('中心钱包') != -1;
                if(key == true){
                    document.getElementById("out").selectedIndex =2;
                }else{
                    document.getElementById("out").selectedIndex =a
                }
            },
            transfer_right:function () {//原生js
                vm.LoginImg();
                vm.tran.imgcode="";
                vm.tran.credit='';
                var key = document.getElementById('out').options[window.document.getElementById("out").selectedIndex].text;
                key = key.indexOf('中心钱包') != -1;
                if(key == true){
                    document.getElementById("in").selectedIndex =1;
                }else{
                    document.getElementById("in").selectedIndex =0;
                }
            },
            transferAll:function () {
                var a=$('#out option').length-1;
                vm.LoginImg();
                vm.tran.imgcode="";
                vm.tran.credit='';
                if(Boo == false){
                    document.getElementById("out").selectedIndex =a;
                    document.getElementById("in").selectedIndex =1;
                    Boo =true;
                }else{
                    document.getElementById("in").selectedIndex =0;
                    document.getElementById("out").selectedIndex =0;
                    Boo =false;
                }
            },
            TypeInquireAll:function () {//查询所有余额
                var Len=this.$refs.content.children;
                for(var i=0;i<Len.length;i++){
                    Len[i].children[1].innerHTML = 'loading...';
                    vm.$BugNewRefresh(vm,{BType:Len[i].getAttribute('data-type')},Len[i].children[1]);
                }
            },
            TypeInquire:function (event) {//查询余额
                var el = event.currentTarget;
                el.children[1].innerHTML = 'loading...';
                vm.$BugNewRefresh(vm,{BType:el.getAttribute('data-type')},el.children[1]);
            }
        },
        created() {
            vm=this;
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.A-title-click{
    width: 90%;
    margin: 0.3rem auto;
    height: 0.7rem;
    .submit{
        background: @bg-c1;
    }
}
.interchange{
    width: 100%;
    .Bg-BackGround;
    padding-top: 0.8rem;
    font-size: 0;
    padding-bottom: 1rem;
}
.interchangeBox{
    font-size:0;
    .title{
        height: 1.2rem;
        padding:0.1rem;
        div{
            height: 1rem;
            p{
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.28rem;
            }
        }
        div:nth-child(1){
            border-right:1px solid @border;
            p{font-size: 0.35rem;font-weight: 700;color:@size-color;}
        }
        div:nth-child(2){
            height: 1rem;line-height: 1rem;
            font-size: 0.3rem;
            color:@size-color;
            text-decoration: underline;
            position:relative;
            b{
                position: absolute;
                width:0.4rem;
                left:0.7rem;
                height: 0.4rem;
            }
        }
    }

}
.GameListBox li{
    height: 1.2rem;
    font-size: 0.25rem;
    p{
        height: 0.6rem;
        line-height: 0.6rem;
        .Bg-Ganrett-Title;
        color:@size-color;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    span{
        display: block;
        height: 0.6rem;
        line-height: 0.6rem;
        color:@size-color;
    }
}
.GameListBox li:nth-child(3n+1) p{
    border-right:1px solid @border;
}
.GameListBox li:nth-child(3n+2) p{
    border-right:1px solid @border;
}
.tran{
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.25rem;
    font-weight: 100;
    text-align: left;padding-left: 0.4rem;
    background: #faf9e6;
    margin: 0.3rem auto;
    border:1px solid #c3c1c1;
}
.TypeInterchange{
    width:100%;
    .trans{
        padding-top:  0.12rem;
         i{
           font-size: 0.5rem;
         }
    }
    .ipt:nth-child(1){
        background: #f5f5f9;
    }
    .ipt{
        width:90%;
        border-radius: 3px;
        background: #fff;
        height: 0.7rem;
        position: relative;
        margin: 0.1rem auto;
        label{
            display: inline-block;
            font-size: 0.3rem;
            font-weight: 600;
            vertical-align: top;
            line-height: 0.7rem;
            width:30%;
        }
        input,select{
            height: 0.7rem;
            font-size: 0.25rem;
            padding-left: 0.1rem;
            vertical-align: top;
            outline: none;
        }
        input{
            width:69%;
            border:none;
        }
        /*#ImgCode{*/
            /*position: absolute;*/
            /*right:0;top:0;*/
            /*width:1.6rem;*/
            /*height: 0.7rem;*/
        /*}*/
        select{
            width:55%;
        }
    }
    div.lect{
        select{
            width:100%;
        }

    }
}
</style>