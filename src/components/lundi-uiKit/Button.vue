<template>
	<button class="btn salva-l-l" :class="buttonClasses" :style="variables" :disabled="disabled">
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

		background-color: var(--bg);
		color: var(--text);
		&:hover {
			background-color: var(--bg-hover);
			color: var(--text-hover);
		}
		&:focus {
			// Todo pixel change size of button
			background-color: var(--bg-focus);
			color: var(--text-focus);
			border: 1px solid var(--border-focus);
		}
		&:disabled {
			color: var(--text-disable);
			background-color: var(--bg-disable);
		}

		&.secondary {
			background-color: var(--bg);
			color: var(--text);
			border: 1px solid var(--border);

			&:hover {
				background-color: var(--bg-hover);
				color: var(--text-hover);
				border: 1px solid var(--border-hover);
			}
			&:focus {
				// Todo pixel change size of button
				background-color: var(--bg-focus);
				color: var(--text-focus);
				border: 1px solid var(--border-focus);
			}
			&:disabled {
				color: var(--text-disable);
				background-color: var(--bg-disable);
				border: 1px solid var(--border-disable);
			}
		}
	}
</style>

<script>
	import tailwindConfig from '@/../tailwind.config';
	export default {
		name: 'Btn',
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
				default: 'primary',
			},
			disabled: {
				type: Boolean,
				require: false,
				default: false,
			},
		},
		computed: {
			variables() {
				const colorData = this.color.split('-');
				let color = tailwindConfig.theme.colors;
				for (const colorPart of colorData) {
					color = color[colorPart];
				}
				console.log(color);
				return {
					// default
					'--bg': this.secondary ? tailwindConfig.theme.colors.greyscale.white : color[500],
					'--border': this.secondary ? color[500] : color[500],
					'--text': this.secondary ? color[700] : tailwindConfig.theme.colors.greyscale.white,
					//on hover
					'--bg-hover': this.secondary ? tailwindConfig.theme.colors.greyscale.white : color[700],
					'--border-hover': this.secondary ? color[700] : color[700],
					'--text-hover': this.secondary ? color[700] : tailwindConfig.theme.colors.greyscale.white,
					// on press
					'--bg-pressed': this.secondary ? tailwindConfig.theme.colors.greyscale.white : color[500],
					'--border-pressed': this.secondary ? color[500] : color[500],
					'--text-pressed': this.secondary ? color[700] : tailwindConfig.theme.colors.greyscale.white,
					// on focus
					'--bg-focus': this.secondary ? tailwindConfig.theme.colors.greyscale.white : color[500],
					'--border-focus': this.secondary ? color[500] : color[300],
					'--text-focus': this.secondary ? color[700] : tailwindConfig.theme.colors.greyscale.white,
					// disable
					'--bg-disable': this.secondary ? tailwindConfig.theme.colors.greyscale.white : tailwindConfig.theme.colors.greyscale['200'],
					'--border-disable': this.secondary ? tailwindConfig.theme.colors.greyscale['400'] : tailwindConfig.theme.colors.greyscale['400'],
					'--text-disable': this.secondary ? tailwindConfig.theme.colors.greyscale['500'] : tailwindConfig.theme.colors.greyscale['400'],
				};
			},
			buttonClasses() {
				let classes = [];
				if (this.icon) classes.push('icon');
				if (this.secondary) classes.push('secondary');

				return classes.join(' ');
			},
		},
	};
</script>
