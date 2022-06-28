<template>
	<div class="t-todo mb-10 flex flex-col">
		<div v-for="(item, i) in data" :key="i" class="mb-4 flex items-start">
			<l-checkbox v-model="item.checked" class="mr-4 mt-1.5" :name="'t-todo-' + superKey + '-' + i" />
			<textarea
				v-if="edit"
				v-model="item.str"
				class="flex-1 sato-p-xl text-greyscale-black"
				placeholder="une tache"
				oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
			></textarea>
			<span v-else class="flex-1 sato-p-xl text-greyscale-black">{{ item.str }}</span>
		</div>
		<btn v-if="edit" ternary icon @click="addRow" class="self-center">
			<i class="icon-add"></i>
		</btn>
	</div>
</template>

<style lang="scss" scoped>
	.t-todo {
		width: 50%;
		max-width: 50%;
		textarea {
			min-height: 28px;
			height: 28px;
			&:focus {
				outline: none;
			}
		}
		::-webkit-resizer {
			display: none;
		}
	}
</style>
<script>
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	export default {
		components: {
			LCheckbox,
			Btn,
		},
		props: {
			value: {
				require: true,
				type: Array,
				default: () => [],
			},
			edit: {
				require: true,
				type: Boolean,
				default: false,
			},
			superKey: {
				require: true,
				type: String,
				default: "",
			},
		},
		data() {
			return {
				data: [],
				oldData: [],
			};
		},
		watch: {
			data() {
				if (JSON.stringify(this.data) !== JSON.stringify(this.oldData)) this.$emit("input", this.data);
			},
		},
		mounted() {
			this.data = this.value;
			this.oldData = JSON.parse(JSON.stringify(this.value));
		},
		methods: {
			addRow() {
				this.data.push({ str: "", checked: false });
			},
		},
	};
</script>
