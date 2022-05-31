<template>
	<div class="p-6">
		<div class="text-semantic-positive-500">
			<span>test view</span>
			<div>
				<Avatar large />
				<!-- <AvatarStack :users="['', '', '', '', '', '']" /> -->
				<Btn color="semantic-info" icon secondary> <i class="icon-call"></i></Btn>
				<Btn color="semantic-warning" secondary class="mb-2"> test secondary</Btn>
				<Btn color="ternary" primary class="mb-2"> test primary</Btn>
				<Btn color="ternary" ternary class="mb-2">
					<span>right ternary</span>
					<template #right> <i class="icon-arrow-right"></i> </template>
				</Btn>
				<Btn color="ternary" ternary class="mb-2" disabled> ternary</Btn>

				<Btn color="semantic-info" icon ternary class="mb-2" disabled> <i class="icon-call"></i></Btn>

				<div>icon <i class="icon-call text-secondary-500"></i></div>
			</div>
			<router-link to="/dashboard">Go to dashboard</router-link>
			<div class="sato-p-xs">test de text</div>
		</div>
	</div>
</template>

<script>
	import Avatar from "@/components/lundi-uiKit/avatar/Avatar";
	import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack";
	import Btn from "@/components/lundi-uiKit/Button";
	export default {
		name: "Test",
		components: {
			Avatar,
			AvatarStack,
			Btn,
		},
	};
</script>
