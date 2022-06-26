<template>
	<div class="role-selection" v-click-outside="clickOutsideEvent">
		<div class="selected sato-l-m py-2 px-3" :class="colorClass" @click="isOpen = !isOpen" @blur="isOpen = false">
			<slot name="left"></slot>
			{{ selectedName }}
			<i class="ml-1" :class="isOpen ? 'icon-caret-up' : 'icon-caret-down'"></i>
			<slot name="right"></slot>
		</div>
		<div v-if="isOpen" class="selection p-4 bg-greyscale-white flex flex-col justify-between">
			<div
				v-for="item in selection"
				:key="item.value"
				@click="selectChoice(item.value)"
				class="select-item sato-l-m"
				:class="item.value === selected ? 'text-greyscale-500' : 'text-greyscale-black active'"
			>
				{{ item.name }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.role-selection {
		width: fit-content;
		position: relative;
		.selected {
			z-index: 10;
			border-radius: 42px;
			cursor: pointer;
			i {
				font-size: 16px;
			}
		}
		.selection {
			z-index: 30;
			position: absolute;
			top: 102%;
			right: 0%;
			// transform: translateX(-50%);
			border-radius: 12px;
			gap: 8px;
			.select-item {
				cursor: pointer;
				padding: 8px;
				border-radius: 4px;
				&:hover {
					@apply bg-greyscale-300;
				}
			}
		}
	}
</style>
<script>
	export default {
		props: {
			value: {
				required: true,
				type: String,
				default: "Editeur",
			},
			items: {
				required: true,
				type: Array,
				default: () => [],
			},
			bgColor: {
				required: false,
				type: String,
				default: "bg-ternary-100",
			},
			textColor: {
				required: false,
				type: String,
				default: "text-ternary-500",
			},
			capitalize: {
				required: false,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				selection: [],
				selected: "",
				isOpen: false,
			};
		},
		watch: {
			selected() {
				this.$emit("input", this.selected);
			},
		},
		computed: {
			selectedName() {
				return this.selection.find((item) => item.value === this.selected)?.name || "error";
			},
			colorClass() {
				return this.bgColor + " " + this.textColor + " " + (this.capitalize ? "capitalze" : "uppercase");
			},
		},
		mounted() {
			this.selection = this.items;
			if (this.value === "") this.selected = this.items[0];
			else this.selected = this.value;
		},
		methods: {
			selectChoice(value) {
				this.selected = value;
			},
			clickOutsideEvent() {
				this.isOpen = false;
			},
		},
	};
</script>
