<template>
	<div class='helplogreg'>
		<Top :text="Topobj"></Top>
		<div class="detail">
			<h1>登录时密码提示错误，我该怎么办？</h1>
			<p>首先请您再次确认输入的密码是否正确，必须是6-12个字符（由大小写英文字母和数字组成）。若确认后仍提示错误，建议您通过自助流程找回密码。或者，您也可以在线客服协助您找回密码。</p>
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

	}
</style>