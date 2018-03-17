/**
 * Created by Administrator on 2017/5/6.
 */
var ajaxcontent=function () {
    this.der="vipheader.html";
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

// function ajaxcontent_sync(url,container) {
//     //加载模块 同步模式
//     $.ajax({
//         url:url,
//         async:false,
//         cache:false,
//         success:function(data){
//             $(container).html(data);
//         }
//     })
// }
// function getheader() {
//     ajaxcontent_sync("vipheader.html",".wrapper")
// }