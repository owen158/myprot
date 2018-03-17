var Judgmentname=false;
var reguuidvalue;
var Judgmentpass=false;
var Judgmentre_pass=false;
var Judgmentcode=false;
var Judgmentreal_name=false;
var Judgmentmobile=false;

var regUsername = function(obj,next){//用户名验证
	obj.blur(function(){
		if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/.test(obj.val())){
			next.empty()
			var text = "&nbsp;非数字开头，<strong class='star'>5-10</strong>, 位字母，数字组成";
		    next.append(text);
		    Judgmentname=false;
            reguuidvalue =false
		}else{
			next.empty();
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentname=true;
            reguuidvalue =true;

		}
	})
}
var regpass = function(obj,next){//密码验证
	obj.blur(function(){
		if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{7,15}$/.test(obj.val())){
			next.empty()
			var text = "&nbsp;非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成"
		    next.append(text);
		    Judgmentpass=false;
            reguuidvalue =false
		}else{
			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentpass=true;
            reguuidvalue =true;

		}
	})
}
var regre_pass = function(obj,next,pass){//确认密码验证
	obj.blur(function(){
		if(obj.val() === pass.val() && obj.val() != ""){
			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentre_pass=true;
            reguuidvalue =true;
		}else if(obj.val() == ''){
			next.empty()
			var text = "&nbsp;非数字开头，<strong class='star'>8-15</strong>, 位字母，数字组成"
		    next.append(text);
		    Judgmentre_pass=false;
            reguuidvalue =false;
		}else if(obj.val() != pass.val()){
			next.empty()
			var text = "&nbsp;<strong class='star'>密码不一致</strong>"
		    next.append(text);
		    Judgmentre_pass=false;
            reguuidvalue =false;
		}
	})
}
var regcode = function(obj,next){//验证码
	obj.blur(function(){
		if(obj.val().length != 4){
			next.empty()
			var text = "&nbsp;<strong class='star'>请输入验证码</strong>"
		    next.append(text);
		    Judgmentcode=false;
            reguuidvalue =false;
		}else{
			next.empty();
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentcode=true;
            reguuidvalue =true;

		}
	})
}
var regz_sUsername = function(obj,next){//用户名 验证
	obj.blur(function(){
		if(!/^[\u4e00-\u9fa5]{2,4}$/.test(obj.val())){
			next.empty()
			var text = "&nbsp;必须为<strong class='star'>2-4</strong>,位中文"
		    next.append(text);
		    Judgmentreal_name=false;
            reguuidvalue =false;
		}else{
			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentreal_name=true;
            reguuidvalue =true;
		}
	})
}
var regmobile = function(obj,next){//手机号验证
	obj.blur(function(){
		if(!/^1[3|4|5|7|8][0-9]{9}$/.test(obj.val())){
			next.empty()
			var text = "<strong class='star'>&nbsp;请输入真实的手机号码</strong>"
		    next.append(text);
		    Judgmentmobile=false;
            reguuidvalue =false;
		}else{
			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentmobile=true;
            reguuidvalue =true;
		}
	})
}

