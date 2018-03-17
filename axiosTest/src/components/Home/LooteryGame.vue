<template>
    <div class='LooteryGame row'>
    </div>
</template>
<script>
    var vm;
    export default {
        data () {
            return {
                List:[
                    {img:'pk',title:'PK10'},
                    {img:'ssc',title:'时时彩'},
                    {img:'kl10',title:'快乐十分'},
                    {img:'kl15',title:'十一选五'},
                    {img:'k8',title:'快8'},
                    {img:'k3',title:'快3'},
                    {img:'d3',title:'3D'},
                    {img:'pc',title:'PC蛋蛋'},
                    {img:'lch',title:'六合彩'}
                ],
                obj:{}
            }
        },
        computed: {
            login:function () {//系统提示
                return this.$store.state.login;
            },
            jrg:function () {////url
                return this.$store.state.jrg;
            }
        },
        mounted: function () {
        },
        methods: {
            submit:function () {
                vm = this;
                this.$num5(1)
//                vm.$ajax.call(vm,{},'checklogin.do',function (data) {
//                    if(data.msg === "faild"){
//                        vm.$store.dispatch("incelogin",false);
//                        return vm.$router.push({path:'/login'});
//                    }else if(data.msg === "islogin"){
//                        vm.$store.dispatch("incelogin",false);
//                        return vm.$router.push({path:'/login'});
//                    }else{
//                        vm.$store.dispatch("incelogin",true);
//                        vm.$store.dispatch('inceuser',{id:'2',userName:data.userName,token:data.userkey});
//                        vm.$palyGame(vm,obj,'checklogin.do')
//                    }
//                })
            }
        },
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>

</style>