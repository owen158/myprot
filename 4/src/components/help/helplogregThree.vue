<template>
	<div class='helplogreg'>
		<Top :text="Topobj"></Top>
		<div class="detail">
			<h1>如何登录会员中心？</h1>
			<p>在菜单底部点击登录，在登录页面输入正确的账号及密码后，即可登录。</p>
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