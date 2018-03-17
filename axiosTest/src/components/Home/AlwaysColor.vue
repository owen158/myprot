<template>
    <div class='AlwaysColor'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="lottery-wrapper">
            <div class="solid"></div>
            <p  class="title">高频彩</p>
            <div class="row AllBox" >
                <div v-for="v in AlwaysColor" class="col-3 BoxBlock"  @click="EnterGame($event)" :data-Id="v.id" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p class="title">低频彩</p>
            <div class="row AllBox" >
                <div v-for="v in Fast3" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                RouT:'/',
                text:{
                    title:'官方彩',
                    text:'LOTTERY'
                },
                AlwaysColor:[
                    {img:'http://192.168.0.140/model998/static/images/Home/5878a932233e8.png',title:'重庆时时彩',id:'12'},
                    {img:'http://192.168.0.140/model998/static/images/Home/5878a9519fb93.png',title:'新疆时时彩',id:'14'},
                    {img:'http://192.168.0.140/model998/static/images/Home/5878a96421d0b.png',title:'天津时时彩',id:'11'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-17.png',title:'三分时时彩',id:'17'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-51.png',title:'PC蛋蛋',id:'51'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-50.png',title:'三分六合彩',id:'50'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-18.png',title:'分分时时彩',id:'18'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-53.png',title:'分分快三',id:'53'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-10.png',title:'上海时时乐',id:'10'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-24.png',title:'北京PK拾',id:'24'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-22.png',title:'三分PK拾',id:'22'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-26.png',title:'安微快三',id:'26'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-25.png',title:'江苏快三',id:'25'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-27.png',title:'三分快三',id:'27'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-31.png',title:'广东11选5',id:'31'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-30.png',title:'江西11选5',id:'30'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-32.png',title:'上海11选5',id:'32'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-28.png',title:'山东11选5',id:'28'}
                ],
                Fast3:[
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-49.png',title:'香港六合彩',id:'49'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-02.png',title:'排列三',id:'2'},
                    {img:'http://192.168.0.140/model998/static/images/Home/lotto-01.png',title:'福彩3D',id:'1'}
                ],
                Choose:[
                    {img:'http://192.168.0.140/model998/static/images/Home/585cf6ab549d4.png',title:'山东11选5',id:'28'},
                    {img:'http://192.168.0.140/model998/static/images/Home/cq11x5.png',title:'重庆11选5',id:'29'},
                    {img:'http://192.168.0.140/model998/static/images/Home/585cf6c70cca9.png',title:'江西11选5',id:'30'},
                    {img:'http://192.168.0.140/model998/static/images/Home/585cf6da941b2.png',title:'广东11选5',id:'31'},
                    {img:'http://192.168.0.140/model998/static/images/Home/585cf6b89bce2.png',title:'上海11选5',id:'32'}
                ],
                LowColor:[
                    {img:'http://192.168.0.140/model998/static/images/Home/58622205abe95.png',title:'福彩3D',id:'36'},
                    {img:'http://192.168.0.140/model998/static/images/Home/tc3.png',title:'体彩P3',id:'37'}
                ],
                Pk10:[
                    {img:'http://192.168.0.140/model998/static/images/Home/cq_c8.png',title:'北京赛车',id:'24'}
                ],
                PcEgg:[
                    {img:'http://192.168.0.140/model998/static/images/Home/card.png',title:'六合彩',id:'49'}
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
.AlwaysColor{
    min-height: 100%;
    padding-top: 0.8rem;
    padding-bottom: 0.5rem;
    background:@bg-c1;
    font-size: 0;
}
.lottery-wrapper{
    padding:0 0.1rem;
    .title{
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.38rem;
        padding-left: 0.1rem;
        text-align: left;
        color:@text-c3;
        font-family:Georgia, serif;
    }
    .BoxBlock{
        height:2rem;
        margin: 0.1rem 0;
        .box{
            width: 1.6rem;
            margin:0 auto;
            .border(2px);
            .border-box(1px,@text-c3);
            box-shadow: 1px 2px 5px #000;
            height: 1.7rem;
            .sup,sub{
                vertical-align: top;
            }
            .sup{
                padding-top: 0.1rem;
                height: 1.2rem;
                i{
                    display: block;
                    width: 1rem;
                    height: 1rem;
                    margin: 0 auto;
                }
            }
            .sub{
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.25rem;
                color:@text-c3;
            }
        }
    }
}
</style>