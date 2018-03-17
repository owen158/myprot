app.directive("accordionSlider",["$compile",function(n){var t={pagerIndex:0,pagerSum:0,displaySlides:0,slidesSum:0,slideName:[],pagerHtml:"",slideState:[],changeSlide:{}},r=function(n,t){return n-(t-1)},u=function(n){var u=/\$\{pageID\}/g,e=n.pagerHtml,f="<span ng-click=\"changePager(${pageID})\" ng-class=\"{'active':selectPager=='${pageID}'}\"><\/span>",i=">",r=Math.ceil(n.slidesSum/n.displaySlides),t;for(n.pagerSum=r,t=0;t<r;t++){if(t+1===r)return i=i+f.replace(u,t)+"<",n.pagerHtml.replace(/\>\</,i);i=i+f.replace(u,t)}},i=function(n){var f=t.pagerIndex,i,u;for(t.pagerIndex=n,i=n*t.displaySlides,n+1===t.pagerSum&&(i=r(t.slidesSum,t.displaySlides)-1),u=0;u<t.slideState.length;u++)t.slideState[u]=u===i||u>i&&u<i+t.displaySlides?!0:!1,u+1===t.slideState.length&&(f>t.pagerIndex&&(i=i+t.displaySlides-1),t.changeSlide(i))};return{restrict:"A",link:function(r,f,e){var v=parseInt(e.accordionDisplaySlide||7,10),o=e.accordionSlideTag||"li.slide",c=e.accordionPagerTag||".pagers",k=e.accordionActive||"active",l=e.accordionUnactive||"unactive",y=e.accordionAttrName||"silde-name",p=e.accordionScopeName||"selectItem",w=parseInt(e.accordionHoverWidth,10)||260,s=angular.element(f),h=angular.element(f.find(o)),b=angular.element(f.find(c))[0].outerHTML,a;t={pagerIndex:0,displaySlides:v,slidesSum:h.length,pagerHtml:b,slideName:[],slideState:[],changeSlide:function(n){r.selectPager=t.pagerIndex;for(var i=0;i<t.slideState.length;i++)t.slideState[i]?angular.element(f.find(o)[i]).removeClass(l):angular.element(f.find(o)[i]).addClass(l);r[p]=t.slideName[n]}},function(n){for(var i=0;i<n.length;i++)t.slideName.push(n[i].attributes[y].value),t.slideState.push(!1)}(h);s.css({width:w*h.length+"px"});angular.element(s.parent()).css({overflow:"hidden"});r.changePager=i;angular.element(f.find(c)).remove();a=u(t);s.append(angular.element(n(a)(r)));i(0)}}}]);app.directive("capitalize",[function(){return{restrict:"A",require:"?ngModel",link:function(n,t,i,r){function u(n){if(n){var t=n.toUpperCase();return t!=n&&(r.$setViewValue(t),r.$render()),t}}r&&r.$parsers.push(u)}}}]);app.directive("carouselSlider",["$timeout","$compile",function(n,t){var i=[],r=!0;return{restrict:"A",priority:451,compile:function(){return{pre:function(n,t,r){r.ngInit&&(i.push(r.ngInit),r.ngInit="")},post:function(n,u,f){$(u).slide({mainCell:".main-cell >",autoPage:!1,effect:f.superEffect||"leftLoop",autoPlay:!(f.superPlay==="false"),vis:parseInt(f.superVis)||5,trigger:"click",mouseOverStop:!1,opp:!1,startFun:function(u,f,e,o,s){var h,c;if(r){for(h=0;h<i.length;h++)n.$eval(i[h]);r=!1}c=t(s.html())(n);s.empty().append(c)}})}}}}}]);app.directive("checkcodeDisplay",["$parse","captchaService",function(n,t){return{restrict:"A",link:function(i,r,u){var e=n(u.checkcodeDisplay),o=e.assign,f=function(){t.post().success(function(n,t){o(i,{encrypt:n,image:t})})};$(window).on("load",f);$(r).next("img").on("click",f);i.$on("$destroy",function(){$(window).off("load",f);$(r).next("img").off("click",f)})}}}]);app.directive("checkcodeRetriever",["$parse","captchaService",function(n,t){return{restrict:"A",link:function(i,r,u){var e=n(u.checkcodeRetriever),o=e.assign,f=function(){t.post().success(function(n,t){o(i,{encrypt:n,image:t})})};r.on("focus",f);r.on("mousedown",f);i.$on("$destroy",function(){r.off("focus",f);r.off("mousedown",f)})}}}]);app.directive("closePopupOnClick",["$window",function(n){return{restrict:"A",link:function(t,i){i.on("click",function(){n.close()});t.$on("$destroy",function(){i.off("click")})}}}]);app.directive("datepicker",["$timeout","$parse",function(n,t){var i=angular.copy($.fn.datepicker.defaults);return{restrict:"A",require:"?^ngModel",scope:{value:"&datepickerSetValue"},link:function(r,u,f){var l=t(f.ngModel),o=l.assign,e=f.datepickerOptions,h,s,c;if(e&&(e=e.replace(/'/g,'"'),e=angular.fromJson(e)),e=angular.extend(angular.copy(i),e||{}),h=$(u).datepicker(e),this.value=null,s=this,c=r.$watch("value",function(t){var i=t()||null;angular.equals(i,s.value)||(s.value=i,$(u).datepicker("setValue",i),o&&n(function(){o(r.$parent,$(u).val())}))}),o)h.on("changeDate",function(){var n=$(u).val();o(r.$parent,n)});r.$on("$destroy",function(){c()})}}}]);app.directive("datepickerui",["$parse",function(n){return function(t,i,r){var u=n(r.ngModel);$(i).datepicker({inline:!0,dayNames:["日","一","二","三","四","五","六"],dayNamesMin:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],altFormat:"yy/mm/dd",dateFormat:"yy/mm/dd",changeYear:!0,changeMonth:!0,yearRange:"1900:",showOptions:{direction:"up"},onSelect:function(n){t.$apply(function(t){u.assign(t,n)})}})}}]);app.directive("datetimepicker",["$parse",function(n){return function(t,i,r){var u=n(r.ngModel);$(i).datetimepicker({lang:"zh",format:"Y/m/d H:i:00",step:30,defaultSelect:!0,timepickerScrollbar:!1})}}]);app.directive("digital",["$interval",function(n){function t(n,t){return Math.floor(Math.random()*(t-n+1)+n)}return{restrict:"AE",link:function(i,r,u){var f=parseInt(u.digitalMin),h=parseInt(u.digitalMax),c=parseInt(u.time)?parseInt(u.time):t(1e3,5e3),s=u.word?u.word:"",e=$(r)[0].hasAttribute("not-point")?"":"."+t(10,99),l=$(r)[0].hasAttribute("one-digital"),o;o=$(r)[0].hasAttribute("not-thousandth")?function(n){return n}:function(n){for(var t=n.toString(),i=/(\d+)(\d{3})/;i.test(t);)t=t.replace(i,"$1,$2");return t};l&&(e="."+t(1,9));$(r)[0].hasAttribute("add")?($(r).html(s+o(f)+e),n(function(){var n=t(1,10);f+=n;$(r).html(s+o(f)+e)},c)):($(r).html(s+o(t(f,h))+e),n(function(){$(r).html(s+o(t(f,h))+e)},c))}}}]);app.directive("disableOnSubmit",[function(){return{restrict:"A",link:function(n,t,i){var r=i.disableOnSubmit,u=t.parents("form"),f;if(u.length){f=u[0];$(f).on("submit",function(){if(t.attr("disabled","disabled"),r){var n=$(t).children("span");n&&n.length?n.text(r):t.text(r)}})}}}}]);app.directive("equalOrLessThan",function(){return{restrict:"A",require:"?ngModel",link:function(n,t,i,r){function u(t){var u=n.$eval(i.equalOrLessThan);return(angular.isNumber(u)||(u=Infinity),!r.$isEmpty(t)&&t>u)?(r.$setValidity("equalOrLessThan",!1),undefined):(r.$pristine||r.$setValidity("equalOrLessThan",!0),t)}r&&r.$parsers.push(u)}}});app.directive("equalOrMoreThan",function(){return{restrict:"A",require:"?ngModel",link:function(n,t,i,r){function u(t){var u=n.$eval(i.equalOrMoreThan);return(angular.isNumber(u)||(u=-Infinity),!r.$isEmpty(t)&&t<u)?(r.$setValidity("equalOrMoreThan",!1),undefined):(r.$pristine||r.$setValidity("equalOrMoreThan",!0),t)}r&&r.$parsers.push(u)}}});app.directive("focusOn",["$timeout","$parse",function(n,t){return{restrict:"A",link:function(i,r,u){function a(){var t=h(i),u=l(i);angular.isString(t)&&angular.equals(t,o)&&!angular.equals(t,u)&&(e(i,t),n(function(){r[0].focus()}))}var o=u.name,f;if(o){var s=u.focusOn+".target",h=t(s),v=h.assign,c=u.focusOn+"._focused",l=t(c),e=l.assign;e(i,null);t(u.focusOn+".focus").assign(i,function(t){n(function(){e(i,null);v(i,t)})});f=[];f.push(i.$watch(s,a));f.push(i.$watch(c,a));i.$on("$destroy",function(){angular.forEach(f,function(n){n()})})}}}}]);app.directive("fromNow",["$timeout",function(n){return{scope:{fromNow:"="},link:function(t,i){function f(){var t=moment(new Date($("#span-meiDonNow").text()));i.text(moment(u).from(t));r=n(f,6e4)}var r,u;t.$watch("fromNow",function(t){t&&(r&&(n.cancel(r),r=null),u=t,f())})}}}]);app.directive("historyScrolled",["$window","$timeout",function(n,t){return{restrict:"A",link:function(i,r,u){var e=null,f=angular.element(n),o=function(){if(!i.complete&&!e){var n=f.height()+f.scrollTop(),o=r.offset().top+r.height(),s=o-n,h=s<=f.height();h&&(e=t(function(){i.$apply(u.historyScrolled);e=null}))}};f.on("scroll",o);i.$on("$destroy",function(){return f.off("scroll",o)})}}}]);app.directive("loginBb",["$http","$window",function(n,t){var i=null;return{restrict:"A",link:function(r,u,f){var e=(f.loginBb?f.loginBb.toLowerCase():null)==="true";if(!e){u.addClass("disabled");return}u.on("click",function(){var u,r,f;if(e){if(i&&!i.closed){i.focus();return}u=i=null;r=null;try{u=i=t.open("","bblobby","resizable,scrollbars=yes");u.focus();r=u.document}catch(o){return}r.writeln('<html><head><title><\/title><\/head><body><form id="form" style="display: none;"><\/form><\/body><\/html>');r.close();f=r.getElementById("form");n.post("/Account/LoginToBB").success(function(n){var i,e,o,t;if(n.IsSuccess){i=n.ReturnObject.ParameterList;for(e in i)o=i[e],o&&(t=r.createElement("input"),$(t).attr("name",e),$(t).attr("value",o),f.appendChild(t));$(f).attr("action",n.ReturnObject.Url);$(f).submit()}else u.location.href=n.Url})}else t.alert("尚未登入")})}}}]);app.directive("navActive",["$location",function(n){return{restrict:"A",link:function(t,i){t.location=n;var r=i.attr("href");r===location.pathname?i.parent().addClass("active"):i.parent().removeClass("active")}}}]);app.directive("newsManual",["$timeout",function(n){return{replace:!1,restrict:"A",template:'<div ng-repeat="news in newsBags track by $index" ng-click="newsClick()">{{news}}<\/div>',link:function(t,i,r){var o=$(i)[0].hasAttribute("news-up")?"up":"left",s=parseInt(r.newsSpeed),l=r.newsAssign,p=$(i)[0].hasAttribute("news-pager"),w=location.pathname==="/"?"/home":location.pathname.toLowerCase(),f,a,e,c,v,y;if(l&&l.split(" ").forEach(function(n){if(w==="/"+n.split("-")[0])return o=n.split("-")[1]||"left",s=parseInt(n.split("-")[2])||s,!1}),p){var b={fx:o==="up"?"carousel":"scrollHorz",carouselVertical:o==="up"?!0:!1,carouselVisible:1,slides:"> div",easing:"linear",prev:"#news-prev",next:"#news-next",pauseOnHover:!0,speed:s||500},u=[{fileName:"jquery.cycle2.js",fileSrc:"/CdnRedirect/Web.Portal/_Common/Scripts/jquery.cycle2.js"},{fileName:"jquery.cycle2.carousel.js",fileSrc:"/CdnRedirect/Web.Portal/_Common/Scripts/jquery.cycle2.carousel.js"}],h=document.getElementsByTagName("script");for(f=0;f<h.length;f++)for(a=h[f].src.slice(h[f].src.lastIndexOf("/")+1,h[f].src.length),e=0;e<u.length;e++)a===u[e].fileName&&u.splice(e,1);c=function(n){var t=document.createElement("script");t.type="text/javascript";t.src=n;document.body.appendChild(t)};u.length!==0&&(c(u[0].fileSrc),u[0].fileName==="jquery.cycle2.js"&&(v=setInterval(function(){$.fn.cycle&&(c(u[1].fileSrc),clearInterval(v))},50)));y=setInterval(function(){$.fn.cycle&&$.fn.cycle.transitions.carousel&&n(function(){i.cycle(b);clearInterval(y)})},50)}else n(function(){i.marquee({duration:s||12500,gap:50,delayBeforeStart:0,direction:o,duplicated:!1,pauseOnHover:!0})})}}}]);app.directive("popupOpener",["$parse","$window",function(n,t){return{restrict:"A",link:function(n,i,r){var u=r.device,f=u!=undefined&&u.toLowerCase()=="true"?!0:!1,e=r.popupOpenerOptions;i.on("click",function(){f?t.location=r.popupOpener:t.open(r.popupOpener,"_blank",e||"width=800,height=500,resizable,scrollbars=yes")});n.$on("$destroy",function(){i.off()})}}}]);app.directive("reloadOpener",["$window",function(n){return{restrict:"A",link:function(){n.opener&&n.opener.location.reload()}}}]);app.directive("scrollfollow",["$parse",function(){return{restrict:"A",link:function(n,t){var i=$(t).offset();$(window).on("load resize",function(){var n=$(window).height(),r=$(t).outerHeight()+i.top;n<r?$(t).hide():$(t).show()});$(window).on("scroll",function(){$(window).scrollTop()>i.top?$(t).stop().animate({top:$(document).scrollTop()+i.top}):$(t).stop().animate({top:i.top})})}}}]);app.directive("scrolltopFixed",[function(){return{restrict:"A",link:function(n,t,i){$(window).on("scroll",function(){var n=i.scrolltopFixed||0,r=$("body").width(),u=$(window).width();$(window).scrollTop()>n?$(t).addClass("ScrollTop"):$(t).removeClass("ScrollTop");r>u&&$(t).css("position")==="fixed"?$(window).scrollLeft()>0?$(t).css("left",-$(window).scrollLeft()):$(t).removeAttr("style"):$(t).removeAttr("style")})}}}]);app.directive("selectLanguage",["$http","$timeout",function(n,t){return{restrict:"A",link:function(i,r){var u=$(r),f=JSON.parse(sessionStorage.getItem("languageData"));i.currentLanguage=function(){for(var n,i="language=",r=document.cookie.split(";"),t=0,u=r.length;t<u;t++){for(n=r[t];n.charAt(0)==" ";)n=n.substring(1);if(n.indexOf(i)===0)return n.substring(i.length,n.length)}}();f?i.language=f:n.post("/Home/GetLanguages").success(function(n){i.language=n;sessionStorage.setItem("languageData",JSON.stringify(n))});t(function(){u.is("select")?u.change(function(){$.post("/ChangeLanguage",{language:$(this).val()}).done(function(){location.reload()})}):u.find("[data-language]").click(function(){$.post("/ChangeLanguage",{language:$(this).attr("data-language")}).done(function(){location.reload()})})})}}}]);app.directive("serviceClosed",[function(){return{restrict:"A",link:function(n,t){var i=$(t);i.on("click",function(){i.parents("aside").hide()})}}}]);app.directive("serviceNinja",[function(){return{restrict:"A",link:function(n,t,i){var r=t,u=i.serviceNinja?i.serviceNinja:"fast";r.on("click",function(){r.hasClass("accordion")?r.removeClass("accordion").nextAll("[ninja]").slideDown(u,"linear"):r.addClass("accordion").nextAll("[ninja]").slideUp(u,"linear")});n.$on("$destroy",function(){t.off()})}}}]);app.directive("slideMenu",[function(){return{restrict:"A",link:function(n,t,i){$(t).find(".subnav").parent().addClass("has-menu");var r=i.slideMenu,u=$(t).attr("time"),f=r?r:"slideDown",e=u?u:"300";$(t).slide({type:"menu",titCell:".has-menu",targetCell:".subnav",effect:f,delayTime:e})}}}]);app.directive("slideNavbg",[function(){return{restrict:"A",link:function(n,t,i){var u,h=location.pathname,f=$(t).children("ul"),e=f.children("li"),o=i.slideNavbg===""?100:parseInt(i.slideNavbg),s=$(t)[0].hasAttribute("return-current"),r;if(f.append("<li id='slide-block'><\/li>"),r=$("#slide-block"),e.each(function(){$(this).children("a").attr("href")===h&&(u=$(this).position().left)}),s){function s(){r.stop().animate({left:r.data("origLeft")})}}else function s(){return}r.css("left",u||0).data("origLeft",r.position().left);e.hover(function(){u=$(this).position().left;r.stop().animate({left:u},o)},function(){s()},o)}}}]);app.directive("superJackpot",["$filter",function(){function n(n){n=(Math.round(n*100)/100).toString().replace(/^(\d*)$/,"$1.");n=(n+"00").replace(/(\d*\.\d{2})\d*/,"$1");n=n.replace(".",",");for(var t=/(\d)(\d{3},)/;t.test(n);)n=n.replace(t,"$1,$2");return n.replace(/,(\d{2})$/,".$1")}return{restrict:"AE",link:function(t,i){var r=parseInt("6"+Math.floor(Math.random()*1e6));$(i).html(n(r));setInterval(function(){var t=Math.random()*1e3;r+=t;$(i).html(n(r))},Math.random()*2e4)}}}]);app.directive("toggleColor",[function(){return{restrict:"A",link:function(n,t,i){var r=$(t);r.addClass("toggle-color");setInterval(function(){r.toggleClass("color")},i.toggleColor?i.toggleColor:500)}}}]);!function(n){n.fn.slide=function(t){return n.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var r=n.extend({},n.fn.slide.defaults,t),a=n(this),y=r.effect,d=n(r.prevCell,a),g=n(r.nextCell,a),di=n(r.pageStateCell,a),st=n(r.playStateCell,a),h=n(r.titCell,a),f=h.size(),u=n(r.mainCell,a),e=u.children().size(),nt=r.switchLoad,ft=n(r.targetCell,a),i=parseInt(r.defaultIndex),c=parseInt(r.delayTime),dt=parseInt(r.interTime),pt,wt,rt,ri,ui,ki,li,ai;parseInt(r.triggerTime);var w,o=parseInt(r.scroll),p=parseInt(r.vis),gi="false"==r.autoPlay||0==r.autoPlay?!1:!0,gt="false"==r.opp||0==r.opp?!1:!0,nr="false"==r.autoPage||0==r.autoPage?!1:!0,lt="false"==r.pnLoop||0==r.pnLoop?!1:!0,ni="false"==r.mouseOverStop||0==r.mouseOverStop?!1:!0,ht="false"==r.defaultPlay||0==r.defaultPlay?!1:!0,vi="false"==r.returnDefault||0==r.returnDefault?!1:!0,v=0,l=0,ct=0,at=0,b=r.easing,et=null,vt=null,yt=null,tt=r.titOnClassName,yi=h.index(a.find("."+tt)),ti=i=-1==yi?i:yi,pi=i,ot=i,s=e>=p?0!=e%o?e%o:o:0,it="leftMarquee"==y||"topMarquee"==y?!0:!1,wi=function(){n.isFunction(r.startFun)&&r.startFun(i,f,a,n(r.titCell,a),u,ft,d,g)},k=function(){n.isFunction(r.endFun)&&r.endFun(i,f,a,n(r.titCell,a),u,ft,d,g)},ii=function(){h.removeClass(tt);ht&&h.eq(pi).addClass(tt)};if("menu"==r.type)return ht&&h.removeClass(tt).eq(i).addClass(tt),h.hover(function(){w=n(this).find(r.targetCell);var t=h.index(n(this));vt=setTimeout(function(){switch(i=t,h.removeClass(tt).eq(i).addClass(tt),wi(),y){case"fade":w.stop(!0,!0).animate({opacity:"show"},c,b,k);break;case"slideDown":w.stop(!0,!0).animate({height:"show"},c,b,k)}},r.triggerTime)},function(){switch(clearTimeout(vt),y){case"fade":w.animate({opacity:"hide"},c,b);break;case"slideDown":w.animate({height:"hide"},c,b)}}),vi&&a.hover(function(){clearTimeout(yt)},function(){yt=setTimeout(ii,c)}),void 0;if(0==f&&(f=e),it&&(f=2),nr){if(e>=p?"leftLoop"==y||"topLoop"==y?f=0!=e%o?(0^e/o)+1:e/o:(pt=e-p,f=1+parseInt(0!=pt%o?pt/o+1:pt/o),0>=f&&(f=1)):f=1,h.html(""),wt="",1==r.autoPage||"true"==r.autoPage)for(rt=0;f>rt;rt++)wt+="<li>"+(rt+1)+"<\/li>";else for(rt=0;f>rt;rt++)wt+=r.autoPage.replace("$",rt+1);h.html(wt);h=h.children()}if(e>=p){u.children().each(function(){n(this).width()>ct&&(ct=n(this).width(),l=n(this).outerWidth(!0));n(this).height()>at&&(at=n(this).height(),v=n(this).outerHeight(!0))});ri=u.children();ui=function(){for(var n=0;p>n;n++)ri.eq(n).clone().addClass("clone").appendTo(u);for(n=0;s>n;n++)ri.eq(e-n-1).clone().addClass("clone").prependTo(u)};switch(y){case"fold":u.css({position:"relative",width:l,height:v}).children().css({position:"absolute",width:ct,left:0,top:0,display:"none"});break;case"top":u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+p*v+'px"><\/div>').css({top:-(i*o)*v,position:"relative",padding:"0",margin:"0"}).children().css({height:at});break;case"left":u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+p*l+'px"><\/div>').css({width:e*l,left:-(i*o)*l,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({float:"left",width:ct});break;case"leftLoop":case"leftMarquee":ui();u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+p*l+'px"><\/div>').css({width:(e+p+s)*l,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(s+i*o)*l}).children().css({float:"left",width:ct});break;case"topLoop":case"topMarquee":ui();u.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+p*v+'px"><\/div>').css({height:(e+p+s)*v,position:"relative",padding:"0",margin:"0",top:-(s+i*o)*v}).children().css({height:at})}}var fi=function(n){var t=n*o;return n==f?t=e:-1==n&&0!=e%o&&(t=-e%o),t},bi=function(t){var r=function(i){for(var r=i;p+i>r;r++)t.eq(r).find("img["+nt+"]").each(function(){var i=n(this),r,t;if(i.attr("src",i.attr(nt)).removeAttr(nt),u.find(".clone")[0])for(r=u.children(),t=0;t<r.size();t++)r.eq(t).find("img["+nt+"]").each(function(){n(this).attr(nt)==i.attr("src")&&n(this).attr("src",n(this).attr(nt)).removeAttr(nt)})})},f;switch(y){case"fade":case"fold":case"top":case"left":case"slideDown":r(i*o);break;case"leftLoop":case"topLoop":r(s+fi(ot));break;case"leftMarquee":case"topMarquee":var e="leftMarquee"==y?u.css("left").replace("px",""):u.css("top").replace("px",""),h="leftMarquee"==y?l:v,c=s;0!=e%h&&(f=Math.abs(0^e/h),c=1==i?s+f:s+f-1);r(c)}},ut=function(n){var t,r,a;if(!ht||ti!=i||n||it){if(it?i>=1?i=1:0>=i&&(i=0):(ot=i,i>=f?i=0:0>i&&(i=f-1)),wi(),null!=nt&&bi(u.children()),ft[0]&&(w=ft.eq(i),null!=nt&&bi(ft),"slideDown"==y?(ft.not(w).stop(!0,!0).slideUp(c),w.slideDown(c,b,function(){u[0]||k()})):(ft.not(w).stop(!0,!0).hide(),w.animate({opacity:"show"},c,function(){u[0]||k()}))),e>=p)switch(y){case"fade":u.children().stop(!0,!0).eq(i).animate({opacity:"show"},c,b,function(){k()}).siblings().hide();break;case"fold":u.children().stop(!0,!0).eq(i).animate({opacity:"show"},c,b,function(){k()}).siblings().animate({opacity:"hide"},c,b);break;case"top":u.stop(!0,!1).animate({top:-i*o*v},c,b,function(){k()});break;case"left":u.stop(!0,!1).animate({left:-i*o*l},c,b,function(){k()});break;case"leftLoop":t=ot;u.stop(!0,!0).animate({left:-(fi(ot)+s)*l},c,b,function(){-1>=t?u.css("left",-(s+(f-1)*o)*l):t>=f&&u.css("left",-s*l);k()});break;case"topLoop":t=ot;u.stop(!0,!0).animate({top:-(fi(ot)+s)*v},c,b,function(){-1>=t?u.css("top",-(s+(f-1)*o)*v):t>=f&&u.css("top",-s*v);k()});break;case"leftMarquee":r=u.css("left").replace("px","");0==i?u.animate({left:++r},0,function(){u.css("left").replace("px","")>=0&&u.css("left",-e*l)}):u.animate({left:--r},0,function(){u.css("left").replace("px","")<=-(e+s)*l&&u.css("left",-s*l)});break;case"topMarquee":a=u.css("top").replace("px","");0==i?u.animate({top:++a},0,function(){u.css("top").replace("px","")>=0&&u.css("top",-e*v)}):u.animate({top:--a},0,function(){u.css("top").replace("px","")<=-(e+s)*v&&u.css("top",-s*v)})}h.removeClass(tt).eq(i).addClass(tt);ti=i;lt||(g.removeClass("nextStop"),d.removeClass("prevStop"),0==i&&d.addClass("prevStop"),i==f-1&&g.addClass("nextStop"));di.html("<span>"+(i+1)+"<\/span>/"+f)}};ht&&ut(!0);vi&&a.hover(function(){clearTimeout(yt)},function(){yt=setTimeout(function(){i=pi;ht?ut():"slideDown"==y?w.slideUp(c,ii):w.animate({opacity:"hide"},c,ii);ti=i},300)});var ei=function(n){et=setInterval(function(){gt?i--:i++;ut()},n?n:dt)},bt=function(n){et=setInterval(ut,n?n:dt)},kt=function(){ni||(clearInterval(et),ei())},oi=function(){(lt||i!=f-1)&&(i++,ut(),it||kt())},si=function(){(lt||0!=i)&&(i--,ut(),it||kt())},hi=function(){clearInterval(et);it?bt():ei();st.removeClass("pauseState")},ci=function(){clearInterval(et);st.addClass("pauseState")};(gi?it?(gt?i--:i++,bt(),ni&&u.hover(ci,hi)):(ei(),ni&&a.hover(ci,hi)):(it&&(gt?i--:i++),st.addClass("pauseState")),st.click(function(){st.hasClass("pauseState")?hi():ci()}),"mouseover"==r.trigger?h.hover(function(){var n=h.index(this);vt=setTimeout(function(){i=n;ut();kt()},r.triggerTime)},function(){clearTimeout(vt)}):h.click(function(){i=h.index(this);ut();kt()}),it)?((g.mousedown(oi),d.mousedown(si),lt)&&(li=function(){ki=setTimeout(function(){clearInterval(et);bt(0^dt/10)},150)},ai=function(){clearTimeout(ki);clearInterval(et);bt()},g.mousedown(li),g.mouseup(ai),d.mousedown(li),d.mouseup(ai)),"mouseover"==r.trigger&&(g.hover(oi,function(){}),d.hover(si,function(){}))):(g.click(oi),d.click(si))})}}(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,t,i,r,u){return jQuery.easing[jQuery.easing.def](n,t,i,r,u)},easeInQuad:function(n,t,i,r,u){return r*(t/=u)*t+i},easeOutQuad:function(n,t,i,r,u){return-r*(t/=u)*(t-2)+i},easeInOutQuad:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t+i:-r/2*(--t*(t-2)-1)+i},easeInCubic:function(n,t,i,r,u){return r*(t/=u)*t*t+i},easeOutCubic:function(n,t,i,r,u){return r*((t=t/u-1)*t*t+1)+i},easeInOutCubic:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t+i:r/2*((t-=2)*t*t+2)+i},easeInQuart:function(n,t,i,r,u){return r*(t/=u)*t*t*t+i},easeOutQuart:function(n,t,i,r,u){return-r*((t=t/u-1)*t*t*t-1)+i},easeInOutQuart:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t+i:-r/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(n,t,i,r,u){return r*(t/=u)*t*t*t*t+i},easeOutQuint:function(n,t,i,r,u){return r*((t=t/u-1)*t*t*t*t+1)+i},easeInOutQuint:function(n,t,i,r,u){return(t/=u/2)<1?r/2*t*t*t*t*t+i:r/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(n,t,i,r,u){return-r*Math.cos(t/u*(Math.PI/2))+r+i},easeOutSine:function(n,t,i,r,u){return r*Math.sin(t/u*(Math.PI/2))+i},easeInOutSine:function(n,t,i,r,u){return-r/2*(Math.cos(Math.PI*t/u)-1)+i},easeInExpo:function(n,t,i,r,u){return 0==t?i:r*Math.pow(2,10*(t/u-1))+i},easeOutExpo:function(n,t,i,r,u){return t==u?i+r:r*(-Math.pow(2,-10*t/u)+1)+i},easeInOutExpo:function(n,t,i,r,u){return 0==t?i:t==u?i+r:(t/=u/2)<1?r/2*Math.pow(2,10*(t-1))+i:r/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(n,t,i,r,u){return-r*(Math.sqrt(1-(t/=u)*t)-1)+i},easeOutCirc:function(n,t,i,r,u){return r*Math.sqrt(1-(t=t/u-1)*t)+i},easeInOutCirc:function(n,t,i,r,u){return(t/=u/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+i:r/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(n,t,i,r,u){var o=1.70158,f=0,e=r;return 0==t?i:1==(t/=u)?i+r:((f||(f=.3*u),e<Math.abs(r))?(e=r,o=f/4):o=f/(2*Math.PI)*Math.asin(r/e),-(e*Math.pow(2,10*(t-=1))*Math.sin((t*u-o)*2*Math.PI/f))+i)},easeOutElastic:function(n,t,i,r,u){var o=1.70158,f=0,e=r;return 0==t?i:1==(t/=u)?i+r:((f||(f=.3*u),e<Math.abs(r))?(e=r,o=f/4):o=f/(2*Math.PI)*Math.asin(r/e),e*Math.pow(2,-10*t)*Math.sin((t*u-o)*2*Math.PI/f)+r+i)},easeInOutElastic:function(n,t,i,r,u){var o=1.70158,f=0,e=r;return 0==t?i:2==(t/=u/2)?i+r:((f||(f=u*.3*1.5),e<Math.abs(r))?(e=r,o=f/4):o=f/(2*Math.PI)*Math.asin(r/e),1>t?-.5*e*Math.pow(2,10*(t-=1))*Math.sin((t*u-o)*2*Math.PI/f)+i:.5*e*Math.pow(2,-10*(t-=1))*Math.sin((t*u-o)*2*Math.PI/f)+r+i)},easeInBack:function(n,t,i,r,u,f){return void 0==f&&(f=1.70158),r*(t/=u)*t*((f+1)*t-f)+i},easeOutBack:function(n,t,i,r,u,f){return void 0==f&&(f=1.70158),r*((t=t/u-1)*t*((f+1)*t+f)+1)+i},easeInOutBack:function(n,t,i,r,u,f){return void 0==f&&(f=1.70158),(t/=u/2)<1?r/2*t*t*(((f*=1.525)+1)*t-f)+i:r/2*((t-=2)*t*(((f*=1.525)+1)*t+f)+2)+i},easeInBounce:function(n,t,i,r,u){return r-jQuery.easing.easeOutBounce(n,u-t,0,r,u)+i},easeOutBounce:function(n,t,i,r,u){return(t/=u)<1/2.75?r*7.5625*t*t+i:2/2.75>t?r*(7.5625*(t-=1.5/2.75)*t+.75)+i:2.5/2.75>t?r*(7.5625*(t-=2.25/2.75)*t+.9375)+i:r*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(n,t,i,r,u){return u/2>t?.5*jQuery.easing.easeInBounce(n,2*t,0,r,u)+i:.5*jQuery.easing.easeOutBounce(n,2*t-u,0,r,u)+.5*r+i}})