/**
 * Created by Administrator on 2017/5/9.
 */
var electronics=function () {
    this.text;
    this.content;
    this.HABAtype="'HABA'";
    this.PTtype = "'PT'";
    this.MGtype = "'MG'";
    this.id;
    this.del="'real'";
    this.fun="'fun'";
    this.data;
};
electronics.prototype = {
    Url:function (url,data) {
       this.text = url.split('.html');
       this.text = this.text[0].split('electronics_');
       if(this.text[1] === "haba"){
           this.habatitle('#habagame');
           this.haba('#text-justify',data.a);
           $('#habagame li').on('click',function () {
               this.id = $(this).attr('class');
               if(this.id === 'Slot'){
                   Electronics.haba('#text-justify',data.a);
               }else if(this.id === 'Table'){
                   Electronics.haba('#text-justify',data.b);
               }else if(this.id === 'Video')
                   Electronics.haba('#text-justify',data.c);
            });
       }else if(this.text === 'PT'){
           console.log(this.text[1])
       }else if(this.text === 'MG'){
           console.log(this.text[1])
       }
    },
    pt:function (el,list) {
        $(el).empty();
        if(list === undefined || list<0){
            this.text = '<li><div id="bg" class="bg"><img src="../../images/pre_pic.png" alt=""></div><div class="mask"><img src="../../images/live_pic_hover.png" alt=""></div></li>';
            $(el).append(this.text);
        }else{
            for(var i=0;i<list.length;i++){
                this.id = JSON.stringify(list[i].Game_code).replace(/\"/g,"'");
                this.text = '<li><div  class="bg"><img src="'+list[i].src+'" alt=""></div><div id="mask" class="mask"><img src="../../images/game_hover_bg.png" alt=""><a href="javascript:;" onclick="Load.Ingame('+this.PTtype+","+this.id+","+this.del+')" class="join">进入游戏</a><a href="javascript:;" onclick="Load.Ingame('+this.PTtype+","+this.id+","+this.fun+')" class="join join2">免费试玩</a></div><h2><span class="txt1">'+list[i].title+'</span></h2></li>';
                $(el).append(this.text);
            }
        }
    },
    mg:function (el,list) {
        $(el).empty();
        if(list === undefined || list<0){
            this.text = '<li><div id="bg" class="bg"><img src="../../images/pre_pic.png" alt=""></div><div class="mask"><img src="../../images/live_pic_hover.png" alt=""></div></li>';
            $(el).append(this.text);
        }else{
            for(var i=0;i<list.length;i++){
                // this.id = JSON.stringify(list[i].Keyname).replace(/\"/g,"'");
                this.text = '<li><div id="bak" class="bg"><img src="'+list[i].src+'" alt=""></div><div class="mask"><img src="../../images/game_hover_bg.png" alt=""><a href="javascript:;" onclick="Load.Ingame('+this.MGtype+","+list[i].GameID+","+this.del+')" class="join">进入游戏</a></div><h2><span class="txt1">'+list[i].title+'</span></h2></li>';
                $(el).append(this.text)
            }
        }
    },
    habatitle:function (el) {
        $(el).empty();
        this.text = '<li class="Slot active">热门游戏</li><li class="Table">桌面</li><li class="Video">老虎机</li>';
        $(el).append(this.text);
    },
    haba:function (el,list) {
        $(el).empty();
        if(list === undefined || list<0){
            this.text = '<li><div id="bg" class="bg"><img src="../../images/pre_pic.png" alt=""></div><div class="mask"><img src="../../images/live_pic_hover.png" alt=""></div></li>';
            $(el).append(this.text);
        }else{
            for(var i=0;i<list.length;i++){
                this.id = JSON.stringify(list[i].Keyname).replace(/\"/g,"'");
                this.text = '<li><div class="bg"><img src="'+list[i].src+'" alt=""></div><div class="mask"><img src="../../images/game_hover_bg.png" alt=""><a href="javascript:;" onclick="Load.Ingame('+this.HABAtype+","+this.id+","+this.del+')" class="join">进入游戏</a></div><h2><span class="txt1">'+list[i].title+'</span></h2></li>';
                $(el).append(this.text)
            }
        }
    },
    title:function (el,list) {
        console.log(el)
        console.log(list);
    },
    gameactive:function () {
        $('#habagame li').on('click',function () {
            $(this).addClass('active').siblings('.active').removeClass('active')
        })
    }
};
var Electronics= new electronics();
