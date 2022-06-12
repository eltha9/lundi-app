<template>
	<div class="avatar-stack">
		<div class="avatars" v-for="(userId, i) in showedAvatar" :key="userId" :style="{ transform: `translateX(${i * 50}%)` }">
			<Avatar />
		</div>
		<div v-if="avatarLeft > 0" class="avatars" :style="{ transform: `translateX(${userLimit * 50}%)` }">
			<div class="count text-greyscale-white bg-ternary-900 sato-p-s">+{{ avatarLeft }}</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.avatar-stack {
		position: relative;
		.avatars {
			position: absolute;
			.count {
				width: 32px;
				height: 32px;

				border-radius: 50%;
				overflow: hidden;
				border: 2px solid;

				display: flex;
				align-items: center;
				justify-content: center;

				font-weight: bold;
			}
		}
	}
</style>

<script>
	import Avatar from "./Avatar";
	export default {
		name: "AvatarStack",
		components: { Avatar },
		props: {
			users: {
				type: Array,
				require: false,
				default: () => [],
			},
			userLimit: {
				type: Number,
				require: false,
				default: 4,
			},
		},
		computed: {
			showedAvatar() {
				return this.users.slice(0, this.userLimit);
			},
			avatarLeft() {
				return Math.max(this.users.length - this.userLimit, 0);
			},
		},
	};
</script>
