<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div class="content">
			<h3 class="salva-h3 text-greyscale-black mb-4">Sauvegarder le template</h3>
			<p class="sato-p-l text-greyscale-700"></p>
		</div>
		<div class="bottom-cta flex justify-between">
			<btn @click="closeDialog()" secondary class="flex-1">Quitter</btn>
			<btn @click="saveTemplate()" primary class="flex-1">Sauvegarder</btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.bottom-cta {
		gap: 16px;
	}
</style>

<script>
	import Btn from '@/components/lundi-uiKit/Button.vue';
	import {mapActions} from 'vuex';
	export default {
		components: {
			Btn,
		},
		methods: {
			...mapActions(['closeDialog', 'saveTemplate']),
		},
	};
</script>
