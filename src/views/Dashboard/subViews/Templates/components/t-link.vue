<template>
	<div class="t-link my-5 text-greyscale-300">
		<div v-if="edit" class="link flex items-center justify-center">
			<i class="icon-link mr-3 text-primary-500"></i>
			<input type="text" v-model="url" class="sato-l-l text-greyscale-black" placeholder="votre lien" />
		</div>
		<a v-else :href="url" target="_blank" class="link flex items-center justify-center" :title="url">
			<i class="icon-link mr-3 text-primary-500"></i> <span class="sato-l-l text-greyscale-black">{{ url }}</span>
		</a>
	</div>
</template>

<style lang="scss" scoped>
	.t-link {
		border-radius: 8px;
		border: 1px solid;
		i {
			font-size: 24px;
		}
		span {
			text-decoration: underline;
		}
	}
	input {
		text-decoration: underline;
		&:focus {
			border: none;
			outline: none;
		}
	}
</style>

<script>
	export default {
		props: {
			value: {
				require: true,
				type: String,
				default: "",
			},
			edit: {
				require: true,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				url: "",
			};
		},
		watch: {
			url(newValue) {
				console.log(this.url);
				this.$emit("input", newValue);
			},
		},
		mounted() {
			this.url = this.value;
		},
	};
</script>
