<template>
    <div class='G_discount'>
        <Top :text="Topobj"></Top>
        <el-container>
            <el-main>
                <el-row v-for="(v,key) in annouationNew.offer">
                    <el-col :span="24">
                        <div @click="ImgOffer(key)" style="margin-bottom: 5px;">
                            <img style="width: 100%" :src="v.img1" alt="">
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        <!--<el-collapse v-model="activeName" accordion>-->
            <!--<el-collapse-item v-for="v in annouationNew.offer" style="margin-bottom: 15px;">-->
                <!--<template slot="title">-->
                    <!--<img style="width:100%;height: 3.7rem" :src="v.img1" alt="">-->
                <!--</template>-->
                <!--<div style="margin-top: 2px;">-->
                    <!--<img style="width: 100%" :src="v.img2" alt="">-->
                <!--</div>-->
            <!--</el-collapse-item>-->
        <!--</el-collapse>-->
        <!--<el-row class="G_Nav">-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple G_tad">-->
                    <!--&lt;!&ndash;<a href=""></a>&ndash;&gt;-->
                    <!--<router-link  class="G_Tad_text" to="/DiscountOner">-->
                        <!--全部优惠-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</el-col>url(http://mobile.beike188.com/mobileYHH/image/Home/1.jpg)-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple-light G_tad">-->
                    <!--<router-link  class="G_Tad_text" to="/DiscountTwo">-->
                        <!--新开户优惠-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple G_tad">-->
                    <!--<router-link  class="G_Tad_text" to="/DiscountThree">-->
                        <!--长期优惠-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple-light G_tad">-->
                    <!--<router-link  class="G_Tad_text" to="/DiscountFour">-->
                        <!--特殊优惠-->
                    <!--</router-link>-->
                <!--</div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<transition :name="transitionName">-->
            <!--<router-view  class="discount_view "></router-view>-->
        <!--</transition>-->
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'最新优惠',
                    withdraw:'/'
                },

                activeName:'1',
                transitionName: 'slide-left'
            };
        },
        computed: {
            annouationNew() {
                return this.$store.state.annouationNew;//获取游戏
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted: function () {
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            ImgOffer(sum){
                let vm = this;
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                vm.$store.dispatch("inceuserNew",{id:11,src:""});
                setTimeout(() => {
                    loading.close();
                    vm.$store.dispatch("inceuserNew",{id:11,src:this.annouationNew.offer[Number(sum)].img2});
                    vm.$router.push({path:'/newuser'});
                }, 1000);


            }
        },
        created(){
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .discount_view {
        position: absolute;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
.G_discount{
    width:100%;
    .el-collapse-item__header{
        height: 3.7rem;
    }
    .el-collapse-item__arrow{
        display: none;
    }
    .el-collapse{
        padding: 10px 15px;
    }
}
</style>