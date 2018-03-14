/**
 * 内网地址 192.168.0.61:393
 */

/**
 * cagent 代理号
 * 内网 BL1
 * 外网  :（TXC）
 */
let cagent =document.location.host.slice(0,7)  === "192.168" ? 'BL1' : 'TXC';
/**
 * 内网API XPJ
 * 外网API 使用平台代理号
 * @type {string}
 */
var databases ='http://192.168.0.61:393/XPJ/';
var Reg={
	cagent:'BL1',
	username:/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/,//用户名
    pass:/^[0-9A-Za-z]{6,12}$/,//密码
    realName:/^[\u4e00-\u9fa5]{2,4}$/,//真实姓名
    mobile:/^1[3|4|5|7|8][0-9]{9}$/,//手机号
    code:/^[0-9]{4}$/,//验证码
    qkpwd:/^[0-9]{4}$/,//取款密码
    email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    card:/^[0-9A-Za-z]{15,19}$/,//卡号
    cardNum:/^[0-9]{4,19}$/,
    src:databases,
    ClickAjax:function($_,src,data,callback){
    	Reg.ajax($_,"checklogin.do",{},function(calls){
    		if (calls.msg == "faild") {
				console.log(123)
            } else if (calls.msg == "islogin") {
            	console.log(456)
            } else if (calls.msg == "success") {
				Reg.ajax($_,src,data,function(obj){
				 	return callback(obj)
				})
            }
    	})
    },
    ajax:function($_,src,data,callback){
    	$_.ajax(databases+src,{
    		data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers: {'Referer': Reg.src},              
			success:function(data){
				return callback(data)
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
    },
    daytime:function(time){
    	let tody = new Date();
        let day = tody.getTime()- parseFloat(time) * 60 * 60 * 24;
        let t =  new Date(day);
        let year,month,days,Hours,Minutes,Seconds;
        year = t.getFullYear() < 10 ? '0' +t.getFullYear() : t.getFullYear();   
        month = t.getMonth()+1 < 10 ? '0' + (t.getMonth()+1) : t.getMonth()+1;
        days = t.getDate() < 10 ? '0' + t.getDate() : t.getDate(); 
        Hours = t.getHours() < 10 ? '0' + t.getHours() : t.getHours(); 
        Minutes = t.getMinutes() < 10 ? '0' +t.getMinutes() : t.getMinutes();
        Seconds = t.getSeconds() < 10 ? '0' + t.getSeconds() : t.getSeconds();
        return year+'-'+month +'-'+days + ' ' + Hours + ':' + Minutes + ':' + Seconds;
    },
    franttime:function(time) {//时间搓转换
        var date,Y ,M,D,h,m,s;
        date = new Date(time);
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = (date.getHours()<10? '0'+ date.getHours():date.getHours())+ ':';
        m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':';
        s = (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds());
        var fommat_time = Y + M + D + h + m + s;
        return fommat_time;
    },
}
