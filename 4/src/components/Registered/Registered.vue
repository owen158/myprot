<template>
    <div ref="Register" class='Register G_Form'>
        <div class="reg-header">
            <router-link class="el-icon-close" id="G-Login-return" to="/">
            </router-link>
            快速注册
            <!--<div class="item" style="text-align: center">-->
                <!--&lt;!&ndash;<div :class="Active ===0 ? 'active' : ' ' "  class="tad"  @click="activeClick(0)">手机注册</div>&ndash;&gt;-->
                <!--<div :class="Active ===1 ? 'active' : ' ' " class="tad"  @click="activeClick(1)">快速注册</div>-->
            <!--</div>-->
        </div>
        <div class="el-row" v-if="Active === 1">
            <el-form style="margin-top: 10px" label-position="right" label-width="" :model="reg" >
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="reg.userName" type="text" placeholder="用户名" :minlength=5 :maxlength=10>
                        <i slot="prefix" class="el-input__icon  iconfont icon-gerenzhongxin"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="reg.passWord"  :minlength=6 :maxlength=12 type="password" placeholder="密码">
                        <i slot="prefix" class="el-input__icon  iconfont icon-denglu3"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="reg.remark" :minlength=0 :maxlength=50 type="text" placeholder="微信">
                        <i slot="prefix" class="iconfont icon-weixintubiao"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="reg.mobileNo"  :minlength=10 :maxlength=13 type="text" placeholder="手机号">
                        <i slot="prefix" class="el-input__icon  iconfont icon-shouji"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="reg.imgcode" @focus="ImgCode" :minlength=4 :maxlength=4 type="text" placeholder="验证码">
                        <i slot="prefix" class="el-input__icon  iconfont icon-yanzhengma1"></i>
                    </el-input>
                    <img ref="ImgCode" @click="LoginImg()" src="" id="ImgCode" class="ImgCode" alt="">
                </el-form-item>

                <div class="line-w"></div>
                <el-form-item label="">
                    <el-checkbox-group v-model="checkedNames">
                        <el-checkbox label="我已届满合法博彩年龄,且同意各项" name="type"></el-checkbox>
                        <b @click="Terms = !Terms" class="A-registered-link" href="javascript:void (0)">
                            "开户协议"
                        </b>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <el-button class="G-submit el-button--primary"  @click="submit">下一步</el-button>
        </div>
        <transition name="el-zoom-in-center">
            <div class="A-Register-box" v-show="Terms">
                <div class="A-Register-content">
                <h2 class="A-Register-R-title">通用条款 <span  @click="Terms = !Terms" class="A-Register-drop iconfont icon-cuo"></span></h2>
                <div class="A-Register-wrapper">
                    <h2 style="font-size: 14px;text-align: left;font-weight: 600;line-height: 20px;">一、基本条款</h2>
                    <p class="A-Register-R-text">1.	为避免于本网站投注时之争议，请会员务必于进入网站前详阅本娱乐场所定之各项规则，客户一经“我同意”进入本网站进行投注时，即被视为已接受本娱乐场的所有协议与规则；</p>
                    <p class="A-Register-R-text">
                        2.	会员有责任确保自己的帐户以及登入资料的保密性，以会员帐号及密码进行的任何网上投注，将被视为有效；敬请不定时做密码变更之动作；若帐号密码被盗用，进行的投注，本公司一概不负赔偿责任；
                    </p>
                    <p class="A-Register-R-text">
                        3.	本公司保留不定时更改本协定或游戏规则或保密条例，更改之条款将从更改发生后指定之日起生效，并保留一切有争议事项及最后的决策权；
                    </p>
                    <p class="A-Register-R-text">
                        4.	用户须达到居住地国家法律规定之合法年龄方可使用线上娱乐场或网站；
                    </p>
                    <p class="A-Register-R-text">5.	网上投注如未能成功提交，投注将被视为无效；</p>
                    <p class="A-Register-R-text">6.	凡玩家于出牌途中且尚无结果前自动或强制断线时，并不影响比赛之结果；</p>
                    <p class="A-Register-R-text">7.	如遇发生不可抗拒之灾害，骇客入侵，网络问题造成数据丢失的情况，以本公司公告为最终方案；</p>
                    <p class="A-Register-R-text">8.	特此声明，本公司将会对所有的电子交易进行记录，如有任何争议，本公司将会以注单记录为准；</p>
                    <p class="A-Register-R-text">9.	本公司保留更改、修改现有条款或增加任何适当条款的权利，而条款改动后将会在会员端跑马灯上公布；</p>
                    <p class="A-Register-R-text">10.	无论在任何情况下，本公司具有最终的解释权；</p>
                    <p class="A-Register-R-text">11.	若经本公司发现会员以不正当手法<利用外挂程式>进行投注或以任何非正常方式进行的个人、团体投注有损公司利益之投注事情发生，本公司保留权利取消该类注单以及注单产生之红利，并停用该会员帐号；</p>
                    <p class="A-Register-R-text">12.	无风险投注包括在百家乐同时投注的庄闲，单双，大小；龙虎斗中同时投注龙虎，龙双龙单，虎双虎单；在轮盘同时投注黑红，单双，大小等相反的下注，本公司保留权利取消所有优惠、该注单以及单注产生之红利，并停用该会员账号之权利，本公司不承担对此做出任何说明及解释之责任；<br>若本公司发现会员有重复申请帐号行为时，保留取消、收回会员所有优惠红利，以及优惠红利所产生的盈利之权利；每位玩家、每一电子邮箱、每一电话号码、每一收款银行账号，以及共享电脑环境(例如:网吧、其他公共用电脑等)只能够拥有一个会员帐号，各项优惠只适用于每位客户在本公司唯一的帐户。<br>所有澳门银河的优惠是特别为玩家而设，在玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，澳门银河保留权利要求客户向我们提供充足有效的文件， 并以各种方式辨别客户是否符合资格享有我们的任何优惠。<br>澳门银河赌场是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在澳门银河注册、下注，为会员个人行为，澳门银河不负责、承担任何相关责任。<br>无论是个人或是团体，如有任何威胁、滥用澳门银河优惠的行为，澳门银河保留杈利取消、收回由优惠产生的红利，并保留权利追讨最高50%手续费。<br>客户一经注册开户，将被视为接受所有颁布在澳门银河网站上的规则与条例。</p>
                    <h2 style="font-size: 14px;text-align: left;font-weight: 600;line-height: 20px;">二、真人娱乐条款</h2>

                    <p class="A-Register-R-text">
                        1.	当您下注后，请等待显示“您共下注XXXX元”，这个讯息在中间的讯息窗口可以看见；
                    </p>
                    <p class="A-Register-R-text">
                        2.	开牌后，若您已有下注，请确认您的输赢金额，这个讯息在中间的讯息窗口可以看见；
                    </p>
                    <p class="A-Register-R-text">
                        3.	您的“总下注金额”及“赢得金额”亦会每局显示于右上角的视窗中，请会员详加确认；
                    </p>
                    <p class="A-Register-R-text">
                        4.	当会员在游戏中途发生网路问题而断线，所有已被确定的投注仍然有效；会员再重新登入时，就可以查询游戏端内的“下注记录”查询发牌结果，会员的额度也会随着当局的输赢增加或减少；
                    </p>
                    <p class="A-Register-R-text">
                        5.	如果您在讯息窗口看到“开牌”的话，而您的游戏画面未显示投注金额，这代表该局您的投注不成功，这有可能下注的时间太迟或是因为网路问题而没有被系统接受；
                    </p>
                    <p class="A-Register-R-text">
                        6.	百家乐游戏在本网内设计为每手牌局前不销牌；
                    </p>
                    <p class="A-Register-R-text">
                        7.	当会员进入游戏，超过5局没下注会有提示；若您连续10局未下注的时候将会被游戏弹出至首页，请会员重新登入；若会员于下注开牌期间强行登出，帐号将被系统锁住三分钟，请会员稍后再重新登入；
                    </p>
                    <p class="A-Register-R-text">
                        8.	本网上游戏是在现场把牌通过扫描后将牌例显示在会员端荧幕上，故若牌没扫描到必将重新扫描一遍，若还是没有感应则把牌翻开由现场公务输入牌卡数码，牌例便会显示在会员端荧幕上；
                    </p>
                    <p class="A-Register-R-text">
                        9.	当荷官不小心同时从牌靴中抽出两张牌，而扫描到的不是按顺序正确的那张牌：<br>（a）若牌局已开牌，而结果不符，系统将根据现况决定牌的先后摆放顺序之开牌结果进行手动开牌，并换上新牌靴开始新局；<br>（b）若牌局未开牌，则由现场公务决定牌的先后摆放顺序，牌局会如常继续;
                    </p>
                    <p class="A-Register-R-text">
                        10.	在洗牌或将牌放入牌靴过程中，有牌不慎曝光，荷官会把牌叠起并重新洗牌，牌局将重新开始；
                    </p>
                    <p class="A-Register-R-text">
                        11.	牌局进行中，未扬牌前(该张牌未于视讯显示点数花色前)，牌不慎离开台面，牌丢落地上，或离开视讯范围，则该牌局予以注销作废，所有下注本金退回；
                    </p>
                    <p class="A-Register-R-text">
                        12.	若该牌已经过扫描且已扬牌后，该牌不慎离开台面，牌丢落地上，或离开视讯范围，因其不影响游戏之正确结果，牌由现场工务摆回后，该牌局正常行其结果仍视为有效；
                    </p>
                    <p class="A-Register-R-text">
                        13.	派错牌例（已不须补牌，荷官仍补牌）现场工务会把多补的那张牌放到牌靴底，牌局结果依视讯显示为准，牌局将如常进行；若该张多补的牌已亮开，公务将在做完以上同样程序后换上新牌靴，牌局会重新开始；
                    </p>
                    <p class="A-Register-R-text">
                        14.	荷官未依闲、庄发牌正确顺序将牌放错位置，由工务将牌依正确顺序摆放回位置后牌局将照常继续；
                    </p>
                    <p class="A-Register-R-text">
                        15.	开牌过程中，牌有感应但无显示，荷官已亮牌（如:已派出数张牌，但第一张牌有感应但未显示，至第二、三张牌显示在错误的闲、庄位置上），现场工务会依牌的正确次序输入代码，牌局将如常继续;</p>
                    <p class="A-Register-R-text">
                        16.	同一张牌，扫描了一次出现2张（闲、庄位置各一张）<br>（a）若牌局已开牌，而结果不符，系统将根据视讯荷官完成该局之正确结果进行手动开牌，牌局也将在牌路无误的情况下如常继续；<br>（b）若牌局未开牌，荷官避开扫描如常开牌后，工务将输入牌之正确数码，并修正不符那张牌的花色、点数，牌局会如常继续；
                    </p>
                    <p class="A-Register-R-text">
                        17.	电脑、扫描器出现异常、牌局中断、牌无法扫描又无法输入牌卡数码时，那一个牌局便会作废，所有程式将被关闭，并重开程式，牌局将重新开始；但若荷官发牌视讯已有结果，则以视讯开牌为主，会由系统完成开配；
                    </p>
                    <p class="A-Register-R-text">
                        18.	有关例行性维护、网路问题、视讯中断、牌局作废、注销情况等事宜，皆可于会员端左上角处公告栏上得知最新讯息；
                    </p>
                    <p class="A-Register-R-text">
                        19.	发牌视讯仅保留三日，若有异议请于游戏当日起三日内提出，三日后恕不受理；
                    </p>
                    <p class="A-Register-R-text">
                        20.	本娱乐场之视讯为真人直播，故该局游戏若因国际线路传输问题出现争议，将以视讯看到牌局结果决定输赢；
                    </p>
                    <p class="A-Register-R-text">
                        21.	本娱乐场所提供之牌路仅供参考，若因国际线路问题或其他因素造成牌路显示有误，所有游戏结果将以视讯开牌及游戏记录为主；
                    </p>
                    <p class="A-Register-R-text">
                        22.	本公司保留一切有争议事项的修正及最后的决策；
                    </p>
                    <p class="A-Register-R-text">
                        23.	本娱乐场保留随时更改、修订或删除游戏、游戏规则（包括机率及赔率）及协议条款的权利而无须作事先通知；
                    </p>
                    <p class="A-Register-R-text">
                        24.	本娱乐场保留随时修订、撤销或中止任何投注的权利而无须作事先通知，亦无须作任何解释；
                    </p>
                    <p class="A-Register-R-text">
                        25.	本娱乐场记录每一项于本网站伺服器内执行的交易及投注功能；若会员认为向本娱乐场提供的资料与本网站资料库中的资料记录之间出现了任何声称的差异，一切均以本网站资料库的资料为准；
                    </p>
                    <p class="A-Register-R-text">
                        26.	当会员已于本娱乐场之游戏厅内下注，而电脑出现连线异常导致牌局中断时，会员最后押住仍视为有效，本娱乐场将以会员于本网站资料库的交易记录为准；
                    </p>
                    <p class="A-Register-R-text">
                        27.	会员在本娱乐场之游戏厅内任何游戏的押注记录均视为有效，会员需自行承担下注后的风险；<br>若经本公司发现会员以不正当手法&lt;利用外挂程式&gt;进行投注或以任何非正常方式进行的个人、团体投注有损公司利益之投注事情发生，本公司保留取消该类注单之权利。
                    </p>
                    <h2 style="font-size: 14px;text-align: left;font-weight: 600;line-height: 20px;">三、彩票类游戏</h2>
                    <p class="A-Register-R-text">
                        1.	当您在下注之后，请等待显示“下注成功”资讯；
                    </p>
                    <p class="A-Register-R-text">
                        2.	为了避免出现争论，您必须在下注之后检查“下注状况”；
                    </p>
                    <p class="A-Register-R-text">
                        3.	任何的投诉必须在开彩之前提出，本公司不会受理任何开彩之后的投诉；
                    </p>
                    <p class="A-Register-R-text">
                        4.	所有投注项目，公布赔率时出现的任何打字错误或非故意人为失误，本公司保留改正错误和按正确赔率结算投注的权力；
                    </p>
                    <p class="A-Register-R-text">
                        5.	开彩后的投注，将被视为“无效”；所有赔率将不时浮动，派彩时的赔率将以确认投注时之赔率为准；
                    </p>
                    <p class="A-Register-R-text">
                        6.	所有赛果以官方网站公布的结果为依据，若因官网延迟、错误或取消；本公司保留对已下注注单的裁决权；
                    </p>
                    <p class="A-Register-R-text">
                        7.	若发生两颗球同时吸起，将依照在结果区之号码球为主；
                    </p>
                    <p class="A-Register-R-text">
                        8.	在游戏尚未完成开配之前，若因机器问题而导致有结果产生，该局将一律注销；
                    </p>
                    <p class="A-Register-R-text">
                        9.	在下注时间尚未结束之前，若因任何因素导致有结果产生，该局将一律注销；
                    </p>
                    <p class="A-Register-R-text">
                        10.	若该局己有结果但与实际结果不符，系统将根据视讯完成该局之正确结果进行手动开牌；
                    </p>
                    <h2 style="font-size: 14px;text-align: left;font-weight: 600;line-height: 20px;">四、电子游艺</h2>
                    <p class="A-Register-R-text">
                        1.	电子游戏中奖画面与派彩结果不符时，本公司将以资料库最终结果为依据；
                    </p>
                    <p class="A-Register-R-text">
                        2.	彩池金额是以满注中奖结果显示，玩家中奖系以押注比例分配彩池金额；
                    </p>
                    <p class="A-Register-R-text">
                        3.	老虎机游戏过程中如遇断线情况将以资料库最终结果为依据，本公司保留对已下注注单的裁决权；
                    </p>
                    <p class="A-Register-R-text">
                        4.	21点游戏补牌中如遇玩家断线，则视玩家为不补牌；游戏结果将视为有效；
                    </p>
                    <p class="A-Register-R-text">
                        5.	红狗游戏过程中如遇断线情况将视为玩家不加注进行补牌，完成该局游戏结果。
                    </p>
                </div>
            </div>
            </div>
        </transition>
        <div class="el-row"  v-if="Active === 0">
            <div class="register_tip">手机注册每日随机产生最高<span>999元</span>现金大奖</div>
            <el-form label-position="right" label-width="" :model="regPhone">
                <el-form-item label="">
                    <el-input v-model="regPhone.userName" type="text" placeholder="用户名" :minlength=5 :maxlength=10>
                        <i slot="prefix" class="el-input__icon  iconfont icon-gerenzhongxin"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="regPhone.passWord"  :minlength=6 :maxlength=12 type="password" placeholder="密码">
                        <i slot="prefix" class="el-input__icon  iconfont icon-denglu3"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="regPhone.remark" :minlength=0 :maxlength=50 type="text" placeholder="微信">
                        <i slot="prefix" class="el-icon-edit iconfont icon-weixintubiao"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="regPhone.mobileNo" :minlength=10 :maxlength=13 type="text" placeholder="手机号码">
                        <i slot="prefix" class="el-input__icon  iconfont icon-shouji"></i>
                    </el-input>
                    <el-button class="phone__ el-button--primary" type="primary" @click="sendSubmit()" :loading="phoneObj.judgment">{{phoneObj.text}}</el-button>
                </el-form-item>

                <div class="line-w"></div>
                <el-form-item label="">
                    <el-input v-model="regPhone.msgCode" :minlength=4 :maxlength=4 type="text" placeholder="验证码">
                        <i slot="prefix" class="el-input__icon  iconfont icon-yanzhengma1"></i>
                    </el-input>
                </el-form-item>
                <div class="line-w"></div>
                <el-form-item label="">
                    <el-checkbox-group v-model="checkedNames">
                        <el-checkbox label="我已经满合法博彩年龄，且同意各项开户条件" name="type"></el-checkbox>
                        <b @click="Terms = !Terms" class="A-registered-link" href="javascript:void (0)">
                            "开户协议"
                        </b>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <el-button class="G-submit el-button--primary" @click="PhoneSubmit">下一步</el-button>
        </div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'注册',
                    withdraw:'/'
                },
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
                    proxyname:'',//
                    remark:''
                },
                phone:{
                    cagent:'',//字段
                    mobileNo:'',//手机号
                },
                phoneObj:{
                    text:'发送验证码',
                    judgment:false
                },
                regPhone:{
                    cagent:'',//字段
                    mobileNo:'',//手机号
                    isMobile:1,//类型
                    proxyname:'',//
                    msgCode:'',
                    userName:'',//用户名
                    passWord: '',//密码
                    remark:''
                },
                Active:1,
                Terms:false,
                checkedNames:true//单选框
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            },
        },
        mounted() {
            vm = this;
            vm.LoginImg();
        },
        methods:{
            ActiveCode:function (sum) {

            },
            ImgCode:function () {
                this.LoginImg();
            },
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
            activeClick:function (Num) {
                this.Active =Number(Num);
                if(this.Active ===1){
                    this.$nextTick(function () {
                        this.LoginImg();
                    })
                }
            },
            sendSubmit:function () {//发送验证码
                let vm = this;
                vm.$message.closeAll();
                vm.phone.mobileNo = vm.regPhone.mobileNo;
                vm.$sendRegirstCode(vm,vm.phone,"Mobile/sendRegirstCode.do")
            },
            PhoneSubmit:function () {//手机号注册
                let vm = this;
                vm.$message.closeAll();
                vm.$phoneregister(vm,vm.regPhone)
            },
            submit:function () {
                vm = this;
                vm.$message.closeAll();
                if(this.checkedNames != true){
                    vm.checkedNames = true;  //单选框
                    vm.$message.error( '是否同意用户协议');
                    vm.LoginImg();
                    return;
                }
                vm.$BugRegister(vm,vm.reg);
            }
        },
        components: {
            Top,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../public/Form.less";
.Register {
    width: 100%;
}
.Register{
    font-size: 0px;
   .reg-header{
       height: 40px;
       line-height: 40px;
       font-size: 0.3rem;
       font-weight: bold;
       position: relative;
       background: #fff;
       border-bottom:1px solid #e5e5e5;
       .item{
           width:190px;
           margin: 0 auto;
           .tad{
               float: left;
               width: 93px;
               margin-top: 5px;
               border:1px solid #e5e5e5;
               height: 30px;
               font-size: 14px;
               text-align: center;
               line-height: 30px;
               border-radius: 30px;
           }
           .tad:first-child{
               border-right: none;
               border-top-right-radius: 0;
               border-bottom-right-radius: 0;
           }
           .tad:last-child{
               border-bottom-left-radius: 0;
               border-top-left-radius: 0;
           }
           div.active{
               background: #c8a675;
               color: #fff;
           }
       }
        #G-Login-return{
            position: absolute;
            font-size: 20px;
            left: 10px;
            top:10px;
        }
   }
    .el-input--prefix .el-input__inner{
        padding-left: 1.1rem;
    }
    .el-input__prefix{
        left: 0.5rem;
        i{
            font-size: 0.5rem;
        }
    }
    .el-checkbox-group{
        text-align: left;
        padding-left:0.6rem;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*#c8a675*/
    }
    .el-checkbox__original{
        font-size: 12px;
    }
    .el-checkbox__label{
        font-size: 12px;
    }
    .A-registered-link{
        color: #c8a675;
        font-size: 12px;
        padding-left: 5px;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #333;
        font-size: 0.25rem;
    }
    .phone__{
        position: absolute;
        top:5px;
        right:5px;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
        color: #c8a675;
        border:1px solid #c8a675;
        background:#fff ;
        border-radius: 5px;
        font-size: 14px;
    }
    .el-button.is-loading{
        position: absolute;
    }
}
 .register_tip {
    background: #fff4e3;
    border: 1px solid #fec6a0;
    padding: 8px 20px;
    text-align: left;
     font-size: 14px;
    line-height: 20px;
     margin-top: 10px;
     span{
         color: red;
     }
}
.A-Register-box{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(0,0,0,0.7);
    z-index: 50;
    .A-Register-content{
        width: 95%;
        margin: 15% auto;
        height: 8rem;
        border-radius: 3px;
        border: 1px solid #c8a675;
        background:#fff;
        .A-Register-wrapper{
            width: 100%;
            height: 7.3rem;
            overflow: auto;
        }
        .A-Register-R-title{
            position: relative;
            height: 0.6rem;
            font-size: 0.32rem;
            text-align: left;
            padding: 0 0 0 0.25rem;
            line-height: 0.6rem;
            margin-bottom: 0.1rem;
            background:#c8a675;
            color:#fff;
            .A-Register-drop{
                position: absolute;
                width: 0.6rem;
                height: 0.6rem;
                right: 0;
                text-align: center;
                font-size: 0.5rem;
                color:#fff;
                top:0;
            }
        }
        .A-Register-R-text{
            padding: 0 0.05rem;
            line-height: 0.35rem;
            font-size: 0.25rem;
            color:#696969;
            text-indent: 0.2rem;
            text-align: left;
        }
    }
}
</style>
