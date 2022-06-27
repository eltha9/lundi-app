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
	import {mapState} from 'vuex';
	import Btn from '@/components/lundi-uiKit/Button.vue';
	import LCheckbox from '@/components/lundi-uiKit/inputs/L-checkbox.vue';
	import LFile from '@/components/lundi-uiKit/inputs/L-file.vue';
	import LMenu from '@/components/lundi-uiKit/L-Menu.vue';

	// template components
	import TP from './components/t-p.vue';
	import TH from './components/t-h.vue';
	import TContent from './components/t-h.vue';
	import TTodo from './components/t-h.vue';
	import TLink from './components/t-h.vue';
	import TDownload from './components/t-h.vue';
	import TUpload from './components/t-h.vue';
	export default {
		name: 'DashboardTemplates',
		components: {
			Btn,
			LCheckbox,
			LFile,
			LMenu,
			// template components
			TP,
			TH,
			TContent,
			TTodo,
			TLink,
			TDownload,
			TUpload,
		},
		computed: {
			...mapState(['isSidebarCollapsed']),
		},
		data() {
			return {
				canEdit: true,
				templateId: null,
				teamId: '',
				template: {
					name: 'untitled',
					content: [
						[
							{
								type: 'h1',
								str: 'section name',
							},
							{
								type: 'h2',
								str: 'section name',
							},
							{
								type: 'h3',
								str: 'section name',
							},
							{
								type: 'h4',
								str: 'section name',
							},
							{
								type: 'p',
								subType: '',
								str: 'lorem ipsum',
							},
							{
								type: 'p',
								subType: 'italic',
								str: 'lorem ipsum',
							},
							{
								type: 'p',
								subType: 'bold',
								str: 'lorem ipsum',
							},
							{
								type: 'img',
								fileName: '',
								fileUrl: '',
							},
							{
								type: 'p',
								subType: '',
								str: 'lorapzeiohrlyiuazgeluyrzauyertuyzteruyoatz',
							},
							{
								type: 'video',
								fileName: '',
								fileUrl: '',
							},
							{
								type: 'download',
								fileName: '',
								fileUrl: '',
							},
							{
								type: 'upload',
								fileName: '',
								fileUrl: '',
							},
							{
								type: 'link',
								url: '',
							},
							{
								type: 'toDo',
								items: [
									{
										str: '',
										checked: false,
									},
								],
							},
						],
					],
				},
			};
		},
		beforeMount() {
			if (this.$route.params.id) this.templateId = this.$route.params.id;
			if (this.$route.params.teamId) this.teamId = this.$route.params.teamId;
		},
	};
</script>
