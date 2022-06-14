<template>
	<div class="avatar-stack" :style="{width: `${avatarStackWidth}px`, height: `${avatarStackHeight}px`}">
		<div class="avatars" v-for="(userId, i) in showedAvatar" :key="userId" :style="{transform: `translateX(${i * 50}%)`}">
			<Avatar :small="small" :large="large" />
		</div>
		<div v-if="avatarLeft > 0" class="avatars" :style="{transform: `translateX(${userLimit * 50}%)`}">
			<div
				class="count text-greyscale-white bg-ternary-900 sato-p-s"
				:style="{width: `${avatarStackHeight}px`, height: `${avatarStackHeight}px`}"
			>
				+{{ avatarLeft }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.avatar-stack {
		position: relative;
		.avatars {
			position: absolute;
			.count {
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
	import Avatar from './Avatar';
	export default {
		name: 'AvatarStack',
		components: {Avatar},
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
			large: {
				require: false,
				type: Boolean,
				default: false,
			},
			small: {
				require: false,
				type: Boolean,
				default: false,
			},
		},
		computed: {
			showedAvatar() {
				return this.users.slice(0, this.userLimit);
			},
			avatarLeft() {
				return Math.max(this.users.length - this.userLimit, 0);
			},
			avatarStackWidth() {
				if (this.large) return (42 / 2) * (this.userLimit + 1) + 42 / 2;
				if (this.small) return (26 / 2) * (this.userLimit + 1) + 26 / 2;
				return (32 / 2) * (this.userLimit + 1) + 32 / 2;
			},
			avatarStackHeight() {
				if (this.large) return 42;
				if (this.small) return 26;
				return 32;
			},
		},
	};
</script>
