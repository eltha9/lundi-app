<template>
	<div class="signin">
		<form class="signin-form">
			<div class="inputs mb-12">
				<div class="flex sub-inputs-div mb-6">
					<l-input v-model="firstNameModel" name="Prénom" class="flex-1" />
					<l-input v-model="lastNameModel" name="Nom" class="flex-1" />
				</div>
				<div class="flex sub-inputs-div">
					<l-input v-model="emailModel" name="Email" class="mb-6 flex-1" />
					<l-input v-model="passwordModel" name="Mot de passe" type="password" class="flex-1" />
				</div>
			</div>
			<div class="submit-div flex flex-col items-center">
				<btn class="button mb-6" primary @click.native.prevent="createAccount()">Créer un compte</btn>
				<div class="text-greyscale-700">
					Vous avez déjà un compte ? <button class="switch-btn" @click="goToLogin()">Connectez-vous</button>
				</div>
				<div class="cgi sato-p-s text-greyscale-500">En cliquant sur Créer mon compte, vous acceptez nos Conditions générales.</div>
			</div>
		</form>
	</div>
</template>
<style lang="scss" scoped>
	.signin {
		form.signin-form {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 16px;
			row-gap: 0;
			div.inputs {
				grid-column: 1/6;
			}
			.sub-inputs-div {
				width: 100%;
				gap: 32px;
			}
			.submit-div {
				grid-column: 2/5;
				.button {
					width: 100%;
				}
				div {
					text-align: center;
					margin: auto;
					button {
						text-decoration-line: underline;
					}
				}
				div.cgi {
					margin-top: 24px;
					text-align: center;
				}
			}
		}
	}
</style>
<script>
	import LInput from '@/components/lundi-uiKit/inputs/L-input.vue';
	import Btn from '@/components/lundi-uiKit/Button.vue';
	import {mapActions} from 'vuex';
	export default {
		components: {
			LInput,
			Btn,
		},
		data() {
			return {
				firstNameModel: '',
				lastNameModel: '',
				emailModel: '',
				passwordModel: '',
			};
		},
		methods: {
			...mapActions(['logMe']),

			async createAccount() {
				const res = await this.logMe({psw: this.passwordModel, email: 'nemo.f@frichti.co'});
				this.$router.push({name: 'invitation-create'});
			},
			goToLogin() {
				this.$router.push({name: 'login'});
			},
		},
	};
</script>
