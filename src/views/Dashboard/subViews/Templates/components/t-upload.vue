<template>
	<div class="t-download mb-10">
		<div class="content" :style="{ gridColumn: edit ? '1/5' : '1/9' }">
			<l-file v-if="edit" v-model="file" placeholder="un fichier" />
			<div v-else class="wrapper">
				<l-file v-model="file" placeholder="un fichier" class="flex-1" style="grid-column: 1/5" />

				<a class="shower flex-1 text-greyscale-300 py-5 px-6 flex justify-between items-center" :href="file" target="_blank" style="grid-column: 5/9">
					<div class="sato-l-l font-bold text-greyscale-700 flex items-center">
						<div class="icon-drawer bg-semantic-positive-100 text-semantic-positive-500 mr-4">
							<i class="icon-document"></i>
						</div>
						{{ fileName }}
					</div>
					<i class="icon-attachment text-greyscale-black" style="font-size: 20px"></i>
				</a>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.t-download {
		height: fit-content;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: 16px;
		.content {
			.wrapper {
				width: 100%;
				display: grid;
				grid-template-columns: repeat(8, 1fr);
				gap: 16px;
			}
		}
		.shower {
			border-radius: 8px;
			border: 1px solid;
			.icon-drawer {
				width: 40px;
				height: 40px;
				border-radius: 50%;

				display: flex;
				justify-content: center;
				align-items: center;
				i {
					font-size: 20px;
				}
			}
		}
	}
</style>
<script>
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	export default {
		components: {
			LFile,
		},
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
			fileName: {
				require: false,
				type: String,
				default: "",
			},
		},
		data() {
			return {
				file: "",
			};
		},
		watch: {
			file(newValue) {
				console.log(this.file);
				this.$emit("input", newValue);
			},
		},
		mounted() {
			this.file = this.value;
		},
	};
</script>
