<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div class="content">
			<h3 class="salva-h3 text-greyscale-black mb-4">Etes-vous sûr de vouloir quitter sans sauvegarder</h3>
			<p class="sato-p-l text-greyscale-700 mb-8"></p>
			<div>
				<l-select v-model="forWho" name="Pour qui ?" :options="forWhoOtpions" class="mb-6" />
				<l-select v-model="seniority" name="Séniorité" :options="seniorityOptions" />
			</div>
		</div>
		<div class="bottom-cta flex justify-between">
			<btn @click="closeDialog()" secondary class="flex-1">Annuler</btn>
			<btn @click="publishTemplate({ seniority, forWho })" primary class="flex-1">
				Publier
				<template #right>
					<i class="icon-cloud-upload"></i>
				</template>
			</btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.bottom-cta {
		gap: 16px;
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LSelect from "@/components/lundi-uiKit/inputs/L-select.vue";
	import { mapActions } from "vuex";
	import { SENIORITY } from "@/lib/config.js";
	export default {
		components: {
			Btn,
			LSelect,
		},
		data() {
			return {
				forWho: "",
				seniority: "",
				forWhoOtpions: [],
				seniorityOptions: SENIORITY,
			};
		},
		computed: {},
		methods: {
			...mapActions(["closeDialog", "publishTemplate"]),
		},
	};
</script>
