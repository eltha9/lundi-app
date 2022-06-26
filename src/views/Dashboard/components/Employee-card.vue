<template>
	<div
		v-if="userData.id"
		class="employee-card px-6 py-4 flex flex-col text-greyscale-200 bg-greyscale-white"
		:style="{ gridColumn: `${enhancedPosition.start}/${enhancedPosition.end}` }"
	>
		<div class="picture mb-4 text-greyscale-300" :class="userData.profilePic === '' ? 'empty bg-primray-100' : ''">
			<i v-if="userData.profilePic === ''" class="icon-user text-primary-500"></i>
			<img v-else :src="userData.profilePic" :alt="fullName" />
		</div>
		<div class="mb-1 sato-l-m font-bold text-greyscale-black">
			{{ fullName }}
		</div>
		<div class="flex text-greyscale-500 sato-l-s">
			<span class="truncate flex-1">{{ userData.email }}</span>
			<i class="icon-copy copy ml-1" @click="copyEmail()"></i>
		</div>
		<div class="flex justify-center">
			<span class="user-role py-2 px-3 font-bold sato-l-xs uppercase text-ternary-500 bg-ternary-100 mt-4">
				{{ userData.role }}
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.employee-card {
		border: 1px solid;
		border-radius: 12px;
		.picture {
			width: 100%;
			aspect-ratio: 1;
			border-radius: 8px;
			overflow: hidden;
			&.empty {
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1px solid;
				i {
					font-size: 38px;
				}
			}
			img {
				width: 100%;
				aspect-ratio: 1;
			}
		}
		.copy {
			font-size: 14px;
			cursor: pointer;
		}
		span.user-role {
			border-radius: 42px;
		}
	}
</style>

<script>
	import { getUserInformation } from "@/lib/utilis.js";
	export default {
		props: {
			userId: {
				required: true,
				type: String,
				default: "",
			},
			position: {
				required: false,
				type: Number,
				default: 1,
			},
		},
		data() {
			return {
				userData: {},
			};
		},
		computed: {
			enhancedPosition() {
				switch (this.position % 6) {
					case 1:
						return { start: 1, end: 3 };
					case 2:
						return { start: 3, end: 5 };
					case 3:
						return { start: 5, end: 7 };
					case 4:
						return { start: 7, end: 9 };
					case 5:
						return { start: 9, end: 11 };
					case 0:
						return { start: 11, end: 13 };
					default:
						return { start: 1, end: 3 };
				}
			},
			fullName() {
				if (this.userData.id) return `${this.userData.firstName} ${this.userData.lastName}`;
				return "";
			},
		},
		mounted() {
			this.userData = getUserInformation(this.userId);
		},
		methods: {
			copyEmail() {
				navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
					if (result.state == "granted" || result.state == "prompt") {
						navigator.clipboard.writeText(this.userData.email);
					}
				});
			},
		},
	};
</script>
