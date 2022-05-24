<template>
	<div class="avatar-stack">
		<div class="avatars" v-for="(userId, i) in showedAvatar" :key="userId" :style="{transform: `translateX(${i * 50}%)`}">
			<Avatar />
		</div>
		<div v-if="avatarLeft > 0" class="avatars" :style="{transform: `translateX(${limit * 50}%)`}">
			<div class="count text-greyscale-white bg-ternary-900">+{{ avatarLeft }}</div>
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
				font-size: 12px;
				line-height: 24px;
				letter-spacing: 0%;
			}
		}
	}
</style>

<script>
	import Avatar from './Avatar';
	const userLimit = 4;
	export default {
		name: 'AvatarStack',
		components: {Avatar},
		props: {
			users: {
				type: Array,
				require: false,
				default: () => [],
			},
		},
		data() {
			return {
				limit: userLimit,
			};
		},
		computed: {
			showedAvatar() {
				return this.users.slice(0, userLimit);
			},
			avatarLeft() {
				return Math.max(this.users.length - userLimit, 0);
			},
		},
	};
</script>
