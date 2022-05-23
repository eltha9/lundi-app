<template>
	<div id="app" class="font-sato main-view dashboard">
		<div class="text-semantic-positive-500">
			<span>test view</span>
			<div>
				<Avatar large />
				<AvatarStack />
				<Btn color="semantic-info" icon primary> <i class="icon-call"></i></Btn>
				<div>icon <i class="icon-call text-secondary-500"></i></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	div.main-view {
		height: 100%;
		width: 100%;
		padding: 0 80px;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 16px;

		&.dashboard {
			padding: 0 32px;
			&.collapsed {
				padding: 0 40px;
			}
		}
	}
</style>

<script>
	import Avatar from "@/components/lundi-uiKit/avatar/Avatar";
	import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack";
	import Btn from "@/components/lundi-uiKit/Button";
	export default {
		components: {
			Avatar,
			AvatarStack,
			Btn,
		},
	};
</script>
