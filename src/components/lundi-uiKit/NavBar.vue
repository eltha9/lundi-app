<template>
	<div class="navBar flex salva-l-m">
		<button v-for="item in items" :key="item" :class="state === item ? 'active' : ''" @click="clickOnNavElement(item)">{{ item }}</button>
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
		gap: 8px;
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
				type: String,
				require: true,
				default: "",
			},
			items: {
				type: Array,
				require: true,
				default: () => ["left", "right"],
			},
		},
		data() {
			return {
				state: "",
			};
		},
		watch: {
			state(value) {
				this.$emit("input", value);
			},
		},
		mounted() {
			if (this.value.trim() !== "") this.state = this.value;
			else this.state = this.items[0];
		},
		methods: {
			clickOnNavElement(name) {
				if (this.state === name) return;
				this.state = name;
			},
		},
	};
</script>
