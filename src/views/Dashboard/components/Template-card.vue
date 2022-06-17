<template>
	<div class="template-card text-greyscale-200 bg-greyscale-white p-5" :style="{ gridColumn: `${enhancedPosition.start}/${enhancedPosition.end}` }">
		<div class="top-card flex justify-between mb-14">
			<div class="info">
				<div class="status mb-1 flex items-center" :class="status.textColor">
					<div class="dot mr-1" :class="status.pseudoBgColor"></div>
					{{ status.name }}
				</div>
				<h4 class="salva-h4 text-greyscale-800 mb-2 capitalize">{{ infos.name }}</h4>
				<div class="date text-greyscale-500 sato-l-m">
					<i class="icon-update mr-1"></i>
					<span>{{ lastUpdate }} jours</span>
				</div>
			</div>
			<btn icon ternary class="option-btn"><i class="icon-options-vertical"></i></btn>
		</div>
		<div class="bottom-card flex justify-between">
			<avatar-stack :users="infos.users" />
			<div class="tags flex justify-end">
				<div v-for="(tag, i) in infos.tags" :key="i" class="tag px-2 py-1" :class="getTagColor(tag)">
					{{ tag }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.template-card {
		border: 1px solid;
		border-radius: 8px;
		grid-column: 1/5;
		.top-card {
			.info {
				.status {
					.dot {
						border-radius: 50%;
						width: 6px;
						height: 6px;
					}
				}
			}
			.option-btn {
				font-size: 20px;
			}
		}
		.bottom-card {
			.tags {
				gap: 4px;
				.tag {
					border-radius: 42px;
				}
			}
		}
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack.vue";
	import { TEMPLATE_STATUS } from "@/lib/config.js";
	export default {
		components: {
			Btn,
			AvatarStack,
		},
		props: {
			infos: {
				required: true,
				type: Object,
				default: () => ({
					id: "",
					name: "",
					status: "",
					lastUpdate: "",
					tags: [],
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
			status() {
				return TEMPLATE_STATUS[this.infos.status];
			},
			lastUpdate() {
				const todayStamp = parseInt(Date.now() / 1000);
				const templateStamp = parseInt(new Date(this.infos.lastUpdate).getTime() / 1000);
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
		methods: {
			getTagColor(tagName) {
				switch (tagName) {
					case "Tout":
						return "text-secondary-500 bg-secondary-100";
					case "Junior":
					default:
						return "text-ternary-500 bg-ternary-100";
				}
			},
		},
	};
</script>
