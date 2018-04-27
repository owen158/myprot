<template>
	<div class='helplogreg'>
		<Top :text="Topobj"></Top>
		<div class="detail">
			<h1>如何注册?</h1>
			<p>打开我公司的网站后，点击登录区的注册，如实填写您的资料信息，确认送出后即可完成注册。</p>
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