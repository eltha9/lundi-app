<template>
	<div class="login">
		<div class="login-form">
			<div class="inputs mb-12">
				<l-input v-model="emailModel" name="Email" class="mb-6" />
				<l-input v-model="passwordModel" name="Mot de passe" type="password" />
			</div>
			<div class="submit-div flex flex-col items-center">
				<btn class="button mb-6" primary @click="logIn()">Se connecter</btn>
				<span class="text-greyscale-700"> Vous n’avez pas de compte ? <button class="switch-btn" @click="toggleLogin()">Inscrivez-vous</button> </span>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.login {
		.login-form {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 16px;
			row-gap: 0;
			div.inputs {
				grid-column: 1/6;
			}
			.submit-div {
				grid-column: 2/5;
				.button {
					width: 100%;
				}
				span {
					margin: auto;
					text-align: center;
					button {
						text-decoration-line: underline;
					}
				}
			}
		}
	}
</style>
<script>
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import { mapActions, mapMutations } from "vuex";
	export default {
		components: {
			LInput,
			Btn,
		},
		data() {
			return {
				emailModel: "alban.d@gmail.com",
				passwordModel: "azerty",
			};
		},
		methods: {
			...mapMutations(["toggleLogin"]),
			...mapActions(["logMe"]),
			async logIn() {
				const res = await this.logMe({ psw: this.passwordModel, email: this.emailModel });

				if (res) this.$router.push({ name: "dashboard-home" });
			},
		},
	};
</script>
