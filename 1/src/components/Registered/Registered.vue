<template>
    <div class='Register' ref="BackG">
        <el-container >
            <Top :text="userNew.text"></Top>
            <withdraw :src="withdraw"></withdraw>
            <el-main>
                <el-form label-position="right" status-icon :rules="rules" ref="ruleForm2" status-icon label-width="0px" :model="reg">
                    <el-form-item label="" prop="userName">
                        <el-input v-model="reg.userName" type="text" placeholder="用户名">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="passWord">
                        <el-input v-model="reg.passWord" type="password" placeholder="密码">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="repassWord">
                        <el-input v-model="reg.repassWord" type="password" placeholder="确认密码">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="realName">
                        <el-input v-model="reg.realName" type="text" placeholder="真实姓名">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="mobileNo">
                        <el-input v-model="reg.mobileNo" type="text" placeholder="手机号">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="qkpwd">
                        <el-input v-model="reg.qkpwd" type="password" placeholder="取款密码">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="imgcode">
                        <el-input v-model="reg.imgcode" type="text" placeholder="验证码">
                        </el-input>
                        <img @click="LoginImg()" ref="ImgCode" id="ImgCode" alt="">
                    </el-form-item>
                    <el-form-item label="">
                        <el-checkbox-group v-model="form.resource">
                            <el-checkbox label="我已经满合法博彩年龄，且同意各项开户条件" name="type"></el-checkbox>
                            <b style="font-size: 12px;padding-left: 3px;color: #d62f27;" @click="show = true">"开户协议"</b>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
            <transition name="el-zoom-in-bottom">
                <div v-show="show" class="protocol">
                    <div class="title">
                        通用条款 <b class="el-icon-close closes"  @click="show = false"></b>
                    </div>
                    <div class="boxs">
                        <p >1、为避免于本娱乐城投注时之争议，请会员务必于进入网站前详阅{{userNew.Pname}}所定之各项规则，客户开出账户进入本网站 进行投注时，即被视为已接受{{userNew.Pname}}的所有规则与条例。</p>
                        <p >
                            2、账户只限会员本人使用。会员有责任确保自己的账户及登入资料的保密性，以会员账号及密码进行的任何网上投注，将被视为有效。请您务必定期修改密码。如客户发现或怀疑自己的资料被盗用，请告知本公司，立即做密码变更之动作。
                        </p>
                        <p >
                            3、每次登入时会员都应该核对自己的账户额度，如对账户额度有任何疑问，请立即通知本公司。
                        </p>
                        <p >
                            4、用户须达到居住地国家法律规定之合法年龄方可使用线上娱乐场投注。
                        </p>
                        <p >5、网上投注如未能成功提交，投注将被视为无效。</p>
                        <p >6、若{{userNew.Pname}}发现会员以不正当手法或恶意透过游戏网站、程序漏洞，如使用外挂程序进行投注或擅自修改来获取的不当积分，以任何非正常方式进行的个人、团体投注有损公司利益的投注事情发生，经查证属实者，本站将立即对该用户禁用账号并保留取消注单的权利，且非法所获积分将不予计算。</p>
                        <p >7、凡玩家于出牌途中且尚无结果前自动或强制断线时，并不影响比赛之结果。</p>
                        <p >8、如遇发生不可抗拒之灾害，骇客入侵，网络问题造成数据丢失的情况，以本公司公告为最终方案。</p>
                        <p >9、特此声明，{{userNew.Pname}}将会对所有的电子交易进行记录，如有任何争议，将会以注单记录为准。</p>
                        <p >10、我们保留追回为玩家账户错误添加的额度的权利，诸如彩金派发、存款、优惠，并保留在没有以任何形式通知客户的情况下暂时停用玩家账号的权利。</p>
                        <p >11、所有提款申请必须符合本网站的提款政策，如存款后有效投注未达存款60%，即无法通过提款审核，提款申请将会被驳回。</p>
                        <p >12、我们可以自行决定不定时更改本协定或游戏规则或保密条例，更改之条款将从更改发生后指定之日起生效，并保留一切有争议事项及最后的决策权。</p>
                    </div>
                </div>
            </transition>
        </el-container>
    </div>

</template>
<script>
    var vm;
    import withdraw from '../public/return.vue'
    import Top from '../Top/Top.vue'
    export default {
        data () {
            let validatetname = (rule, value, callback) => {
                let name =/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,9}$/;
                if (!value) {
                    return callback(new Error('请输入用户名'));
                }
                setTimeout( function() {
                    if (!name.test(value)) {
                        callback(new Error('用户名非数字开头，5-10位字母，数字组成'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatetpwd = (rule, value, callback) => {
                let tion =/^[0-9A-Za-z]{6,12}$/;
                if (!value) {
                    return callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validaterepassWord = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码须为,6～12位英文或数字，且符合a~z字元或0~9'));
                }
                setTimeout( function() {
                    if (vm.reg.repassWord != vm.reg.passWord) {
                        callback(new Error('请再次确认密码'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validaterealName = (rule, value, callback) => {
                let ation=/^\D{2,18}$/;
                if (!value) {
                    return callback(new Error('真实姓名必须与您的银行账户相同 2 - 18 中文'));
                }
                setTimeout( function() {
                    if (!ation.test(value)) {
                        callback(new Error('真实姓名必须与您的银行账户相同 2 - 18 中文'));
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
            let validatetqkpwd = (rule, value, callback) => {
                let tion =/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请正确输入取款密码'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('请正确输入4位数字取款密码'));
                    }else{
                        callback();
                    }
                },300);
            };
            let validatetimgcode = (rule, value, callback) => {
                let tion =/^[0-9]{4}$/;
                if (!value) {
                    return callback(new Error('请输入验证码'));
                }
                setTimeout( function() {
                    if (!tion.test(value)) {
                        callback(new Error('请正确输入验证码'));
                    }else{
                        callback();
                    }
                },300);
            };
            return {
                withdraw:'/',
                reg:{
                    userName:'',//用户名
                    passWord: '',//密码
                    repassWord:'',//确认密码
                    mobileNo:'',//手机号
                    imgcode:'',//验证码
                    reguuid:'',//token
                    qkpwd:'',//取款密码
                    reqkpwd:'',//确认取款密码
                    realName:'',//真实姓名
                    cagent:'',//字段
                    isMobile:1,//类型
                    proxyname:''//
                },
                show:false,
                form:{
                    resource:true
                },
                rules:{
                    userName: [{ validator: validatetname, trigger: 'blur' }],
                    passWord:[{ validator: validatetpwd, trigger: 'blur' }],
                    repassWord:[{ validator: validaterepassWord, trigger: 'blur' }],
                    realName:[{ validator: validaterealName, trigger: 'blur' }],
                    mobileNo:[{ validator: validatemobileNo, trigger: 'blur' }],
                    qkpwd:[{ validator: validatetqkpwd, trigger: 'blur' }],
                    imgcode:[{ validator: validatetimgcode, trigger: 'blur' }]
                },
                Terms:false,
                checkedNames:true//单选框
            }
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm = this;
            vm.LoginImg();
            vm.setBackground();
        },
        methods:{
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.form.resource != true){
                            vm.$alert( '是否同意用户协议', '系统提示', {
                                dangerouslyUseHTMLString: true
                            });
                            vm.LoginImg();
                            return;
                        }
                        vm.$BugRegister(vm,vm.reg);
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
//            <!--TermsOpen:function () {-->
//                <!--this.Terms = true;-->
//            <!--},-->
//            <!--TermsOff:function () {-->
//                <!--vm.checkedNames = true;  //单选框-->
//                <!--this.Terms = false;-->
//            <!--},-->
//            <!--submit:function () {-->
//                <!--vm = this;-->
//<!--//                vm.reg.repassWord = vm.reg.passWord;-->
//<!--//                vm.reg.qkpwd = "0000";-->
//                <!--vm.reg.reqkpwd = vm.reg.qkpwd;-->
//                <!--if(this.checkedNames != true){-->
//                    <!--vm.checkedNames = true;  //单选框-->
//                    <!--vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'是否同意用户协议'});-->
//                    <!--vm.LoginImg();-->
//                    <!--return;-->
//                <!--}-->
//                <!--vm.$BugRegister(vm,vm.reg);-->
//            <!--}-->
        },
        components: {
            Top,
            withdraw
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.Register {
    .Bg-BackGround;
    padding-top: 0.8rem;
    .el-form-item__content{
        position: relative;
        #ImgCode{
            position: absolute;
            width: 70px;
            height: 35px;
            right: 5px;
            top:2px;
            border:1px solid transparent;
            z-index: 5;
        }
    }
    .el-checkbox-group{
        text-align: left;
        .el-checkbox__label{
            color: @size-color;
            font-size: 12px;
        }
    }
    .el-form-item{
        margin-bottom: 17px;
    }
    .el-button{
        padding: 12px 50px;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: @size-color;
        font-size: 12px;
    }
    .protocol{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: #fff;
        z-index:100;
    }
    .title{
        height: 40px;
        line-height: 40px;
        font-size: 17px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 0;
        background:  #d62f27;
        position: relative;
        .closes{
            position: absolute;
            right: 10px;
            top:10px;
            color: #fff;

        }

    }
    .boxs{
        padding-top: 10px;
        font-size: 13px;
        padding-bottom: 20px;
        p{
            padding: 0 10px;
            line-height: 22px;
            text-align: left;
            text-indent: 15px;
        }
    }
}
</style>
