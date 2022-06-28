<template>
	<div class="camamber-card bg-greyscale-white text-greyscale-300 p-6 flex flex-col">
		<div class="top mb-10">
			<h4 class="salva-h4 text-greyscale-800">Progression global</h4>
		</div>
		<div class="graph flex-1 flex justify-center items-center">
			<span class="sato-l-m font-bold text-greyscale-black">Pas encore de données pour le moment.</span>
		</div>
		<div class="bottom flex justify-between mt-10">
			<div class="flex flex-col">
				<span class="mb-2 saro-l-m font-bold text-greyscale-800">Durée de l'onboarding</span>
				<div class="sato-l-m text-greyscale-600">
					<span class="mr-1 salva-h3 text-greyscale-700">{{ lastUpdate(me.createdDate) }}</span
					>Jours
				</div>
			</div>
			<div class="flex flex-col">
				<span class="mb-2 saro-l-m font-bold text-greyscale-800">Date d'arrivée</span>
				<span class="sato-l-m text-greyscale-600">{{ formatDate(me.createdDate) }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.camamber-card {
		border: 1px solid;
		border-radius: 12px;
	}
</style>

<script>
	import { mapState } from "vuex";
	export default {
		computed: {
			...mapState(["me"]),
		},
		methods: {
			lastUpdate(date) {
				const todayStamp = parseInt(Date.now() / 1000);
				const templateStamp = parseInt(new Date(date).getTime() / 1000);
				return Math.max(parseInt((todayStamp - templateStamp) / 60 / 60 / 24), 1) || "X";
			},
			formatDate(date) {
				const split = date.split("-");
				return `${split[2]}/${split[1]}/${split[0]}`;
			},
		},
	};
</script>
