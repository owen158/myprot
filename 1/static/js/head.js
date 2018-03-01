/**
 * Created by Administrator on 2017/4/10.
 */
var head={};
head.fix=function(){
    var html=document.documentElement;
    var ww=window.innerWidth;
    html.style.fontSize=ww/7.5+"px";
}
head.fix();
window.onresize=function(){
    head.fix();
}