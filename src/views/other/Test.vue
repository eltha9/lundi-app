<template>
	<div class="p-6">
		<div class="text-semantic-positive-500">
			<span>test view</span>
			<div>
				<Avatar large />
				<!-- <AvatarStack :users="['', '', '', '', '', '']" /> -->
				<Btn color="semantic-info" icon secondary> <i class="icon-call"></i></Btn>
				<Btn color="semantic-warning" secondary class="mb-2"> test secondary</Btn>
				<Btn color="ternary" primary> test primary</Btn>
				<div>icon <i class="icon-call text-secondary-500"></i></div>
			</div>
			<router-link to="/dashboard">Go to dashboard</router-link>
			<div class="sato-p-xs">test de text</div>
		</div>
	</div>
</template>

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
