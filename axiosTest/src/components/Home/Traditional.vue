<template>
    <div class='Traditional'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="TitleNav">
            <router-link class="col-6 main"  to='/AllColor'>
                IG 彩票 （新）
            </router-link>
            <router-link class="col-6 main"  to='/LowColor'>
                IG 彩票
            </router-link>
        </div>
        <transition :name="transitionName" >
            <router-view class="child_view row"></router-view>
        </transition>
        <!--<router-view></router-view>-->
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
                    title:'传统彩',
                    text:'LOTTERY'
                },
                transitionName: 'slide-left'
            }
        },
        computed: {},
        mounted: function () {
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
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
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.child_view {
    position: absolute;
    padding-bottom: 1.8rem;
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
.Traditional{
    padding-top: 0.8rem;
    font-size: 0;
    width: 100%;
    .TitleNav{
        height: 0.8rem;
        .main{
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.3rem;
            color:#3f3f44;
            background: @border-c1;
        }
        a.router-link-active{
            color:@text-c2;
            background: @bg-c1;
            font-family:Georgia, serif;
        }
    }
}
</style>