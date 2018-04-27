<template>
    <div class='LiveVideo'>
        <el-row class="G_game" v-for="v in Loattery">
            <div class="grid-content G_img bg-purple" :style="{background:'url('+v.img+')',backgroundSize:'cover'}"></div>
            <el-col :span="24">
                <div class="grid-content bg-purple-light G_title">{{v.title}}</div>
                <div class="grid-content bg-purple-light G_text">{{v.text}}</div>
                <div class="grid-content bg-purple-light G_btn">
                    <span  @click="EnterGame(v.gameType,v.id,v.mobile)">{{v.sub}}</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    var vm;
    export default {
        data () {
            return {
                Loattery:[
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/LiveVideo/ag.jpg',
                        title:'AGIN国际厅',
                        sub:'进入游戏',
                        gameType:"AGIN",
                        text:'',
                        id:"",
                        mobile:"mobile"
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/LiveVideo/bbin.jpg',
                        title:'BBIN视讯',
                        sub:'进入游戏',
                        gameType:"BBIN",
                        text:'老牌博彩平台，占有率最高',
                        id:"1",
                        mobile:""
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/LiveVideo/og.jpg',
                        title:'OG视讯',
                        sub:'进入游戏',
                        text:'减少等待 投注快',
                        gameType:"OG",
                        id:"",
                        mobile:""
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/LiveVideo/sun.jpg',
                        title:'申博视讯',
                        sub:'进入游戏',
                        gameType:"SB",
                        text:'',
                        id:"3",
                        mobile:""
                    },

                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/LiveVideo/ds.jpg',
                        title:'DS太阳城',
                        sub:'进入游戏',
                        text:'专业游戏研发',
                        gameType:"DS",
                        id:"",
                        mobile:""
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/LiveVideo/cg.jpg',
                        title:'Cagayan88',
                        sub:'进入游戏',
                        text:"美女主播 热线传情",
                        gameType:"CG",
                        id:"",
                        mobile:""
                    },
                ],
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
            }
        },
        mounted() {
        },
        methods:{
            EnterGame:function (type,id,mobile) {
                vm = this;
                vm.Fata.gameType = type;
                vm.Fata.gameID = id;
                vm.Fata.model = mobile;
                vm.$BugGameLink(vm,function () {
                    vm.$store.dispatch("incrgamepop",{id:3,data:vm.Fata});
                    vm.$router.push({path:'/gamepublic'});
                })
            }
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.LiveVideo{
}
</style>
