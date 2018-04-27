<template>
    <div id="HABA" class='gamehaba'>
        <Top :text="Topobj"></Top>
        <div class="row A-search">
            <div class="col-6 A-lf HABA">
                <img src="http://mobile.beike188.com/mobileYHH/image/Home/HABA/HABA1.png" alt="">
            </div>
            <div class="col-6 A-rf">
                <div class="A-sousuo-box">
                    <label for="sousuo" class="">
                        <input id="sousuo" v-model="jud.SearchText" type="text" placeholder="搜索">
                    </label>
                    <span @click="kSearc()" class="iconfont icon-sousuo-copy-copy-copy"></span>
                </div>
            </div>
        </div>
        <div class="A-game-content-wrapper row A-wrapper-box" v-show="jud.judgment">
            <p class="A-title"> <span @click="rSearc()" class="iconfont A-re icon-ziyuan"></span></p>
            <el-row>
                <el-col :xs="8" :sm="4" :md="3" :lg="2" :xl="1"  v-for="v in jud.list">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.Keyname">
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="A-game-content-wrapper row" v-for="item in one" v-if="jud.judgment === false">
            <p class="A-title">热门游戏</p>
            <el-row>
                <el-col :xs="8" :sm="4" :md="3" :lg="2" :xl="1"  v-for="v in item.Slot_Game">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.Keyname">
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p class="A-title">桌面</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.Table_Game">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.Keyname">
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p class="A-title">老虎机</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.Video_Poker">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.Keyname">
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    var vm,el,loading;
    import Top from '../Top/Top.vue'
    import Habanero from './js/json2'
    export default {
        data () {
            return {
                Topobj:{
                    text:"HABA电子",
                    withdraw:'/'
                },
                one:Habanero,
                query:'',
                jud:{
                    judgment:false,
                    judgmenttext:false,
                    SearchText:'',
                    list:[]
                },
                Fata:{
                    gameType:"HABA",
                    model:'',
                    gameID:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            computedList: function () {
                var vm = this,arr=[];
                this.one.Habanero.Slot_Game.filter(function (item) {
                    if(item.title.indexOf(vm.query) !== -1){
                        return arr.push(item)
                    }
                })
                this.one.Habanero.Table_Game.filter(function (item) {
                    if(item.title.indexOf(vm.query) !== -1){
                        return arr.push(item)
                    }
                })
                this.one.Habanero.Video_Poker.filter(function (item) {
                    if(item.title.indexOf(vm.query) !== -1){
                        return arr.push(item)
                    }
                })
                return arr;
            }
        },
        mounted: function () {
        },
        methods:{
            GameSearch:function (arr,text) {
                for(var i=0;i<arr.length ;i++){
                    if(arr[i].title.indexOf(text) != -1){
                        this.jud.list.push(arr[i])
                    }
                }
            },
            GameSearchpush:function (text) {
                this.GameSearch(this.one.Habanero.Slot_Game,text);
                this.GameSearch(this.one.Habanero.Table_Game,text);
                this.GameSearch(this.one.Habanero.Video_Poker,text);
                this.$store.dispatch("incrwaitionValue",false);
                setTimeout(function () {
                    loading.close();
                },1000);
            },
            kSearc:function () {
                vm = this;
                if(this.jud.SearchText === ""){
                    this.jud.judgment = false;
                    vm.$alert( '请输入游戏名，或者关键字', '系统提示框', {
                        dangerouslyUseHTMLString: true
                    });
                }else{
                    loading = this.$loading({
                        lock: true,
                        text: 'Loading',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });
                    this.jud.judgment = true;
                    this.jud.list = [];
                    this.GameSearchpush(this.jud.SearchText);
                    if(!this.jud.list || (Object.prototype.toString.call(this.jud.list) === '[object Array]' && this.jud.list.length === 0)){
                        this.jud.judgment = true;
                    }else{
                        this.jud.judgment = true;
                    }
                }
            },
            rSearc:function () {
                this.jud.SearchText = "";
                this.jud.list = [];
                this.jud.judgment = false;
            },
            EnterGame:function (event) {
                vm = this;
                el = event.currentTarget;
                vm.Fata.gameID = el.getAttribute('data-id');
                vm.$BugGameLink(vm,function () {
                    vm.$store.dispatch("incrgamepop",{id:3,data:vm.Fata});
                    vm.$router.push({path:'/gamepublic'});
                })
            }
        },
        created() {
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "./css/gamethree.less";
    .gamehaba{
        background: #121212;
        min-height: 100%;
        width:100%;
        .A-game-content-wrapper{
            .A-title{
              background-image: linear-gradient(to bottom,#f7922b,#d62f27);
            }
        }
        .Game{
            font-size: 0;
            height: 100px;
            width: 100px;
            padding: 5px;
            margin: 5px auto;
            background: url("http://mobile.beike188.com/mobileYHH/image/Home/BBIN/bg.png") no-repeat;
            background-size: 100% 100%;
            .text{
                line-height: 15px;
                height: 15px;
                font-size: 12px;
                color:#fff;
                padding:0 5px;
                text-align: center;
                overflow: hidden;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .BgImg{
                width: 88px;
                height:67px;
                border-radius: 3px;
                margin: 6px auto 0 auto;
            }
        }

    }
</style>
