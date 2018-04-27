<template>
    <div class='modify G_Form'>
        <Top :text="Topobj"></Top>
        <el-form style="margin-top: 5px;" label-position="right" label-width="70px" :model="obj" >
            <div class="line-w"></div>
            <el-form-item label="姓名">
                <el-input   v-model="obj.userName" type="text" placeholder="真实姓名" :minlength=5 :maxlength=10>
                </el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="手机号">
                <el-input v-model="obj.mobile"  :minlength=10 :maxlength=13 type="text" placeholder="手机号">
                </el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="邮箱">
                <el-input v-model="obj.email" @focus="ImgCode" type="text" placeholder="邮箱">
                </el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="备注">
                <el-input v-model="obj.rmk"   type="text" placeholder="添加备注（可不填写）">
                </el-input>
            </el-form-item>
            <div class="line-w"></div>
        </el-form>
        <el-button type="primary"  @click="submit()" class="G-submit">提交</el-button>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                obj:{
                    userName:'',
                    mobile:'',
                    email:'',
                    rmk:''
                },
                Topobj:{
                    text:'修改账户信息',
                    withdraw:'/'
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },

        },
        mounted: function () {
        },
        methods: {
            submit:function () {
                let vm = this;
                vm.$BugAtion(vm,vm.obj)
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
@import "../public/Form.less";
.modify{
    width: 100%;
}
</style>