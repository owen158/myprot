<template>
    <div class='publicpage' ref="publicpage">
        <transition :name="transitionName">
            <router-view class="publicpage_view"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                transitionName: 'slide-left'
            }
        },
        computed: {
            userNew: function() {
                //个人
                return this.$store.state.userNew;
            },
        },
        mounted: function () {
            if(this.userNew.iphonex === '1'){
                this.$refs.publicpage.style.top = '1.6rem';
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        methods: {},
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.publicpage_view {
    position: absolute;
    transition: all 0.5s cubic-bezier(.55,0,.1,1);
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
.publicpage{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #f2f2f2;
    z-index: 10;
}
</style>