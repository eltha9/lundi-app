<template>
	<div class="l-table">
		<table>
			<thead>
				<th class="checker-head"></th>
				<th v-for="(hearder, i) in headers" :key="`${i}-${header}`">{{ header }}</th>
			</thead>
			<tbody>
				<!-- <div class="tbody-container"></div> -->
				<tr v-for="(item, i) in tableItems" :key="i">
					<td>plop</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style lang="scss" scoped>
	.l-table {
	}
</style>

<script>
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
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
				require: true,
				type: Array,
				default: () => [],
			},
			items: {
				require: true,
				type: Array,
				default: () => [],
			},
			showCheckBox: {
				require: false,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				states: [null, "up", "down"],
				sortBy: null, // this will be the name of colum we will sort
				sortState: null,

				/// duplicate data
				tableItems: [],
			};
		},
		mounted() {
			this.tableItems = this.items;
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
						if (this.sortState === 1) upSort(name);
						if (this.sortState === 2) downSort(name);
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
