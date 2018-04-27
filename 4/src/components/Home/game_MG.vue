<template>
    <div id="MG_game" class='MG_game gameThree'>
        <Top :text="Topobj"></Top>
        <div class="row A-search" style="height: 2rem">
            <div class="col-6 A-lf">
                 <img style="width: 100%" src="http://mobile.beike188.com/mobileYHH/image/Home/MG/microgaming.png" alt="">
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
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in jud.list">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="A-game-content-wrapper row" v-if="jud.judgment === false" v-for="item in one">
            <p class="A-title">热门游戏</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.BonusSlot">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p class="A-title">老虎机</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.ClassicSlot">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p class="A-title">累计奖池</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.FeatureSlot">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p v-if="item.others" class="A-title">视频扑克</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.others">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p v-if="item.Table" class="A-title">刮刮乐</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.Table">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p v-if="item.Video" class="A-title">视频</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.Video">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p v-if="item.VideoSlot" class="A-title">桌面</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.VideoSlot">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
            <p v-if="item.VideoPoker" class="A-title">机台&卡牌</p>
            <el-row>
                <el-col :xs="8" :sm="6" :md="4" :lg="2" :xl="1"  v-for="v in item.VideoPoker">
                    <div @click="EnterGame($event)" class="Game" :data-id="v.GameID" >
                        <p class="text">{{v.title}}</p>
                        <p class="BgImg" :style="{background:'url('+v.src+')  no-repeat',backgroundSize:'200% 100%',backgroundOrigin:'content-box'}"></p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    var vm,el,loading;
    import Top from '../Top/Top.vue'
    import gamelist from './js/josn'
    export default {
        data () {
            return {
                one:gamelist,
                Topobj:{
                    text:"MG电子",
                    withdraw:'/',
                },
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
                setTimeout(function () {
                    loading.close();
                },1000);
            },
            kSearc:function () {
                if(this.jud.SearchText === ""){
                    this.jud.judgment = false;
                    this.$alert( '请输入游戏名，或者关键字', '系统提示框', {
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
@import './css/gamethree.less';
.MG_game{
    background: #121212;
    min-height: 100%;
    width:100%;
    .A-game-content-wrapper{
      .A-title{
        background-image: linear-gradient(to bottom,#22de2f,#2fb8da);
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
