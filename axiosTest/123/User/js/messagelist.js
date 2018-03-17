/**
 * Created by Administrator on 2017/4/30.
 */
$(function () {
   $('.list li').on('click',function () {
       $(this).addClass('active').siblings('.active').removeClass('active');
       var Id = $(this).children('a').attr('href');
       console.log(Id);
       $(Id).addClass('active').siblings('.active').removeClass('active');
   })
});