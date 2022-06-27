<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div class="content">
			<h3 class="salva-h3 text-greyscale-black mb-4">Invitez des membres dans l'équipe</h3>
			<p class="sato-p-l text-greyscale-700 mb-8">un text d'explication</p>

			<div class="emails">
				<l-input v-model="maillerModel" name="mario@lundi.ovh" class="my-6" @enter="addEmail" />
				<div class="mail-container mb-8">
					<div v-for="(mail, i) in mails" :key="i" class="mail mb-4 flex items-center">
						<span class="mr-2 text-greyscale-700 bg-greyscale-300 sato-l-m py-2 px-3">{{ mail }}</span>
						<i class="icon-delete" @click="deleteEmail(mail)"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-cta flex justify-between">
			<btn class="flex-1" @click="closeDialog()" secondary>Annuler</btn>
			<btn class="flex-1" @click="inviter()" primary :disabled="isInvitationDisable">Invitez</btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.bottom-cta {
		gap: 16px;
	}
	.created-team {
		.team-name {
			border: 1px solid;
			border-radius: 8px;
			cursor: pointer;
		}
		i {
			cursor: pointer;
			font-size: 28px;
		}
	}
	.mail-container {
		overflow-y: auto;
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
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LInput from "@/components/lundi-uiKit/inputs/L-input.vue";
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	import { mapActions } from "vuex";
	export default {
		components: {
			Btn,
			LInput,
			LCheckbox,
		},
		data() {
			return {
				mails: [],
				maillerModel: "",
			};
		},
		computed: {
			isInvitationDisable() {
				return this.mails.length === 0;
			},
		},
		methods: {
			...mapActions(["closeDialog", "invitation"]),
			inviter() {
				if (this.isInvitationDisable) return;
				this.invitation(this.mails);
			},
			addEmail() {
				if (this.mails.includes(this.maillerModel)) return;
				if (this.maillerModel.trim() === "") return;

				this.mails.push(this.maillerModel);
				// clearing input
				this.maillerModel = "";
			},
			deleteEmail(email) {
				this.mails = this.mails.filter((mail) => mail !== email);
			},
		},
	};
</script>
