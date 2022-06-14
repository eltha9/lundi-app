<template>
	<div class="role-selection">
		<div class="selected text-greyscale-500 sato-l-m" @click="isOpen = !isOpen" @blur="isOpen = false">
			{{ selectedName }}
			<i class="ml-1" :class="isOpen ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
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
		position: relative;
		.selected {
			z-index: 10;
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
	import { ROLES } from "@/lib/config.js";
	export default {
		props: {
			value: {
				require: true,
				type: String,
				default: "Editeur",
			},
		},
		data() {
			return {
				selection: ROLES.slice(1, 3),
				selected: ROLES[1].value,
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
		},
		methods: {
			selectChoice(value) {
				this.selected = value;
			},
		},
	};
</script>
