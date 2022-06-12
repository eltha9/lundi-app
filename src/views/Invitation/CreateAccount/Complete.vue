<template>
	<div class="create-account-complete flex flex-col justify-center items-center">
		<h2 class="salva-d-l text-primary-500 mb-3">Félictation !</h2>
		<span class="text-primary-500 sato-l-l">Vous êtes prêt à commencer</span>
		<btn @click.native="begin()" class="mt-10">
			<template #right>
				<i class="icon-arrow-right"></i>
			</template>
			Commencer
		</btn>
	</div>
</template>
<style lang="scss" scoped>
	.create-account-complete {
		position: absolute;

		width: 100%;
		height: 100%;
	}
</style>
<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	export default {
		components: {
			Btn,
		},
		methods: {
			begin() {
				this.$router.push({ name: "dashboard-home" });
			},
		},
	};
</script>
