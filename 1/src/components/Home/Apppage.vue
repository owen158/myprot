<template>
    <div class='AppPage' ref="BackG">
        <Top></Top>
        <span id="copy" @click="menu()" class="iconfont icon-tubiaozhizuomoban-copy"></span>
        <div  ref="wrapperBoxL"  class="wrapperBoxL">
            <h2>导航</h2>
            <div @click="mainbox(),Jump($event)"  class="main" data-src="/">
                <span class="iconfont icon-shouye"></span>
                <span class="tad">
                    彩票游戏
                </span>
            </div>
            <div @click="mainbox(),Jump($event)" class="main" data-src="/AppPage/LiveVideo">
                <span class="iconfont icon-shexiangtou"></span>
                <span  class="tad">
                    真人视讯
                </span>
            </div>
            <div @click="mainbox(),Jump($event)"  class="main" data-src="/AppPage/ElectronicGames">
                <span class="iconfont icon-dianziyouxi"></span>
                <span  class="tad">
                    电子游戏
                </span>
            </div>
            <div @click="mainbox(),Jump($event)"  class="main" data-src="/AppPage/Sportsevents">
                <span class="iconfont  icon-zuqiu"></span>
                <span class="tad">
                    体育赛事
                </span>
            </div>
            <h2>个人中心</h2>
            <div v-if="userNew.Login != true" class="row">
                <div @click="mainbox(),Jump($event)" data-src="/Login" class="main">
                    <span class="iconfont icon-denglu1"></span>
                    <span class="tad ">
                        登录
                    </span>
                </div>
                <div @click="mainbox(),Jump($event)" data-src="/Registered"  class="main">
                    <span class="iconfont icon-freg"></span>
                    <span class="tad ">
                        注册
                    </span>
                </div>
            </div>
            <div class="row" v-if="userNew.Login == true">
                <div @click="mainbox(),Jump($event)" data-src="/MemberCentre" class="main">
                    <span class="iconfont icon-user"></span>
                    <span class="tad " >
                        个人中心
                    </span>
                </div>
                <div @click="mainbox(),dropOut()" class="main">
                    <span class="iconfont icon-tuichu"></span>
                    <a href="javascript:void(0)" class="tad">
                        退出
                    </a>
                </div>
            </div>
            <div @click="mainbox(),Jump($event)" class="main" data-src="/NoteSingle">
                <span class="iconfont icon-kefu"></span>
                <span class="tad " >
                    客服
                </span>
            </div>
        </div>
        <div @click="wrapperBox()" ref="wrapperBoxR" class="wrapperBoxR">
        </div>
        <div class="A-Lo-Re">
            <div class="row" v-if="userNew.Login != true">
                <router-link to="/LogIn" class="A-link" >
                    登录
                </router-link>
                <router-link to="/Registered" class="A-link" >
                    注册
                </router-link>
            </div>
            <div class="row" v-if="userNew.Login === true">
                <span class="A-link">钱包</span>
                <span class="A-link">{{userNew.userMoney}}</span>
            </div>
        </div>
        <div class="A-Logo">
            <span class="x-icon-home-logo"></span>
        </div>
        <bnner></bnner>
        <notice></notice>
        <el-tabs  v-model="activeName" @tab-click="handleClick" id="header-top">
            <el-tab-pane :label="item.text" v-for="item in Nav" :name="item.src"></el-tab-pane>
        </el-tabs>
        <el-container class="LiveVideo" style="padding-bottom: 1.1rem">
            <el-main>
                <el-row style="margin-bottom: 0.75rem" class="A-Game" v-if="$route.params.name ==='KaiyuanChess' ">
                    <el-col :span="8" v-for="v in KaiyuanChess">
                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                            <div class="A-Game-Main" :class="v.cls">
                                <div class="A-Game-Sup"></div>
                                <!--<div class="A-Game-Sub">{{v.title}} </div>-->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="A-Game" v-if="$route.params.name ==='LiveVideo' ">
                    <el-col :span="8" v-for="v in LiveVideo">
                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                            <div class="A-Game-Main" :class="v.cls">
                                <div class="A-Game-Sup"></div>
                                <!--<div class="A-Game-Sub">{{v.title}} </div>-->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="A-Game" v-if="$route.params.name ==='Sportsevents'">
                    <el-col :span="8" v-for="v in Sportsevents">
                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                            <div class="A-Game-Main" :class="v.cls">
                                <div class="A-Game-Sup"></div>
                                <!--<div class="A-Game-Sub">{{v.title}} </div>-->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="A-Game" v-if="$route.params.name ==='ElectronicGames'">
                    <el-col :span="8" v-for="v in ElectronicGames">
                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                            <div class="A-Game-Main" :class="v.cls">
                                <div class="A-Game-Sup"></div>
                                <!--<div class="A-Game-Sub">{{v.title}} </div>-->
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="A-Game" v-if="$route.params.name ==='LooteryGame' ">
                    <el-tabs type="border-card">
                        <el-tab-pane label="IG 彩票 （新）">
                            <el-row class="A-Game">
                                <el-col :span="8"  v-for="v in IgGame.NewLoattery">
                                    <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                                        <div class="A-Game-Main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'auto 100%'}">
                                            <div class="A-Game-Sup"></div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="IG 彩票">
                            <el-row class="A-Game">
                                <el-col :span="8"  v-for="v in IgGame.Loattery">
                                    <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                                        <div class="A-Game-Main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'auto 100%'}">
                                            <div class="A-Game-Sup"></div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="VR 彩票">
                            <div class="row A-Game">
                                <div class="row A-Game-Title">视 讯 彩 频 道</div>
                                <el-row class="A-Game">
                                    <el-col :span="8"  v-for="v in Vrgame.Popular">
                                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                                            <div class="A-Game-Main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'auto 100%'}">
                                                <div class="A-Game-Sup"></div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="row A-Game-Title">国 彩 频 道</div>
                                <el-row class="A-Game">
                                    <el-col :span="8"  v-for="v in Vrgame.AlwaysColorone">
                                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                                            <div class="A-Game-Main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'auto 100%'}">
                                                <div class="A-Game-Sup"></div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="row A-Game-Title">高 频 彩 频 道</div>
                                <el-row class="A-Game">
                                    <el-col :span="8"  v-for="v in Vrgame.heightColor">
                                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                                            <div class="A-Game-Main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'auto 100%'}">
                                                <div class="A-Game-Sup"></div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="row A-Game-Title">动 画 彩 频 道</div>
                                <el-row class="A-Game">
                                    <el-col :span="8"  v-for="v in Vrgame.VRanimate">
                                        <div class="A-Game-box" @click="EnterGame(v.Type,v.id,v.Mod,v.title)">
                                            <div class="A-Game-Main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'auto 100%'}">
                                                <div class="A-Game-Sup"></div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    var el,vm;
    import Top from '../Top/Top.vue'
    import notice from '../public/notice.vue'
    import bnner from '../public/bnner.vue'
    export default {
        data () {
            return {
                text:'',
                activeName: '/AppPage/KaiyuanChess',
                Nav:[
                    {text:'开元棋牌',src:'/AppPage/KaiyuanChess',url:'Sportsevents'},
                    {text:'彩票娱乐',src:'/AppPage/LooteryGame',url:'LooteryGame'},
                    {text:'真人视讯',src:'/AppPage/LiveVideo',url:'LiveVideo'},
                    {text:'电子游戏',src:'/AppPage/ElectronicGames',url:'ElectronicGames'},
                    {text:'体育赛事',src:'/AppPage/Sportsevents',url:'Sportsevents'},
                ],
//                真人视讯
                LiveVideo:[
                    {cls:'LiveVideocg',title:'Cagayan88',sub:'开始游戏',Type:"CG",id:"",Mod:""},
                    {cls:'LiveVideods',title:'DS太阳城',sub:'开始游戏',Type:"DS",id:"",Mod:""},
                    {cls:'LiveVideoag',title:'AGIN国际厅',sub:'开始游戏',Type:"AGIN",id:"",Mod:"mobile"},
                    {cls:'LiveVideosun',title:'申博视讯',sub:'开始游戏',Type:"SB",id:"3",Mod:""},
                    {cls:'LiveVideoog',title:'OG视讯',sub:'开始游戏',Type:"OG",id:"",Mod:""},
                    {cls:'LiveVideobbin',title:'BBIN视讯',sub:'开始游戏',Type:"BBIN",id:"1",Mod:""}
                ],
//                体育赛事
                Sportsevents:[
                    {cls:'Sportseventshg',title:'皇冠体育',sub:'开始游戏',Type:"HG",id:"",Mod:"MB"}
                ],
//                开元棋牌
                KaiyuanChess:[
//                    {cls: "KaiyuanChessdt", title: "大厅", sub: "开始游戏", Type: "KYQP", id: "0", Mod: "mobile"},
                    {cls: "KaiyuanChessdz", title: "德州扑克 ", sub: "开始游戏", Type: "KYQP", id: "620", Mod: "mobile"},
                    {cls: "KaiyuanChessebg", title: "二八杠", sub: "开始游戏", Type: "KYQP", id: "720", Mod: "mobile"},
                    {cls: "KaiyuanChessqznn", title: "抢庄牛牛", sub: "开始游戏", Type: "KYQP", id: "830", Mod: "mobile"},
                    {cls: "KaiyuanChesszjh", title: "炸金花", sub: "开始游戏", Type: "KYQP", id: "220", Mod: "mobile"},
                    {cls: "KaiyuanChesssg", title: "三公", sub: "开始游戏", Type: "KYQP", id: "860", Mod: "mobile"},
                    {cls: "KaiyuanChessyzlh", title: "押庄龙虎", sub: "开始游戏", Type: "KYQP", id: "900", Mod: "mobile"},
                    {cls: "KaiyuanChessesyd", title: "21点", sub: "开始游戏", Type: "KYQP", id: "600", Mod: "mobile"},
                    {cls: "KaiyuanChesstbnn", title: "通比牛牛", sub: "开始游戏", Type: "KYQP", id: "870", Mod: "mobile"},
                    {cls: "KaiyuanChessqhb", title: "抢红包", sub: "开始游戏", Type: "KYQP", id: "880", Mod: "mobile"}
                ],
//                电子游戏
                ElectronicGames:[
                    {cls:'ElectronicGamespt',title:'PT电子',sub:'开始游戏',Type:"PT",id:'hb',Mod:'mobile'},
                    {cls:'ElectronicGamesmg',title:'MG电子',sub:'开始游戏',Type:"GAMEMG",id:'',Mod:''},
                    {cls:'ElectronicGameshaba',title:'HABA电子',sub:'开始游戏',Type:"GAMEHABA",id:'',Mod:''},
                    {cls:'ElectronicGamesbbin',title:'BBIN电子',sub:'开始游戏',Type: "BBIN",id:'2',Mod:''},
                    {cls:'ElectronicGamessub',title:'TGP电子',sub:'开始游戏',Type: "SB",id:'4',Mod:''},
                    {cls:'ElectronicGamesYOPLAY',title:'YOPLAY电子',sub:'开始游戏',Type: "YOPLAY",id:'YP800',Mod:'mobile'}
                ],
//                IG彩票
                IgGame:{
                    NewLoattery:[
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_pk10.png',title:'PK拾',Type:"IGPJLOTTERY",id:'2',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_ssc.png',title:'时时彩',Type:"IGPJLOTTERY",id:'1',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_kl10f.png',title:'快乐十分',Type:"IGPJLOTTERY",id:'4',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_11x5.png',title:'11选5',Type:"IGPJLOTTERY",id:'18',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_kl8.png',title:'快乐8分',Type: "IGPJLOTTERY",id:'28',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_k3.png',title:'快3',Type: "IGPJLOTTERY",id:'3',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_fc3d.png',title:'3D',Type:"IGPJLOTTERY",id:'36',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_pcdd.png',title:'PC蛋蛋',Type:"IGPJLOTTERY",id:'44',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/x_lhc.png',title:'六合彩',Type:"IGPJLOTTO",id:'',Mod:'MB'}
                    ],
                    Loattery:[
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_pk.png',title:'PK拾',Type:"IGLOTTERY",id:'2',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_ssc.png',title:'时时彩',Type:"IGLOTTERY",id:'1',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_kl.png',title:'快乐十分',Type:"IGLOTTERY",id:'4',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_11x5.png',title:'11选5',Type:"IGLOTTERY",id:'18',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_k8.png',title:'快乐8分',Type: "IGLOTTERY",id:'28',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_k3.png',title:'快3',Type: "IGLOTTERY",id:'3',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_3d.png',title:'3D',Type:"IGLOTTERY",id:'36',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_pc.png',title:'PC蛋蛋',Type:"IGLOTTERY",id:'44',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/j_xgc.png',title:'六合彩',Type:"IGLOTTO",id:'',Mod:'MB'}
                    ],
                },
//                VR彩票
                Vrgame:{
                    Popular:[
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_vrjx2.png',title:'VR金星1.5分彩',id:'1',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_sc2.png',title:'VR赛车',id:'2',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_sfc2.png',title:'VR3分彩',id:'11',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_vrhs2.png',title:'VR 火星1.5分彩 ',id:'12',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_ft2.png',title:'VR快艇',id:'13',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_vrbjl2.png',title:'VR百家乐',id:'15',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/officail_vrsix2.png',title:'VR六合彩',id:'16',Type:'VR',Mod:'MB'}
                    ],
                    AlwaysColorone:[
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/ssc1.png',title:'重庆时时彩',id:'3',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/xjsc.png',title:'新疆时时彩',id:'4',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/tjsc.png',title:'天津时时彩',id:'5',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/gd115.png',title:'广东11选5',id:'6',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/jx115.png',title:'江西11选5',id:'7',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/bjc.png',title:'北京赛车',id:'8',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/ahk3.png',title:'江苏快三',id:'9',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/xyc.png',title:'幸运28',id:'10',Type:'VR',Mod:'MB'},
                        {img:'http://192.168.0.140:82/mobileTX/images393/Home/LooteryGame/card.png',title:'香港六合彩',id:'14',Type:'VR',Mod:'MB'}
                    ],
                    heightColor: [
                        //高频彩
                        {
                            img: "http://192.168.0.140:82/mobileTX/images393/Home/VRgame/vrsx.png",
                            title: "水星分分彩",
                            id: "34"
                        },
                        {
                            img: "http://192.168.0.140:82/mobileTX/images393/Home/VRgame/vrmx.png",
                            title: "木星赛车",
                            id: "35"
                        }
                    ],
                    VRanimate: [
                        //VR动画彩
                        {
                            img: "http://192.168.0.140:82/mobileTX/images393/Home/VRgame/vrsm.png",
                            title: "赛马",
                            Type:'VR',
                            id: "36"
                        },
                        {
                            img: "http://192.168.0.140:82/mobileTX/images393/Home/VRgame/vryy.png",
                            title: "游泳",
                            Type:'VR',
                            id: "37"
                        },
                        {
                            img: "http://192.168.0.140:82/mobileTX/images393/Home/VRgame/vrzxc.png",
                            title: "自行车",
                            Type:'VR',
                            id: "38"
                        }
                    ],
                },
                transitionName: 'slide-left',
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            }
        },
        mounted() {
            vm=this;
            if(vm.annouationNew.announcement === ""){
                vm.$store.dispatch("incrObtain",{id:3});
            }
            if(vm.annouationNew.Rotation === ""){
                vm.$store.dispatch("incrObtain",{id:2,data:{type:1,cagent:vm.userNew.cagent}});
            }
            this.setBackground();
            this.handleClick();
            this.$nextTick(function () {
                document.getElementById('header-top').firstChild.style.marginBottom='2px'
            })
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            handleClick(tab, event) {
                this.$router.push({path:this.activeName});
            },
            dropOut:function (){
                vm=this;
                this.$confirm('是否继续退出?', '系统提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() =>{
                    vm.$BugNewdropOut(vm,{},'logout.do');
                }).catch(() =>{
                });
            },
            menu:function (){
                this.$refs.wrapperBoxL.style.left=0+'%';
                this.$refs.wrapperBoxR.style.right=0+'%';
            },
            wrapperBox:function (){
                this.$refs.wrapperBoxL.style.left=-50+'%';
                this.$refs.wrapperBoxR.style.right=-50+'%';
            },
            mainbox:function (){
                this.$refs.wrapperBoxL.style.left=-50+'%';
                this.$refs.wrapperBoxR.style.right=-50+'%';
            },
            Jump:function(event){
                el = event.currentTarget;
                this.$router.push({path:el.getAttribute('data-src')});
            },
            EnterGame:function (type,id,moblie,title){
                vm = this;
                vm.Fata.gameType = type;
                vm.Fata.gameID = id;
                vm.Fata.model = moblie;
                if(vm.Fata.gameType === 'GAMEMG' || vm.Fata.gameType === 'GAMEHABA'){
                    return vm.$router.push({path:'/'+vm.Fata.gameType});
                }else{
                    vm.$store.dispatch("incrgamepop",{id:1,gametitle:title});
                    vm.$BugPlaygame(vm,vm.Fata,'User/forwardGame');
                }
            },
        },
        created(){
        },
        components: {
            Top,
            bnner,
            notice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../../../static/css/style.less";
    .LiveVideocg{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/LiveVideo/cg.png") ;
        background-size:cover;
    }
    .LiveVideods{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/LiveVideo/ds.png");
        background-size:cover;
    }
    .LiveVideoag{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/LiveVideo/ag.png");
        background-size:cover;
    }
    .LiveVideosun{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/LiveVideo/sun.png");
        background-size:cover;
    }
    .LiveVideoog{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/LiveVideo/og.png");
        background-size:cover;
    }
    .LiveVideobbin{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/LiveVideo/bbin.png");
        background-size: cover;
    }
    .Sportseventshg{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/Sportsevents/hg.png");
        background-size: cover;
    }
    .ElectronicGamespt{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/ElectronicGames/pt.png");
        background-size: cover;
    }
    .ElectronicGamesmg{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/ElectronicGames/mg.png");
        background-size: cover;
    }
    .ElectronicGamessub{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/ElectronicGames/sub.png");
        background-size: cover;
    }
    .ElectronicGameshaba{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/ElectronicGames/haba.png");
        background-size: cover;
    }
    .ElectronicGamesbbin{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/ElectronicGames/bbin.png");
        background-size: cover;
    }
    .ElectronicGamesYOPLAY{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/ElectronicGames/g_ag.png");
        background-size: cover;
    }
    .KaiyuanChessdt{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/dt.png");
        background-size: cover;
    }
    .KaiyuanChessdz{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/dz.png");
        background-size: cover;
    }
    .KaiyuanChessebg{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/ebg.png");
        background-size: cover;
    }
    .KaiyuanChessqznn{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/qznn.png");
        background-size: cover;
    }
    .KaiyuanChesszjh{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/zjh.png");
        background-size: cover;
    }
    .KaiyuanChesssg{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/sg.png");
        background-size: cover;
    }
    .KaiyuanChessyzlh{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/yzlh.png");
        background-size: cover;
    }
    .KaiyuanChessesyd{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/esyd.png");
        background-size: cover;
    }
    .KaiyuanChesstbnn{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/tbnn.png");
        background-size: cover;
    }
    .KaiyuanChessqhb{
        background: url("http://192.168.0.140:82/mobileTX/images393/Home/KaiyuanChess/qhb.png");
        background-size: cover;
    }
    .wrapperBoxR,.wrapperBoxL{
        position: fixed;
        width: 50%;
        height: 100%;
        z-index: 13;
        transition: all 0.2s;
        background: rgba(0,0,0,0.5);
        overflow: auto;
    }
    .wrapperBoxR{
        top:0;
        right:-50%;
    }
    .wrapperBoxL{
        top:0;
        background: @BgThree;
        overflow: hidden;
        left:-50%;
        h2{
            width: 100%;
            padding-left: 0.15rem;
            .Bg-Ganrett-Title;
            .HSC(0.8rem,0.8rem,0.3rem,@colorTwo,left);
            font-weight: 700;
        }
        .main{
            position: relative;
            width:100%;
            padding-left:0.6rem;
            .HSC(0.7rem,0.7rem,0.3rem,@colorTwo,left);
            background:#2c2b31;
            border-bottom:1px solid #3a3a3a;
            span:nth-child(1){
                position: absolute;
                font-size:0.4rem;
                left: 0.1rem;
            }
            .tad{
                display: inline-block;
                font-size: 0.3rem;
            }
        }
    }
    #copy{
        position: fixed;
        top:0.2rem;
        left:0.2rem;
        color:@colorTwo;
        font-size: 0.44rem;
        z-index: 8;
    }
    .A-Lo-Re{
        position: fixed;
        top:0rem;
        right: 0;
        z-index: 8;
        height: 0.8rem;
        .A-link{
            float: left;
            margin-top: 0.2rem;
            padding: 0 0.1rem;
            .HSC(0.4rem,0.4rem,0.25rem,@colorTwo,center);
        }
    }
    .A-Logo{
        position: fixed;
        top:0rem;
        left:2.1rem;
        width: 3.1rem;
        height: 0.8rem;
        text-align: center;
        z-index: 10;
        span{
            margin: 0 auto;
        }
    }
    .AppPage{
        width:100%;
        padding-top: 0.8rem;
        font-size:0;
        .Bg-BackGround;
        .el-main{
            padding: 0px 0;
        }
        .A-Game-box{
            margin: 0.05rem 0.05rem;
            height: 2.35rem;
        }
        .A-Game-Main{
            padding-top: 1.88rem;
            height: 2.35rem;
        }
        .A-Game-Sub{
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.25rem;
            color: #fff;
        }
        .A-Game-Title{
            .HSC(0.6rem,0.6rem,0.3rem,@colorOne,left);
            padding-left: 0.2rem;
        }
        .el-tabs__nav{
            width: 100%;
            overflow: hidden;
        }
        .el-tabs--border-card>.el-tabs__header{
            /*background: #432e8c;*/
            border-bottom: none;
        }
        .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
            background: transparent;
            color: @Bg-Nav-Active;
            border-right-color: transparent;
            border-left-color: transparent;
        }
        .el-tabs--border-card>.el-tabs__header .el-tabs__item{
            color:@colorOne;
        }
        .el-tabs--border-card{
            border:none;
            background: transparent;
            box-shadow: none;
            padding-bottom: 0.85rem;
        }
        .el-tabs__item{
            width: 34%;
        }
        .el-tabs--border-card>.el-tabs__content{
            padding: 15px 0;
        }
        /*#header-top{*/
            /*background: red;*/
            /*.el-tabs__header{*/
                /*background: #fff;*/
            /*}*/
        /*}*/
    }
</style>
