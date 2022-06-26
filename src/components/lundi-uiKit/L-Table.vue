<template>
	<div class="l-table">
		<table>
			<thead class="font-bold">
				<th class="checker-head text-greyscale-800"></th>
				<th v-for="(header, i) in headers" :key="`${i}-${header.key}`" class="text-greyscale-800">
					{{ header.name }}
					<i
						v-if="header.sorted"
						class="text-inherit sato-l-s ml-2 cursor-pointer"
						:class="getSortClass(header.key)"
						@click="sort(header.key)"
					></i>
				</th>
				<th v-if="options"></th>
			</thead>
			<tbody>
				<tr v-for="(item, i) in tableItems" :key="i">
					<td class="checker-body pl-6">
						<l-checkbox v-if="showCheckBox" v-model="item.checked" :name="`table-${i}`" />
					</td>
					<td v-for="(header, i) in headers" :key="`${i}-${header.key}`">
						<slot :name="`item-${header.key}`" :item="item">
							{{ item[header.key] }}
						</slot>
					</td>
					<td v-if="options">
						<slot name="options" :item="item">
							<btn ternary icon>
								<i class="icon-options-vertical"></i>
							</btn>
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style lang="scss" scoped>
	.l-table {
		width: 100%;
		border-radius: 12px;
		overflow: hidden;
		table {
			width: 100%;
			thead {
				@apply bg-greyscale-white text-greyscale-200;
				th {
					padding: 16px 0px;
					text-align: left;
				}
				border-bottom: 1px solid;
			}
			tbody {
				tr {
					padding: 16px 24px;
					height: 60px;
					td {
						height: 100%;
						padding-right: 64px;
						&:last-child {
							padding-right: 0;
						}
						&:first-child {
							padding-right: 16px;
						}
					}
					@apply bg-greyscale-white;
					&:nth-child(2n + 1) {
						@apply bg-greyscale-200;
					}
				}
			}
			// .checker-head,
			.checker-body {
				width: 16px;
			}
		}
	}
</style>

<script>
	import LCheckbox from '@/components/lundi-uiKit/inputs/L-checkbox.vue';
	import Btn from '@/components/lundi-uiKit/Button.vue';
	export default {
		components: {
			LCheckbox,
			Btn,
		},
		props: {
			/**
			 * the header need to be an object with those elements ;
			 * {
			 *      name:String,
			 * 		key: String
			 *      sorted: Boolean
			 *
			 * }
			 */
			headers: {
				required: true,
				type: Array,
				default: () => [],
			},
			items: {
				required: true,
				type: Array,
				default: () => [],
			},
			showCheckBox: {
				required: false,
				type: Boolean,
				default: false,
			},
			options: {
				required: false,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				states: [null, 'up', 'down'],
				sortBy: null, // this will be the name of colum we will sort
				sortState: null,

				/// duplicate data
				tableItems: [],
				deepTableItemsCopy: [],
			};
		},
		watch: {
			tableItems(newValue) {
				this.$emit('input', newValue);
			},
			items() {
				this.tableItems = JSON.parse(JSON.stringify(this.items));
				this.sortBy = null;
				this.sortState = null;
			},
		},
		mounted() {
			this.tableItems = JSON.parse(JSON.stringify(this.items));
			this.tableItems.map((item) => ({...item, checked: false}));
			this.deepTableItemsCopy = JSON.parse(JSON.stringify(this.tableItems));
		},
		methods: {
			sort(name) {
				if (this.sortBy !== name) {
					this.sortBy = name;
					this.sortState = 1;
					this.upSort(name);
				} else {
					this.sortState++;
					if (this.sortState <= this.states.length) {
						if (this.sortState === 1) this.upSort(name);
						if (this.sortState === 2) this.downSort(name);
					} else {
						this.sortBy = null;
						this.sortState = null;
						this.tableItems = JSON.parse(JSON.stringify(this.deepTableItemsCopy));
					}
				}
			},
			getSortClass(name) {
				let classes = [];
				if (name === this.sortBy) {
					if (this.sortState === 1) classes.push('icon-sort-top');
					else if (this.sortState === 2) classes.push('icon-sort-bot');
					else classes.push('icon-sort2');
				} else {
					classes.push('icon-sort2');
				}
				return classes.join(' ');
			},
			upSort(colName) {
				this.tableItems.sort((a, b) => (a[colName] < b[colName] ? 1 : -1));
			},
			downSort(colName) {
				this.tableItems.sort((a, b) => (a[colName] > b[colName] ? 1 : -1));
			},
		},
	};
</script>
