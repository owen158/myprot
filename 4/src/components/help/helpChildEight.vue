<template>
    <div class='helplogreg HelpChildOne'>
        <Top :text="Topobj"></Top>
        <h2 class="G_title">隐私信息是否安全？</h2>
        <div class="detail" style="padding-top: 0">
            <p style="margin-top: 0">澳门银河将尽全力保护客户提供给我们的个人资料，不会蓄意将该数据泄漏给外人，除非此政策条款里有明文规定。所有澳门银河员工都被要求遵循该政策条款。员工有义务严密的保守客户的个人信息，即使员工离开澳门银河后仍须坚守此义务。阁下本人也须保护好您的个人信息。阁下应严守您的帐户密码，不应将此透露给其他人。</p>
        </div>
    </div>
</template>

<script>
    import Top from '../Top/Top.vue'
    export default {
        data() {
            return {
                Topobj: {
                    text: '问题详情',
                    withdraw: '/help',
                },
            }
        },
        computed: {},
        mounted: function() {},
        methods: {},
        created() {},
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "style.less";
    .HelpChildOne{
        height: 100%;
        background: #fff;
        .G_title{
            font-size: 14px;
        }
    }
    .helplogreg {
        font-size: 0;
        width: 100%;
        p{
            line-height: 20px;
            font-size: 13px;
        }

    }
</style>