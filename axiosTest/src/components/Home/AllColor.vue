<template>
    <div class='AllColor'>
        <div class="lottery-wrapper">
            <div class="solid"></div>
            <p class="title">时时彩</p>
            <div class="row" >
                <div v-for="v in AlwaysColor" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p class="title">11选5</p>
            <div class="row" >
                <div v-for="v in Choose" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <P  class="title">快乐十分</P>
            <div class="row AllBox" >
                <div v-for="v in ThirdDivision" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p  class="title">快乐8</p>
            <div class="row AllBox" >
                <div v-for="v in Popular" class="col-3 BoxBlock"   @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model">
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p   class="title">快三</p>
            <div class="row AllBox" >
                <div v-for="v in Fast3" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p  class="title">PK10</p>
            <div class="row AllBox" >
                <div v-for="v in Pk10" class="col-3 BoxBlock" @click="submit($event)" :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p  class="title">3D</p>
            <div class="row AllBox" >
                <div v-for="v in LowColor" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p class="title">PC蛋蛋</p>
            <div class="row AllBox" >
                <div v-for="v in PcEgg" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p  class="title">六合彩</p>
            <div class="row AllBox" >
                <div v-for="v in liuhe" class="col-3 BoxBlock"  @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
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
    export default {
        data () {
            return {
                Popular:[
                    {img:'http://192.168.0.140/model998/static/images/Home/bjkl8_90.png',title:'极速快乐8',id:'33',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/bjkl8_90.png',title:'加拿大快乐8',id:'29',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/slfkkl8.png',title:'斯洛伐克',id:'31',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/metkl8.png',title:'马耳他',id:'32',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/twbgkl8.png',title:'台湾宾果',id:'33',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/bjkl8.png',title:'北京快乐8',id:'29',type:'IGPJLOTTERY',model:'MB'}
                ],
                AlwaysColor:[
                    {img:'http://192.168.0.140/model998/static/images/Home/jscq.png',title:'极速',id:'1',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/jscq60.png',title:'一分',id:'1',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/ssc.png',title:'重庆',id:'1',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/tjsc.png',title:'天津',id:'1',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/xjsc.png',title:'新疆',id:'6',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/ynsc.png',title:'云南',id:'1',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/shsc.png',title:'上海',id:'18',type:'IGPJLOTTERY',model:'MB'},
                ],
                Fast3:[
                    {img:'http://192.168.0.140/model998/static/images/Home/jsc_90.png',title:'极速快3',id:'3',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/jsc.png',title:'江苏骰宝',id:'3',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/ahk3.png',title:'安微快3',id:'13',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/gxk3.png',title:'广西快3',id:'14',type:'IGPJLOTTERY',model:'MB'}
                ],
                Choose:[
                    {img:'http://192.168.0.140/model998/static/images/Home/bjkl8_90.png',title:'极速',id:'18',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/jx115.png',title:'江西',id:'18',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/sd115.png',title:'山东',id:'19',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/bj115.png',title:'北京',id:'20',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/sh115.png',title:'上海',id:'18',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/ln115.png',title:'辽宁',id:'22',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/hb115.png',title:'湖北',id:'18',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/js115.png',title:'江苏',id:'18',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/ah115.png',title:'安徽',id:'18',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/gd115.png',title:'广东',id:'18',type:'IGPJLOTTERY',model:'MB'},
                ],
                LowColor:[
                    {img:'http://192.168.0.140/model998/static/images/Home/gxk3.png',title:'极速3D',id:'36',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/fc3d.png',title:'福彩3D',id:'36',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/tc3d.png',title:'排列3D',id:'36',type:'IGPJLOTTERY',model:'MB'}
                ],
                Pk10:[
                    {img:'http://192.168.0.140/model998/static/images/Home/jssc.png',title:'极速赛车',id:'37',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/jssc60.png',title:'一分赛车',id:'37',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/bjc.png',title:'北京赛车',id:'2',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/xyft.png',title:'幸运飞艇',id:'16',type:'IGPJLOTTERY',model:'MB'}
                ],
                PcEgg:[
                    {img:'http://192.168.0.140/model998/static/images/Home/bjkl8pc_90.png',title:'极速',id:'42',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/twbgkl8pc.png',title:'加拿大',id:'42',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/slfkkl8pc.png',title:'斯洛伐克',id:'42',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/metkl8pc.png',title:'马耳他',id:'42',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/twbgkl8pc.png',title:'台湾',id:'42',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/twbgkl8pc.png',title:'北京',id:'42',type:'IGPJLOTTERY',model:'MB'}
                ],
                ThirdDivision:[
                    {img:'http://192.168.0.140/model998/static/images/Home/klc_90.png',title:'极速',id:'4',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/tjkc.png',title:'天津',id:'4',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/hnkc.png',title:'湖南',id:'12',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/gxkc.png',title:'广西',id:'11',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/ynkc.png',title:'云南',id:'4',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/xyc.png',title:'幸运农场',id:'4',type:'IGPJLOTTERY',model:'MB'},
                    {img:'http://192.168.0.140/model998/static/images/Home/klc.png',title:'广东',id:'4',type:'IGPJLOTTERY',model:'MB'}
                ],
                liuhe:[
                    {img:'http://192.168.0.140/model998/static/images/Home/card.png',title:'六合彩',id:'',type:'IGPJLOTTO',model:'MB'},
                ],
                obj:{
                    gameType:'',
                    gameID:'',
                    model:''
                }
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
                vm.$store.dispatch('inceuser',{id:'5',title:el.getAttribute('data-title')});
                vm.$store.dispatch("inceonloadding",true);
                vm.$palyGame(vm,vm.obj,'User/forwardGame')
            }
        },
        created(){
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../../../static/css/style.less";
    .AllColor{
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