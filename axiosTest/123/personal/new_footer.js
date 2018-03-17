

function helepIndex(){

     $('.foot_on').on('click',function(){
   
      $('.help_leftnav').eq($(this).index()).find('a').trigger('click');
         
     });    
   }
	
function helepIndexTop(){
	
	$('.foot_top_on').on('click',function(){
		
		$('.help_leftnav_top').find('a').trigger('click');
		
	});
	
	
}
	
	$(function(){
	getUrl();	
function GetUrlPara()
	
　　{
　　　　var url = document.location.toString();
　　　　var arrUrl = url.split("?");
　　　　var para = arrUrl[1];
　　　　return para;
　　}
		 //获取url中的参数
		 function getUrl(){
		 	var li_index = GetUrlPara();
		 	if (li_index == undefined) return;
			var li_number = parseInt(li_index.replace(/[^0-9]/g,''));
			$('.help_leftnav').eq(li_number).find('a').trigger('click');
		
		 }
        
			
		});




	
  
  

    


