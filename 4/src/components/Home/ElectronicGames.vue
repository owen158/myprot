<template>
    <div class='ElectronicGames'>
        <el-row class="G_game" v-for="v in Loattery">
            <div class="grid-content G_img bg-purple" :style="{background:'url('+v.img+')',backgroundSize:'cover'}"></div>
            <el-col :span="24">
                <div class="grid-content bg-purple-light G_title">{{v.title}}</div>
                <div class="grid-content bg-purple-light G_text">{{v.text}}</div>
                <div class="grid-content bg-purple-light G_btn">
                    <span @click="EnterGame(v.gameType,v.id,v.mobile)" >{{v.sub}}</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    var el,vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                activeName: 'second',
                Loattery:[
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/ElectronicGames/pt.jpg',
                        title:'PT电子',
                        sub:'开始游戏',
                        gameType:"PT",
                        id:'hb',
                        mobile:'mobile',
                        text:''
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/ElectronicGames/mg.jpg',
                        title:'MG电子',
                        sub:'开始游戏',
                        gameType:"GAMEMG",
                        id:'',
                        mobile:'',
                        text:''
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/ElectronicGames/haba.jpg',
                        title:'HABA电子',
                        sub:'开始游戏',
                        gameType:"GAMEHABA",
                        id:'',
                        mobile:'',
                        text:''
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/ElectronicGames/bbin.jpg',
                        title:'BBIN电子',
                        sub:'开始游戏',
                        gameType:"BBIN",
                        id:'2',
                        mobile:'',
                        text:''
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/ElectronicGames/sun.jpg',
                        title:'TGP电子',
                        sub:'开始游戏',
                        gameType:"SB",
                        id:'4',
                        mobile:'',
                        text:''
                    },
                    {
                        img:'http://mobile.beike188.com/mobileYHH/image/Home/ElectronicGames/ag.jpg',
                        title:'YOPLAY电子',
                        sub:'开始游戏',
                        gameType:"YOPLAY",
                        id:'YP800',
                        mobile:'mobile',
                        text:''
                    }
                ],
                Topobj:{
                    text:"电子游戏",
                    withdraw:'/',
                },
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:''
                },
                input21:''
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
            EnterGame:function (type,id,moblie) {
                vm = this;
                vm.Fata.gameType =type;
                vm.Fata.gameID = id;
                vm.Fata.model = moblie;
                if(vm.Fata.gameType === 'GAMEMG' || vm.Fata.gameType === 'GAMEHABA'){
                    return vm.$router.push({path:'/'+vm.Fata.gameType});
                }else{
                    vm.$BugGameLink(vm,function () {
                        vm.$store.dispatch("incrgamepop",{id:3,data:vm.Fata});
                        vm.$router.push({path:'/gamepublic'});
                    })
                }
            }
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.ElectronicGames{
    font-size: 0;
}
</style>
