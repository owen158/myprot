<template>
	<div class='helplogreg'>
		<Top :text="Topobj"></Top>
		<div class="detail">
			<h1>我可以注册多个账号吗？</h1>
			<p>客户不可以同时拥有多个账号，如发现客户拥有多个户口，公司有权取消其户口以及投注，本公司保留权利取消或关闭您的账户本公司有权限制客户只保留其中一个户口。</p>
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