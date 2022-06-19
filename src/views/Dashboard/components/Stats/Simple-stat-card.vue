<template>
	<div class="simple-stat-card flex flex-col justify-between text-greyscale-300 bg-greyscale-white p-6">
		<div class="top mb-20 flex justify-between">
			<div class="top-left">
				<div class="mb-1 font-bold salva-l-l text-greyscale-800 capitalize">{{ name }}</div>
				<div class="sato-l-m font-bold text-greyscale-600">{{ subTitle }}</div>
			</div>
			<div class="top-right sato-l-l text-semantic-info-500">
				<span v-if="factoredCurrentChange !== null">
					{{ factoredCurrentChange }}
				</span>
			</div>
		</div>
		<div class="bottom flex justify-between items-center">
			<div class="bottom-left sato-l-m text-greyscale-600">
				<span class="salva-h3 text-greyscale-700 mr-1">{{ value }}</span
				>{{ valueUnit }}
			</div>
			<div class="bottom-right">
				<router-link v-if="link !== null" :to="{ name: link }">
					<i class="icon-arrow-right text-greyscale-black"></i>
				</router-link>
				<div
					v-else-if="tendency !== null"
					class="sato-l-l font-bold"
					:class="tendency >= 0 ? 'text-semantic-positive-500' : 'text-semantic-negative-500'"
				>
					<i class="mr-1.5" :class="tendency >= 0 ? 'icon-trending-up' : 'icon-trending-down'"></i>
					{{ factoredTendency }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.simple-stat-card {
		border: 1px solid;
		border-radius: 12px;
		.bottom {
			.bottom-right {
				i {
					font-size: 24px;
				}
			}
		}
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	export default {
		components: {
			Btn,
		},
		props: {
			name: {
				required: true,
				type: String,
				default: "",
			},
			subTitle: {
				required: true,
				type: String,
				default: "",
			},
			value: {
				required: true,
				type: Number,
				default: null,
			},
			valueUnit: {
				required: true,
				type: String,
				default: "",
			},
			currentChange: {
				require: false,
				type: Number,
				default: null,
			},
			tendency: {
				require: false,
				type: Number,
				default: null,
			},
			link: {
				require: false,
				type: String,
				default: null,
			},
		},
		computed: {
			factoredTendency() {
				if (this.tendency === null) return null;
				if (this.tendency >= 0) return `+${this.tendency}%`;
				return `${this.tendency}%`;
			},
			factoredCurrentChange() {
				if (this.currentChange === null) return null;
				if (this.currentChange > 0) return `+${this.currentChange}`;
				return this.currentChange;
			},
		},
	};
</script>
