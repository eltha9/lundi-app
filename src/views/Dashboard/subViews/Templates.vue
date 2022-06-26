<template>
	<main class="main-view dashboard template-drawer" :class="isSidebarCollapsed ? 'collapsed ' : ''">
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
				<div class="drawer pb-4">
					<div class="txt-drawer flex flex-col mt-24">
						<h1 class="salva-d-l text-greyscale-black mb-10" :contenteditable="canEdit">Section title</h1>
						<h2 class="salva-h1 text-greyscale-black mb-6 font-bold" :contenteditable="canEdit">title</h2>
						<h3 class="salva-h2 text-greyscale-black mb-6 font-bold" :contenteditable="canEdit">title</h3>
						<h4 class="salva-h3 text-greyscale-black mb-6" :contenteditable="canEdit">title</h4>
						<p class="text-greyscale-700 mb-4" :contenteditable="canEdit">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cum voluptatem necessitatibus iure repudiandae laudantium
							aliquam, explicabo neque asperiores animi voluptates, nulla in doloribus. Esse, dignissimos! Quae unde molestias voluptatibus.
						</p>
						<p class="text-greyscale-700 mb-4 font-bold" :contenteditable="canEdit">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, nihil. In totam quas, incidunt nisi id nobis corporis facere
							fugiat ipsa nostrum cumque doloribus earum voluptas beatae quod dignissimos porro?
						</p>
						<p class="italic text-greyscale-700 mb-4" :contenteditable="canEdit">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque officiis iste nostrum odio repellendus, necessitatibus iure
							mollitia, laboriosam, dolor inventore voluptates modi! Cum voluptate id ratione laboriosam facilis fugiat a.
						</p>
						<div class="image"></div>
						<div class="video"></div>
						<div class="to-do"></div>
						<div class="to-upload"></div>
						<div class="to-download"></div>
						<link rel="stylesheet" href="" />
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
</template>

<style lang="scss" scoped>
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
</style>

<script>
	import { mapState } from "vuex";
	import Btn from "@/components/lundi-uiKit/Button.vue";
	import LCheckbox from "@/components/lundi-uiKit/inputs/L-checkbox.vue";
	import LFile from "@/components/lundi-uiKit/inputs/L-file.vue";
	import LMenu from "@/components/lundi-uiKit/L-Menu.vue";
	export default {
		name: "DashboardTemplates",
		components: {
			Btn,
			LCheckbox,
			LFile,
			LMenu,
		},
		computed: {
			...mapState(["isSidebarCollapsed"]),
		},
		data() {
			return {
				canEdit: true,
				templateId: null,
				teamId: "",
				template: {
					name: "untitled",
					content: [],
				},
			};
		},
		beforeMount() {
			if (this.$route.params.id) this.templateId = this.$route.params.id;
			if (this.$route.params.teamId) this.teamId = this.$route.params.teamId;
		},
	};
</script>
