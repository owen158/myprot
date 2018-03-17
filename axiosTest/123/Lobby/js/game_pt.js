/**
 * Created by Administrator on 2017/5/3.
 */
$('#gameMenus li').on('click',function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
});
var i,text,type="PT",del="real",fun="fun",id;
function PT_GAME(one) {
    $('.list').empty();

    for(i=0;i<one.length;i++){
        id = JSON.stringify(one[i].Game_code).replace(/\"/g,"'");
        text ='<li><div class="content"><div class="border"><p class="image"><img src="'+one[i].src+'" alt=""></p></div><p class="sup-text"><a href="javascript:void(0)">'+one[i].title+'</a></p><p class="sub-text"><a class="l" onclick="loadgame('+type+","+id+","+del+')" href="javascript:void(0)">进入游戏</a><a class="r" onclick="Fungame('+id+')" href="javascript:void(0)">免费试玩</a></p></div></li>'
        $('.list').append(text);
    }
}
function Fungame(){//免费试玩游戏
    var gameId=arguments[1];
    window.open('http://cache.download.banner.happypenguin88.com/casinoclient.html?language=ZH-CN&game='+gameId+'&mode=offline&affiliates=1¤cy=CNY');
}
PT_GAME(Habanero.Card_Games);