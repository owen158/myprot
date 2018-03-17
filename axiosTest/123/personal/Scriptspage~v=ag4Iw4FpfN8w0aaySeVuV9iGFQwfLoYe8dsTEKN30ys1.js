
$(function() {
	$(".browser").show();
	$(".browser .closed").click(function() {
		$(".browser").hide()
	});
	$(".into-platform div").hover(function() {
		$(this).find("a").fadeIn(300);
		$(this).find("span").fadeIn(300)
	}, function() {
		$(this).find("a").fadeOut(10);
		$(this).find("span").fadeOut(10)
	});
	$(".nav").slide({
		type: "menu",
		titCell: ".m",
		targetCell: ".sub",
		delayTime: 300,
		triggerTime: 0,
		returnDefault: !0
	});
	$(".platform-img").slide({
		titCell: ".platform-btn ul",
		mainCell: ".platform-photo ul",
		autoPage: !0,
		effect: "left",
		vis: 5,
		trigger: "click"
	});
//	getWinner();
	$(".Recommend_Bd a").mouseenter(function() {
		$(this).css("z-index", 10001);
		$(".mask").fadeIn(200);
		$(this).parents().find(".bghjp").fadeIn(200);
		$(this).parents().siblings().find(".bghjp").fadeIn(200)
	});
	$(".Recommend_Bd a").mouseleave(function() {
		$(this).css("z-index", 1);
		$(".mask").fadeOut(0);
		$(this).parents().find(".bghjp").fadeOut(0);
		$(this).parents().siblings().find(".bghjp").fadeOut(0)
	})
});
$(function() {});
var max_num = 99999999,
	range = 100,
	min_num = 1e5;
$(function() {
	$(".banner").hover(function() {
		jQuery(this).find(".prev,.next").stop(!0, !0).fadeTo("show", 1)
	}, function() {
		$(this).find(".prev,.next").fadeOut()
	});
	$(".banner").slide({
		titCell: ".banner_btn ul",
		mainCell: ".banner_img ul",
		effect: "fold",
		autoPlay: !0,
		autoPage: !0,
		trigger: "click",
		startFun: function(n) {
			var t = jQuery(".banner .banner_img li").eq(n);
			!t.attr("_src") || t.css("background-image", t.attr("_src")).removeAttr("_src")
		}
	})
});
$(function() {
	$(window).bind("scroll", function() {
		var n = 360 + $(window).scrollTop();
		$(".service").animate({
			top: n
		}, {
			duration: 600,
			queue: !1
		})
	});
	$("#scroll").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 200)
	})
})



 /*格式化金额*/
  function formatCurrency(num) {    
    num = num.toString().replace(/\$|\,/g,'');    
    if(isNaN(num))    
    num = "0";    
    sign = (num == (num = Math.abs(num)));    
    num = Math.floor(num*100+0.50000000001);    
    cents = num%100;    
    num = Math.floor(num/100).toString();    
    if(cents<10)    
    cents = "0" + cents;    
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)    
    num = num.substring(0,num.length-(4*i+3))+','+    
    num.substring(num.length-(4*i+3));    
    return (((sign)?'':'-') + num + '.' + cents);    
};
  
  /*随机数*/
   function number(z,numb){
	  setInterval(function(){
		  var i=$(z);
		  var w=$('.jackpot');
		  
		  var s=Math.random() * 10;
		  numb=numb+s;
		  i.text("￥"+formatCurrency(numb));	

		  },500);	   
	   }
    number('#jackpot_main',582145122);
	number('#jackpot1',819452);
	number('#jackpot2',770451);
	number('#jackpot3',854123);
	number('#jackpot4',803124);
	number('#jackpot5',945124);
		  
		  /*超级奖池动画*/		  
       $(document).ready(function() {
           $('#bd1').animate({width:'65%'},2000);
		   $('#bd2').animate({width:'50%'},2000);
		   $('#bd3').animate({width:'80%'},2000);
		   $('#bd4').animate({width:'60%'},2000);
		   $('#bd5').animate({width:'45%'},2000);		
        });