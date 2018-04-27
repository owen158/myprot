<template>
    <div class='LowColor'>
        <div class="AllWrapper" style="margin: 0;width:100%;">
            <p  class="title row">
                <span class="tad">时时彩</span>
                <b class="solid"></b>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in AlwaysColor">
                    <div class="grid-content bg-purple" @click="EnterGame(v.gameType,v.id)" >
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
                <b class="solid"></b>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Choose">
                    <div class="grid-content bg-purple"  @click="EnterGame(v.gameType,v.id)">
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
                <span class="tad">快乐十分</span>
                <b class="solid"></b>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in ThirdDivision">
                    <div class="grid-content bg-purple"  @click="EnterGame(v.gameType,v.id)">
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
                <b class="solid"></b>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Popular">
                    <div class="grid-content bg-purple"  @click="EnterGame(v.gameType,v.id)">
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
                <b class="solid"></b>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Fast3">
                    <div class="grid-content bg-purple"  @click="EnterGame(v.gameType,v.id)">
                        <div class="sup">
                            <img :src="v.img" alt="">
                        </div>
                        <div class="sub">
                            {{v.title}}
                        </div>
                    </div>
                </el-col>
            </el-row>
            <p   class="title row">
                <span class="tad">PK10</span>
                <b class="solid"></b>
            </p>
            <el-row >
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1" v-for="v in Pk10">
                    <div class="grid-content bg-purple"  @click="EnterGame(v.gameType,v.id)">
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
                <b class="solid"></b>
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
            <p   class="title row">
                <span class="tad">PC蛋蛋</span>
                <b class="solid"></b>
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
                <b class="solid"></b>
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
        <!--提示框-->
    </div>
</template>

<script>
    var el,vm;
    export default {
        data () {
            return {
                Popular:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/bjkl8_90.png',title:'极速快乐8',id:'54',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jndkl8.png',title:'加拿大快乐8',id:'28',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/slfkkl8.png',title:'斯洛伐克',id:'31',gameType:'IGPJLOTTERY'},
//                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/j-cq_c921.png',title:'马耳他',id:'32',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/twbgkl8.png',title:'台湾宾果',id:'33',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/bjkl8.png',title:'北京快乐8',id:'26',gameType:'IGPJLOTTERY'}
                ],
                AlwaysColor:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jscq.png',title:'极速时时彩',id:'48',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jscq60.png',title:'一分时时彩',id:'50',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/ssc.png',title:'重庆时时彩',id:'1',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/tjsc.png',title:'天津时时彩',id:'5',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/xjsc.png',title:'新疆时时彩',id:'6',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/ynsc.png',title:'云南时时彩',id:'8',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/shsc.png',title:'上海时时彩',id:'15',gameType:'IGPJLOTTERY'}

                ],
                Fast3:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jsc_90.png',title:'极速快3',id:'53',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jsc.png',title:'江苏骰宝',id:'3',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/ahk3.png',title:'安微快3',id:'11',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/gxk3.png',title:'广西快3',id:'13',gameType:'IGPJLOTTERY'}
                ],
                Choose:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/gd115_90.png',title:'极速11选5',id:'52',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jx115.png',title:'江西11选5',id:'18',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/sd115.png',title:'山东11选5',id:'19',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/bj115.png',title:'北京11选5',id:'20',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/sh115.png',title:'上海11选5',id:'21',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/ln115.png',title:'辽宁11选5',id:'22',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/hb115.png',title:'湖北11选5',id:'23',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/js115.png',title:'江苏11选5',id:'24',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/ah115.png',title:'安徽11选5',id:'25',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/gd115.png',title:'广东11选5',id:'17',gameType:'IGPJLOTTERY'}
                ],
                LowColor:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/fc3d_90.png',title:'极速3D',id:'55',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/fc3d.png',title:'福彩3D',id:'55',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/tc3d.png',title:'排列3D',id:'36',gameType:'IGPJLOTTERY'}
                ],
                Pk10:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jssc.png',title:'极速赛车',id:'36',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/jssc60.png',title:'一分赛车',id:'49',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/bjc.png',title:'北京赛车',id:'2',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/xyft.png',title:'幸运飞艇',id:'16',gameType:'IGPJLOTTERY'}
                ],
                PcEgg:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/bjkl8pc_90.png',title:'极速蛋蛋',id:'56',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/twbgkl8pc.png',title:'加拿大蛋蛋',id:'41',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/slfkkl8pc.png',title:'斯洛伐克蛋蛋',id:'44',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/metkl8pc.png',title:'马耳他',id:'45',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/twbgkl8pc.png',title:'台湾',id:'46',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/bjkl8pc.png',title:'北京蛋蛋',id:'39',gameType:'IGPJLOTTERY'}
                ],
                ThirdDivision:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/klc_90.png',title:'极速快乐十分',id:'51',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/tjkc.png',title:'天津快乐十分',id:'9',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/hnkc.png',title:'湖南快乐十分',id:'10',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/gxkc.png',title:'广西快乐十分',id:'0',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/ynkc.png',title:'云南快乐十分',id:'38',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/xyc.png',title:'幸运农场',id:'4',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/klc.png',title:'广东快乐十分',id:'14',gameType:'IGPJLOTTERY'}
                ],
                liuhe:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/LowColor/lhc.png',title:'六合彩',id:'',gameType:'IGPJLOTTO'}
                ],
                Fata:{
                    gameType:'',
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
.LowColor{
    background: #f2f2f2;
    padding-bottom: 50px;
    width: 100%;
    .title{
        line-height: 40px;
        height: 40px;
        font-size: 18px;
        text-align: left;
        margin-bottom: 0;
        padding-left: 20px;
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
