<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>支付宝支付流程</h1>
            <p>1)&nbsp;任意首页中点击底部存款按钮，进入存款专区；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/12.png" alt="">
            </p>
            <p>2)&nbsp;点选支付宝支付，输入金额后点击下一步提交订单，注意输入金额要在限额范围内；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/13.png" alt="">
            </p>
            <p>3)&nbsp;使用手机顶部下拉工具栏截图功能保存二维码到相册；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/14.png" alt="">
            </p>
            <p>4)&nbsp;自动进入支付宝页面后点击左上角扫一扫功能进入下一页面；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/15.png" alt="">
            </p>
            <p>5)&nbsp;点选右上角相册选择刚才截图的二维码付款；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/16.png" alt="">
            </p>
            <p>6)&nbsp;会员中心点击查询充值；</p>
            <p class="Hlpe_img">
                <img src="http://mobile.beike188.com/mobileYHH/image/help/HelpProcess/17.png" alt="">
            </p>
        </div>
    </div>
</template>

<script>
import Top from "../Top/Top.vue";
export default {
  data() {
    return {
      Topobj: {
        text: "问题详情",
        withdraw: "/"
      }
    };
  },
  computed: {},
  mounted: function() {},
  methods: {},
  created() {},
  components: {
    Top
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "style.less";
.HelpProcess {
  font-size: 0;
  width: 100%;
  p {
    line-height: 18px;
  }
}
</style>