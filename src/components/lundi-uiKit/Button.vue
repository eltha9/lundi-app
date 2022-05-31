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
		&.ternary {
			background-color: transparent;
			color: var(--text);
			padding: 0;
			border: 1px solid transparent;
			border-radius: 0;
			padding-bottom: 8px;
			&:hover {
				color: var(--text-hover);
				border-bottom: 1px solid var(--border-hover);
			}
			&:focus {
				color: var(--text-focus);
				border-bottom: 1px solid var(--border-focus);
			}
			&:disabled {
				color: var(--text-disable);
			}
			&:disabled:hover {
				color: var(--text-disable);
				border: 1px solid transparent;
			}

			&.icon {
				color: var(--text);
				padding: 4px;
				overflow: hidden;
				border-radius: 50%;

				&:hover {
					background-color: var(--bg-hover);
					color: var(--text-hover);
				}
				&:focus {
					background-color: var(--bg-focus);
					color: var(--text-focus);
				}
				&:disabled {
					color: var(--text-disable);
					background-color: var(--bg-disable);
				}
				&:disabled:hover {
					color: var(--text-disable);
					background-color: var(--bg-disable);
				}
			}
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
			ternary: {
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
				if (this.secondary) {
					return {
						// default
						"--bg": tailwindConfig.theme.colors.greyscale.white,
						"--border": color["500"],
						"--text": color["700"],
						//on hover
						"--bg-hover": tailwindConfig.theme.colors.greyscale.white,
						"--border-hover": color["700"],
						"--text-hover": color["700"],
						// on press
						"--bg-pressed": tailwindConfig.theme.colors.greyscale.white,
						"--border-pressed": color["500"],
						"--text-pressed": color["700"],
						// on focus
						"--bg-focus": tailwindConfig.theme.colors.greyscale.white,
						"--border-focus": color["500"],
						"--text-focus": color["700"],
						// disable
						"--bg-disable": tailwindConfig.theme.colors.greyscale.white,
						"--border-disable": tailwindConfig.theme.colors.greyscale["400"],
						"--text-disable": tailwindConfig.theme.colors.greyscale["500"],
					};
				}
				if (this.ternary) {
					return {
						// default
						"--bg": tailwindConfig.theme.colors.greyscale.white,
						"--border": tailwindConfig.theme.colors.greyscale.white,
						"--text": this.icon ? tailwindConfig.theme.colors.greyscale.black : color["700"],
						//on hover
						"--bg-hover": this.icon ? color["100"] : tailwindConfig.theme.colors.greyscale.white,
						"--border-hover": this.icon ? tailwindConfig.theme.colors.greyscale.white : color["500"],
						"--text-hover": this.icon ? tailwindConfig.theme.colors.greyscale.black : color["500"],
						// on press
						"--bg-pressed": this.icon ? color["300"] : tailwindConfig.theme.colors.greyscale.white,
						"--border-pressed": this.icon ? tailwindConfig.theme.colors.greyscale.white : color["700"],
						"--text-pressed": this.icon ? tailwindConfig.theme.colors.greyscale.white : color["700"],
						// on focus
						"--bg-focus": this.icon ? color["100"] : tailwindConfig.theme.colors.greyscale.white,
						"--border-focus": tailwindConfig.theme.colors.greyscale.white,
						"--text-focus": this.icon ? tailwindConfig.theme.colors.greyscale.black : color["700"],
						// disable
						"--bg-disable": tailwindConfig.theme.colors.greyscale.white,
						"--border-disable": tailwindConfig.theme.colors.greyscale.white,
						"--text-disable": tailwindConfig.theme.colors.greyscale["500"],
					};
				}
				return {
					// default
					"--bg": color["500"],
					"--border": color["500"],
					"--text": tailwindConfig.theme.colors.greyscale.white,
					//on hover
					"--bg-hover": color["700"],
					"--border-hover": color["700"],
					"--text-hover": tailwindConfig.theme.colors.greyscale.white,
					// on press
					"--bg-pressed": color["500"],
					"--border-pressed": color["500"],
					"--text-pressed": tailwindConfig.theme.colors.greyscale.white,
					// on focus
					"--bg-focus": color["500"],
					"--border-focus": color["300"],
					"--text-focus": tailwindConfig.theme.colors.greyscale.white,
					// disable
					"--bg-disable": tailwindConfig.theme.colors.greyscale["200"],
					"--border-disable": tailwindConfig.theme.colors.greyscale["400"],
					"--text-disable": tailwindConfig.theme.colors.greyscale["400"],
				};
			},
			buttonClasses() {
				let classes = [];
				if (this.icon) classes.push("icon");
				if (this.secondary) {
					classes.push("secondary");
					return classes.join(" ");
				}
				if (this.ternary) {
					classes.push("ternary");
					return classes.join(" ");
				}
				if (this.primary) classes.push("primary");

				return classes.join(" ");
			},
		},
	};
</script>
