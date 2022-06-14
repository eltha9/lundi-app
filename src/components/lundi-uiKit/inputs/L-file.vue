<template>
	<div class="l-file">
		<label for="fileInput" class="flex flex-col py-8 px-4 text-primary-300 items-center">
			<div class="icon bg-primary-100 mb-3" :class="file === null ? 'bg-primary-100' : 'bg-primary-500'">
				<i :class="file === null ? 'text-primary-500 ' + icon : 'icon-check text-primary-100'"></i>
			</div>
			<div class="text mb-2 text-primary-500 sato-l-l">
				<span class="underliner">{{ file === null ? "Importez" : "Modifier" }}</span> <span class="text-greyscale-black">{{ placeholder }}</span>
			</div>
			<span class="sub-text sato-l-s text-greyscale-500">
				<template v-if="file === null">
					Types de fichier supporté : <span>{{ fileTypes }}</span>
				</template>
				<template v-else> {{ fileName }} </template>
			</span>
		</label>
		<input @change="onFileChange" type="file" name="fileInput" id="fileInput" class="hidden-input" :accept="fileTypesForInput" />
	</div>
</template>

<style lang="scss" scoped>
	.l-file {
		position: relative;
		label {
			z-index: 10;
			cursor: pointer;
			background-color: #f2f1f9;
			border: 1px dashed;
			border-radius: 8px;
			.icon {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				overflow: hidden;

				display: flex;
				align-items: center;
				justify-content: center;
				i {
					font-size: 24px;
				}
			}
			.text {
				text-align: center;
				span.underliner {
					text-decoration: underline;
				}
				span {
					text-decoration: none;
				}
			}
			.sub-text {
				text-align: center;
			}
		}
		.hidden-input {
			z-index: -10;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>
<script>
	export default {
		props: {
			placeholder: {
				require: true,
				type: String,
				default: "",
			},
			value: {
				require: true,
				default: null,
			},
			acceptedFileTypes: {
				require: false,
				type: Array,
				default: () => [],
			},
			icon: {
				require: false,
				type: String,
				default: "icon-document-empty",
			},
		},
		data() {
			return {
				file: null,
			};
		},
		computed: {
			fileTypes() {
				if (this.acceptedFileTypes.length === 0) return "tous";
				return this.acceptedFileTypes.join(", ");
			},
			fileTypesForInput() {
				if (this.acceptedFileTypes.length === 0) return "";

				return this.acceptedFileTypes.map((item) => "." + item).join(", ");
			},
			fileName() {
				return this.file?.name || "un fichier";
			},
		},
		watch: {
			file() {
				this.$emit("input", this.file);
			},
		},
		mounted() {
			this.file = this.value === "" ? null : this.value;
		},
		methods: {
			onFileChange(event) {
				let files = event.target.files || event.dataTransfer.files;
				if (!files.length) return;
				this.file = files[0];
				console.log(this.file);
			},
		},
	};
</script>
