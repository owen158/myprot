<template>
    <div class='Sportsevents'>
        <el-row class="G_game" v-for="v in Loattery">
            <el-col :span="12">
                <div class="grid-content G_img bg-purple" :style="{background:'url('+v.img+')',backgroundSize:'cover'}">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light G_title">{{v.title}}</div>
                <div class="grid-content bg-purple-light G_text">顶级赛事 为您呈现</div>
                <div class="grid-content bg-purple-light G_btn">
                    <span  @click="EnterGame(v.gameType,v.id,v.mobile)">{{v.sub}}</span>
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
                text:'体育赛事',
                Loattery:[
                    {img:'http://mobile.beike188.com/mobileYHH/image/Home/Sportsevents/hg.png',title:'皇冠体育',sub:'开始游戏',gameType:"HG",id:"",mobile:"MB"}
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
            EnterGame:function (type,id,moblie) {
                vm = this;
                vm.Fata.gameType = type;
                vm.Fata.gameID = id;
                vm.Fata.model = moblie;
                vm.$BugGameLink(vm,function () {
                    vm.$store.dispatch("incrgamepop",{id:3,data:vm.Fata});
                    vm.$router.push({path:'/gamepublic'});
                });
            }
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
</style>
