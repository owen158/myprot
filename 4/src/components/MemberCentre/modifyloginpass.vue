<template>
    <div class='modifyloginpass'>
        <Top :text="Topobj"></Top>
        <el-form label-position="right" label-width="80px" :model="mflgpas">
            <el-form-item label="原密码">
                <el-input type="password" :minlength="6" :maxlength="12" v-model="mflgpas.password"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="新密码">
                <el-input type="password" :minlength="6" :maxlength="12" v-model="mflgpas.npassword" placeholder="密码必须6～12位英文或数字" ></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="确认密码">
                <el-input type="password" :minlength="6" :maxlength="12" v-model="mflgpas.renpassword" placeholder="请再次填写新密码"></el-input>
            </el-form-item>
        </el-form>
        <p style="text-align: center" class="A-text">密码须为<span class="Orgrise">6～12位英文或数字</span>且符合a~z字元或0~9</p>
        <el-button type="primary" class="G-submit"  @click="submit()">立即设置</el-button>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'修改登录密码',
                    withdraw:'/'
                },
                mflgpas:{
                    password:'',
                    npassword:'',
                    renpassword:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
        },
        methods:{
          submit:function () {
              vm=this;
              vm.$message.closeAll();
              vm.$BugNewmodifylogin(vm,vm.mflgpas)
          }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.modifyloginpass{
    width:100%;
    font-size: 0;
    .el-form{
        margin-top: 5px;
        background: #fff;
        padding: 5px 15px;
    }
    input{
        outline: none;
        border:none;
    }
    .el-form-item__label{
        font-weight: 900;
    }
    .el-form-item{
        height: 56px;
        padding-top: 7px;
        margin-bottom: 0;
    }
    .G-submit{
        font-size: 16px;
    span{
        font-weight: 900
    }

    }
    .A-text{
        font-size: 15px;
        text-align: left;
        line-height: 46px;
        /*padding-left: 0.25rem;*/
        color:#666;
    }
}

</style>
