<template>
	<div class="flex dash-container">
		<div class="left-bar">
			<sidebar v-if="role === 'onboardee'" />
			<div v-else class="sidebar bg-primary-900 text-greyscale-400 pt-8 flex flex-col justify-between">
				<div class="top flex flex-col flex-1">
					<div class="top-logo px-6 pb-6 flex flex-col">
						<div class="flex items-center mb-1 text-greyscale-200 corp-name justify-between">
							<div v-if="compagnie.logo.trim() !== ''" class="logo w-full">
								<img :src="compagnie.logo" alt="" class="h-7" />
							</div>
							<span v-else class="salva-h3 truncate">{{ compagnie.name }}</span>
						</div>
						<span class="text-greyscale-400 sato-l-s">Lundi</span>
					</div>
					<!-- drawer -->
					<div v-if="isMenuAdd" class="top-menu menu-list flex flex-col py-8 px-5 flex-1">
						<!-- typo -->
						<div class="add-menu sato-l-l mb-6">
							<h6 class="sato-l-m">Typographie</h6>
							<button @click="addTitle">
								<i class="icon-text mr-3"></i>
								Titre
							</button>
							<button @click="addParagraph">
								<i class="icon-fog mr-3"></i>
								Paragraph
							</button>
						</div>
						<!-- media -->
						<div class="add-menu sato-l-l mb-6">
							<h6 class="sato-l-m">Média</h6>
							<button @click="addImage">
								<i class="icon-image mr-3"></i>
								Image
							</button>
							<button @click="addVideo">
								<i class="icon-webcam mr-3"></i>
								Vidéo
							</button>
						</div>
						<!-- productivité -->
						<div class="add-menu sato-l-l mb-6">
							<h6 class="sato-l-m">Productivité</h6>
							<button @click="addTodo">
								<i class="icon-list mr-3"></i>
								To-Do
							</button>
						</div>
						<!-- document -->
						<div class="add-menu sato-l-l mb-6">
							<h6 class="sato-l-m">Documents</h6>
							<button @click="addDownload">
								<i class="icon-download mr-3"></i>
								Télécharger
							</button>
							<button @click="addUpload">
								<i class="icon-export mr-3"></i>
								Mise en ligne
							</button>
						</div>
						<!-- autres -->
						<div class="add-menu sato-l-l mb-6">
							<h6 class="sato-l-m">Autres</h6>
							<button @click="addLink">
								<i class="icon-link mr-3"></i>
								Lien
							</button>
						</div>
					</div>
					<div v-else class="top-menu menu-list flex-1 miam-menu">
						<div class="miam-drawer py-8 px-5 flex flex-col">
							<div v-for="(section, i) in template.content" class="section-menu sato-l-m text-greyscale-400" :key="i">
								<h6 class="sato-l-m">Section {{ i + 1 }}</h6>
								<template v-for="(item, j) in section">
									<div
										v-if="item.type[0] === 'h'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-text mr-3"></i>
										Title
									</div>
									<div
										v-else-if="item.type === 'p'"
										:key="i + '-' + j + '-' + item.type + item.subType"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-fog mr-3"></i>
										Paragraph
									</div>
									<div
										v-else-if="item.type === 'img'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-image mr-3"></i>
										Image
									</div>
									<div
										v-else-if="item.type === 'video'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-webcam mr-3"></i>
										Vidéo
									</div>
									<div
										v-else-if="item.type === 'toDo'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-list mr-3"></i>
										To-do
									</div>
									<div
										v-else-if="item.type === 'download'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-download mr-3"></i>
										Télécharger
									</div>
									<div
										v-else-if="item.type === 'upload'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-export mr-3"></i>
										Mise en ligne
									</div>
									<div
										v-else-if="item.type === 'link'"
										:key="i + '-' + j + '-' + item.type"
										draggable
										@dragstart="dragStart($event, i + '-' + j)"
										@dragover.prevent
										@dragenter.prevent
										@drop="drop($event, i + '-' + j)"
									>
										<i class="icon-link mr-3"></i>
										Lien
									</div>
									<div v-else :key="i + '-' + j + '-' + item.type"></div>
								</template>
								<button @click="addToSection(i)" class="add-to-section">
									<i class="icon-add text-ternary-300 mr-2.5"></i>
									Ajouter un élément
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="bottom menu-list flex flex-col px-6 pb-6">
					<button
						class="text-greyscale-white salva-l-m py-4"
						style="border-radius: 8px; border: 1px solid"
						@click="isMenuAdd ? (isMenuAdd = !isMenuAdd) : addSection()"
					>
						{{ !isMenuAdd ? "Ajouter une section" : "Retour" }}

						<i v-if="!isMenuAdd" class="icon-add ml-1.5"></i>
					</button>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<main class="main-view dashboard template-drawer">
				<div class="content flex flex-col w-full h-full">
					<div class="flex justify-between items-center mb-8">
						<div class="satol-l-l font-bold text-greyscale-600">
							Accueil > {{ teamId }} > <span class="text-greyscale-800 upper">{{ template.name }}</span>
						</div>
						<label class="font-bold sato-l-xl text-greyscale-black cursor-pointer" for="nameEditor">
							<!-- <input type="text" v-model="template.name" /> -->
							<span :contenteditable="canEdit" class="upper p-1" name="nameEditor">{{ template.name }}</span>
							<i class="icon-edit ml-3 text-greyscale-500"></i>
						</label>
						<div class="flex">
							<btn secondary icon class="mr-3">
								<i class="icon-eye"></i>
							</btn>
							<btn secondary icon class="mr-3">
								<i class="icon-save"></i>
							</btn>
							<btn primary class="flex items-center">
								Publish
								<template #right>
									<i class="icon-cloud-upload"></i>
								</template>
							</btn>
						</div>
					</div>
					<div class="main-content flex-1 bg-greyscale-white">
						<div class="drawer pb-4 w-full">
							<div class="txt-drawer flex flex-col mt-24">
								<template v-for="(item, i) in template.content[0]">
									<t-h v-if="item.type[0] === 'h'" :key="i" v-model="item.str" :type="item.type" :edit="canEdit" />
									<t-p v-if="item.type === 'p'" :key="i" v-model="item.str" :type="item.type" :edit="canEdit" />

									<div v-if="item.type === 'img'" :key="i" class="image mb-10">
										<l-file v-model="item.fileName" name="une image" :options="['pdf', 'jpg', 'png', 'jpeg']" />
									</div>
									<div v-if="item.type === 'video'" :key="i" class="video mb-10">
										<l-file v-model="item.fileName" name="une video" :options="['mp4']" />
									</div>
									<div v-if="item.type === 'toDo'" :key="i" class="to-do"></div>
									<div v-if="item.type === 'upload'" :key="i" class="to-upload"></div>
									<div v-if="item.type === 'download'" :key="i" class="to-download"></div>
									<div v-if="item.type === 'link'" :key="i">
										<a :href="item.url" :title="item.url">
											{{ item.url }}
										</a>
									</div>
								</template>
								<!-- next section btn -->
								<btn primary class="self-center w-fit">
									<template #left>
										<i class="icon-lock"></i>
									</template>
									Accéder à la suite
								</btn>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.dash-container {
		box-sizing: border-box;
		width: 100%;
		height: 100%;

		.left-bar {
			padding: 8px 0 8px 8px;
		}
	}
	.template-drawer {
		.content {
			grid-column: 1/13;
			.main-content {
				border-radius: 12px 12px 0 0;
				position: relative;
				overflow-y: auto;
				.drawer {
					position: absolute;
					top: 0;
					left: 0;
					display: grid;
					grid-template-columns: repeat(12, 1fr);
					gap: 16px;
				}
			}
		}
	}
	.upper {
		&::first-letter {
			text-transform: uppercase;
		}
	}
	.txt-drawer {
		grid-column: 3/11;
		& > *:read-write:focus {
			// padding: 2px;
			border-radius: 8px;
			outline: solid 1px #e5e5e5;
		}
	}
	.sidebar {
		box-sizing: border-box;
		height: 100%;
		width: 232px;
		border-radius: 12px;

		.menu-list {
			gap: 8px;
		}

		.top {
			.top-logo {
				box-sizing: border-box;
				@apply text-primary-700;
				border-bottom: 1px solid;
			}
		}
		.bottom {
			gap: 0;
			.bottom-user {
				padding: 40px 24px 36px 24px;

				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
	.add-menu,
	.section-menu {
		h6 {
			@apply text-greyscale-500 mb-3;
		}
		button:not(.add-to-section) {
			width: 100%;
			display: flex;
			justify-content: left;
			padding: 8px 12px;
			margin-bottom: 4px;
			will-change: background;
			transition: background 0.2s ease-in;
			@apply text-greyscale-500;
			border-radius: 8px;
			i {
				font-size: 24px;
			}
			&:hover {
				@apply bg-light-20 text-light-80;
			}
		}
		div,
		button.add-to-section {
			width: 100%;
			display: flex;
			justify-content: left;
			padding: 8px;
			will-change: background;
			transition: background 0.2s ease-in;
			border-radius: 8px;
			i {
				font-size: 16px;
			}
			&:hover {
				@apply bg-light-20 text-greyscale-white;
			}
		}
	}
	.miam-menu {
		overflow-y: auto;
		position: relative;
		.miam-drawer {
			position: absolute;
			width: 100%;
			top: 0;
			left: 0;
		}
	}
</style>

<script>
	import { mapState } from "vuex";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	import LMenu from "@/components/lundi-uiKit/L-Menu.vue";
	import Sidebar from "@/views/Dashboard/Sidebar/index.vue";
	// template components
	import TP from "./components/t-p.vue";
	import TH from "./components/t-h.vue";
	import TContent from "./components/t-h.vue";
	import TTodo from "./components/t-h.vue";
	import TLink from "./components/t-h.vue";
	import TDownload from "./components/t-h.vue";
	import TUpload from "./components/t-h.vue";

	export default {
		name: "DashboardTemplates",
		components: {
			Btn,
			LCheckbox,
			LFile,
			LMenu,
			Sidebar,
			// template components
			TP,
			TH,
			TContent,
			TTodo,
			TLink,
			TDownload,
			TUpload,
		},
		data() {
			return {
				canEdit: true,
				templateId: null,
				section: 0,
				addToSectionNb: null,
				teamId: "",
				isMenuAdd: false,
				template: {
					name: "untitled",
					content: [
						[
							{
								type: "h1",
								str: "section name",
							},
							{
								type: "h2",
								str: "section name",
							},
							{
								type: "h3",
								str: "section name",
							},
							{
								type: "h4",
								str: "section name",
							},
							{
								type: "p",
								subType: "",
								str: "lorem ipsum",
							},
							{
								type: "p",
								subType: "italic",
								str: "lorem ipsum",
							},
							{
								type: "p",
								subType: "bold",
								str: "lorem ipsum",
							},
							{
								type: "img",
								fileName: "",
								fileUrl: "",
							},
							{
								type: "video",
								fileName: "",
								fileUrl: "",
							},
							{
								type: "download",
								fileName: "",
								fileUrl: "",
							},
							{
								type: "upload",
								fileName: "",
								fileUrl: "",
							},
							{
								type: "link",
								url: "",
							},
							{
								type: "toDo",
								items: [
									{
										str: "",
										checked: false,
									},
								],
							},
						],
					],
				},
			};
		},
		computed: {
			...mapState(["role", "compagnie", "openDialog"]),
		},
		beforeMount() {
			if (this.$route.params.id) this.templateId = this.$route.params.id;
			if (this.$route.params.teamId) this.teamId = this.$route.params.teamId;
			if (this.role === "onboardee") this.canEdit = false;
		},
		beforeRouteLeave(to, from, next) {
			this.openDialog("saveTemplate", { callBack: next });
		},
		mounted() {},
		methods: {
			addTitle() {
				this.template.content[this.addToSectionNb].push({
					type: "h1",
					str: "Votre titre",
				});
				this.isMenuAdd = false;
			},
			addParagraph() {
				this.template.content[this.addToSectionNb].push({
					type: "p",
					subType: "",
					str: "Votre text",
				});
				this.isMenuAdd = false;
			},
			addImage() {
				this.template.content[this.addToSectionNb].push({
					type: "img",
					fileName: "",
					fileUrl: "",
				});
				this.isMenuAdd = false;
			},
			addVideo() {
				this.template.content[this.addToSectionNb].push({
					type: "video",
					fileName: "",
					fileUrl: "",
				});
				this.isMenuAdd = false;
			},
			addTodo() {
				this.template.content[this.addToSectionNb].push({
					type: "toDo",
					items: [
						{
							str: "text a check",
							checked: false,
						},
					],
				});
				this.isMenuAdd = false;
			},
			addDownload() {
				this.template.content[this.addToSectionNb].push({
					type: "download",
					fileName: "",
					fileUrl: "",
				});
				this.isMenuAdd = false;
			},
			addUpload() {
				this.template.content[this.addToSectionNb].push({
					type: "upload",
					fileName: "",
					fileUrl: "",
				});
				this.isMenuAdd = false;
			},
			addLink() {
				this.template.content[this.addToSectionNb].push({
					type: "link",
					url: "",
				});
				this.isMenuAdd = false;
			},
			addSection() {
				this.template.content.push([]);
			},
			addToSection(id) {
				this.addToSectionNb = id;
				this.isMenuAdd = true;
			},
			// drag and drop
			drop(event, key) {
				let itemTemp = event.dataTransfer.getData("itemID").split("-");
				let targetTemp = key.split("-");
				const item = { section: parseInt(itemTemp[0]), nb: parseInt(itemTemp[1]) };
				const target = { section: parseInt(targetTemp[0]), nb: parseInt(targetTemp[1]) };
				const itemData = JSON.parse(JSON.stringify(this.template.content[item.section][item.nb]));

				// adding to section
				if (target.nb === 0) {
					if (item.section !== target.section) {
						console.log();
						this.template.content[target.section] = [itemData, ...this.template.content[target.section]];
					}
					// else {
					// }
				}
				// else {
				// 	if (item.section !== target.section) {
				// 	} else {
				// 	}
				// }
				console.log(JSON.parse(JSON.stringify(this.template.content[target.section])));
			},
			dragStart(event, key) {
				event.dataTransfer.dropEffect = "move";
				event.dataTransfer.effectAllowed = "move";
				event.dataTransfer.setData("itemID", key);
			},
		},
	};
</script>
