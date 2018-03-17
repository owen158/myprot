/**
 * Created by Administrator on 2017/4/30.
 */
var verification;
function money(t) {//金额验证
    if(t == ""){
        alert('请输入金额');
        return verification = false;
    }else if(t <100){
        alert('充值金额不能小于100');
        return verification=false;
    }else if(t > 500000){
        alert('充值金额不能大于500000');
        return verification=false;
    }else{
        return verification = true;
    }
}
function air(t) {
   if(t == ''){
       return verification = false;
   }else{
       return verification = true;
   }
}
function code(t) {//金额验证
    if(t == ""){
        alert('请输入验证码');
        return verification = false;
    }else if(t.length != 4){
        alert('验证码有误，请从新输入');
        return verification = false;
    }else{
        return verification = true;
    }
}
