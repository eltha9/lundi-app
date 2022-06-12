<template>
	<div class="main-view main-login">
		<div class="image">
			<img src="@/../public/assets/login-image.png" alt="login image" />
		</div>
		<div class="left bg-background-100">
			<img src="@/../public/assets/lundi-temp.png" class="mt-8 mb-12" alt="Lundi logo" />
			<div class="login-title mb-3">
				<h1 class="salva-d-s text-primary-700">L'onboarding qui <span class="text-primary-300">grandit avec vous</span></h1>
			</div>
			<div class="text-greyscale-700 sato-l-l mb-12">Rejoingez votre équipe dès maintenant !</div>
			<sign-in />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.main-login {
		.left {
			grid-column: 1/7;
			z-index: 20;

			.login-title {
				display: grid;
				grid-template-columns: repeat(6, 1fr);
				gap: 16px;
				h1 {
					grid-column: 1/6;
				}
			}
		}
		position: relative;
		.image {
			z-index: 10;
			position: absolute;
			overflow: hidden;
			width: 60vw;
			height: 100%;
			right: 0;
			top: 0;
			img {
				margin-left: auto;
				height: 100%;
			}
		}
	}
</style>

<script>
	import SignIn from "./SignIn.vue";
	export default {
		components: {
			SignIn,
		},
	};
</script>
