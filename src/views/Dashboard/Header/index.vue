<template>
	<div class="header-nav flex justify-between items-center">
		<div class="flex left items-center">
			<i class="icon-favorite mr-3"></i>
			<h1 class="salva-h1 mr-1">{{ title }}</h1>
			<i class="icon-caret-down text-greyscale-500"></i>
		</div>
		<div class="flex right">
			<btn secondary icon><i class="icon-settings"></i></btn>
			<btn class="ml-4">
				<template #left>
					<i class="icon-share"></i>
				</template>
				Inviter
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
				type: String,
				require: true,
				default: 'A title',
			},
		},
	};
</script>
