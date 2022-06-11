<template>
	<div class="l-input">
		<div class="input-container flex justify-between items-center px-4 bg-greyscale-white" :class="getInputClass" @click="clickEvent">
			<div class="label-container flex flex-col">
				<span class="container text-greyscale-500" :class="getLabelClass">{{ placeholder.trim() === "" ? name : placeholder }}</span>
				<span v-if="asValue || showInput" class="value text-greyscale-black sato-l-l">
					<input
						v-if="type === 'phone'"
						ref="textInput"
						class="sato-l-l text-greyscale-black"
						type="phone"
						:name="name"
						v-model="inputValue"
						@blur="blurEvent()"
					/>
					<input
						v-else-if="type === 'password'"
						ref="textInput"
						class="sato-l-l text-greyscale-black"
						:type="showPassword ? 'text' : 'password'"
						:name="name"
						v-model="inputValue"
						@blur="blurEvent()"
					/>
					<input v-else ref="textInput" class="sato-l-l text-greyscale-black" type="tel" :name="name" v-model="inputValue" @blur="blurEvent()" />
				</span>
			</div>
			<i
				v-if="type === 'password'"
				class="text-greyscale-black"
				:class="showPassword ? 'icon-eye-off' : 'icon-eye'"
				@mousedown="showPassword = true"
				@mouseup="showPassword = false"
			></i>
		</div>
		<div v-if="asError" class="error-text text-semantic-negative-500 sato-l-s pt-2">Sorry an error occuried</div>
	</div>
</template>
<style lang="scss" scoped>
	input {
		all: unset;
	}
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
				showInput: false,
				asError: false,
				inputNode: "",
				showPassword: false,
			};
		},
		computed: {
			asValue() {
				return this.inputValue.trim() !== "";
			},
			getLabelClass() {
				const classes = [];
				if (this.showInput) !this.showInput ? classes.push("sato-p-s") : classes.push("sato-l-l");
				else this.inputValue.trim() !== "" ? classes.push("sato-p-s") : classes.push("sato-l-l");
				this.asError ? classes.push("text-semantic-negative-500") : classes.push("text-greyscale-500");

				return classes.join(" ");
			},
			getInputClass() {
				const classes = [];
				if (this.asError) {
					classes.push("text-semantic-negative-500 error");
				} else {
					this.showInput ? classes.push("text-greyscale-black active") : classes.push("text-greyscale-300");
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
		methods: {
			clickEvent() {
				this.showInput = true;
				setTimeout(() => {
					this.$refs.textInput.focus();
				}, 200);
			},
			blurEvent() {
				this.showInput = false;
			},
		},
	};
</script>
