<template>
    <div class='HelpProcess'>
        <Top :text="Topobj"></Top>
        <div class="detail">
            <h1>提款流程</h1>
            <p>当您在“澳门银河”成功存款并进行游戏后，即可进行提款操作（须满足最低提款金额要求）。您只需根据以下提示，按下列步骤操作即可开通账户：<br>1) 登录“澳门银河”（或已处于登录状态），在会员中心点击 “提款专区”项。<br>2) 进入“提款”页面。注意！因确保您的帐户安全，第一次进行提款操作时，需先设置提款密码唷！请务必确认您的牢记您的提款密码，请勿将您的密码提供给其他人。<br>3) 接下来，您可以开始添加银行卡。完成銀行卡添加以後，才能夠进行提款操作。此银行卡的开户名必须与您帐号所填真实姓名一致，否则提款可能会失败。我们支援工商银行、建设银行等26家银行的储蓄卡，您所填写的银行不需要开通网银亦可以提款，填写银行卡会自动识别所属银行。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                Topobj:{
                    text:'问题详情',
                    withdraw:'/HelpWithdrawal',
                },
            }
        },
        computed: {},
        mounted: function () {
        },
        methods: {},
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";

.HelpProcess{
    font-size: 0;
    width: 100%;
}

</style>