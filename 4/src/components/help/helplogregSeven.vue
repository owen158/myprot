<template>
	<div class='helplogreg'>
		<Top :text="Topobj"></Top>
		<div class="detail">
			<h1>如何找回登录密码？</h1>
			<p>若忘记登录密码，请点击页面顶部登录区（或其他相关页面）的“忘记密码？”，然后根据页面提示进行操作即可。<br>具体操作步骤如下：<br>(1)输入您要找回登录密码的手机号／邮箱地址；<br>(2)根据页面提示，选择其中一种找回方式；<br>(3)核实身份后，重新设置新的登录密码；<br>(4)登录密码修改成功。</p>
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
					withdraw: '/helplogreg',
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
	.helplogreg {
		font-size: 0;
		width: 100%;
		p{
			line-height: 16px;
		}

	}
</style>