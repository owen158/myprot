<template>
    <div class='BuyColorWrapper'>
        <Top :text="Topobj"></Top>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="IG彩票 新" name="first">
                <LowColor></LowColor>
            </el-tab-pane>
            <el-tab-pane label="IG彩票" name="second">
                <AllColor></AllColor>
            </el-tab-pane>
            <el-tab-pane label="VR彩票" name="third">
                <Choose></Choose>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import LowColor from "./LowColor.vue"
    import AllColor from "./AllColor.vue"
    import Choose from "./Choose.vue"
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'彩票游戏',
                    withdraw:'/',
                },
                activeName:"first",
            }
        },
        mounted() {
            this.$nextTick(function () {
                if(document.location.pathname.slice(-2) === 'IG'){
                    this.activeName ='first'
                }else if(document.location.pathname.slice(-2) != 'IG'){
                    this.activeName ='third'
                }
            })
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods:{
            handleClick(tab, event) {
//                console.log(tab, event);
            }
        },
        created() {
        },
        components: {
            Top,
            AllColor,
            LowColor,
            Choose
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.BuyColorWrapper{
    width: 100%;
    font-size: 0;
    .el-tabs__nav{
        width: 100%;
    }
    .el-tabs__item{
        width: 33%;
        padding: 0;
    }
}
</style>