<template>
    <div id="MG_game" class='MG_game gameThree'>
        <TopCounter :title="'MG 游戏'" :Boo="true" :src="'/AppPage/ElectronicGames'"></TopCounter>
        <div class="row A-search" style="height: 2rem">
            <div class="col-6 A-lf">
                 <img src="http://192.168.0.140:82/mobileTX/images393/Home/MG/microgaming.png" alt="">
            </div>
            <div class="col-6 A-rf" style="padding-top: 1.25rem">
                <div class="A-sousuo-box">
                    <label for="sousuo" class="">
                        <input id="sousuo" v-model="jud.SearchText" type="text" placeholder="搜索">
                    </label>
                    <span @click="kSearc()" class="iconfont icon-sousuo-copy-copy-copy"></span>
                </div>
            </div>
        </div>
        <div class="A-game-content-wrapper" v-show="jud.judgment">
            <p class="A-title"><span @click="rSearc()" class="iconfont A-re icon-ziyuan"></span></p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in jud.list" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="A-game-content-wrapper row" v-if="jud.judgment === false" v-for="item in one">
            <p class="A-title">热门游戏</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.BonusSlot" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p class="A-title">老虎机</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.ClassicSlot" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p class="A-title">累计奖池</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.FeatureSlot" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p v-if="item.others" class="A-title">视频扑克</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.others" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p v-if="item.Table" class="A-title">刮刮乐</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.Table" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p v-if="item.Video" class="A-title">视频</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.Video" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p v-if="item.VideoSlot" class="A-title">桌面</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.VideoSlot" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
            <p v-if="item.VideoPoker" class="A-title">机台&卡牌</p>
            <div class="row">
                <div @click="EnterGame($event)" class="col-4 A-box" v-for="v in item.VideoPoker" :data-id="v.GameID" :data-title="v.title">
                    <div class="A-box-child">
                        <p class="A-text">{{v.title}}</p>
                        <p class="A-Img" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var vm,el;
    import gamelist from './js/josn'
    export default {
        data () {
            return {
                one:gamelist,
                withdraw:'/AppPage/ElectronicGames',
                data:'',
                jud:{
                    judgment:false,
                    judgmenttext:false,
                    SearchText:'',
                    list:[]
                },
                Fata:{
                    gameType:"MG",
                    model:'',
                    gameID:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
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
                this.GameSearch(this.one.gamelist.VideoSlot,text);
                this.GameSearch(this.one.gamelist.BonusSlot,text);
                this.GameSearch(this.one.gamelist.ClassicSlot,text);
                this.GameSearch(this.one.gamelist.FeatureSlot,text);
                this.GameSearch(this.one.gamelist.Table,text);
                this.GameSearch(this.one.gamelist.Video,text);
                this.$store.dispatch("incrwaitionValue",false);
            },
            kSearc:function () {
                if(this.jud.SearchText === ""){
                    this.jud.judgment = false;
                    this.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入游戏名，或者关键字'});
                }else{
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
@import './css/gamethree.less';
.MG_game{
    background: #121212;
    padding-top: 0.8rem;
    min-height: 100%;
    .A-game-content-wrapper{
      .A-title{
        background-image: linear-gradient(to bottom,#22de2f,#2fb8da);
      }
    }
    .A-lf{
        img{
            width: 75%;
        }
    }
}
</style>
