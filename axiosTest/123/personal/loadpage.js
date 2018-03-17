$(function  () {
	//end
	
	var cagent = 'BL1'; 
	var logoData;
	var lunboData = [];
	var promoData = [];
	var gonggaoData;
	if (getCookie('logo') == '') {

		 var a = "display";


        if (a == "display") {
            $('.mask').css({ 'display': 'block' });
            center($('.mess'));
            setTimeout(function () {
                $('.mask').css({ 'display': 'none' });
                closedPop($('.mess'));
            }, 60000);
            $(".closePopbtn").click(function () {
                closedPop($('.mess'));
            });
        } else {
            $('.mask').css({ 'display': 'none' });
            closedPop($('.mess'));
        }

        // 居中
        function center(obj) {
            var screenWidth = $(window).width(), screenHeight = $(window).height(); //当前浏览器窗口的 宽高
            var scrolltop = $(document).scrollTop(); //获取当前窗口距离页面顶部高度

            var objLeft = (screenWidth - obj.width()) / 2;
            var objTop = (screenHeight - obj.height()) / 2 + scrolltop;

            obj.css({ left: objLeft + 'px', top: objTop + 'px', 'display': 'block' });
            //浏览器窗口大小改变时
            $(window).resize(function () {
                screenWidth = $(window).width();
                screenHeight = $(window).height();
                scrolltop = $(document).scrollTop();

                objLeft = (screenWidth - obj.width()) / 2;
                objTop = (screenHeight - obj.height()) / 2 + scrolltop;
        if($(obj).is(":visible")){
                obj.css({ left: objLeft + 'px', top: objTop + 'px', 'display': 'block' });
        }

            });
            //浏览器有滚动条时的操作、
            $(window).scroll(function () {
                screenWidth = $(window).width();
                screenHeight = $(window).height();
                scrolltop = $(document).scrollTop();

                objLeft = (screenWidth - obj.width()) / 2;
                objTop = (screenHeight - obj.height()) / 2 + scrolltop;

                obj.css({ left: objLeft + 'px', top: objTop + 'px', 'display': 'block' });
            });

        }

        //关闭
        function closedPop(obj) {
            obj.remove();
            closed($('.mask'), $('.mess'));
        }

        // 隐藏 的操作
        function closed(obj1, obj2) {
            obj1.hide();
            obj2.hide();
        }
		
	$.ajax({
		type:"post",
		url:xpj_src+"webcom.do",
		data:{cagent:cagent},
		async:true,
		cache:false,
		xhrFields:{withCredentials:true},
		success:function  (data) {
			
			var lunbo_code=-1;
			var promo_code=-1;
			var logo_code=-1;
			var gonggao_code=-1;
			var ad_code = -1;
			for (var i = 0; i < data.length; i++) {
				if (data[i][0].type == '1') {
					lunbo_code = i; 
				}else if (data[i][0].type == '4') {
					promo_code = i;
				}else if (data[i][0].type =='2') {
					logo_code = i;
				}else if (data[i][0].type =='5') {
					gonggao_code = i;
				}else if(data[i][0].type =='3'){
					ad_code = i;
				}
			}
			if(gonggao_code>-1){
				$('#gonggao_img').attr('src',data[gonggao_code][0].img1);
				var gonggaoData = data[gonggao_code][0].img1; 
				setCookie('gonggao',gonggaoData,1);  //设置公告cookie
			}
			if(logo_code>-1){
				var logoData =  data[logo_code][0].img1; 
				setCookie('logo',logoData,1);  //设置公告cookie
				$('.head-logo h1 a').css({
				'backgroundImage': 'url('+data[logo_code][0].img1+')'
			})	
			}
			if (ad_code>-1) {
				var adData = new Array();
				
				if (data[ad_code].length == 1) {
					$('#service').css('display','none');
					$('#service_left img').attr('src',data[ad_code][0].img1);
					adData.push(data[ad_code][0].img1);
				}
				if(data[ad_code].length == 2){
					$('#service_left img').attr('src',data[ad_code][0].img1);
					$('#service img').attr('src',data[ad_code][1].img1);
					
				adData.push(data[ad_code][0].img1);
				adData.push(data[ad_code][1].img1);
				
				}
				setCookie('ad',adData,1); 
				
			}else{
				$('#service').css('display','none');
				$('#service_left').css('display','none');
			}
			if (lunbo_code>-1) {
				var swiper_li;
			$('#swiper_container').empty();
			for (var i = 0; i < data[lunbo_code].length; i++) {
				lunboData[i] = data[0][i].img1;
				swiper_li = '<li>'+'<img  src="'+ data[0][i].img1+'"/>'+'</li>';
				$('#swiper_container').append(swiper_li);
			}
			setCookie('lunbo',lunboData,1); //设置lunbo cookie
//调用轮播-----------------
			$(".banner").hover(function() {
				jQuery(this).find(".prev,.next").stop(!0, !0).fadeTo("show", 1)
			}, function() {
				$(this).find(".prev,.next").fadeOut();
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
//end-----------------
			}
			
			if (promo_code>-1) {
				var promo_li; 
			$('#_promo_list').empty();
			for (var i = 0; i < data[promo_code].length; i++) {
				//将获取到的数据封装进对象
				eval('var prObj'+i+'= new Array()'); 
					eval('prObj'+i)[0] = data[promo_code][i].img1;
					eval('prObj'+i)[1] = data[promo_code][i].img2;
					eval('prObj'+i)[2] = data[promo_code][i].title;
					promoData.push(eval('prObj'+i));
				promo_li = '<li class="tab7 promo-li">'+
						'<i></i>'+
						'<div class="promo-content r">'+
							'<div class="promo-bg-t" flag="true"><img src="'+data[promo_code][i].img1+'" width="798" height="202"/>'+
							 '<span class="promo-main-btn"></span>'+
							'</div>'+
							'<div class="promo-bg-c">'+
								'<div class="promo-title">'+
								'</div>'+
								'<div style="display: none;" class="promo-m-d"><img src="'+data[promo_code][i].img2+'" width="808" /></div>'+
							
						'</div>'+
						'<div class="promo-bg-b"></div>'+
					'</li> ';
					
				$('#_promo_list').append(promo_li);
			}
			//将对象存入cookie
			setCookie('promo',promoData,1);  //设置公告cookie
			$('.promo-bg-t').on('click', function() {
				$(this).next().children().eq(1).toggle();

			})
			
			}
				}
		
			
			});
			}
			//有cookie数据的情况下
			else{
				var logoCookies = getCookie('logo');
				var gongCookies = getCookie('gonggao');
				var lunboCookies = getCookie('lunbo');
				var promoCookies = getCookie('promo');
				var adCookies = getCookie('ad');
				if (logoCookies!='') {
					$('.head-logo h1 a').css({
					'backgroundImage': 'url('+logoCookies+')'
					})	
				}
				if (gongCookies!='') {
					$('#gonggao_img').attr('src',gongCookies);
				}
				if (adCookies!='') {
					var adArr = adCookies.split(',');
					if (adArr.length == 1) {
					$('#service_left img').attr('src',adArr[0]);
					$('#service').css('display','none');
					}
					if (adArr.length == 2) {
					$('#service_left img').attr('src',adArr[0]);
					$('#service img').attr('src',adArr[1]);
					}
				}
				
				if (lunboCookies!='') {
					var swArr = lunboCookies.split(',');//将字符串转换为数组
					//轮播图
					var swiper_lis;
					$('#swiper_container').empty();
					for (var i = 0; i < swArr.length; i++) {
						swiper_lis = '<li>'+'<img  src="'+ swArr[i]+'"/>'+'</li>';
						$('#swiper_container').append(swiper_lis);
					}
					//轮播调用
					$(".banner").hover(function() {
					jQuery(this).find(".prev,.next").stop(!0, !0).fadeTo("show", 1);
					}, function() {
						$(this).find(".prev,.next").fadeOut();
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
					//-------------end
				}
				
				if (promoCookies!='') {
				var promoAll  = promoCookies.split(',');
				var allP = [];
				var proLength = promoAll.length;
				for (var i = 0; i < proLength; i++) {
					var weight;
					if (i%3 == 0) {
						weight = i/3;
						eval('var proArr'+weight+'= new Array');
						
					}else{weight = Math.floor(i/3);}
					eval('proArr'+weight).push(promoAll[i]);
					if (i%3 == 0) {allP.push(eval('proArr'+weight))};
							
				}
				
				//优惠活动
				for (var i = 0; i < allP.length; i++) {
					
						promo_lis = '<li class="tab7 promo-li">'+
								'<i></i>'+
								'<div class="promo-content r">'+
									'<div class="promo-bg-t" flag="true"><img src="'+allP[i][0]+'" width="798" height="202"/>'+
									 '<span class="promo-main-btn"></span>'+
									'</div>'+
									'<div class="promo-bg-c">'+
										'<div class="promo-title">'+
										'</div>'+
										'<div style="display: none;" class="promo-m-d"><img src="'+allP[i][1]+'" width="808" /></div>'+
									
								'</div>'+
								'<div class="promo-bg-b"></div>'+
							'</li> ';
							
						$('#_promo_list').append(promo_lis);
					}
					$('.promo-bg-t').on('click', function() {
		
						$(this).next().children().eq(1).toggle();
		
					})
				}
				
				
			
//			$('.mess').css('display','none');
				
		}
			
			$.ajax({
				type:"post",
				url:xpj_src+"gonggao.do",
				data:{cagent:cagent},
				async:true,
				xhrFields:{withCredentials:true},
				success:function  (data) {
					if (data.length>0) {
						$('.header_marquee').empty();
						for (var i = 0; i < data.length; i++) {
							var marquee_li = '<li>'+'<a href="column/promo.html" target="_blank">'+(i+1)+'.&nbsp;'+data[i].rmk+'，详情可查阅' +'</a>'+'</li>';
							$('.header_marquee').append(marquee_li);
						}
						if($(".header_marquee").length>0){
                            $(".header_marquee").marquee({
                                yScroll: "bottom",
                                pauseOnHover: true,
                                direction: 'left',
                                delayBeforeStart: 0,
                                duration: 12500
                            });
						}

					}
					
				}
			});
})
