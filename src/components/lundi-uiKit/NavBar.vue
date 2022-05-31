<template>
	<div class="navBar flex salva-l-m">
		<button @click="clickLeftBtn()" :class="state ? 'active' : ''" class="mr-2">{{ items[0] }}</button>
		<button @click="clickRightBtn()" :class="state ? '' : 'active'">{{ items[1] }}</button>
	</div>
</template>
<style lang="scss" scoped>
	.navBar {
		@apply text-greyscale-300;
		padding: 8px;
		border-radius: 8px;
		border: 1px solid;
		width: fit-content;
		height: fit-content;
		button {
			@apply text-greyscale-800;
			padding: 8px 12px;
			border-radius: 8px;
			overflow: hidden;
		}
		button.active {
			@apply text-greyscale-200 bg-primary-900;
		}
	}
</style>
<script>
	export default {
		name: "NavBar",
		props: {
			value: {
				type: Boolean,
				require: true,
				default: true,
			},
			items: {
				type: Array,
				require: true,
				default: () => ["left", "right"],
			},
		},
		data() {
			return {
				state: true,
			};
		},
		mounted() {
			this.state = this.value;
		},
		methods: {
			clickLeftBtn() {
				if (this.state) return;
				this.state = true;
				this.$emit("input", this.state);
			},
			clickRightBtn() {
				if (!this.state) return;
				this.state = false;
				this.$emit("input", this.state);
			},
		},
	};
</script>
