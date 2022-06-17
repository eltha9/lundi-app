<template>
	<div class="stat-card flex-1">
		<div class="top flex justify-between sato-l-l mb-5 font-bold">
			<span class="text-greyscale-600 capitalize">{{ stat.name }}</span>
			<span :class="stat.mainValue < 0 ? 'text-semantic-negative-500' : 'text-semantic-positive-500'">{{ valueString }}</span>
		</div>
		<div class="bottom flex justify-between">
			<span class="salva-h3 text-greyscale-black mr-1">
				{{ stat.secondaryValue }}
				<span class="sato-l-m text-greyscale-600 capitalize">{{ stat.secondayUnit }}</span>
			</span>
			<router-link :to="{ name: stat.link }" class="flex text-primary-700 font-bold">
				Voir plus
				<i class="icon-arrow-right ml-1"></i>
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.stat-card {
	}
</style>

<script>
	export default {
		props: {
			stat: {
				required: true,
				type: Object,
				default: () => ({
					name: "",
					mainValue: 0,
					mainUnit: "",
					secondaryValue: 0,
					secondayUnit: "",
					link: "dashboard-analytics",
				}),
			},
		},
		computed: {
			valueString() {
				if (this.stat.mainValue < 0) return `${this.stat.mainValue}${this.stat.mainUnit}`;
				return `+${this.stat.mainValue}${this.stat.mainUnit}`;
			},
		},
	};
</script>
