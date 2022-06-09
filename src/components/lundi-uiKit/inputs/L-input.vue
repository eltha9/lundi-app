<template>
	<div class="l-input">
		<div class="input-container flex justify-between items-center px-4 bg-greyscale-white" :class="getInputClass">
			<div class="label-container flex flex-col">
				<span class="container text-greyscale-500" :class="getLabelClass">{{ placeholder.trim() === "" ? name : placeholder }}</span>
				<span v-if="asValue" class="value text-greyscale-black sato-l-l">{{ inputValue }}</span>
			</div>
		</div>
		<div v-if="asError" class="error-text text-semantic-negative-500 sato-l-s pt-2">Sorry an error occuried</div>
	</div>
</template>
<style lang="scss" scoped>
	.l-input {
		position: relative;
		box-sizing: border-box;
		height: 56px;
		width: 350px;
		.input-container {
			cursor: pointer;
			border: 1px solid;
			width: 100%;
			height: 100%;
			border-radius: 8px;
			&.active,
			&.error {
				border: 2px solid;
			}
			&:hover {
				@apply text-greyscale-black;
			}
		}
		.error-text {
			position: absolute;
			width: 100%;
			top: 100%;
			left: 0;
		}
	}
</style>

<script>
	export default {
		name: "l-input",
		props: {
			value: {
				require: true,
				type: String,
				default: "",
			},
			type: {
				require: false,
				type: String,
				/**
				 * text
				 * password
				 * phone
				 */
				default: "text",
			},
			name: {
				require: true,
				type: String,
				default: "Input",
			},
			placeholder: {
				require: false,
				type: String,
				default: "",
			},
		},
		data() {
			return {
				inputValue: "",
				asError: false,
			};
		},
		computed: {
			asValue() {
				return this.inputValue.trim() !== "";
			},
			getLabelClass() {
				const classes = [];
				this.inputValue.trim() !== "" ? classes.push("sato-p-s") : classes.push("sato-l-l");
				this.asError ? classes.push("text-semantic-negative-500") : classes.push("text-greyscale-500");

				return classes.join(" ");
			},
			getInputClass() {
				const classes = [];
				if (this.asError) {
					classes.push("text-semantic-negative-500 error");
				} else {
					this.isOpen ? classes.push("text-greyscale-black active") : classes.push("text-greyscale-300");
				}
				return classes.join(" ");
			},
		},
		watch: {
			selected() {
				this.$emit("input", this.inputValue);
			},
		},
		mounted() {
			this.inputValue = this.value;
		},
		methods: {},
	};
</script>
