<template>
    <div class='deposit row'>
        <div class="col-4 A-main" @click="PageJump($event)" v-for="v in tranfer" :data-src="v.url" v-if="v.url === '/Online' ? userNew.applet : true">
            <p class="A-img">
                <i :class="v.img"></i>
            </p>
            <p class="A-title">{{v.sup}}</p>
            <p class="A-text">{{v.sub}}</p>
        </div>
        <div class="col-4 A-main" v-if="userNew.applet === false">
            <p class="A-img">
                <i></i>
            </p>
            <p class="A-title"></p>
            <p class="A-text"></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      text: "存款",
      tranfer: tranfer
    };
  },
  computed: {
    userNew: function() {
      //判断登录
      return this.$store.state.userNew;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      if (this.userNew.applet === false) {
        document.getElementsByClassName(
          "deposit"
        )[0].lastChild.style.borderBottom =
          "none";
      }
    });
  },
  methods: {
    PageJump: function(event) {
      let el, vm, type;
      vm = this;
      el = event.currentTarget.getAttribute("data-src");
      if (el === "/Online") {
        type = "5";
        vm.$store.dispatch("inceuserNew", {
          id: 8,
          src: "/Recharge",
          type: type
        });
        vm.$BugNewPaymentList(vm, { type: type });
      } else if (el === "/Alipay") {
        type = "6";
        vm.$store.dispatch("inceuserNew", {
          id: 8,
          src: "/Recharge",
          type: type
        });
        vm.$BugNewPaymentList(vm, { type: type });
      } else if (el === "/Wechat") {
        type = "7";
        vm.$store.dispatch("inceuserNew", {
          id: 8,
          src: "/Recharge",
          type: type
        });
        vm.$BugNewPaymentList(vm, { type: type });
      } else if (el === "/TenPay") {
        type = "8";
        vm.$store.dispatch("inceuserNew", {
          id: 8,
          src: "/Recharge",
          type: type
        });
        vm.$BugNewPaymentList(vm, { type: type });
      } else {
        return vm.$router.push({ path: el });
      }
    }
  },
  components: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../../static/css/style.less";
.deposit {
  margin-top: 0.2rem;
  width: 100%;
  .A-main {
    height: 2.2rem;
    background: #fff;
    .border(1px,#d2d2d2);
    .A-img {
      height: 1.3rem;
      padding-top: 0.3rem;
    }
    .A-title {
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.25rem;
      color: #999;
    }
    .A-text {
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.3rem;
      color: #333;
    }
  }
  .A-main:nth-child(3n + 1) {
    border-left: none;
  }
  .A-main:nth-child(3n + 2) {
    border-left: none;
    border-right: none;
  }
  .A-main:nth-child(3n + 3) {
    border-right: none;
  }
  .A-main:nth-child(1n + 4) {
    border-top: none;
  }
}
</style>
