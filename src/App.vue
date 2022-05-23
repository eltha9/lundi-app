<template>
	<div id="app" class="text-semantic-positive-500 font-sato">
		<span>test view</span>
		<div>
			<Avatar large />
			<AvatarStack />
		</div>
	</div>
</template>

<style lang="scss"></style>

<script>
	import Avatar from '@/components/lundi-uiKit/avatar/Avatar';
	import AvatarStack from '@/components/lundi-uiKit/avatar/AvatarStack';
	export default {
		components: {
			Avatar,
			AvatarStack,
		},
	};
</script>
