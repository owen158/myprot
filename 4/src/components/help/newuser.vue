<template>
    <div class='newuser'>
        <Top :text="Topobj"></Top>
        <img style="width: 100%" :src="annouationNew.offerchild" alt="">
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        props: {
            src: {
                type: String
            }
        },
        data () {
            return {
                Topobj:{
                    text:'活动详情',
                    withdraw:'/'
                },
            }
        },
        computed: {
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                window.scrollTo(0, 0);
                if(this.annouationNew.offerchild === ""){
                    this.$router.go(-1);
                }
            })
        },
        methods: {},
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.newuser{
    width: 100%;
}
</style>