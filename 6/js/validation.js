var Judgmentname=false;
var Judgmentpass=false;
var Judgmentre_pass=false;
var Judgmentcode=false;
var Judgmentreal_name=false;
var Judgmentmobile=false;
var regUsername = function(obj,next){//用户名验证
	obj.focus(function(){
		next.empty()
		var text = "&nbsp;请输入<strong class='star'>5-12个字元</strong>, 仅可输入英文字母以及数字的组合!!"
	    next.append(text);
	})
	obj.blur(function(){
		if(!/^[A-Za-z](?![a-zA-Z]+$)[0-9A-Za-z]{4,12}$/.test(obj.val())){
			next.empty()
			var text = "&nbsp;请输入<strong class='star'>4-12个字元</strong>, 非数字开头，5-10位字母，数字组成!!"
		    next.append(text);
		    Judgmentname=false;
		}else{

			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentname=true;
		    
		}
	})
}
var regpass = function(obj,next){//密码验证
	obj.focus(function(){
		next.empty()
		var text = "&nbsp;须为<strong class='star'>6~15个</strong>数字和字母的组合!!"
	    next.append(text);
	})
	obj.blur(function(){
		if(!/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i.test(obj.val())){
			next.empty()
			var text = "&nbsp;须为<strong class='star'>6~15个</strong>数字和字母的组合!!"
		    next.append(text);
		    Judgmentpass=false;
		}else{

			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentpass=true;
		    
		}
	})
}
var regre_pass = function(obj,next,pass){//确认密码验证
	obj.focus(function(){
		next.empty()
		var text = "&nbsp;须为<strong class='star'>6~15个</strong>数字和字母的组合!!"
	    next.append(text);
	})
	obj.blur(function(){
		if(obj.val() === pass.val() && obj.val() != ""){
			next.empty() 
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentre_pass=true;
		}else if(obj.val() == ''){
			next.empty()
			var text = "&nbsp;须为<strong class='star'>6~15个</strong>数字和字母的组合!!"
		    next.append(text);
		    Judgmentre_pass=false;
		}else if(obj.val() != pass.val()){
			next.empty()
			var text = "&nbsp;<strong class='star'>密码不一致</strong>"
		    next.append(text);
		    Judgmentre_pass=false;
		}
	})
}
var regcode = function(obj,next){//验证码
	obj.focus(function(){
		next.empty()
		var text = "&nbsp;请输入验证码"
	    next.append(text);
	})
	obj.blur(function(){
		if(obj.val().length != 4){
			next.empty()
			var text = "&nbsp;<strong class='star'>验证不通过，请正确填写验证码</strong>"
		    next.append(text);
		    Judgmentcode=false;
		}else{

			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentcode=true;
		    
		}
	})
}
var regz_sUsername = function(obj,next){//用户名 验证
	obj.focus(function(){
		next.empty()
		var text = "&nbsp;必须与您的银行帐户名称相同，否则不能出款!"
	    next.append(text);
	})
	obj.blur(function(){
		if(!/^[\u4e00-\u9fa5]{2,7}$/.test(obj.val())){
			next.empty()
			var text = "&nbsp;验证不通过,请填写中文，范围在<strong class='star'>2~7</strong>,位之间"
		    next.append(text);
		    Judgmentreal_name=false;
		}else{
			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentreal_name=true;
		}
	})
}
var regmobile = function(obj,next){//用户名验证
	obj.focus(function(){
		next.empty()
		var text = "&nbsp;请输入有效的手机号码"
	    next.append(text);
	})
	obj.blur(function(){
		if(!/^1[3|4|5|7|8][0-9]{9}$/.test(obj.val())){
			next.empty()
			var text = "<strong class='star'>&nbsp;请输入有效的手机号码</strong>"
		    next.append(text);
		    Judgmentmobile=false;
		}else{
			next.empty()
			var text = "<strong class='starok'>&nbsp;OK</strong>"
		    next.append(text);
		    Judgmentmobile=true;
		}
	})
}

