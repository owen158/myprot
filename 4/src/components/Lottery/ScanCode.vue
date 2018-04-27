<template>
    <div class='ScanCode'>
        <el-row class="G-ScanCode-item">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <router-link to="/ScanCodebankAlipay">
                        支付宝
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <router-link to="/ScanCodebankWechat">
                        微信
                    </router-link>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <router-link to="/ScanCodebankTenPay">
                        财付通
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>
<script>
var el, vm;
export default {
  data() {
    return {
      Type: null,
      activeName: "1"
    };
  },
  computed: {
    userNew: function() {
      ////注册字段
      return this.$store.state.userNew;
    }
  }
};
</script>
<style lang='less'>
@import "../../../static/css/style.less";
.G-ScanCode-item {
  height: 40px;
  margin-bottom: 3px;
  line-height: 40px;
  background: #fff;
  font-size: 14px;
  a {
    display: block;
  }
}
.ScanCode {
  /*padding: 0 10px;*/
  width: 100%;
  .router-link-exact-active {
    color: #c8a675;
    border-bottom: 2px solid #c8a675;
  }
}
</style>
