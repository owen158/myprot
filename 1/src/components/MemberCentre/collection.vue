<template>
    <div class='collection' ref="BackG">
        <TopCounter :title="'优惠活动'" :Boo="true" :src="'/MemberCentre'"></TopCounter>
        <div class="wrapper-cen">
            <div class="row Mobileouhui" v-for="v in annouationNew.offer">
                <h2 @click="fun($event)">
                    <img :src="v.img1" :title="v.mobile" alt="">
                </h2>
                <p>
                    <img :src="v.img2" :title="v.mobile" alt="">
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    var vm,el;
    export default {
        data () {
            return {
            }
        },
        computed: {
            annouationNew() {
                return this.$store.state.annouationNew;//获取游戏
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm=this;
            this.setBackground();
        },
        methods:{
            fun:function (event) {
                el = event.currentTarget;
                $(el).next().toggle()
            },
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.collection{
    padding-top: 0.8rem;
    padding-bottom: 0.25rem;
    width: 100%;
    .Bg-BackGround;
    .wrapper-cen{
        margin-top: 0.15rem;
        border-bottom: 1rem;
    }
    .Mobileouhui{
        width:95%;
        margin: 0 auto;
        h2{
            width:100%;
            margin-bottom: 0.1rem;
            img{
                width:100%;
                height: 100%;
                border-radius: 3px;
            }
        }
        p{
            min-height: 1rem;
            margin-top: 0.05rem;
            display: none;
            width:100%;
            img{
                width:100%;
            }
        }
    }
}
</style>