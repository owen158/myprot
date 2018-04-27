/**
 *    2018/3/18.
 *  作者： bug
 */
/**
 *    2018/1/2.
 *  作者： bug
 */
var Pay={};
// object

// Pay=[]
Pay.fix = function () {
    var html = document.documentElement;
    var ww = window.innerWidth;
    html.style.fontSize = ww / 7.5 + "px";
}
Pay.fix();
window.onresize = function () {
    Pay.fix();
};



//支付商银行列表
Pay.CARDLISTS = {
    QFT: [
        {bankcode: "102", title: "中国工商银行"},
        {bankcode: "103", title: "中国农业银行"},
        {bankcode: "104", title: "中国银行"},
        {bankcode: "105", title: "中国建设银行"},
        {bankcode: "302", title: "中信银行"},
        {bankcode: "309", title: "兴业银行"},
        {bankcode: "403", title: "中国邮政储蓄"},
        {bankcode: "308", title: "招商银行"},
        {bankcode: "306", title: "广发银行"},
        {bankcode: "303", title: "光大银行"},
        {bankcode: "307", title: "平安银行"},
        {bankcode: "301", title: "交通银行"},
        {bankcode: "305", title: "民生银行"},
        {bankcode: "370", title: "北京银行"},
        {bankcode: "304", title: "华夏银行"},
        {bankcode: "390", title: "南京银行"},
        {bankcode: "502", title: "东亚银行"},
        {bankcode: "310", title: "浦发银行"},
        {bankcode: "420", title: "上海银行"},
        {bankcode: "430", title: "兰州银行"},
        {bankcode: "319", title: "徽商银行"},
        {bankcode: "450", title: "青岛银行"},
        {bankcode: "460", title: "浙江银行"},
        {bankcode: "201", title: "国家开发银行"},
        {bankcode: "202", title: "中国进出口银行"},
        {bankcode: "203", title: "中国农业发展银行"},
        {bankcode: "318", title: "渤海银行"},
        {bankcode: "402", title: "北京农商银行"},
        {bankcode: "512", title: "宁波银行"},
        {bankcode: "514", title: "杭州银行"}
    ],
    GC: [
        {bankcode: "102", title: "中国工商银行"},
        {bankcode: "103", title: "中国农业银行"},
        {bankcode: "103", title: "中国农业发展银行"},
        {bankcode: "104", title: "中国银行"},
        {bankcode: "105", title: "中国建设银行"},
        {bankcode: "106", title: "中信银行"},
        {bankcode: "309", title: "兴业银行"},
        {bankcode: "403", title: "中国邮政储蓄银行"},
        {bankcode: "310", title: "招商银行"},
        {bankcode: "320", title: "广发银行"},
        {bankcode: "340", title: "平安银行"},
        {bankcode: "350", title: "交通银行"},
        {bankcode: "360", title: "中国民生银行"},
        {bankcode: "370", title: "北京银行"},
        {bankcode: "380", title: "华夏银行"},
        {bankcode: "390", title: "南京银行"},
        {bankcode: "400", title: "东亚银行"},
        {bankcode: "410", title: "浦发银行"},
        {bankcode: "420", title: "上海银行"},
        {bankcode: "430", title: "兰州银行"}
    ],
    YS: [
        {bankcode: "1031000", title: "农业银行"},
        {bankcode: "1021000", title: "工商银行"},
        {bankcode: "1051000", title: "建设银行"},
        {bankcode: "3012900", title: "交通银行"},
        {bankcode: "1041000", title: "中国银行"},
        {bankcode: "3085840", title: "招商银行"},
        {bankcode: "3051000", title: "民生银行"},
        {bankcode: "3031000", title: "光大银行"},
        {bankcode: "3131000", title: "北京银行"},
        {bankcode: "3071000", title: "平安银行"},
        {bankcode: "3222900", title: "上海农村商业银行"},
        {bankcode: "3093910", title: "兴业银行"},
        {bankcode: "4031000", title: "中国邮政"},
        {bankcode: "3102900", title: "浦发银行"},
        {bankcode: "3021000", title: "中信银行"},
        {bankcode: "3065810", title: "广发银行"},
        {bankcode: "3133010", title: "南京银行"},
        {bankcode: "3133320", title: "宁波银行"},
        {bankcode: "5021000", title: "东亚银行"}
    ],
    HS: [
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "BOCM", title: "交通银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "CITIC", title: "中信银行"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "PAYH", title: "平安银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "PSBC", title: "邮储银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "SHBANK", title: "上海银行"}
    ],
    SHB: [
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BCOM", title: "交通银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "CEBB", title: "光大银行"},
        {bankcode: "BOB", title: "北京银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "NBB", title: "宁波银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "PSBC", title: "中国邮政银行"},
        {bankcode: "SPABANK", title: "平安银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "HZB", title: "杭州银行"},
        {bankcode: "GDB", title: "广发银行"}
    ],
    ZF: [
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BCOM", title: "交通银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "CEBB", title: "光大银行"},
        {bankcode: "BOB", title: "北京银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "NBB", title: "宁波银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "PSBC", title: "中国邮政"},
        {bankcode: "SPABANK", title: "平安银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "HZB", title: "杭州银行"},
        {bankcode: "GDB", title: "广发银行"}
    ],
    TCP: [
        {bankcode: "POST", title: "邮政储蓄银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "ABC", title: "中国农业银行"},
        {bankcode: "CEB", title: "中国光大银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "PINGANBANK", title: "平安银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "BOCO", title: "交通银行"},
        {bankcode: "CMBC", title: "中国民生银行"},
        {bankcode: "CMBCHINA", title: "招商银行"},
        {bankcode: "BCCB", title: "北京银行"}
    ],
    DDB: [
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BCOM", title: "交通银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "CEBB", title: "光大银行"},
        {bankcode: "BOB", title: "北京银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "NBB", title: "宁波银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "PSBC", title: "中国邮政银行"},
        {bankcode: "SPABANK", title: "平安银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "HZB", title: "杭州银行"},
        {bankcode: "GDB", title: "广发银行"}
    ],
    GST: [
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "PSBC", title: "中国邮政银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "BCOM", title: "交通银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CEBB", title: "光大银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "SPABANK", title: "平安银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "GDB", title: "广发银行"}
    ],
    MKT: [
        {bankcode: "ABC", title :"农业银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "BOCOM", title: "交通银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "PSBC", title: "中国邮政银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CEBBANK", title: "光大银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "PINGAN", title: "平安银行"},
        {bankcode: "CMBCS", title: "民生银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "BOS", title: "上海银行"},
        {bankcode: "CIB", title: "兴业银行"}
    ],
    BFT: [
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "COMM", title: "交通银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "GDB", title: "广发银行"},
        {bankcode: "CNCB", title: "中信银行"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "PSBC", title: "中国邮政银行"},
        {bankcode: "PAB", title: "平安银行"},
        {bankcode: "BOBJ", title: "北京银行"},
        {bankcode: "BONB", title: "宁波银行"}
    ],
    XQ: [{bankcode: "icbc", title: "工商银行"},
        {bankcode: "abc", title: "农业银行"},
        {bankcode: "ccb", title: "建设银行"},
        {bankcode: "boc", title: "中国银行"},
        {bankcode: "comm", title: "交通银行"},
        {bankcode: "cmb", title: "招商银行"},
        {bankcode: "cmbc", title: "民生银行"},
        {bankcode: "cib", title: "兴业银行"},
        {bankcode: "spdb", title: "浦发银行"},
        {bankcode: "hxb", title: "华夏银行"},
        {bankcode: "ecitic", title: "中信银行"},
        {bankcode: "ceb", title: "光大银行"},
        {bankcode: "gdb", title: "广发银行"},
        {bankcode: "post", title: "中国邮政银行"},
        {bankcode: "sdb", title: "深发展银行"},
        {bankcode: "bea", title: "东亚银行"},
        {bankcode: "nb", title: "宁波银行"},
        {bankcode: "nb", title: "北京银行"},
        {bankcode: "pingan", title: "平安银行"},
        {bankcode: "bjrcb", title: "北京农村商业银行"}
    ],
    HT: [
        {bankcode: "ABC", title: "中国农业银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "BOCOM", title: "交通银行"},
        {bankcode: "CCB", title: "中国建设银行"},
        {bankcode: "ICBC", title: "中国工商银行"},
        {bankcode: "PSBC", title: "中国邮政储蓄银行"},
        {bankcode: "CMBC", title: "招商银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CEBBANK", title: "中国光大银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "PINGAN", title: "平安银行"},
        {bankcode: "CMBCS", title: "中国民生银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "BOS", title: "上海银行"},
        {bankcode: "CIB", title: "兴业银行"}
    ],
    YEE: [
        {bankcode: "ICBC-NET-B2C", title: "工商银行"},
        {bankcode: "CMBCHINA-NET-B2C", title: "招商银行"},
        {bankcode: "CCB-NET-B2C", title: "建设银行"},
        {bankcode: "BOCO-NET-B2C", title: "交通银行[借]"},
        {bankcode: "CIB-NET-B2C", title: "兴业银行"},
        {bankcode: "CMBC-NET-B2C", title: "中国民生银行"},
        {bankcode: "CEB-NET-B2C", title: "光大银行"},
        {bankcode: "BOC-NET-B2C", title: "中国银行"},
        {bankcode: "PINGANBANK-NET-B2C", title: "平安银行"},
        {bankcode: "ECITIC-NET-B2C", title: "中信银行"},
        {bankcode: "SDB-NET-B2C", title: "深圳发展银行"},
        {bankcode: "GDB-NET-B2C", title: "广发银行"},
        {bankcode: "SHB-NET-B2C", title: "上海银行"},
        {bankcode: "SPDB-NET-B2C", title: "上海浦东发展银行"},
        {bankcode: "HXB-NET-B2C", title: "华夏银行「借」"},
        {bankcode: "BCCB-NET-B2C", title: "北京银行"},
        {bankcode: "ABC-NET-B2C", title: "中国农业银行"},
        {bankcode: "POST-NET-B2C", title: "中国邮政储蓄银行「借」"}
    ],
    OK: [
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "BOCM", title: "交通银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "CTITC", title: "中信银行"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "SDB", title: "平安银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "PSBC", title: "邮储银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "SHBANK", title: "上海银行"},
        {bankcode: "BOHAI", title: "渤海银行"},
        {bankcode: "SHNS", title: "上海农商"}
    ],
    GH: [
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "BOCO", title: "交通银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "NJCB", title: "南京银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "PINGANBANK", title: "平安银行"},
        {bankcode: "CBHB", title: "渤海银行"},
        {bankcode: "HKBEA", title: "东亚银行"},
        {bankcode: "NBCB", title: "宁波银行"},
        {bankcode: "CTTIC", title: "中信银行"},
        {bankcode: "GDB", title: "广发银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "SPDB", title: "上海浦东发展银行"},
        {bankcode: "PSBS", title: "中国邮政"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "BJRCB", title: "北京农村商业银行"},
        {bankcode: "SRCB", title: "上海农商银行"},
        {bankcode: "SDB", title: "深圳发展银行"},
        {bankcode: "CZB", title: "浙江稠州商业银行"},
        {bankcode: "SRCB", title: "上海农商行"}
    ],
    KLT: [
        {bankcode: "cmb", title: "招商银行"},
        {bankcode: "icbc", title: "工商银行"},
        {bankcode: "ccb", title: "建设银行"},
        {bankcode: "abc", title: "农业银行"},
        {bankcode: "comm", title: "交通银行"},
        {bankcode: "boc", title: "中国银行"},
        {bankcode: "cmbc", title: "民生银行"},
        {bankcode: "pdb", title: "上海浦东发展银行"},
        {bankcode: "hxb", title: "华夏银行"},
        {bankcode: "cgb", title: "广东发展银行"},
        {bankcode: "cib", title: "兴业银行"},
        {bankcode: "ceb", title: "光大银行"},
        {bankcode: "citic", title: "中信银行"},
        {bankcode: "pingan", title: "平安银行"},
        {bankcode: "bob", title: "北京银行"},
        {bankcode: "bos", title: "上海银行"},
        {bankcode: "psbc", title: "邮政储蓄"}
    ],
    SYF: [
        {bankcode: "962", title: "中信银行"},
        {bankcode: "963", title: "中国银行"},
        {bankcode: "964", title: "中国农业银行"},
        {bankcode: "965", title: "中国建设银行"},
        {bankcode: "966", title: "中国工商银行（仅限工行手机签约客户）"},
        {bankcode: "967", title: "中国工商银行（全国范围）"},
        {bankcode: "968", title: "浙商银行"},
        {bankcode: "969", title: "浙江稠州商业银行"},
        {bankcode: "970", title: "招商银行"},
        {bankcode: "971", title: "邮政储蓄"},
        {bankcode: "972", title: "兴业银行"},
        {bankcode: "973", title: "顺德农村信用合作社" },
        {bankcode: "974", title: "深圳发展银行"},
        {bankcode: "975", title: "上海银行"},
        {bankcode: "976", title: "上海农村商业银行"},
        {bankcode: "977", title: "浦东发展银行"},
        {bankcode: "978", title: "平安银行"},
        {bankcode: "979", title: "南京银行"},
        {bankcode: "980", title: "民生银行"},
        {bankcode: "981", title: "交通银行"},
        {bankcode: "982", title: "华夏银行"},
        {bankcode: "983", title: "杭州银行"},
        {bankcode: "984", title: "广州市农村信用社|广州市商业银行" },
        {bankcode: "985", title: "广东发展银行"},
        {bankcode: "986", title: "光大银行"},
        {bankcode: "987", title: "东亚银行"},
        {bankcode: "988", title: "渤海银行"},
        {bankcode: "989", title: "北京银行"},
        {bankcode: "990", title: "北京农村商业银行"},
    ],
    TJF: [
        { bankcode: "ABC", title: "中国农业银行" },
        { bankcode: "BOC", title: "中国银行" },
        { bankcode: "CBHB", title: "渤海银行" },
        { bankcode: "CCB", title: "中国建设银行" },
        { bankcode: "CEB", title: "光大银行" },
        { bankcode: "CIB", title: "兴业银行" },
        { bankcode: "CMB", title: "招商银行" },
        { bankcode: "CMBC", title: "民生银行" },
        { bankcode: "CNCB", title: "中信银行" },
        { bankcode: "COMM", title: "交通银行" },
        { bankcode: "GDB", title: "广发银行" },
    ],
    JCF: [
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CMBCHINA", title: "招商银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "BOCO", title: "交通银行"},
        {bankcode: "CMBC", title: "中国民生银行"},
        {bankcode: "PINGANBANK", title: "平安银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "NJCB", title: "南京银行"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "SPDB", title: "上海浦东发展银行"},
        {bankcode: "POST", title: "中国邮政"},
        {bankcode: "CBHB", title: "渤海银行"},
        {bankcode: "HKBEA", title: "东亚银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "NBCB", title: "宁波银行"},
        {bankcode: "BJRCB", title: "北京农村商业银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CZ", title: "浙商银行"},
        {bankcode: "HZBANK", title: "杭州银行"},
        {bankcode: "NCBBANK", title: "南洋商业银行"},
        {bankcode: "SCCB", title: "河北银行"},
        {bankcode: "BOCDBANK", title: "成都银行"},
        {bankcode: "HKB", title: "汉口银行"}
    ],
    ZTB: [
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BCOM", title: "交通银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "CEBB", title: "光大银行"},
        {bankcode: "BOB", title: "北京银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "NBB", title: "宁波银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "PSBC", title: "中国邮政银行"},
        {bankcode: "SPABANK", title: "平安银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "HZB", title: "杭州银行"},
        {bankcode: "GDB", title: "广发银行"},
    ],
    RX: [
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "CMB", title: "招商银行"},
        {bankcode: "BCCB", title: "北京银行"},
        {bankcode: "BOCO", title: "交通银行"},
        {bankcode: "CIB", title: "兴业银行"},
        {bankcode: "NJCB", title: "南京银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "PINGANBANK", title: "平安银行"},
        {bankcode: "CBHB", title: "渤海银行"},
        {bankcode: "HKBEA", title: "东亚银行"},
        {bankcode: "NBCB", title: "宁波银行"},
        {bankcode: "CTTIC", title: "中信银行"},
        {bankcode: "GDB", title: "广发银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "SPDB", title: "上海浦东发展银行"},
        {bankcode: "PSBS", title: "中国邮政"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "BJRCB", title: "北京农村商业银行"},
        {bankcode: "SRCB", title: "上海农商银行"},
        {bankcode: "SDB", title: "深圳发展银行"},
        {bankcode: "CZB", title: "浙江稠州商业银行"},
    ],
    DD:[
        { bankcode: "POST", title: "中国邮政储蓄银行" },
        { bankcode: "ICBC", title: "中国工商银行" },
        { bankcode: "ECITIC", title: "中信银行" },
        { bankcode: "CCB", title: "中国建设银行" },
        { bankcode: "BOC", title: "中国银行" },
        { bankcode: "ABC", title: "中国农业银行" },
        { bankcode: "CEB", title: "中国光大银行" },
        { bankcode: "CGB", title: "广发银行" },
        { bankcode: "HXB", title: "华夏银行" },
        { bankcode: "SHB", title: "上海银行" },
        { bankcode: "BOCO", title: "交通银行" },
        { bankcode: "CMBC", title: "中国民生银行" },
        { bankcode: "BCCB", title: "北京银行" },
        { bankcode: "NBB", title: "宁波银行" },
        { bankcode: "SPDB", title: "浦发银行" },
        { bankcode: "HZB", title: "杭州银行" },
    ],
    SF:[
        {bankcode: "ABC", title: "中国农业银行"},
        {bankcode: "BOC", title: "中国银行"},
        {bankcode: "BOCOM", title: "交通银行"},
        {bankcode: "CCB", title: "中国建设银行"},
        {bankcode: "ICBC", title: "中国工商银行"},
        {bankcode: "PSBC", title: "中国邮政储蓄银行"},
        {bankcode: "CMBC", title: "招商银行"},
        {bankcode: "SPDB", title: "浦发银行"},
        {bankcode: "CEBBANK", title: "中国光大银行"},
        {bankcode: "ECITIC", title: "中信银行"},
        {bankcode: "PINGAN", title: "平安银行"},
        {bankcode: "CMBCS", title: "中国民生银行"},
        {bankcode: "HXB", title: "华夏银行"},
        {bankcode: "CGB", title: "广发银行"},
        {bankcode: "BJBANK", title: "北京银行"},
        {bankcode: "BOS", title: "上海银行"},
        {bankcode: "CIB", title: "兴业银行"},
    ],
    YJH:[
    	{bankcode: "BOC", title: "中国银行"},
        {bankcode: "ABC", title: "农业银行"},
        {bankcode: "CCB", title: "建设银行"},
        {bankcode: "ICBC", title: "工商银行"},
        {bankcode: "PSBC", title: "邮政储蓄"},
        {bankcode: "CEB", title: "光大银行"},
        {bankcode: "CITIC", title: "中信银行"},
        {bankcode: "CMBC", title: "民生银行"},
        {bankcode: "SHB", title: "上海银行"},
        {bankcode: "BOB", title: "北京银行"},
    ],
    WF:[
    	{bankcode: "ABC", title: "农业银行"},
    	{bankcode: "ICBC", title: "工商银行"},
    	{bankcode: "CCB", title: "建设银行"},
    	{bankcode: "BCOM", title: "交通银行"},
    	{bankcode: "BOC", title: "中国银行"},
    	{bankcode: "CMB", title: "招商银行"},
    	{bankcode: "CMBC", title: "民生银行"},
    	{bankcode: "CEBB", title: "光大银行"},
    	{bankcode: "BOB", title: "北京银行"},
    	{bankcode: "SHB", title: "上海银行"},
    	{bankcode: "NBB", title: "宁波银行"},
    	{bankcode: "HXB", title: "华夏银行"},
    	{bankcode: "CIB", title: "兴业银行"},
    	{bankcode: "PSBC", title: "中国邮政银行"},
    	{bankcode: "SPABANK", title: "平安银行"},
    	{bankcode: "SPDB", title: "浦发银行"},
    	{bankcode: "ECITIC", title: "中信银行"},
    	{bankcode: "HZB", title: "杭州银行"},
    	{bankcode: "GDB", title: "广发银行"},
    ],
    AN: [
        {'bankcode':'01040000','title':'中国银行'},
        {'bankcode':'01020000','title':'工商银行'},
        {'bankcode':'01050000','title':'建设银行'},
        {'bankcode':'03060000','title':'广发银行'},
        {'bankcode':'01000000','title':'邮储银行'},
        {'bankcode':'01030000','title':'农业银行'},
        {'bankcode':'03050000','title':'民生银行'},
        {'bankcode':'03030000','title':'光大银行'},
        {'bankcode':'04031000','title':'北京银行'},
        {'bankcode':'03010000','title':'交通银行'},
        {'bankcode':'04012900','title':'上海银行'},
    ]
};
//支付渠道
Pay.CHARGEARR = [
    {sum:21,list:{title:"网银支付",text: "Online payment", type: "5", url: "/Online", icon: "x-icon x-icon-Online",scancode:''}},
    {sum:22,list:{title:"扫码支付",text: "Scan Code", type: "66", url: "/ScanCodebankAlipay", icon: "x-icon x-icon-ScanCode",scancode:''}},
    {sum:23,list:{title:"微信支付",text: "Wechat transfer", type: "7", url: "/Wechat", icon: "x-icon x-icon-wechat",scancode:'wx'}},
    {sum:24,list:{title:"支付宝支付",text: "Alipay transfer", type: "6", url: "/Alipay", icon: "x-icon x-icon-Alipay",scancode:'ali'}},
    {sum:25,list:{title:"财付通支付",text: "TenPay transfer", type: "8", url: "/TenPay", icon: "x-icon x-icon-tenpay",scancode:'cft'}},
    {sum:26,list:{title:"京东支付",text: "Jingdong pay", type: "12", url: "/jdsm", icon: "x-icon x-icon-jd",scancode:'jd'}},
    {sum:27,list:{title:"银联扫码",text: "UnionPay Code", type: "10", url: "/BankScanCode", icon: "x-icon x-icon-ylsm",scancode:'yl'}},
    {sum:28,list:{title:"银行汇款",text: "Bank tranfer", type: "44", url: "/information", icon: "x-icon x-icon-Banktranfer",scancode:''}},
    {sum:29,list:{title:"快捷支付",text: "Quick payment", type: "14", url: "/kuaiJie", icon: "x-icon x-icon-kj",scancode:'kj'}},
    {sum:30,list:{title:'微信条码',text: "Wechat Code",type:'16',url:'/Recharge',icon:'x-icon x-icon-wechat-code',scancode:'wxtm'}},
    {sum:31,list:{title:'支付宝条码',text: "Alipay Code",type:'18',url:'/Recharge',icon:'x-icon x-icon-Alipay-code',scancode:'alitm'}},
];
//网银支付渠道
Pay.newOpenWindow = function(url,name, acounmt,id,code) {
    var src;
    var a = document.createElement('a');
    switch (name) {
        case "DC":
            src = url + "?bankcode=B2C&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "YEE":
            src = url + "?bankcode=MODE2C&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "JH":
            src = url + "?bankcode=4&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "YLX":
            src = url + "?bankcode=04&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "XZF":
            src = url + "?bankcode=0&mobile=mobile&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "JFK":
            src = url + "?bankcode=1003&appSence=1002&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "AK":
            src = url + "?bankcode=H5_ONLINE_BANK_PAY&mobile=mobile&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "BFT":
            src = url + "?bankcode=" + code + "&mobile=WAP_PAY_B2C&acounmt=" + acounmt + "&payId=" + id;
            break;
        case "XQ":
        case "WF":
        case "GC":
            src = url + "?bankcode=" + code + "&mobile=mobile&acounmt=" + acounmt + "&payId=" + id;
            break;
        default:
            src=url +  "?bankcode=" + code + "&acounmt=" + acounmt + "&payId=" + id;
    }
    a.setAttribute('href', src);
    a.setAttribute('target', 'blank');
    a.setAttribute('id', src);
    // 防止反复添加
    if(!document.getElementById(src)){
        document.body.appendChild(a);
    }
    a.click();
};
// Pay.newOpenGame=function (src) {
//     var a = document.createElement('a');
//     a.setAttribute('href', src);
//     a.setAttribute('target', 'blank');
//     a.setAttribute('id', src);
//     // 防止反复添加
//     if(!document.getElementById(src)){
//         document.body.appendChild(a);
//     }
//     a.click();
// };
// Pay.GetRequest = function (value) {
//     var url = location.search; //获取url中"?"符后的字串
//     var theRequest = new Object();
//     if (url.indexOf("?") != -1) {
//         var str = url.substr(1);
//         var strs = str.split("&");
//         for(var i = 0; i < strs.length; i ++) {
//             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
//         }
//     }
//     if(value === 'app'){
//         for(let i in theRequest){
//             if(i === value){
//                 return theRequest[i] === 'true' ? false : true
//             }
//         }
//         return true;
//     }
// }