<template>
    <div class='AllColor'>
            <p  class="title row">
                <span class="tad">时时彩</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in AlwaysColor">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">11选5</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Choose">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">快乐十分</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in ThirdDivision">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p class="title row">
                <span class="tad">快乐8</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Popular">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">快三</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Fast3">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">PK10</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Pk10">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">3D</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in LowColor">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">PC蛋蛋</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in PcEgg">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p  class="title row">
                <span class="tad">六合彩</span>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in liuhe">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
    </div>
</template>
<script>
    var el,vm;
    export default {
        data () {
            return {
                Topobj:{
                    text:"IG 彩票",
                    withdraw:'/'
                },
                Popular:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jskl8.png',title:'极速快乐8',id:'54',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-janada.png',title:'加拿大快乐8',id:'28',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-cq_c9111.png',title:'斯洛伐克',id:'31',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-cq_c921.png',title:'马耳他',id:'32',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-twbg.png',title:'台湾宾果',id:'33',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-bjk8.png',title:'北京快乐8',id:'26',gameType:'IGLOTTERY'}
                ],
                AlwaysColor:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-js.png',title:'极速时时彩',id:'48',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-yfssc.png',title:'一分时时彩',id:'50',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-cp.png',title:'重庆时时彩',id:'1',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-tj.png',title:'天津时时彩',id:'5',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-xj.png',title:'新疆时时彩',id:'6',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-ynssc.png',title:'云南时时彩',id:'8',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-shs.png',title:'上海时时彩',id:'15',gameType:'IGLOTTERY'}
                ],
                Fast3:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-sd-.png',title:'极速快3',id:'53',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jssb.png',title:'江苏骰宝',id:'3',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-ahk3.png',title:'安微快3',id:'11',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-gxk3.png',title:'广西快3',id:'13',gameType:'IGLOTTERY'}
                ],
                Choose:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jisu11x5.png',title:'极速11选5',id:'52',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jx.png',title:'江西11选5',id:'18',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-sd.png',title:'山东11选5',id:'19',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-bj.png',title:'北京11选5',id:'20',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-sh.png',title:'上海11选5',id:'21',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-ln.png',title:'辽宁11选5',id:'22',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-hb.png',title:'湖北11选5',id:'23',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jss.png',title:'江苏11选5',id:'24',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-ahh.png',title:'安徽11选5',id:'25',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-gd.png',title:'广东11选5',id:'17',gameType:'IGLOTTERY'}
                ],
                LowColor:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-js3d.png',title:'极速3D',id:'55',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-sd-.png',title:'福彩3D',id:'55',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-pl3.png',title:'排列3D',id:'36',gameType:'IGLOTTERY'}
                ],
                Pk10:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jssc.png',title:'极速赛车',id:'36',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-yfsc.png',title:'一分赛车',id:'49',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-bjpk.png',title:'北京赛车',id:'2',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-xyft.png',title:'幸运飞艇',id:'16',gameType:'IGLOTTERY'}
                ],
                PcEgg:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jspcdd.png',title:'极速蛋蛋',id:'56',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jndpcdd.png',title:'加拿大蛋蛋',id:'41',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-slfkpcdd.png',title:'斯洛伐克蛋蛋',id:'44',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-metpcdd.png',title:'马耳他',id:'45',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-twbgpcdd.png',title:'台湾',id:'46',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-bjpcdd.png',title:'北京蛋蛋',id:'39',gameType:'IGLOTTERY'}
                ],
                ThirdDivision:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-jskl10.png',title:'极速快乐十分',id:'51',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-tjkl10.png',title:'天津快乐十分',id:'9',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-hnkl10.png',title:'湖南快乐十分',id:'10',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-gxkl10.png',title:'广西快乐十分',id:'0',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-ynkl10.png',title:'云南快乐十分',id:'38',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-xylc.png',title:'幸运农场',id:'4',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-gdkl10.png',title:'广东快乐十分',id:'14',gameType:'IGLOTTERY'}
                ],
                liuhe:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/AllColor/j-lhc.png',title:'六合彩',id:'',gameType:'IGLOTTO'}
                ],
                Fata:{
                    gameType:'IGLOTTERY',
                    gameID:'',
                    model:'MB'
                }
            }
        },
        mounted:function(){
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods:{
            EnterGame(type,id) {
                vm = this;
                vm.Fata.gameType = type;
                vm.Fata.gameID = id;
                vm.$BugGameLink(vm,function () {
                    vm.$store.dispatch("incrgamepop",{id:3,data:vm.Fata});
                    vm.$router.push({path:'/gamepublic'});
                })
            }
        },
        created() {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.AllColor{
    width:100%;
    background: #f2f2f2;
    padding-bottom: 50px;
    margin: 0rem auto;
    .title{
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        text-align: left;
        margin-bottom: 0;
        padding-left:20px;
    }
    .grid-content{
        margin: 4px auto;
        background: #fff;
        box-shadow: 1px 1px 2px rgba(0,0,0,.2);
        border-radius: 5px;
        padding-top: 10px;
        width: 95%;
        height:85px;
        .sup{
            position: relative;
            margin: 5px auto ;
            width: 40px;
            height: 40px;
            img{
                position: absolute;
                width: 40px;
                right: 0px;
                top: 0px;
                height: 40px;
            }
        }
        .sub{
            height: 20px;
            white-space:nowrap;
            text-overflow:ellipsis;
            -o-text-overflow:ellipsis;
            overflow: hidden;
            font-size: 14px;
            line-height: 20px;
        }
    }
}
</style>
