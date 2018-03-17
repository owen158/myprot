<template>
    <div id="system" class='system fixed'>
        <div class="systemBox">
            <h2 class="title">
                系统提示
            </h2>
            <div class="content">
                {{systemtext}}
            </div>
            <div @click="submit" class="Submit systemaBtn btn">
                确定
            </div>
        </div>
    </div>
</template>

<script>
    var vm ;
    export default {
        data () {
            return {}
        },
        computed: {
            systemtext:function () {////提示输入内容
                return this.$store.state.systemtext;
            }
        },
        mounted: function () {
        },
        methods: {
            submit:function () {
                vm = this;
                vm.$store.dispatch("inceation",'2');
            }
        },
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
#system{
   background: rgba(0,0,0,0.8);
    .systemBox{
        width: 80%;
        margin: 50% auto;
        height: 4rem;
        background: #fff;
        border-radius: 3px;
        .title{
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.3rem;
            font-weight: 900;
            color:#2f2f2f;
            border-bottom: 1px solid #e5e5e5;
        }
        .content{
            min-height: 1.8rem;
            line-height: 0.4rem;
            font-size: 0.3rem;
            padding: 0.5rem 0.2rem 0 0.2rem;
            color:#2f2f2f;
        }
        .systemaBtn{
            color:#fff;
            font-size: 0.3rem;
        }
        /*.submit{*/
            /*width: 80%;*/
        /*}*/
    }
}
</style>