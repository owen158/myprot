/**
 * Created by Administrator on 2017/5/11.
 */
var home=function () {
    this.url = JRG+'User/getUserInfo'

};
home.prototype={
  personal:function () {
      $.ajax({
          type:"get",
          xhrFields:{withCredentials:true},
          data:{},
          timeout : 3000,
          url:this.url,
          cache:false,
          success:function (data) {
              var username = data.username.substring(3);
              $('.getusername').text(username);
              if(data.email == ""){
                  data.email ='暂无'
              }
              var level = parseInt(data.vip_level);
              for(var i=0;i<level;i++){
                  $('.getlevel').append('<img src="./img/2.png" id="jsoaeig"/>')
              }
              $('.getmoney').text(data.wallet);
              $('#vip_money').text(data.wallet);
              $('.getname').text(data.realname);
              $('.getloginmailbox').text(data.email);
              $('.getnumber').text(data.mobile);
              $('.getlogintime').text(Pubilc.time(data.reg_date.time));
              $('.getloginnext').text(Pubilc.time(data.login_time.time));
          },
          error:function (xhr, textStatus, errorThrown) {

          }
      });
  }  
};
var Home=new home();
Home.personal();