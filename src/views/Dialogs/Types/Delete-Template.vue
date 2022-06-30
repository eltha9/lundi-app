<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div class="content">
			<h3 class="salva-h3 text-greyscale-black mb-4">Etes-vous sûr de vouloir supprimer ce template</h3>
			<p class="sato-p-l text-greyscale-700"></p>
		</div>
		<div class="bottom-cta flex justify-between">
			<btn @click="closeDialog()" primary class="flex-1">Annuler</btn>
			<btn @click="deleteTemplate()" secondary class="flex-1">Supprimer</btn>
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
	import { mapActions } from "vuex";
	export default {
		components: {
			Btn,
		},
		methods: {
			...mapActions(["closeDialog", "deleteTemplate"]),
		},
	};
</script>
