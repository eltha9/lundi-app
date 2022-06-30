<template>
	<div class="main-view create-compagnie">
		<div class="timeliner">
			<img src="@/../public/assets/lundi.svg" class="mt-8 mb-12 h-10" alt="Lundi logo" />
			<div class="flex justify-center mb-16" v-show="timeLineStep !== stepCount">
				<time-line :to-show="timeLineStep" :steps="steps" />
			</div>
			<div v-if="accountType === 'admin'" class="step-container">
				<step-1 v-if="timeLineStep === 1" v-model="createData.customisation" />
				<step-2 v-if="timeLineStep === 2" />
				<step-3 v-if="timeLineStep === 3" />
			</div>
			<div v-else-if="accountType === 'editor'" class="step-container">
				<step-1 v-if="timeLineStep === 1" v-model="createData.customisation" />
				<step-2 v-if="timeLineStep === 2" role="editor" />
			</div>
			<div v-else-if="accountType === 'onboardee'" class="step-container">
				<step-1 v-if="timeLineStep === 1" v-model="createData.customisation" role="onboardee" />
				<step-2 v-if="timeLineStep === 2" role="onboardee" />
			</div>
		</div>
		<complete v-if="timeLineStep === stepCount" />
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
	import TimeLine from '@/components/lundi-uiKit/TimeLine.vue';
	import Step1 from './Step-1.vue';
	import Step2 from './Step-2.vue';
	import Step3 from './Step-3.vue';
	import Complete from './Complete.vue';
	import {mapState} from 'vuex';
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
				stepCount: 4,
				createData: {
					customisation: {
						role: '',
						profilePicture: null,
					},
					compagnie: {
						sector: '',
						size: '',
					},
					teams: {
						name: '',
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
				accountType: '',
			};
		},
		computed: {
			...mapState(['timeLineStep']),
		},
		beforeMount() {
			this.checkAccountType();

			switch (this.accountType) {
				case 'admin':
					this.steps = [true, false, true, true];
					this.stepCount = 4;
					break;
				case 'editor':
					this.steps = [true, false, true, false];
					this.stepCount = 3;
					break;
				case 'onboardee':
				default:
					this.steps = [true, false, true, false];
					this.stepCount = 3;
			}
		},
		methods: {
			checkAccountType() {
				this.accountType = 'onboardee';
				/* 
                    Checkaccount type
                */
			},
		},
	};
</script>
