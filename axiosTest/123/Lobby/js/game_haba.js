/**
 * Created by Administrator on 2017/5/3.
 */
$('#gameMenus li').on('click',function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
});
var i,text,type="HABA",del="real",fun="fun",id;
function HABA_GAME(one){
    $('.list').empty();
    for(i=0;i<one.length;i++){
        id = JSON.stringify(one[i].Keyname).replace(/\"/g,"'");
        text ='<li><div class="content"><div class="border"><p class="image"><img src="'+one[i].src+'" alt=""></p></div><p class="sup-text"><a href="javascript:void(0)">'+one[i].title+'</a></p><p id="haba" class="sub-text"><a class="l" onclick="loadgame('+type+","+id+","+del+')" href="javascript:void(0)">进入游戏</a></p></div></li>'
        $('.list').append(text);
    }
}
HABA_GAME(Habanero.Slot_Game);