<template>
    <div id="HABA" class='gamehaba'>
        <TopCounter :title="'HABA 游戏'" :Boo="true" :src="'/AppPage/ElectronicGames'"></TopCounter>
        <div class="row A-search">
            <div class="col-6 A-lf HABA">
                <img src="http://192.168.0.140:82/mobileTX/images393/Home/HABA/HABA1.png" alt="">
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
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in jud.list" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="A-game-content-wrapper row" v-for="item in one" v-if="jud.judgment === false">
                <p class="A-title">热门游戏</p>
                <div class="row">
                    <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.Slot_Game" :data-id="v.Keyname" :data-title="v.title">
                        <div class="A-box-child">
                            <p class="A-text">{{v.title}}</p>
                            <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>

                        </div>
                    </div>
                </div>

                <p class="A-title">桌面</p>
                <div class="row">
                    <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.Table_Game" :data-id="v.Keyname" :data-title="v.title">
                        <div class="A-box-child">
                            <p class="A-text">{{v.title}}</p>
                            <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>

                        </div>
                    </div>
                </div>
                <p class="A-title">老虎机</p>
                <div class="row">
                    <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.Video_Poker" :data-id="v.Keyname" :data-title="v.title">
                        <div class="A-box-child">
                            <p class="A-text">{{v.title}}</p>
                            <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></p>

                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    var vm,el;
    import Habanero from './js/json2'
    export default {
        data () {
            return {
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
            },
            kSearc:function () {
                if(this.jud.SearchText === ""){
                    this.jud.judgment = false;
                    this.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入游戏名，或者关键字'});
                }else{
                    this.$store.dispatch("incrwaitionValue",true);
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
                vm.$store.dispatch("incrgamepop",{id:1,gametitle:el.getAttribute('data-title')});
                vm.$BugPlaygame(vm,vm.Fata,'User/forwardGame');
            }
        },
        created() {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    @import "./css/gamethree.less";
    .gamehaba{
        background: #121212;
        padding-top: 0.8rem;
        min-height: 100%;
        .A-game-content-wrapper{
            .A-title{
              background-image: linear-gradient(to bottom,#f7922b,#d62f27);
            }
        }

    }
</style>
