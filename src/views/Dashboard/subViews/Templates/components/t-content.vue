<template>
	<div v-if="edit" class="t-content text-greyscale-700 mb-10">
		<div v-if="type === 'img'" class="input flex">
			<l-file placeholder="une image" icon="icon-image" v-model="contentModel" :acceptedFileTypes="['pdf', 'png', 'jpg']" class="flex-1" />
		</div>
		<div v-else-if="type === 'video'" class="input">
			<l-file placeholder="une video" icon="icon-webcam" v-model="contentModel" :acceptedFileTypes="['mp4']" />
		</div>
	</div>
	<div v-else class="t-content mb-10" style="height: 460px">
		<div v-if="type === 'img'" class="input-view flex justify-center">
			<img :src="url" alt="" />
		</div>
		<div v-else-if="type === 'video'" class="input-view flex justify-center">
			<video controls>
				<source :src="url" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.t-content {
		width: 100%;

		.input,
		.input-view {
			width: 100%;
			height: 100%;
		}
		.input-view {
			display: flex;
			justify-items: center;
			img,
			video {
				height: 100%;
			}
		}
	}
</style>
<script>
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	export default {
		name: "t-content",
		components: {
			LFile,
		},
		props: {
			type: {
				required: false,
				type: String,
				default: "",
			},
			value: {
				required: false,
				type: String,
				default: "écrivez ici",
			},
			edit: {
				required: true,
				type: Boolean,
				default: false,
			},
			url: {
				required: false,
				type: String,
				default: "",
			},
		},
		data() {
			return {
				contentModel: "",
			};
		},
		computed: {},
		watch: {
			contentModel(newValue) {
				this.$emit("input", newValue);
			},
		},
		mounted() {
			console.log(this.url);
		},
	};
</script>
