<template>
	<div :class="getClass()">
		<img :src="avatarLink()" alt="avatar image" />
	</div>
</template>

<style lang="scss" scoped>
	.avatar {
		border-radius: 50%;
		width: 32px;
		height: 32px;

		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		border: 2px solid;

		img {
			width: 100%;
		}
		&.large {
			width: 40px;
			height: 40px;
		}
	}
</style>

<script>
	import {getAvatarLink} from '@/lib/utilis';
	export default {
		name: 'Avatar',
		props: {
			large: {
				type: Boolean,
				require: false,
				default: false,
			},
			userId: {
				type: String,
				require: false,
				default: '',
			},
			url: {
				type: String,
				require: false,
				default: '',
			},
		},
		data() {
			return {};
		},
		methods: {
			getClass() {
				let classes = ['avatar', 'text-greyscale-white'];
				if (this.large) classes.push('large');
				return classes.join(' ');
			},
			avatarLink() {
				if (this.url.trim() !== '') return this.url;
				return getAvatarLink(this.userId);
			},
		},
	};
</script>
