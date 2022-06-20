<template>
	<div class="header-nav flex justify-between items-center">
		<div class="flex left items-center">
			<i v-if="canFav" class="mr-3" :class="isFav ? 'icon-favorite_select' : 'icon-favorite_unselect'"></i>
			<h1 class="salva-h1 mr-1">{{ title }}</h1>
			<i v-if="asTeamOption" class="icon-caret-down text-greyscale-500"></i>
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
	import Btn from '@/components/lundi-uiKit/Button.vue';
	export default {
		name: 'navHeader',
		components: {
			Btn,
		},
		props: {
			title: {
				require: true,
				type: String,
				default: 'A title',
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
				default: 'some action',
			},
		},
	};
</script>
