<template>
	<button class="btn fs-body-m" :class="icon ? 'icon' : ''" :style="variables" :disabled="disabled">
		<slot v-if="!icon" name="left"> </slot>
		<slot> Btn text </slot>
		<slot v-if="!icon" name="right"> </slot>
	</button>
</template>

<style lang="scss" scoped>
	button.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		border-radius: 12px;
		box-sizing: border-box;
		padding: 8px 16px;
		&.icon {
			border-radius: 12px;
			padding: 8px;
			&:focus {
				padding: 7px;
			}
		}
		background-color: var(--bg-500);

		color: var(--text-300);
		//   events
		&:hover {
			background-color: var(--bg-700);
		}
		&:focus {
			// Todo pixel change size of button
			box-sizing: border-box;
			border: 1px solid var(--text-300);
		}
		// same as default
		// &:active {
		// }
		&:disabled {
			color: var(--text-400);
			background-color: var(--bg-200);
		}
	}
</style>

<script>
	import tailwindConfig from "@/../tailwind.config";
	export default {
		name: "Btn",
		props: {
			icon: {
				type: Boolean,
				require: false,
				default: false,
			},
			primary: {
				type: Boolean,
				require: false,
				default: true,
			},
			secondary: {
				type: Boolean,
				require: false,
				default: false,
			},
			color: {
				type: String,
				require: false,
				default: "primary",
			},
			disabled: {
				type: Boolean,
				require: false,
				default: false,
			},
		},
		computed: {
			variables() {
				const colorData = this.color.split("-");
				let color = tailwindConfig.theme.colors;
				for (const colorPart of colorData) {
					color = color[colorPart];
				}
				console.log(color);
				return {
					"--bg-700": this.secondary ? tailwindConfig.theme.colors.greyscale["300"] : color["700"],
					"--bg-500": this.secondary ? tailwindConfig.theme.colors.greyscale["200"] : color["500"],
					"--text-300": this.secondary ? tailwindConfig.theme.colors.greyscale.black : tailwindConfig.theme.colors.greyscale.white,
					"--text-400": this.secondary ? tailwindConfig.theme.colors.greyscale["500"] : tailwindConfig.theme.colors.greyscale["400"],
					"--bg-200": this.secondary ? tailwindConfig.theme.colors.greyscale["200"] : tailwindConfig.theme.colors.greyscale["200"],
				};
			},
		},
	};
</script>
