<template>
	<div class="l-checkbox">
		<label for="hidden-checkbox" class="flex justify-center items-center" :class="checkboxModel ? 'checked' : ''">
			<i v-show="checkboxModel" class="icon-check"></i>
		</label>
		<input type="checkbox" id="hidden-checkbox" v-model="checkboxModel" />
	</div>
</template>

<style lang="scss" scoped>
	.l-checkbox {
		position: relative;
		width: 16px;
		height: 16px;
		label {
			cursor: pointer;
			width: 100%;
			height: 100%;
			z-index: 20;
			border-radius: 4px;
			border: 1px solid;
			background: transparent;
			@apply text-greyscale-300;
			i {
				@apply text-greyscale-white;
				font-size: 12px;
			}
			&.checked {
				@apply bg-primary-500 text-primary-500;
			}
		}
		input#hidden-checkbox {
			position: absolute;
			opacity: 0;
			z-index: -10;
			top: 0;
			left: 0;
		}
	}
</style>
<script>
	export default {
		props: {
			value: {
				require: true,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				checkboxModel: false,
			};
		},
		watch: {
			checkboxModel() {
				this.$emit('input', this.checkboxModel);
			},
		},
		mounted() {
			this.checkboxModel = this.value;
		},
	};
</script>
