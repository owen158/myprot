<template>
    <div class='ScanCode' ref="BackG">
        <TopCounter :title="'扫码支付'" :Boo="true" :src="'/deposit'"></TopCounter>
          <div class="Lscanbox row">
              <div class="row" data-Type="3" @click="Page($event)">
                  <a href="javascript:void(0)" class="Lscan-a row">
                      <div class="lf">
                          <i class="x-icon x-icon-tenpay"></i>
                      </div>
                      <p class="rf">财付通</p>
                  </a>
              </div>
              <div class="row" data-Type="1" @click="Page($event)">
                  <a href="javascript:void(0)" class="Lscan-a row" >
                      <div class="lf">
                          <i class="x-icon x-icon-Alipay"></i>
                      </div>
                      <p class="rf">支付宝</p>
                  </a>
              </div>
                <div class="row" data-Type="2" @click="Page($event)">
                    <a href="javascript:void(0)" class="Lscan-a row" >
                        <div class="lf">
                            <i class="x-icon x-icon-wechat"></i>
                        </div>
                        <p class="rf">微信支付</p>
                    </a>
                </div>
          </div>
    </div>
</template>

<script>
    var el,vm;
    export default {
        data () {
            return {
                Type:null,
            }
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            }
        },
        mounted: function () {
            this.setBackground();
        },
        methods: {
            setBackground(){
                this.$refs.BackG.style.minHeight = window.innerHeight+'px';
            },
            Page:function (event) {
                vm = this;
                el = event.currentTarget;
                vm.Type = el.getAttribute('data-Type');
                vm.$store.dispatch("incrscan",vm.Type);
                vm.$router.push({path:'/ScanCodebank'});
            }
        },
        created(){
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    @import "../../../static/css/style.less";
.ScanCode{
    padding-top: 0.8rem;
    min-height: 100%;
    .Bg-BackGround;
    width:100%;
  .Lscanbox{
    margin: 5% auto;
    width: 96%;
    border-radius: 3px;
    .Lscan-a{
      display: block;
      margin-top: 0.3rem;
      font-size: 0.35rem;
      background: @bg-c4;
        border:1px solid @bor-c1;
        margin-left: 0.1rem;
        border-radius: 3px;
        i{
            margin-left: 0.15rem;
            margin-top: 0.2rem;
        }
      p{
        display: block;
        height: 1.2rem;
        line-height: 1.2rem;
        padding-right: 0.2rem;
        color: @text-c2;
        font-weight: 600;
        text-align: right;
      }
    }
  }

}
</style>
