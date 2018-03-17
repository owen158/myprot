<template>
    <div class='modifyPass'>
        <Top :text = 'text'></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="TitleNav">
            <router-link class="col-6 main"  to='/userpass'>
                登录密码
            </router-link>
            <router-link class="col-6 main"  to='/bankpass'>
                资金密码
            </router-link>
        </div>
        <div class="solid"></div>
        <transition :name="transitionName" >
            <router-view class="passview row"></router-view>
        </transition>
    </div>
</template>
<script>
    import Ruten from '../Public/Ruten.vue'
    import Top from '../Public/Top.vue'
    export default {
        data () {
            return {
                text:{
                    title:'密码管理',
                    text:'change Password'
                },
                RouT:'/Personal',
                transitionName: 'slide-left'
            }
        },
        computed: {
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        mounted: function () {
        },
        methods: {
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .passview {
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
    .modifyPass{
        min-height: 100%;
        background: @bg-c1;
        padding-top: 1rem;
        .TitleNav{
            height: 0.8rem;
            .main{
                height: 0.8rem;
                line-height: 0.8rem;
                font-size: 0.3rem;
                font-weight: 700;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                color:@text-c2;
                .border(3px);
                background: @bg-c1;
                /*background: @bg-c2;*/
            }
            a.router-link-active{
                color:@text-c3;
                font-family:Georgia, serif;
                text-shadow: @text-c5 0.05rem 0.05rem 0.2rem;
                /*border-bottom: 1px solid @border-c2;*/
                background: @bg-c2;
            }
        }
    }

</style>