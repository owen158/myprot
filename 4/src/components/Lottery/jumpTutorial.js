let jumpTutorial = (vm, ee) => {
    if ('支付宝' == ee) {
      vm.$router.push('/HelpProcessEight')
    } else if ('微信' == ee) {
      vm.$router.push('/HelpProcessSeven')
    } else if ('快捷支付' == ee) {
      vm.$router.push('/HelpProcessFives')
    }else if ('银联扫码' == ee) {
      vm.$router.push('/HelpProcessNine')
    }else if ('财付通支付' == ee) {
      vm.$router.push('/HelpProcessTen')
    }else if ('京东支付' == ee) {
      vm.$router.push('/HelpProcessEleven')
    }
  }
  export default jumpTutorial
