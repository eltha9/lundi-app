<template>
	<div class="create-account-step4">
		<div class="step-title salva-h3 text-greyscale-800 mb-3">Invitez les managers de vos équipes</div>
		<l-input v-model="maillerModel" name="mario@lundi.ovh" class="mb-4" @enter="addEmail" />
		<div class="mail-container mb-8">
			<div v-for="mail in data.mails" :key="mail" class="mail mb-4 flex items-center">
				<span class="mr-2 text-greyscale-700 bg-greyscale-300 sato-l-m py-2 px-3">{{ mail }}</span>
				<i class="icon-delete" @click="deleteEmail(mail)"></i>
			</div>
		</div>
		<div class="flex justify-between items-center mb-8">
			<div class="line flex-1"></div>
			<span class="sato-l-s text-greyscale-700 px-8"> ou en copiant ce lien</span>
			<div class="line flex-1"></div>
		</div>
		<div class="invitation-link text-primary-300 py-4 flex justify-center items-center" @click="copy()">
			<i class="icon-link text-primary-500 mr-3"></i>
			<div class="link text-greyscale-black sato-l-l">{{ invitationLink }}</div>
		</div>
		<div class="flex justify-between mt-14">
			<btn :disabled="isDisable" @click.native="previousStep(3)" secondary>
				<template #left> <i class="icon-arrow-left"></i> </template>
				Retour
			</btn>
			<btn :disabled="isDisable" @click.native="nextStep(5)">
				<template #right> <i class="icon-arrow-right"></i> </template>
				Valider
			</btn>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.create-account-step4 {
		height: fit-content;
		grid-column: 4/10;
		.mail-container {
			max-height: 40vh;
			overflow: auto;
			.mail {
				span {
					border-radius: 8px;
				}
				i {
					font-size: 16px;
					display: none;
				}
				&:hover {
					i {
						display: block;
						cursor: pointer;
					}
				}
			}
		}
		.line {
			height: 1px;
			@apply bg-greyscale-300;
		}
		.invitation-link {
			border: 1px dashed;
			border-radius: 8px;
			background-color: #f2f1f9;
			cursor: pointer;
			.link {
				text-decoration: underline;
			}
			i {
				font-size: 24px;
			}
		}
	}
</style>
<script>
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import { mapState, mapMutations } from "vuex";
	export default {
		components: {
			LInput,
			Btn,
		},
		props: {
			value: {
				require: true,
				type: Object,
				default: () => {
					return {
						mails: [],
					};
				},
			},
		},
		data() {
			return {
				data: { mails: [] },
				maillerModel: "",
				invitationLink: "lundi.ovh/invitation/hagzerlgazer67_kjzehaz789",
			};
		},
		computed: {
			...mapState(["me"]),
			isDisable() {
				return false;
				if (this.data.compagnieName.trim() === "") return true;
				if (this.data.logo === null) return true;
				return false;
			},
		},
		mounted() {
			this.data = this.value;
		},
		methods: {
			...mapMutations(["setTimeLineStep"]),
			nextStep(nb) {
				if (this.isDisable) return;
				this.setTimeLineStep(nb);
			},
			previousStep(nb) {
				this.setTimeLineStep(nb);
			},
			addEmail(email) {
				if (this.data.mails.includes(email)) return;

				this.data.mails.push(email);
				this.maillerModel = "";
			},
			deleteEmail(email) {
				console.log(email);
				this.data.mails = this.data.mails.filter((mail) => mail !== email);
			},
			copy() {
				navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
					if (result.state == "granted" || result.state == "prompt") {
						navigator.clipboard.writeText(this.invitationLink);
					}
				});
			},
		},
	};
</script>
