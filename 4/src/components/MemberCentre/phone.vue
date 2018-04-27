<template>
    <div class='phone G_Form'>
        <Top :text="Topobj"></Top>
        <el-form label-position="right" label-width="80px" v-show="Active">
            <div class="line-w"></div>
            <el-form-item label="绑定手机">
                <div class="PhoneNum">
                    {{ userNew.data.loginmobile != undefined ? userNew.data.loginmobile : userNew.data.mobile}}
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-button type="primary" class="G-submit" @click="Active = false">修改手机号</el-button>
            <p class="text">1.更换手机号后,下次登录可使用新手机号登录</p>
            <p class="text">2.如您无法自助修改手机号,请联系
                <router-link style="color: rgb(200, 166, 117);" to="/NoteSingle">
                    在线客服
                </router-link>
            </p>
        </el-form>
        <el-form v-if="Active !=true" label-position="right" label-width="80px" :model="obj">
            <p style="padding-left: 15px;" class="text">
                请输入您需要绑定的手机号
            </p>
            <el-form-item label="国家/地区">
                <div class="china">
                    中国
                </div>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="+86">
                <el-input type="text" :minlength=10 :maxlength=13 v-model="obj.mobileNo" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="验证码">
                <el-input type="text" :minlength="4" :maxlength="4" v-model="obj.msgCode" placeholder="验证码"></el-input>
                <el-button style="position: absolute;" class="phone__" type="primary" @click="sendSubmit()" :loading="phoneObj.judgment">{{phoneObj.text}}</el-button>
            </el-form-item>
            <div class="line-w"></div>
            <el-form-item label="登录密码">
                <el-input v-model="obj.password"  :minlength=6 :maxlength=12 type="password" placeholder="密码">
                </el-input>
            </el-form-item>
            <el-button type="primary" class="G-submit" @click="submit">下一步</el-button>
        </el-form>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'绑定手机',
                    withdraw:'/'
                },
                phoneObj:{
                    text:'发送验证码',
                    judgment:false
                },
                obj:{
                    mobileNo:'',//手机号
                    msgCode:'',
//                    isMobile:1,
                    cagent:'',//字段
                    password:'',
                },
                Active:true,
                bankpass:{
                    password:'',
                    npassword:'',
                    renpassword:''
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
            sendSubmit:function () {//发送验证码
                let vm = this;
                vm.$message.closeAll();
                let phone= {mobileNo:""};
                phone.mobileNo = vm.obj.mobileNo;
                vm.$sendRegirstCode(vm,phone,'Mobile/sendChangeCode.do')
            },
            submit:function () {
                let vm = this;
                vm.$message.closeAll();
                vm.$phonemodify(vm,vm.obj)
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
.phone{
    width: 100%;
    .el-form-item{
        background: #fff;
    }
    .china{
        text-align: left;
        padding-left: 15px;
    }
    .PhoneNum{
        font-size: 14px;
        padding-right: 15px;
        color: #8e8e93;
        text-align: right;
    }
    .text{
        line-height: 20px;
        font-size: 13px;
        text-align: left;
        padding-left: 45px;
    }
    .el-form{
        margin-top: 5px;
    }
    .phone__{
        position: absolute;
        top:5px;
        right:5px;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
        border:1px solid #c8a675;
        color: #c8a675;
        background:#fff ;
        border-radius: 5px;
        font-size: 14px;
    }
}
</style>