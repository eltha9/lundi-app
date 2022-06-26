<template>
	<div class="header-nav flex justify-between items-center">
		<div class="flex left items-center">
			<i v-if="canFav" class="mr-3" :class="isFav ? 'icon-favorite_select' : 'icon-favorite_unselect'"></i>
			<h1 class="salva-h1 mr-1">{{ title }}</h1>
			<div v-if="asTeamOption">
				<l-menu>
					<btn ternary icon>
						<i class="icon-caret-down text-greyscale-500"></i>
					</btn>
					<template #menu>
						<div class="text-greyscale-black sato-l-l">
							<h6 class="uppercase sato-l-s text-greyscale-600 mb-2">équipes</h6>
							<div class="rounded px-3 py-2 cursor-pointer text-left">plop</div>
							<div class="rounded px-3 py-2 cursor-pointer text-left">plop</div>
							<div class="rounded px-3 py-2 cursor-pointer text-left">ploqsdqsdqsdp</div>
							<div class="rounded px-3 py-2 cursor-pointer text-left">plop</div>
							<div class="rounded px-3 py-2 cursor-pointer text-left">plop</div>
							<div class="rounded px-3 py-2 cursor-pointer text-left">plop</div>
						</div>
					</template>
				</l-menu>
			</div>
		</div>
		<div class="flex right">
			<btn secondary icon><i class="icon-settings"></i></btn>
			<btn class="ml-4">
				{{ rightCtaTitle }}
				<template #right>
					<i class="icon-send"></i>
				</template>
			</btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header-nav {
		.left {
			i::before {
				font-size: 24px;
			}
		}
	}
</style>

<script>
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LMenu from "@/components/lundi-uiKit/L-Menu.vue";
	export default {
		name: "navHeader",
		components: {
			Btn,
			LMenu,
		},
		props: {
			title: {
				require: true,
				type: String,
				default: "A title",
			},
			hasSetting: {
				require: false,
				type: Boolean,
				default: true,
			},
			canFav: {
				require: false,
				type: Boolean,
				default: true,
			},
			isFav: {
				require: false,
				type: Boolean,
				default: false,
			},
			asTeamOption: {
				require: false,
				type: Boolean,
				default: true,
			},
			rightCtaTitle: {
				require: true,
				type: String,
				default: "some action",
			},
		},
	};
</script>
