/**
 * Created by Administrator on 2017/5/8.
 */
var Game = function () {
    this.judgament = $.cookie('judgment');this.data;
};
Game.prototype = {
    Ingame:function () {
        // type,id,model
        // this.data={gameType:arguments[0],gameID:arguments[1],model:arguments[2]};
        // console.log(this.data);
        if(this.judgament === 'true'){
            $('.xploading_bg').show();
            $('.xploading').show();
            // this.data={gameType:type,gameID:id,model:model};
            this.data={gameType:arguments[0],gameID:arguments[1],model:arguments[2]};
            // console.log(this.data);
            this.LoadGame(JRG+'User/forwardGame',this.data);
        }else{
            $('.panel').show();
            $('.panel-con').show();
            $('.panel-text').empty();
            $('.panel-text').append('您尚未登录，请先登录再进行游戏');
            $('.login-panel').show();
            $('.login-panel-con').show();
        }
    },
    LoadGame:function (Url,Data) {
        $.ajax({
            type:"post",
            data:Data,
            xhrFields:{withCredentials:true},
            url:Url,
            timeout : 3000,
            cache: false,
            success: function (data) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(data.msg == "error"){
                    $('.panel').show();
                    $('.panel-con').show();
                    $('.panel-text').empty();
                    $('.panel-text').append('系统错误');
                }else if(data.msg =='process'){
                    $('.panel').show();
                    $('.panel-con').show();
                    $('.panel-text').empty();
                    $('.panel-text').append('维护中');
                }else if(data.msg != "error"){
                    window.location.href=data.msg
                }
            },
            error:function (xhr,textStatus) {
                $('.xploading_bg').hide();
                $('.xploading').hide();
                if(textStatus=='timeout'){
                    $('.panel').show();
                    $('.panel-con').show();
                    $('.panel-text').empty();
                    $('.panel-text').append('响应超时，请稍后重试');
                }else{
                    $('.panel').show();
                    $('.panel-con').show();
                    $('.panel-text').empty();
                    $('.panel-text').append('网络异常');
                }
            }
        })
        
    }
};
var Load = new Game();