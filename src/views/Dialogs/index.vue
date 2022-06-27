<template>
	<div v-if="isDialogOpen" class="dialogs bg-dark-40 flex p-2 justify-end">
		<div class="dialogs-container bg-greyscale-white flex flex-col">
			<div class="top flex justify-end mb-6">
				<Btn ternary icon @click="closeDialog()"><i class="icon-close"></i></Btn>
			</div>
			<div class="flex-1">
				<delete-template v-if="dialogType === 'deleteTemplate'" />
				<save-template v-if="dialogType === 'saveTemplate'" />
				<publish-template v-if="dialogType === 'publishTemplate'" />
				<create-team v-if="dialogType === 'createTeam'" />
				<invitation v-if="dialogType === 'invitation'" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.dialogs {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.dialogs-container {
			border-radius: 12px;
			width: 30%;
			height: 100%;
			padding: 32px 32px 20px 32px;
		}
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import { mapState, mapActions } from "vuex";
	//dialog type importation
	import DeleteTemplate from "./Types/Delete-Template.vue";
	import SaveTemplate from "./Types/Save-Template.vue";
	import PublishTemplate from "./Types/Publish-Template.vue";
	import CreateTeam from "./Types/Create-Team.vue";
	import Invitation from "./Types/Invitation.vue";

	export default {
		components: {
			Btn,
			DeleteTemplate,
			SaveTemplate,
			PublishTemplate,
			CreateTeam,
			Invitation,
		},
		computed: {
			...mapState(["isDialogOpen", "dialogType"]),
		},
		methods: {
			...mapActions(["closeDialog"]),
		},
	};
</script>
