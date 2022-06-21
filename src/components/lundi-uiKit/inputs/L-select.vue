<template>
	<div class="l-select" v-click-outside="hideSelectOption">
		<div class="select-container flex justify-between items-center px-4 bg-greyscale-white" @click.prevent="isOpen = !isOpen" :class="getInputClass">
			<div class="label-container flex flex-col">
				<span class="container text-greyscale-500" :class="getLabelClass">{{ placeholder.trim() === "" ? name : placeholder }}</span>
				<span v-if="asValue" class="value text-greyscale-black sato-l-l capitalize">{{ selected }}</span>
			</div>
			<i class="text-greyscale-black" :class="isOpen ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
		</div>
		<div v-if="isOpen" class="options flex flex-col p-4 sato-l-l text-greyscale-300 bg-greyscale-white">
			<div
				v-for="item in options"
				:value="item"
				:key="item"
				class="capitalize"
				:class="item === selected ? 'text-greyscale-black' : 'text-greyscale-500'"
				:selected="item === selected"
				@click="selectEvent(item)"
			>
				{{ item }}
			</div>
		</div>
		<div v-if="asError" class="error-text text-semantic-negative-500 sato-l-s pt-2">Sorry an error occuried</div>
	</div>
</template>

<style lang="scss" scoped>
	.l-select {
		position: relative;
		box-sizing: border-box;
		height: 56px;
		.select-container {
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
		.options {
			border-radius: 8px;
			border: 1px solid;
			position: absolute;
			width: 100%;
			top: 100%;
			left: 0;
			gap: 16px;
			z-index: 20;
			box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
			div:hover {
				cursor: pointer;
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
		name: "l-select",
		props: {
			value: {
				require: true,
				type: String,
				default: "",
			},
			options: {
				require: true,
				type: Array,
				default: () => [],
			},
			name: {
				require: true,
				type: String,
				default: "Select an options",
			},
			placeholder: {
				require: false,
				type: String,
				default: "",
			},
		},
		data() {
			return {
				selected: "",
				isOpen: false,
				asError: false,
			};
		},
		computed: {
			asValue() {
				return this.selected.trim() !== "";
			},
			getLabelClass() {
				const classes = [];
				this.selected.trim() !== "" ? classes.push("sato-p-s") : classes.push("sato-l-l");
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
				this.$emit("input", this.selected);
			},
		},
		mounted() {
			this.selected = this.value;
		},
		methods: {
			selectEvent(item) {
				if (item === this.selected) {
					this.selected = "";
				} else {
					this.selected = item;
				}
			},
			hideSelectOption() {
				this.isOpen = false;
			},
		},
	};
</script>
