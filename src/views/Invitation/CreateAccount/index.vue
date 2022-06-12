<template>
	<div class="main-view create-compagnie">
		<div class="timeliner">
			<img src="@/../public/assets/lundi-temp.png" class="mt-8 mb-2" alt="Lundi logo" />
			<div class="flex justify-center mb-16" v-show="timeLineStep !== 4">
				<time-line :to-show="timeLineStep" :steps="steps" />
			</div>
			<div class="step-container">
				<step-1 v-if="timeLineStep === 1" v-model="createData.customisation" />
				<step-2 v-if="timeLineStep === 2" />
				<step-3 v-if="timeLineStep === 3" />
			</div>
		</div>
		<complete v-if="timeLineStep === 4" />
	</div>
</template>

<style lang="scss" scoped>
	.create-compagnie {
		position: relative;
		.timeliner {
			height: fit-content;
			grid-column: 1/13;
		}
		.step-container {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: 16px;
		}
	}
</style>
<script>
	import TimeLine from "@/components/lundi-uiKit/TimeLine.vue";
	import Step1 from "./Step-1.vue";
	import Step2 from "./Step-2.vue";
	import Step3 from "./Step-3.vue";
	import Complete from "./Complete.vue";
	import { mapState } from "vuex";
	export default {
		components: {
			TimeLine,
			Step1,
			Step2,
			Step3,
			Complete,
		},
		data() {
			return {
				steps: [true, true, true, true],
				createData: {
					customisation: {
						role: "",
						profilePicture: null,
					},
					compagnie: {
						sector: "",
						size: "",
					},
					teams: {
						name: "",
						tags: [],
					},
					invitation: {
						mails: [],
					},
				},
				/**
				 * admin
				 * editor
				 * onboardee
				 */
				accountType: "",
			};
		},
		computed: {
			...mapState(["timeLineStep"]),
		},
		beforeMount() {
			this.checkAccountType();

			switch (this.accountType) {
				case "admin":
					this.steps = [true, false, true, true];
					break;
				case "editor":
					this.steps = [true, false, true, false];
					break;
				case "onboardee":
				default:
					this.steps = [true, false, true, false];
			}
		},
		methods: {
			checkAccountType() {
				this.accountType = "admin";
				/* 
                    Checkaccount type
                */
			},
		},
	};
</script>
