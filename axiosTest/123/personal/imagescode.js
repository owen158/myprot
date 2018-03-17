function ClickSports() {
		tanchu('#denglu1');
    }
   // 页面弹窗登录
   function changeImg() {   
       var imgSrc = $("#imgObj");
       var src = imgSrc.attr("src");   
       imgSrc.attr("src", xpj_src+"validateCode?timesp"+(new Date()).valueOf());   
   }   
   //注册页面验证码刷新图片
   function changeImg_zc() {   
       var imgSrc_zc= $("#imgObj_zc");   
       var src_zc = imgSrc_zc.attr("src");   
       imgSrc_zc.attr("src", xpj_src+"validateCode?timesp"+(new Date()).valueOf());   
   }   
   
 //页面弹窗登录
function changeImg_zcn() {   
       var imgSrc_zcn= $("#imgObj_zcn");   
       var src_zcn= imgSrc_zcn.attr("src");   
       imgSrc_zcn.attr("src", xpj_src+"validateCode?timesp"+(new Date()).valueOf());   
   }   
   
 
