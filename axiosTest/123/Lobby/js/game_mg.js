/**
 * Created by Administrator on 2017/5/3.
 */
$('#gameMenus li').on('click',function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
});
var i,text,type='MG',del='real';
    function MG_GAME(one) {
        $('.list').empty();
        for(i=0;i<one.length;i++){
            text ='<li><div class="content"><div class="border"><p class="image"><img src="'+one[i].src+'" alt=""></p></div><p class="sup-text"><a href="javascript:void(0)">'+one[i].title+'</a></p><p class="sub-text"><a class="l" onclick="loadgame('+type+','+one[i].GameID+','+del+')" href="javascript:void(0)">进入游戏</a></p></div></li>'
            $('.list').append(text);
        }
    }
    MG_GAME(gamelist.bonus_slot);
