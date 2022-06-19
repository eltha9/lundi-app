<template>
	<div class="l-table">
		<table>
			<thead class="text-greyscale-800 font-bold">
				<th v-if="showCheckBox" class="checker-head"></th>
				<th v-for="(header, i) in headers" :key="`${i}-${header.name}`">
					{{ header.name }}
					<i class="icon-sort2 text-inherit sato-l-s ml-2"></i>
				</th>
			</thead>
			<!-- <div class="tbody-container"></div> -->
			<tbody>
				<tr v-for="(item, i) in tableItems" :key="i">
					<td v-if="showCheckBox" class="checker-body">
						<l-checkbox v-model="item.checked" :name="`table-${i}`" />
					</td>
					<td v-for="(header, i) in headers" :key="`${i}-${header.name}`">
						<slot :name="`item.${header.name.replace(' ', '')}`" :item="item[header.name]">
							{{ item[header.name] }}
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
		table {
			width: 100%;
			thead {
			}
			tbody {
			}
		}
	}
</style>

<script>
	import LCheckbox from '@/components/lundi-uiKit/inputs/L-checkbox.vue';
	export default {
		components: {
			LCheckbox,
		},
		props: {
			/**
			 * the header need to be an object with those elements ;
			 * {
			 *      name:String,
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
		},
		data() {
			return {
				states: [null, 'up', 'down'],
				sortBy: null, // this will be the name of colum we will sort
				sortState: null,

				/// duplicate data
				tableItems: [],
			};
		},
		mounted() {
			this.tableItems = this.items;
			this.tableItems.map((item) => ({...item, checked: false}));
		},
		methods: {
			sort(name) {
				if (this.sortBy !== name) {
					this.sortBy = name;
					this.sortState = 1;
					this.upSort(name);
				} else if (this.sortBy === name) {
					this.sortState++;
					if (this.sortState + 1 <= this.states.length) {
						if (this.sortState === 1) this.upSort(name);
						if (this.sortState === 2) this.downSort(name);
					} else {
						this.sortBy = null;
						this.sortState = null;
					}
				}
			},
			upSort(colName) {},
			downSort(colName) {},
		},
	};
</script>
