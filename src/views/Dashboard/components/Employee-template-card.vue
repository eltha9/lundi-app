<template>
	<div class="employee-template-card text-greyscale-200 bg-greyscale-white p-5" :style="{ gridColumn: `${enhancedPosition.start}/${enhancedPosition.end}` }">
		<div class="top-card flex justify-between mb-14">
			<div class="info">
				<h4 class="salva-h4 text-greyscale-800 mb-2 capitalize">{{ template.name }}</h4>
				<div class="date text-greyscale-500 sato-l-m">
					<i class="icon-update mr-1"></i>
					<span>{{ lastUpdate }} jours</span>
				</div>
			</div>
			<btn icon ternary class="option-btn" @click.native.stop=""><i class="icon-options-vertical"></i></btn>
		</div>
		<div class="bottom-card flex"></div>
	</div>
</template>

<style lang="scss" scoped>
	.employee-template-card {
		border: 1px solid;
		border-radius: 8px;
		grid-column: 1/5;
		.top-card {
			.info {
				.team-name {
					i {
						// font-size: 16px;
					}
				}
			}
			.option-btn {
				font-size: 20px;
			}
		}
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack.vue";
	export default {
		components: {
			Btn,
			AvatarStack,
		},
		props: {
			template: {
				required: true,
				type: Object,
				default: () => ({
					id: "",
					name: "",
					isFav: false,
					lastUpdate: "",
					users: [],
				}),
			},
			position: {
				required: false,
				type: Number,
				default: 1,
			},
		},
		computed: {
			lastUpdate() {
				const todayStamp = parseInt(Date.now() / 1000);
				const templateStamp = parseInt(new Date(this.team.lastUpdate).getTime() / 1000);
				return Math.max(parseInt((todayStamp - templateStamp) / 60 / 60 / 24), 1) || "X";
			},
			enhancedPosition() {
				switch (this.position % 3) {
					case 1:
						return { start: 1, end: 5 };
					case 2:
						return { start: 5, end: 9 };
					case 0:
						return { start: 9, end: 13 };
					default:
						return { start: 1, end: 5 };
				}
			},
		},
	};
</script>
