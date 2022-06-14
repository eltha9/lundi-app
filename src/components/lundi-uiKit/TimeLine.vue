<template>
	<div class="timeline flex pb-5">
		<div v-for="(value, i) in timeLineSteps" :key="value.text" class="step flex items-center" :class="i <= toShow - 1 ? 'active' : ''">
			<div v-if="i > 0" class="line"></div>
			<div class="beauty mx-8">
				<i :class="value.icon"></i>
				<span class="sato-l-s">{{ value.text }}</span>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.step {
		.line {
			height: 2px;
			width: 42px;
			border-radius: 2px;
			@apply bg-greyscale-400;
		}
		.beauty {
			@apply text-greyscale-400;
			position: relative;
			font-size: 24px;
			i.icon-send::before {
				transform-origin: 50% 50%;
				transform: rotate(90deg);
			}
			span {
				position: absolute;
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		&.active {
			.line {
				@apply bg-primary-300;
			}
			.beauty {
				@apply text-primary-500;
			}
		}
	}
</style>
<script>
	export default {
		props: {
			toShow: {
				require: true,
				type: Number,
				default: 1,
			},
			steps: {
				require: true,
				type: Array,
				default: () => [true, true, true, true],
			},
		},
		data() {
			return {
				timeLineSteps: [],
			};
		},
		mounted() {
			const stepData = [
				{
					icon: 'icon-document-add',
					text: 'Personnalisation',
				},
				{
					icon: 'icon-attachment',
					text: 'Entreprise',
				},
				{
					icon: 'icon-users',
					text: 'Equipes',
				},
				{
					icon: 'icon-send',
					text: 'Invitations',
				},
			];

			for (const [index, value] of this.steps.entries()) {
				if (value) this.timeLineSteps.push(stepData[index]);
			}
		},
	};
</script>
