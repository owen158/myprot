/**
 * Created by Administrator on 2017/5/2.
 */
$('.list-ul-active li').on('click',function (event) {
    event.stopPropagation();
    console.log(456)
    $(this).addClass('active').siblings('.active').removeClass('active');
    var Id=$(this).attr('mank');
    console.log(Id);
    $(Id).addClass('active').siblings('.active').removeClass('active');
});