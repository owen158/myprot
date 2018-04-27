<template>
    <div class='leavemsg '>
        <Top :text="Topobj"></Top>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <!--<el-form-item label="活动名称" prop="name">-->
                <!--<el-input v-model="ruleForm.name"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="活动时间" required>-->
                <!--<el-col :span="11">-->
                    <!--<el-form-item prop="date1">-->
                        <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col class="line" :span="2">-</el-col>-->
                <!--<el-col :span="11">-->
                    <!--<el-form-item prop="date2">-->
                        <!--<el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="即时配送" prop="delivery">-->
                <!--<el-switch v-model="ruleForm.delivery"></el-switch>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="活动性质" prop="type">-->
                <!--<el-checkbox-group v-model="ruleForm.type">-->
                    <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
                    <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
                <!--</el-checkbox-group>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="特殊资源" prop="resource">-->
                <!--<el-radio-group v-model="ruleForm.resource">-->
                    <!--<el-radio label="线上品牌商赞助"></el-radio>-->
                    <!--<el-radio label="线下场地免费"></el-radio>-->
                <!--</el-radio-group>-->
            <!--</el-form-item>-->
            <el-form-item label="留言内容" prop="desc">
                <el-input :autosize="{ minRows: 4, maxRows: 4}" type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="留言类型" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="申请优惠" value="shanghai"></el-option>
                    <el-option label="意见反馈" value="beijin"></el-option>
                    <el-option label="财务问题" value="beiji"></el-option>
                    <el-option label="其他问题" value="beij"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="resetForm('ruleForm')">重置</el-button>

                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'我要留言',
                    withdraw:'/LiveVideo',
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择留言类型', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入您的留言', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {},
        mounted: function () {},
        methods: {
            submitForm(formName) {
                let vm = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$alert('发送成功！', '系统提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                vm.ruleForm.name = '';
                                vm.$message({
                                    type: 'info',
                                    message:"留言发送成功"
                                });
                                vm.$router.go(-1);
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
/*@import "../public/Form.less";*/
.leavemsg{
    width: 100%;
    .el-form{
        margin-top: 5px;
        /*background: #fff;*/
    }
    .el-form-item__content{
        text-align: left;
    }
}
</style>