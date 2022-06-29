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
							<input
								v-if="canEdit"
								type="text"
								v-model="template.name"
								class="upper p-1 bg-transparent text-right"
								placeholder="Titre du template"
							/>
							<span v-else class="upper p-1" name="nameEditor">{{ template.name }}</span>
							<i v-if="canEdit" class="icon-edit ml-3 text-greyscale-500"></i>
						</label>
						<div class="flex">
							<template v-if="role !== 'onboardee'">
								<btn secondary icon class="mr-3" @click="show()">
									<i :class="canEdit ? 'icon-eye' : 'icon-eye-off'"></i>
								</btn>
								<btn secondary icon class="mr-3" @click="openDialog({ type: 'saveTemplate', data: template })">
									<i class="icon-save"></i>
								</btn>
								<btn primary class="flex items-center" @click="openDialog({ type: 'publishTemplate', data: template })">
									Publier
									<template #right>
										<i class="icon-cloud-upload"></i>
									</template>
								</btn>
							</template>
						</div>
					</div>
					<div class="main-content flex-1 bg-greyscale-white">
						<div class="drawer pb-4 w-full">
							<div v-if="canEdit" class="txt-drawer mt-24 mb-10">
								<div v-for="(section, j) in template.content" :key="j" class="mt-24 flex flex-col">
									<template v-for="(item, i) in section">
										<t-h v-if="item.type[0] === 'h'" :key="i" v-model="item.str" :type="item.type" :edit="canEdit" />
										<t-p v-if="item.type === 'p'" :key="i" v-model="item.str" :type="item.subType" :edit="canEdit" />
										<t-content
											v-if="item.type === 'img'"
											:key="i"
											v-model="item.fileName"
											:edit="canEdit"
											:type="item.type"
											:url="item.fileUrl"
										/>
										<t-content v-if="item.type === 'video'" :key="i" v-model="item.fileName" :edit="canEdit" :type="item.type" />
										<t-link v-if="item.type === 'link'" v-model="item.url" :key="i" :edit="canEdit" />
										<t-download v-if="item.type === 'download'" :key="i" v-model="item.fileUrl" :fileName="item.fileName" :edit="canEdit" />
										<t-upload
											v-if="item.type === 'upload'"
											:key="i"
											class="to-download"
											v-model="item.fileUrl"
											:fileName="item.fileName"
											:edit="canEdit"
										/>
										<t-todo v-if="item.type === 'toDo'" :key="i" v-model="item.items" :edit="canEdit" :superKey="i + '-'" />
									</template>
								</div>
							</div>
							<div v-else class="txt-drawer flex flex-col mt-24 mb-10">
								<template v-for="(item, i) in template.content[sectionNavigator]">
									<t-h v-if="item.type[0] === 'h'" :key="i" v-model="item.str" :type="item.type" :edit="canEdit" />
									<t-p v-if="item.type === 'p'" :key="i" v-model="item.str" :type="item.subType" :edit="canEdit" />
									<t-content
										v-if="item.type === 'img'"
										:key="i"
										v-model="item.fileName"
										:edit="canEdit"
										:type="item.type"
										:url="item.fileUrl"
									/>
									<t-content v-if="item.type === 'video'" :key="i" v-model="item.fileName" :edit="canEdit" :type="item.type" />
									<t-link v-if="item.type === 'link'" v-model="item.url" :key="i" :edit="canEdit" />
									<t-download v-if="item.type === 'download'" :key="i" v-model="item.fileUrl" :fileName="item.fileName" :edit="canEdit" />
									<t-upload
										v-if="item.type === 'upload'"
										:key="i"
										class="to-download"
										v-model="item.fileUrl"
										:fileName="item.fileName"
										:edit="canEdit"
									/>
									<t-todo v-if="item.type === 'toDo'" :key="i" v-model="item.items" :edit="canEdit" :superKey="i + '-'" />
								</template>

								<!-- next section btn -->
								<btn primary class="self-center w-fit mt-28" @click="sectionNavigator++">
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
		// & > *:read-write:focus {
		// 	// padding: 2px;
		// 	border-radius: 8px;
		// 	outline: solid 1px #e5e5e5;
		// }
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
	input:focus {
		border: none;
		outline: none;
	}
	input[type="text"],
	textarea {
		background-color: transparent;
	}
</style>

<script>
	import { mapActions, mapState } from "vuex";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	import LMenu from "@/components/lundi-uiKit/L-Menu.vue";
	import Sidebar from "@/views/Dashboard/Sidebar/index.vue";
	// template components
	import TP from "./components/t-p.vue";
	import TH from "./components/t-h.vue";
	import TContent from "./components/t-content.vue";
	import TTodo from "./components/t-todo.vue";
	import TLink from "./components/t-link.vue";
	import TDownload from "./components/t-download.vue";
	import TUpload from "./components/t-upload.vue";

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
				canEdit: false,
				templateId: null,
				section: 0,
				addToSectionNb: null,
				teamId: "",
				isMenuAdd: false,
				sectionNavigator: 0,
				template: {
					name: "untitled",
					content: [
						[
							{
								type: "h1",
								str: "Arrêt maladie et congés payés",
							},
							{
								type: "h2",
								str: "Arrêt maladie : quelles sont les règles ?",
							},
							{
								type: "p",
								subType: "",
								str: "L’arrêt de travail du salarié causé par une maladie professionnelle ou non, peut avoir des impacts sur les modalités de prise des congés. C’est le cas notamment lorsque le salarié tombe malade pendant ses congés, ou bien lorsqu’il est en arrêt maladie avant la prise de ses congés.",
							},
							{
								type: "h2",
								str: "Prérequis : Arrêt de travail",
							},
							{
								type: "toDo",
								items: [
									{
										str: "Prévenir au plus vite votre référent le jour J",
										checked: false,
									},
									{
										str: "Fournir un justificatif médical dans un délai de 48h",
										checked: false,
									},
									{
										str: "Rester à domicile jusuqu’a la finde l’arrêt de travail ",
										checked: false,
									},
									{
										str: "Fournir le volet 3 de votre arret de travail",
										checked: false,
									},
								],
							},
							{
								type: "h2",
								str: "Indemnisation",
							},
							{
								type: "p",
								subType: "",
								str: "En principe, la loi prévoit un délai de carence de 3 jours  pour le versement des indemnités journalières en cas d’arrêt maladie. Sauf Que la Convention Syntex prévoit un autre dispositif: En cas d'ancienneté inférieure à un an : Les 3 premiers jours de carence sont considérés comme jours d'absence et ne seront pas indemnisés.Au delà: nous pratiquons le maintien de salaire et la subrogation et les IJSS sont perçus par l’entreprise",
							},
							{
								type: "p",
								subType: "bold",
								str: "Notre syndicat",
							},
							{
								type: "link",
								url: "https://www.syntex.fr/",
							},
							{
								type: "h2",
								str: "Incidences fiscales",
							},
							{
								type: "p",
								subType: "",
								str: "Les IJSS sont imposables et à ce titre sont à déclarer aux services fiscaux ; en cas de maintien du salaire (avec subrogation vers l'employeur) et pour éviter une double imposition, le net imposable fourni par l'employeur aux services fiscaux tient compte de la situation (il est donc réduit de la partie IJSS  que vous déclarez par ailleurs).",
							},
							{
								type: "h2",
								str: "Régime spéciaux maladie chronique d’un enfant",
							},
							{
								type: "p",
								subType: "",
								str: "Vous avez droit de prendre un congé spécifique en cas d'annonce d'un handicap, d'une pathologie chronique ou d'un cancer de votre enfant. Aucune condition d'ancienneté n'est exigée pour avoir droit au congé. La durée du congé est de 2 jours minimum. Vous devez prendre ce congé durant la période où se produit l'événement. Durant le congé, vous êtes rémunéré.",
							},
							{
								type: "upload",
								fileName: "",
								fileUrl: "",
							},
							{
								type: "h2",
								str: "Prise de congés payés",
							},
							{
								type: "p",
								subType: "",
								str: "Dans le cadre de notre convention collective (Syntec), les jours de congés sont calculés en jours ouvrés (cinq semaines = 25 jours ouvrés par an, du lundi au vendredi inclus) et sont acquis mensuellement sur la base de 2,083333 jours par mois complet. ",
							},
							{
								type: "p",
								subType: "",
								str: "La période d'acquisition s'étend du 1er juin de l'année N-1 au 31 mai de l'année N ",
							},
							{
								type: "p",
								subType: "",
								str: "La validation des congés dépend du planning de production pour la période demandée avec un arbitrage prenant en compte les projets en cours, les projets potentiels et les éventuelles absences enregistrées dans l'équipe à cette même période. Premier arrivé sur les souhaits de congés, premier servi ! Si d'une année à l'autre il apparaît qu'une même période est plus prisée par plusieurs d'entre vous et que nous ne pouvons l'accorder à tous, nous tâcherons de tourner afin que nul ne soit \"privilégié\" par rapport aux autres. ",
							},
							{
								type: "p",
								subType: "",
								str: "La période d'acquisition s'étend du 1er juin de l'année N-1 au 31 mai de l'année N ",
							},
							// {
							// 	type: "h3",
							// 	str: "section name",
							// },
							// {
							// 	type: "h4",
							// 	str: "section name",
							// },
							// {
							// 	type: "p",
							// 	subType: "",
							// 	str: "lorem ipsum",
							// },
							// {
							// 	type: "p",
							// 	subType: "italic",
							// 	str: "lorem ipsum",
							// },
							// {
							// 	type: "p",
							// 	subType: "bold",
							// 	str: "lorem ipsum",
							// },
							// {
							// 	type: "img",
							// 	fileName: "",
							// 	fileUrl: "https://picsum.photos/200/300?grayscale",
							// },
							// {
							// 	type: "video",
							// 	fileName: "somepdf.pdf",
							// 	fileUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
							// },
							// {
							// 	type: "download",
							// 	fileName: "somepdf.pdf",
							// 	fileUrl: "https://elph.fr/",
							// },
							// {
							// 	type: "upload",
							// 	fileName: "plopplop",
							// 	fileUrl: "azeg",
							// },
							// {
							// 	type: "link",
							// 	url: "http://elph.fr",
							// },
						],
						[
							{
								type: "h1",
								str: "Arrêt maladie et congés payés",
							},
							{
								type: "h2",
								str: "Arrêt maladie : quelles sont les règles ?",
							},
						],
					],
				},
			};
		},
		computed: {
			...mapState(["role", "compagnie"]),
		},
		beforeMount() {
			if (this.$route.params.id) this.templateId = this.$route.params.id;
			if (this.$route.params.teamId) this.teamId = this.$route.params.teamId;
			if (this.role === "onboardee") this.canEdit = false;
			else this.canEdit = true;
		},
		// beforeRouteLeave(to, from, next) {
		// 	// this.openDialog("saveTemplate", { callBack: next });
		// },
		mounted() {},
		methods: {
			...mapActions(["openDialog"]),
			addTitle() {
				this.template.content[this.addToSectionNb].push({
					type: "h1",
					str: "",
				});
				this.isMenuAdd = false;
			},
			addParagraph() {
				this.template.content[this.addToSectionNb].push({
					type: "p",
					subType: "",
					str: "",
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
							str: "",
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
				this.template.content.push([
					{
						type: "h1",
						str: "",
					},
				]);
			},
			addToSection(id) {
				this.addToSectionNb = id;
				this.isMenuAdd = true;
			},
			show() {
				this.canEdit = !this.canEdit;
				this.sectionNavigator = 0;
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
			remove(section, id) {},
			duplicate(section, id) {},
		},
	};
</script>
