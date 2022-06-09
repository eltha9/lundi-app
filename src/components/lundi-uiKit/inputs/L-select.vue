<template>
	<div class="l-select">
		<!-- <select :id="`${name}-selector`" :name="name" @click.prevent="isOpen = !isOpen">
			<option v-for="item in options" :value="item" :key="item">{{ item }}</option>
		</select> -->
		<div
			class="select-container flex justify-between items-center px-4 bg-greyscale-white"
			@click.prevent="isOpen = !isOpen"
			:class="isOpen ? 'text-greyscale-black active' : 'text-greyscale-300'"
		>
			<div class="label-container flex flex-col">
				<span class="container text-greyscale-500" :class="selected.trim() !== '' ? 'sato-p-s' : 'sato-l-l'">{{
					placeholder.trim() === '' ? name : placeholder
				}}</span>
				<span v-if="asValue" class="value text-greyscale-black sato-l-l">{{ selected }}</span>
			</div>
			<i class="text-greyscale-black" :class="isOpen ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
		</div>
		<div v-show="isOpen" class="options flex flex-col p-4 sato-l-l text-greyscale-300 bg-greyscale-white">
			<div
				v-for="item in options"
				:value="item"
				:key="item"
				:class="item === selected ? 'text-greyscale-black' : 'text-greyscale-500'"
				:selected="item === selected"
				@click="selectEvent(item)"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.l-select {
		position: relative;
		box-sizing: border-box;
		height: 56px;
		width: 350px;
		.select-container {
			cursor: pointer;
			border: 1px solid;
			width: 100%;
			height: 100%;
			border-radius: 8px;
			&.active {
				border: 2px solid;
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

			box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
			div:hover {
				cursor: pointer;
				@apply text-greyscale-black;
			}
		}
	}
</style>

<script>
	export default {
		name: 'l-select',
		props: {
			value: {
				require: true,
				type: String,
				default: '',
			},
			options: {
				require: true,
				type: Array,
				default: () => [],
			},
			name: {
				require: true,
				type: String,
				default: 'Select an options',
			},
			placeholder: {
				require: false,
				type: String,
				default: '',
			},
		},
		data() {
			return {
				selected: '',
				isOpen: false,
			};
		},
		computed: {
			asValue() {
				return this.selected.trim() !== '';
			},
		},
		watch: {
			selected() {
				this.$emit('input', this.selected);
			},
		},
		mounted() {
			this.selected = this.value;
		},
		methods: {
			selectEvent(item) {
				if (item === this.selected) {
					this.selected = '';
				} else {
					this.selected = item;
				}
			},
		},
	};
</script>