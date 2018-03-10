<template>
    <div class='gameLimit add' ref="BackG">
        <TopCounter :title="'个人信息'" :Boo="true" :src="'/MemberCentre'"></TopCounter>
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="个人资料" name="first">
                <el-row>
                    <el-col ::span="24">
                        <div class="grap">
                            用户名
                            <span class="info">
                                {{userNew.userName}}
                                 <span  class="iconfont">&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="grap">
                            真实姓名 <span class="info">
                                {{userNew.data.realname}}
                                <span @click="activeName2='second'"  v-show="userNew.data.judgment"  class="iconfont icon-iconfontyoujiantou"></span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="grap">
                            邮箱
                            <span class="info">
                                {{userNew.data.email}}
                                <span @click="activeName2='second'" v-show="userNew.data.judgment"  class="iconfont icon-iconfontyoujiantou"></span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="grap">
                            手机号
                            <span class="info">
                                {{userNew.data.mobile}}
                                <span @click="activeName2='second'"  v-show="userNew.data.judgment"  class="iconfont icon-iconfontyoujiantou"></span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="grap">
                            钱包余额
                            <span class="info">
                                {{userNew.userMoney}}
                                <span  class="iconfont">&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="grap" style="margin-top: 30px;border-top: 1px solid #e5e5e5;">
                            注册时间
                            <span class="info">
                                {{userNew.data.reg_date}}
                                 <span  class="iconfont">&nbsp;&nbsp;&nbsp;</span>
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <div class="grap">
                            最后登录时间
                            <sapn class="info">
                                {{userNew.data.login_time}}
                                <span  class="iconfont">&nbsp;&nbsp;&nbsp;</span>
                            </sapn>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="修改资料" name="second">
                <el-container class='modify'>
                    <el-main style="padding-top: 0">
                        <p style="font-size: 14px;line-height: 30px;text-align: left;color: #fff;">修改个人信息</p>
                        <el-form label-position="right" label-width="0px" :model="obj" :rules="rules" ref="ruleForm">
                            <el-form-item label=""  prop="userName">
                                <el-input v-model="obj.userName" placeholder="真实姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="mobile" >
                                <el-input v-model="obj.mobile" placeholder="修改手机号"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="email">
                                <el-input v-model="obj.email" placeholder="修改邮箱"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="rmk">
                                <el-input type="textarea" v-model="obj.rmk" placeholder="添加备注 (可不填)"></el-input>
                            </el-form-item>
                            <el-form-item style="text-align: center">
                                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-container>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    var vm ;
    export default {
        data () {
            let validaterealName = (rule, value, callback) => {
                let ation=/^\D{2,18}$/;
                if (!value) {
                    return callback(new Error('真实姓名必须与您的银行账户相同 2~18 位中文'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('真实姓名必须与您的银行账户相同 2~18 位中文'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatemobileNo = (rule, value, callback) => {
                let ation=/^1[3|4|5|7|8][0-9]{9}$/;
                if (!value) {
                    return callback(new Error('请输入真实的 手机号 码'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('请输入真实的 手机号 码'));
                    }else{
                        callback();
                    }
                },300);
            };
            return {
                activeName2: 'first',
                obj:{
                    userName:'',
                    mobile:'',
                    email:'',
                    rmk:''
                },
                rules: {
                    userName: [{ validator: validaterealName, trigger: 'blur' }],
                    mobile:[{ validator: validatemobileNo, trigger: 'blur' }],
                    email:[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ],
                    rmk:[
                        { required: false, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            this.setBackground()
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            handleClick(tab, event) {
//                console.log(event.currentTarget)
//                console.log(tab, event);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        vm.$BugAtion(vm,vm.obj)
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
        created() {
            vm = this;
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.gameLimit{
    padding-top: 0.8rem;
    .Bg-BackGround;
    font-size: 0;
    width:100%;
    .grap{
        padding: 0.25rem;
        height: 0.8rem;
        text-align: left;
        font-size: 0.3rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .info{
        float: right;
    }
    .el-tabs__nav{
        width: 100%;
    }
    .el-tabs__item{
        width: 50%;
    }
    .modify{
        width: 100%;
    }
}
</style>