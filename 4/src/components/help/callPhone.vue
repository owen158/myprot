<template>
    <div class='callPhone G_Form'>
        <Top :text="Topobj"></Top>
        <el-form label-position="right" label-width="50px"  :model="ruleForm" ref="ruleForm">
            <el-form-item label="+86">
                <el-input v-model="ruleForm.name" placeholder="请输入电话号码"></el-input>
            </el-form-item>
            <p class="text">
                每个手机号码一天只能回拨三次哦
            </p>
        </el-form>
        <el-button class="G-submit el-button--primary"  @click="submitForm">立即免费回拨</el-button>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'电话回拨',
                    withdraw:'/LiveVideo',
                },
                labelPosition: 'right',
                ruleForm: {
                    name: '',
                    region: '',
                    type: ''
                }
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            submitForm:function () {
                if(!/^1[3|4|5|7|8][0-9]{9}$/.test(this.ruleForm.name)){
                    this.$message({
                        showClose: true,
                        message:"手机号格式有误",
                        // type: 'error'
                    })
                    return
                }
                this.$alert(this.ruleForm.name+'发送成功！我们的客服人员将立即与您联系，请保持电话畅通。', '系统提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.ruleForm.name = '';
//                        this.$message({
//                            type: 'info',
//                            message: `action: ${ action }`
//                        });
                    }
                });
            },
            resetForm:function (formName) {
                console.log(formName)
                this.$refs[formName].resetFields();
            }
        },
        created(){
        },
        components: {
            Top,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "../public/Form.less";
.callPhone{
    width: 100%;
    .el-form{
        padding-top: 5px;
    }
    .text{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: red;
    }
}
</style>