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
			<l-menu>
				<btn icon ternary class="option-btn"><i class="icon-options-vertical"></i></btn>
				<template #menu>
					<div class="flex flex-col text-greyscale-black sato-l-l">
						<div class="mb-6">
							<h6 class="uppercase sato-l-s text-greyscale-600 mb-2">option</h6>
							<div class="py-2 px-3 cursor-pointer"><i class="icon-edit-alt mr-2"></i> Modifier</div>
							<div class="py-2 px-3 cursor-pointer"><i class="icon-copy mr-2"></i> Duppliquer</div>
							<div class="py-2 px-3 cursor-pointer"><i class="icon-delete mr-2"></i> Supprimer</div>
						</div>
						<div>
							<h6 class="uppercase sato-l-s text-greyscale-600 mb-2">status</h6>
							<div
								v-for="item in $options.status"
								:key="item.keys"
								class="mb-1 flex items-center rounded py-2 px-3 cursor-pointer"
								:class="item.keys === infos.status ? item.bgColor + ' ' + item.textColor : item.textColor"
							>
								<div class="dot mr-1" :class="item.pseudoBgColor"></div>
								{{ item.name }}
							</div>
						</div>
					</div>
				</template>
			</l-menu>
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
	.dot {
		border-radius: 50%;
		width: 6px;
		height: 6px;
	}
	.template-card {
		border: 1px solid;
		border-radius: 8px;
		grid-column: 1/5;
		.top-card {
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
	import LMenu from "@/components/lundi-uiKit/L-Menu.vue";
	export default {
		components: {
			Btn,
			AvatarStack,
			LMenu,
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
		mounted() {
			this.$options.status = Object.entries(TEMPLATE_STATUS).map(([a, b]) => ({ keys: a, ...b }));
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
