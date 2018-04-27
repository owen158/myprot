<template>
	<div class='helplogreg'>
		<Top :text="Topobj"></Top>
		<div class="detail">
			<h1>我想删除/注销我的账号可以吗？</h1>
			<p>我公司不会以任何理由注销玩家账号。您可在线客服申请停用账号，以停止其账号的使用。</p>
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