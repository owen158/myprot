<template>
    <div class="Bnnerwrapper">
        <div class="Bnner" @click="func()">
            <swiper :options="swiperOption" v-if="annouationNew.Rotation != ''" ref="mySwiperA">
                <!-- 幻灯内容 -->
                <div class="swiper-slide"   v-for="v in annouationNew.Rotation">
                    <img width="100%" :src="v.img1" alt="" :title="v.title">
                </div>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <!--<div class="swiper-scrollbar"  slot="scrollbar"></div>-->
            </swiper>
        </div>
    </div>
</template>
<script>
    var vm;
    export default{
        data(){
            return {
                swiperOption: {
                    // 所有配置均为可选（同Swiper配置）
                    notNextTick: true,
                    autoplay: 2000,
                    autoplayDisableOnInteraction : false,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    spaceBetween: 30,
                    updateOnImagesReady : true,//当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化。使用此选项需要先开启preloadImages: true
                    preloadImages: true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
//                    scrollbar:'.swiper-scrollbar',
                    preventLinksPropagation : false,
                    mousewheelControl : true,
                    effect : 'fade',
                    fade: {
                        crossFade: true
                    },
                    observeParents:true,
                    loop: true,
                    parallax : true,
                    onTransitionStart(swiper){
                    }
                },
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            }
        },
        mounted() {
        },
        methods:{
            func:function () {
                let vm = this;
//                vm.$ajax.call(this , {},vm.userNew.jrg+'checklogin.do', function (Obj) {
//                    if(Obj === 0){
//                    }else if(Obj === 1){
//                    }else if(Obj.msg == "faild"){
//                        vm.$store.dispatch("inceuserNew",{id:0,Login:false});
//                        return  vm.$router.push({path:'/login'});
//                    }else if(Obj.msg == "islogin"){
//                        vm.$store.dispatch("inceuserNew",{id:0,Login:false});
//                        return  vm.$router.push({path:'/login'});
//                    }else if(Obj.msg == "success"){
//                        vm.$store.dispatch("inceuserNew",{id:0,Login:true});
//                        return vm.$router.push({path:'/collection'});
//                    }
//                });
            }
        }
    }
</script>
<style lang="less">
    .Bnner{
        width:100%;
        height: 3.2rem;
        overflow: hidden;
        .swiper-container{
            height: 3.2rem;
            .swiper-wrapper{
                height: 3.2rem;
                .swiper-slide{
                    height: 3.2rem;
                    img{
                        height: 100%;
                    }
                }
            }
        }
    }
</style>