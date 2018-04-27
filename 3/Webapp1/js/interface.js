//function interface(){
//	
//}
Function.prototype.method = function(name, fn) {
	this.prototype[name] = fn;
	return this;
}

var interface =function(){
	this.judgment=false;
	this.errors='';
}
//interface.method('logins',function(obj){
//	if(!/^[A-Za-z0-9]{4,10}$/.test(obj.tname)) {
//		return callback('请输入手机号/用户名');
//		this.errors = 
//		this.judgment = false;
//	}
//	if(!/^[0-9A-Za-z]{6,12}$/.test(obj.tpwd)) {
//		return callback('密码最短为 6 个字符');
//	}
//})
