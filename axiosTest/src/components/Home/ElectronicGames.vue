<template>
    <div class='ElectronicGames'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="GameBox">
            <ul class="ListGame row">
                <li class="item col-6" v-for="v in List">
                    <div class="main" :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></div>
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
                RouT:"/",
                text:{
                    title:'电子游艺',
                    text:'SLOTS'
                },
                List:[
                    {img:'http://192.168.0.140/newMobel/a-pt.png'},
                    {img:'http://192.168.0.140/newMobel/a-mg.png'},
                    {img:'http://192.168.0.140/newMobel/a-haba.png'},
                    {img:'http://192.168.0.140/newMobel/a-sb.png'},
                    {img:'http://192.168.0.140/newMobel/a-bbin.png'}
                ]
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
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
.ElectronicGames{
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