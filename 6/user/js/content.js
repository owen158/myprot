/**
 * Created by Administrator on 2017/5/10.
 */
var ajaxcontent=function () {
    this.der="header.html";
    this.ter="footer.html";

};
ajaxcontent.prototype={
    Footer_page:function (container,url) {
        $.ajax({
            url:this.ter,
            async:false,
            cache:false,
            success:function(data){
                $(container).html(data);
            }
        })
    },
    Footer:function (container) {
        $.ajax({
            url:this.ter,
            async:false,
            cache:false,
            success:function(data){
                $(container).html(data);
            }
        })
    },
    Header:function (container) {
        $.ajax({
            url:this.der,
            async:false,
            cache:false,
            success:function(data){
                $(container).html(data);
            }
        })
    }
};
var Content = new ajaxcontent();