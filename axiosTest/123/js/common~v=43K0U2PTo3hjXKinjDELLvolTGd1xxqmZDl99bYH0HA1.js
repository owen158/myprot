Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t,r,i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n)t=i[n],window.requestAnimationFrame=window[t+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t+"CancelAnimationFrame"]||window[t+"CancelRequestAnimationFrame"];!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)&&window.requestAnimationFrame&&window.cancelAnimationFrame||(r=0,window.requestAnimationFrame=function(n){var t=Date.now(),i=Math.max(r+16,t);return setTimeout(function(){n(r=i)},i-t)},window.cancelAnimationFrame=clearTimeout)}();var snowFall=function(){function n(){var n={flakeCount:35,flakeColor:"#ffffff",flakeIndex:999999,flakePosition:"absolute",minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,image:!1,collectionHeight:40},s=[],t={},e=0,f=0,u=0,h=0,l=function(n,t){for(var i in t)n.hasOwnProperty(i)&&(n[i]=t[i])},a=function(n,t){n.style.webkitTransform=t;n.style.MozTransform=t;n.style.msTransform=t;n.style.OTransform=t;n.style.transform=t},r=function(n,t){return Math.round(n+Math.random()*(t-n))},o=function(n,t){for(var i in t)n.style[i]=t[i]+("width"==i||"height"==i?"px":"")},v=function(t,i,s){this.x=r(u,f-u);this.y=r(0,e);this.size=i;this.speed=s;this.step=0;this.stepSize=r(1,10)/100;n.collection&&(this.target=canvasCollection[r(0,canvasCollection.length-1)]);var h=null;n.image?(h=new Image,h.src=n.image):(h=document.createElement("div"),o(h,{background:n.flakeColor}));h.className="snowfall-flakes";o(h,{width:this.size,height:this.size,position:n.flakePosition,top:0,left:0,"will-change":"transform",fontSize:0,zIndex:n.flakeIndex});n.round&&o(h,{"-moz-border-radius":~~n.maxSize+"px","-webkit-border-radius":~~n.maxSize+"px",borderRadius:~~n.maxSize+"px"});n.shadow&&o(h,{"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555",boxShadow:"1px 1px 1px #555"});t.tagName===document.body.tagName?document.body.appendChild(h):t.appendChild(h);this.element=h;this.update=function(){this.y+=this.speed;this.y>e-(this.size+6)&&this.reset();a(this.element,"translateY("+this.y+"px) translateX("+this.x+"px)");this.step+=this.stepSize;this.x+=Math.cos(this.step);(this.x+this.size>f-u||this.x<u)&&this.reset()};this.reset=function(){this.y=0;this.x=r(u,f-u);this.stepSize=r(1,10)/100;this.size=r(100*n.minSize,100*n.maxSize)/100;this.element.style.width=this.size+"px";this.element.style.height=this.size+"px";this.speed=r(n.minSpeed,n.maxSpeed)}},c=function(){for(var n=0;n<s.length;n+=1)s[n].update();h=requestAnimationFrame(function(){c()})};return{snow:function(o,h){for(l(n,h),t=o,e=t.offsetHeight,f=t.offsetWidth,t.snow=this,"body"===t.tagName.toLowerCase()&&(u=25),window.addEventListener("resize",function(){e=t.clientHeight;f=t.offsetWidth},!0),i=0;i<n.flakeCount;i+=1)s.push(new v(t,r(100*n.minSize,100*n.maxSize)/100,r(n.minSpeed,n.maxSpeed)));c()},clear:function(){for(var n=null,n=t.getElementsByClassName?t.getElementsByClassName("snowfall-flakes"):t.querySelectorAll(".snowfall-flakes"),i=n.length;i--;)n[i].parentNode===t&&t.removeChild(n[i]);cancelAnimationFrame(h)}}}return{snow:function(t,i){var r;if("string"==typeof i)if(t.length>0)for(r=0;r<t.length;r++)t[r].snow&&t[r].snow.clear();else t.snow.clear();else if(t.length>0)for(r=0;r<t.length;r++)(new n).snow(t[r],i);else(new n).snow(t,i)}}}()