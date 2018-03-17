<template>
    <div class='AllColor'>
        <div class="lottery-wrapper" >
            <div class="solid"></div>
            <p   class="title">时时彩</p>
            <div class="row AllBox" >
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
            <p  class="title">11选5</p>
            <div class="row AllBox" >
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
            <P   class="title">快乐10分</P>
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
            <p class="title">快乐8</p>
            <div class="row AllBox" >
                <div v-for="v in Popular" class="col-3 BoxBlock"   @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p  class="title">快三</p>
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
                <div v-for="v in Pk10" class="col-3 BoxBlock" @click="submit($event)"  :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model" >
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p class="title"></p>
            <div class="row AllBox" >
                <div v-for="v in LowColor" class="col-3 BoxBlock"  @click="submit($event)" :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model">
                    <div class="box">
                        <p class="sup">
                            <i :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'100% 100%'}"></i>
                        </p>
                        <p class="sub">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <div class="solid"></div>
            <p  class="title">PC</p>
            <div class="row AllBox" >
                <div v-for="v in PcEgg" class="col-3 BoxBlock"  @click="submit($event)" :data-type="v.type" :data-title="v.title" :data-id="v.id" :data-mobile="v.model">
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
                <div v-for="v in liuhe" class="col-3 BoxBlock"  @click="submit($event)"   >
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
    var el,vm;
    export default {
        data () {
            return {
                Popular:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jskl8.png',title:'极速',id:'33',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-janada.png',title:'加拿',id:'29',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-cq_c9111.png',title:'斯洛伐克',id:'31',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-cq_c921.png',title:'马耳他',id:'32',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-twbg.png',title:'台湾宾果',id:'33',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-bjk8.png',title:'北京',id:'29',model:'MB',type:'IGLOTTERY'}
                ],
                AlwaysColor:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-js.png',title:'极速',id:'1',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-yfssc.png',title:'一分',id:'1',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-cp.png',title:'重庆',id:'1',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-tj.png',title:'天津',id:'1',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-xj.png',title:'新疆',id:'6',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-ynssc.png',title:'云南',id:'1',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-shs.png',title:'上海',id:'18',model:'MB',type:'IGLOTTERY'}
                ],
                Fast3:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-sd-.png',title:'极速',id:'3',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jssb.png',title:'江苏骰宝',id:'3',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-sd.png',title:'安微',id:'13',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-gxk3.png',title:'广西',id:'14',model:'MB',type:'IGLOTTERY'}
                ],
                Choose:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jisu11x5.png',title:'极速',id:'18',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jx.png',title:'江西',id:'18',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-sd.png',title:'山东',id:'19',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-bj.png',title:'北京',id:'20',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-sh.png',title:'上海',id:'18',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-ln.png',title:'辽宁',id:'22',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-hb.png',title:'湖北',id:'18',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jss.png',title:'江苏',id:'18',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-ahh.png',title:'安徽',id:'18',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-gd.png',title:'广东',id:'18',model:'MB',type:'IGLOTTERY'}

                ],
                LowColor:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-js.png',title:'极速',id:'36',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-sd-.png',title:'福彩',id:'36',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-pl3.png',title:'排列',id:'36',model:'MB',type:'IGLOTTERY'}
                ],
                Pk10:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jssc.png',title:'极速赛车',id:'37',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-yfsc.png',title:'一分赛车',id:'37',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-bjpk.png',title:'北京赛车',id:'2',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-xyft.png',title:'幸运飞艇',id:'16',model:'MB',type:'IGLOTTERY'}
                ],
                PcEgg:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jspcdd.png',title:'极速',id:'42',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jndpcdd.png',title:'加拿大',id:'42',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-slfkpcdd.png',title:'斯洛伐克',id:'42',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-metpcdd.png',title:'马其他',id:'42',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-twbgpcdd.png',title:'台湾',id:'42',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-bjpcdd.png',title:'北京',id:'42',model:'MB',type:'IGLOTTERY'}
                ],
                ThirdDivision:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-jskl10.png',title:'极速',id:'4',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-tjkl10.png',title:'天津',id:'4',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-hnkl10.png',title:'湖南',id:'12',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-gxkl10.png',title:'广西',id:'11',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-ynkl10.png',title:'云南',id:'4',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/585cf6481001b2.png',title:'幸运农场',id:'4',model:'MB',type:'IGLOTTERY'},
                    {img:'http://192.168.0.140/model998/static/images/Home/j-gdkl10.png',title:'广东',id:'4',model:'MB',type:'IGLOTTERY'}
                ],
                liuhe:[
                    {img:'http://192.168.0.140/model998/static/images/Home/j-lhc.png',title:'六合彩',id:'',model:'MB',type:'IGLOTTO'}
                ],
                obj:{
                    type:'',
                    gameID:'',
                    model:''
                }
            }
        },
        mounted:function(){
        },
        computed: {
            jrg:function () {////url
                return this.$store.state.jrg;
            }
        },
        methods:{
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
        created() {
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
