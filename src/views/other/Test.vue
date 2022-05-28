<template>
	<div class="main-view">
		<div class="text-semantic-positive-500">
			<span>test view</span>
			<div>
				<Avatar large />
				<AvatarStack />
				<Btn color="semantic-info" icon primary> <i class="icon-call"></i></Btn>
				<div>icon <i class="icon-call text-secondary-500"></i></div>
			</div>
			<router-link to="/dashboard">Go to dashboard</router-link>
			<div class="sato-p-xs">test de text</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

<script>
	import Avatar from '@/components/lundi-uiKit/avatar/Avatar';
	import AvatarStack from '@/components/lundi-uiKit/avatar/AvatarStack';
	import Btn from '@/components/lundi-uiKit/Button';
	export default {
		name: 'Test',
		components: {
			Avatar,
			AvatarStack,
			Btn,
		},
	};
</script>
