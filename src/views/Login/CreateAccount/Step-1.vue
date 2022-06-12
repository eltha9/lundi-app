<template>
	<div class="create-account-step1">
		<div class="step-title salva-h3 text-primary-500">Bienvenue {{ me.firstName }} !</div>
		<div class="step-subtitle text-greyscale-700 sato-l-l">
			Pour une expérience optimale avec vos collaborateurs, vous devez personaliser le compte de votre entreprise.
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.create-account-step1 {
		height: fit-content;
		grid-column: 4/10;
	}
</style>
<script>
	import { mapState } from "vuex";
	export default {
		props: {
			value: {
				require: true,
				type: Object,
				default: () => {
					return {
						compagnieName: "",
						logo: null,
					};
				},
			},
		},
		computed: {
			...mapState(["me"]),
		},
	};
</script>
