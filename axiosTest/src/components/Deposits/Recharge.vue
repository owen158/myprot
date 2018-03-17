<template>
    <div class='Recharge page-box'>
        <Top :text="text"></Top>
        <Ruten :RouT="RouT"></Ruten>
        <div class="solid"></div>
        <p class="title-header">存款金额（*范围 {{Money.min}}-{{Money.man}} 元）</p>
        <h2 class="hit">请选择支付方式</h2>
        <div class="row pvw" v-if="Recharge.data != undefined">
            <div @click="list($event)" v-for="(v,key) in Recharge.data" class="col-6 main">
                <label :for="v.paymentName">
                    <input :value="v.id" :data-min="v.minquota" :data-man="v.maxquota" class="demo--radio" ref="Typelist" :id="v.paymentName"  name="Fruit" type="radio"   />
                    <span class="demo--radioInput"></span>
                    支付{{key+1}}
                </label>
            </div>
        </div>
        <h2 class="hit">请输入存款金额</h2>
        <div class="item">
            <input v-numd type="text" ref="acounmt" placeholder="金额">
        </div>
        <div v-if="Recharge.id === '5'" class="row">
            <div v-if="Online.list != 'JFK' && Online.list != 'DC'" class="row">
                <h2 class="hit">请选择银行</h2>
                <div  class="item-selct">
                    <select  name="">
                        <option value="">请选择银行</option>
                        <option v-for="v in Online.list" :value="v.bankcode">{{v.title}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="solid"></div>
        <div class="Submit" @click="submit()">确认</div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Public/Top.vue'
    import Ruten from '../Public/Ruten.vue'
    export default {
        data () {
            return {
                RouT:'/DepositsChild',
                text:{
                    title:'支 付',
                    text:'Recharge'
                },
                bankcode:{
                    acounmt:'',
                    scancode:'',
                    payId:''
                },
                Online:{
                    amount:'',
                    bankcode:'',
                    list:null
                },
                YS:[
                    {'bankcode':'1031000','title':'农业银行'},
                    {'bankcode':'1021000','title':'工商银行'},
                    {'bankcode':'1051000','title':'建设银行'},
                    {'bankcode':'3012900','title':'交通银行'},
                    {'bankcode':'1041000','title':'中国银行'},
                    {'bankcode':'3085840','title':'招商银行'},
                    {'bankcode':'3051000','title':'民生银行'},
                    {'bankcode':'3031000','title':'光大银行'},
                    {'bankcode':'3131000','title':'北京银行'},
                    {'bankcode':'3071000','title':'平安银行'},
                    {'bankcode':'3222900','title':'上海农村商业银行'},
                    {'bankcode':'3093910','title':'兴业银行'},
                    {'bankcode':'4031000','title':'中国邮政'},
                    {'bankcode':'3102900','title':'浦发银行'},
                    {'bankcode':'3021000','title':'中信银行'},
                    {'bankcode':'3065810','title':'广发银行'},
                    {'bankcode':'3133010','title':'南京银行'},
                    {'bankcode':'3133320','title':'宁波银行'},
                    {'bankcode':'5021000','title':'东亚银行'}
                ],
                HS:[
                    {'imgurl':'user_img/zsyh.png','bankcode':'CMB','title':'招商银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'BOCM','title':'交通银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'CGB','title':'广发银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'CITIC','title':'中信银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEB','title':'光大银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'CIB','title':'兴业银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'PAYH','title':'平安银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'民生银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'邮储银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'BCCB','title':'北京银行'},
                    {'imgurl':'user_img/shyh.png','bankcode':'SHBANK','title':'上海银行'}
                ],
                SHB:[
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'BCOM','title':'交通银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'CMB','title':'招商银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'民生银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEBB','title':'光大银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'BOB','title':'北京银行'},
                    {'imgurl':'user_img/shyh.png','bankcode':'SHB','title':'上海银行'},
                    {'imgurl':'user_img/nb.png','bankcode':'NBB','title':'宁波银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'CIB','title':'兴业银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'中国邮政银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'SPABANK','title':'平安银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/hzyh.png','bankcode':'HZB','title':'杭州银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'GDB','title':'广发银行'}
                ],
                ZF:[
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'BCOM','title':'交通银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'CMB','title':'招商银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'民生银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEBB','title':'光大银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'BOB','title':'北京银行'},
                    {'imgurl':'user_img/shyh.png','bankcode':'SHB','title':'上海银行'},
                    {'imgurl':'user_img/nb.png','bankcode':'NBB','title':'宁波银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'CIB','title':'兴业银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'中国邮政'},
                    {'imgurl':'user_img/payh.png','bankcode':'SPABANK','title':'平安银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/hzyh.png','bankcode':'HZB','title':'杭州银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'GDB','title':'广发银行'}
                ],
                TCP:[
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'POST','title':'邮政储蓄银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'CIB','title':'兴业银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'ABC','title':'中国农业银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEB','title':'中国光大银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'CGB','title':'广发银行'},
                    {'imgurl':'user_img/shyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/nb.png','bankcode':'PINGANBANK','title':'平安银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'SHB','title':'上海银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'BOCO','title':'交通银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'CMBC','title':'中国民生银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'CMBCHINA','title':'招商银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'BCCB','title':'北京银行'}
                ],
                DDB:[
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'BCOM','title':'交通银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'CMB','title':'招商银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'民生银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEBB','title':'光大银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'BOB','title':'北京银行'},
                    {'imgurl':'user_img/shyh.png','bankcode':'SHB','title':'上海银行'},
                    {'imgurl':'user_img/nb.png','bankcode':'NBB','title':'宁波银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'CIB','title':'兴业银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'中国邮政银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'SPABANK','title':'平安银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/hzyh.png','bankcode':'HZB','title':'杭州银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'GDB','title':'广发银行'}
                ],
                GST:[
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'中国邮政银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'CMB','title':'招商银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'BCOM','title':'交通银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEBB','title':'光大银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'SPABANK','title':'平安银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'民生银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'GDB','title':'广发银行'}
                ],
                MKT:[
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'BOCOM','title':'交通银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'中国邮政银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEBBANK','title':'光大银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'PINGAN','title':'平安银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBCS','title':'民生银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'CGB','title':'广发银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'BCCB','title':'北京银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'BOS','title':'上海银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'CIB','title':'兴业银行'}
                ],
                BFT:[
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC','title':'工商银行'},
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'ABC','title':'农业银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'CCB','title':'建设银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'COMM','title':'交通银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'CMB','title':'招商银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'CIB','title':'兴业银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'民生银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'GDB','title':'广发银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'CNCB','title':'中信银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CEB','title':'光大银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'PSBC','title':'中国邮政银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'PAB','title':'平安银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'BOBJ','title':'北京银行'},
                    {'imgurl':'user_img/nb.png','bankcode':'BONB','title':'宁波银行'}
                ],
                XQ:[
                    {'imgurl':'user_img/zggsyh.png','bankcode':'icbc','title':'工商银行'},
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'abc','title':'农业银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'ccb','title':'建设银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'boc','title':'中国银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'comm','title':'交通银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'cmb','title':'招商银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'cmbc','title':'民生银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'cib','title':'兴业银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'spdb','title':'浦发银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'hxb','title':'华夏银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'ecitic','title':'中信银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'ceb','title':'光大银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'gdb','title':'广发银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'post','title':'中国邮政银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'sdb','title':'深发展银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'bea','title':'东亚银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'nb','title':'宁波银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'nb','title':'北京银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'pingan','title':'平安银行'},
                    {'imgurl':'user_img/bjyh.png','bankcode':'bjrcb','title':'北京农村商业银行'}
                ],
                HT:[
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ABC','title':'中国农业银行'},
                    {'imgurl':'user_img/zgnyyh.png','bankcode':'BOC','title':'中国银行'},
                    {'imgurl':'user_img/zgjsyh.png','bankcode':'BOCOM','title':'交通银行'},
                    {'imgurl':'user_img/zgyh.png','bankcode':'CCB','title':'中国建设银行'},
                    {'imgurl':'user_img/xy.png','bankcode':'ICBC','title':'中国工商银行'},
                    {'imgurl':'user_img/zsyh.png','bankcode':'PSBC','title':'中国邮政储蓄银行'},
                    {'imgurl':'user_img/msyh.png','bankcode':'CMBC','title':'招商银行'},
                    {'imgurl':'user_img/jtyh.png','bankcode':'SPDB','title':'浦发银行'},
                    {'imgurl':'user_img/pf.png','bankcode':'CEBBANK','title':'中国光大银行'},
                    {'imgurl':'user_img/hxyh.png','bankcode':'ECITIC','title':'中信银行'},
                    {'imgurl':'user_img/zx.png','bankcode':'PINGAN','title':'平安银行'},
                    {'imgurl':'user_img/gdyh.png','bankcode':'CMBCS','title':'中国民生银行'},
                    {'imgurl':'user_img/gf.png','bankcode':'HXB','title':'华夏银行'},
                    {'imgurl':'user_img/zgyz.png','bankcode':'CGB','title':'广发银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'BCCB','title':'北京银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'BOS','title':'上海银行'},
                    {'imgurl':'user_img/payh.png','bankcode':'CIB','title':'兴业银行'}
                ],
                YEE:[
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ICBC-NET-B2C','title':'工商银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'CMBCHINA-NET-B2C','title':'招商银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'CCB-NET-B2C','title':'建设银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'BOCO-NET-B2C','title':'交通银行[借]'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'CIB-NET-B2C','title':'兴业银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'CMBC-NET-B2C','title':'中国民生银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'CEB-NET-B2C','title':'光大银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'BOC-NET-B2C','title':'中国银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'PINGANBANK-NET-B2C','title':'平安银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ECITIC-NET-B2C','title':'中信银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'SDB-NET-B2C','title':'深圳发展银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'GDB-NET-B2C','title':'广发银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'SHB-NET-B2C','title':'上海银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'SPDB-NET-B2C','title':'上海浦东发展银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'HXB-NET-B2C','title':'华夏银行「借」'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'BCCB-NET-B2C','title':'北京银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'ABC-NET-B2C','title':'中国农业银行'},
                    {'imgurl':'user_img/zggsyh.png','bankcode':'POST-NET-B2C','title':'中国邮政储蓄银行「借」'},
                ],
                Money:{
                    man:'5000',
                    min:'0'
                }
            }
        },
        computed: {
            Recharge:function () {////url
                return this.$store.state.Recharge;
            }
        },
        mounted: function () {
            vm = this;
            this.$nextTick(function () {
                if(document.querySelector(".demo--radio") != null){
                    document.querySelector(".demo--radio").setAttribute('checked','checked');
                    vm.Money.min = document.querySelector(".demo--radio").getAttribute('data-min');
                    vm.Money.man = document.querySelector(".demo--radio").getAttribute('data-man');
                }
                vm.banklist(vm.checkbox())
            });
        },
        methods: {
            list:function (event) {
                vm.Money.min = event.currentTarget.lastChild.children[0].getAttribute('data-min');
                vm.Money.man = event.currentTarget.lastChild.children[0].getAttribute('data-man');
                vm.banklist(vm.checkbox())
            },
            banklist:function (box) {//获取银行列表
                vm.Online.list = null;
                switch (box) {
                    case 'YS':
                        vm.Online.list = vm.YS;
                        break;
                    case 'HS':
                        vm.Online.list = vm.HS;
                        break;
                    case 'SHB':
                        vm.Online.list = vm.SHB;
                        break;
                    case 'ZF':
                        vm.Online.list = vm.ZF;
                        break;
                    case 'TCP':
                        vm.Online.list = vm.TCP;
                        break;
                    case 'GST':
                        vm.Online.list = vm.GST;
                        break;
                    case 'MKT':
                        vm.Online.list = vm.MKT;
                        break;
                    case 'DDB':
                        vm.Online.list = vm.DDB;
                        break;
                    case 'BFT':
                        vm.Online.list = vm.BFT;
                        break;
                    case 'YEE':
                        vm.Online.list = vm.YEE;
                        break;
                    case 'HT':
                        vm.Online.list = vm.HT;
                        break;
//                    case 'DC':
//                        vm.Online.list = 'DC';
//                        break;
                    case 'XQ':
                        vm.Online.list = vm.XQ;
                        break;
//                    case 'JFK':
//                        vm.Online.list = 'JFK';
//                        break;
                    default:
                        vm.Online.list = box;
                }
            },
            checkbox:function () {//获取选中的input
                vm =this;
                let str=document.getElementsByName("Fruit");
                let objarray=str.length;
                let chestr="";
                for (let i=0;i<objarray;i++) {
                    if(str[i].checked == true) {
                        chestr=vm.Recharge.id === "5" ? str[i].getAttribute('id') : str[i].value;
                    }
                }
                return chestr;
            },
            submit:function () {//提交表单
                vm =this;
                let el,acounmt;
                el = vm.Recharge.id;
                acounmt = vm.$digital(vm.$refs.acounmt.value);
                if(acounmt === false){
                    vm.$store.dispatch("incesystemtext",'请输入金额，（有效数字）');
                    vm.$store.dispatch("inceation",'1');
                    return;
                }
                if(el === "5"){
                    vm.Online.amount = acounmt;
                    console.log(vm.Online);
//                    网银接口位置
                }else{
                    vm.bankcode.payId = vm.checkbox();
                    switch (el) {
                        case '6':
                            vm.bankcode.scancode = 'ali';
                            break;
                        case '7':
                            vm.bankcode.scancode = 'wx';
                            break;
                        case '8':
                            vm.bankcode.scancode = 'cft';
                            break;
                        default:
                            vm.bankcode.scancode = null;
                    }
//                    支付宝、财付通、微信，接口位置
                    vm.bankcode.acounmt = acounmt;
                    console.log(vm.bankcode)
                }
            }
        },
        created(){
            vm = this;
            if(vm.Recharge.id === undefined){
                vm.$router.push({path:'/DepositsChild'});
            }
        },
        components: {
            Top,
            Ruten
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "../../../static/css/style.less";
.Recharge{
    .title-header{
        padding:0 0.2rem;
        text-align: left;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.3rem;
        color:@text-c7;
    }
    .hit{
        padding:0 0.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        color:@text-c6;
        font-weight: 600;
        text-align: left;
        font-size: 0.3rem;
    }
    .pvw{
        .main{
            margin: 0.1rem 0;
            label{
                position: relative;
                display: block;
                width: 3rem;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.3rem;
                text-align: center;
                margin: 0 auto;
                color:@text-c6;
                .box-sizing;
                .border(3px);
                .border-box(1px,@border-c2);
                input[type='radio']{
                    position: absolute;
                    left:0.2rem;
                    top:0.2rem;
                }
                .demo--radioInput{
                    left:0.1rem;
                    top:0.1rem;
                }
            }
        }
    }
    .item{

        height: 0.8rem;
        border-top:1px solid @border-c2;
        border-bottom:1px solid @border-c2;
        .box-sizing;
        background: @bg-c5;
        input{
            margin-top: 0.07rem;
            height: 0.6rem;
            width: 100%;
            padding-left: 0.35rem;
            font-size: 0.3rem;
            color:@text-c2;
            outline: none;
            background: @bg-c5;
        }

    }
    .item-selct{
        height: 0.6rem;
        text-align: left;
        padding-left: 0.3rem;
        background: @bg-c5;
        select{
            height: 0.5rem;
            margin-top: 0.03rem;
            width: 3rem;
            .border-box(1px,@border-c2)
        }
    }
}
</style>