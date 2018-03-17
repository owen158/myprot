// JavaScript Document
$(function () {
    pay.init();
    
});

var pay = {
    init: function () {
       


        // 绑定展开和收起事件
        $('#eveb_bank_open').on('click', function () { pay.expand(); });
        $('#eveb_bank_close').on('click', function () { pay.collapse(); });
    },
    // 展开
    expand: function () {
        $('.eveb_bank_list3').animate({ height: '210px' });
        $('#eveb_bank_open').hide();
        $('#eveb_bank_close').show();
    },
    // 收起
    collapse: function () {
        $('.eveb_bank_list3').animate({ height: '100px' });
        $('#eveb_bank_open').show();
        $('#eveb_bank_close').hide();
    }
    
   
};