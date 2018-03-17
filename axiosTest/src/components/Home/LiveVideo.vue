<template>
    <div class='LiveVideo'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="GameBox">
            <ul class="ListGame row">
                <li class="item col-6" v-for="v in List">
                    <div @click="submit($event)" :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" class="main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                text:{
                    title:'真人视讯',
                    text:'CASINO'
                },
                obj:{
                    gameType:'',
                    gameID:'',
                    model:''
                },
                RouT:'/',
                List:[
                    {img:'http://192.168.0.140/newMobel/cg.png',title:'Cagayan88',sub:'开始游戏',type:"CG",id:"",model:""},
                    {img:'http://192.168.0.140/newMobel/ds.png',title:'DS太阳城',sub:'开始游戏',type:"DS",id:"",model:""},
                    {img:'http://192.168.0.140/newMobel/ag.png',title:'AGIN国际厅',sub:'开始游戏',type:"AGIN",id:"",model:"mobile"},
                    {img:'http://192.168.0.140/newMobel/sb.png',title:'申博视讯',sub:'开始游戏',type:"SB",id:"3",model:""},
                    {img:'http://192.168.0.140/newMobel/bg.png',title:'BG视讯',sub:'开始游戏',type:"BG",id:"1",model:"MB"},
                    {img:'http://192.168.0.140/newMobel/og.png',title:'OG视讯',sub:'开始游戏',type:"OG",id:"3",model:""},
                ]
            }
        },
        computed: {
        },
        mounted: function () {
        },
        methods: {
            submit:function (event) {
                let el,vm;
                vm=this;
                el = event.currentTarget;
                vm.obj.gameType = el.getAttribute('data-type');
                vm.obj.gameID = el.getAttribute('data-id');
                vm.obj.model =  el.getAttribute('data-mobile');
                vm.$store.dispatch("inceonloadding",true);
                vm.$store.dispatch('inceuser',{id:'5',title:el.getAttribute('data-title')});
                vm.$palyGame(vm,vm.obj,'User/forwardGame')
            }
        },
        created(){
        },
        components: {
            Top,
            Ruten
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.LiveVideo{
    padding-top: 0.9rem;
    min-height: 100%;
    background: @bg-c1;
    padding-bottom: 0.5rem;
}
.GameBox{
    padding: 0 0.1rem;
    .ListGame{
        width: 100%;
        .item{
            margin: 0.1rem 0;
            height: 3rem;
            .main{
                width:3.5rem;
                margin:0 auto;
                height: 3rem;
                background: #000;
                .border(2px);
            }
        }
    }
}

</style>