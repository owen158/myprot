/**
 * Created by Administrator on 2017/5/15.
 */
var box=function () {
    this.Width;
    this.Cwidth;
    this.Pwidth;
    this.el;
    this.i=0;
    this.length;

};
var i=0;
box.prototype={
    el:function (el) {
        this.Width = $('.txtScroll').width();
        this.Pwidth = $('.box ul').width();
        this.Cwidth = $('.box li').length;
        $('.box ul').width(this.Pwidth*this.Cwidth+'px');
        this.Pwidth = $('.box ul').width();
        $('.box li').width(this.Pwidth/this.Cwidth+'px');
    },
    left:function(el){
        this.i += 1;
        this.Pwidth = $('.box').width();
        this.length = $('.box li').length;
        if(this.i < this.length){
            $('.box ul').css('left',-this.Pwidth*this.i+'px');
        }else if(this.i == this.length){
            this.i=0;
            $('.box ul').css('left',0)
        }
    },
    right:function (el) {
        this.i -=1;
        this.Pwidth = $('.box').width();
        this.length = $('.box li').length;
        if(this.i >=　0){
            $('.box ul').css('left',-this.Pwidth*this.i+'px');
        }else{
            this.i=this.length-1;
            $('.box ul').css('left',-this.Pwidth*this.i+'px');
        }
    },
    time:function () {
        this.i++;
        this.Pwidth = $('.box').width();
        this.length = $('.box li').length;
        if(this.i < this.length){
            $('.box ul').css('left',-this.Pwidth*this.i+'px');
        }else if(this.i == this.length){
            this.i=0;
            $('.box ul').css('left',0)
        }
        setTimeout(bner.time,1000);
    }

}
var bner=new box();
bner.el('el');
bner.time();
