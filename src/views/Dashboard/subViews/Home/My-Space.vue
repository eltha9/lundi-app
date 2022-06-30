<template>
	<main class="main-view dashboard" :class="isSidebarCollapsed ? 'collapsed ' : ''">
		<div class="l-container">
			<div class="top flex justify-between mb-10">
				<h1 class="salva-h1 text-greyscale-black">Mon espace</h1>
				<div class="sato-l-m text-greyscale-600">
					<span class="salva-h3 text-greyscale-700 mr-1">{{ me.templates.length }}</span> templates assignés
				</div>
			</div>
			<div>
				<div v-if="raffinedTemplates.length === 1" class="template-container">
					<employee-template-card
						v-for="(template, i) in raffinedTemplates[0].templates"
						:key="template.id + i"
						:template="template"
						:position="i + 1"
					/>
				</div>
				<div v-else-if="raffinedTemplates.length > 1" v-for="(team, i) in raffinedTemplates" :key="team.name + i" class="mb-12">
					<h3 class="salva-h3 text-greyscale-800 mb-6 upper">{{ team.name }}</h3>
					<div class="template-container">
						<employee-template-card v-for="(template, j) in team.templates" :key="template.id + j" :template="template" :position="j + 1" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
	.l-container {
		grid-column: 1/13;
		.template-container {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: 16px;
			row-gap: 16px;
		}
	}
	.upper {
		&::first-letter {
			text-transform: uppercase;
		}
	}
</style>

<script>
	import { mapState } from "vuex";
	import EmployeeTemplateCard from "../../components/Employee-template-card.vue";
	export default {
		components: {
			EmployeeTemplateCard,
		},
		data() {
			return {
				raffinedTemplates: [],
			};
		},
		computed: {
			...mapState(["isSidebarCollapsed", "me"]),
		},
		mounted() {
			const temp = JSON.parse(JSON.stringify(this.me.templates));

			this.raffinedTemplates = temp
				.map((item) => item.teamName)
				.filter((value, index, self) => self.indexOf(value) === index)
				.map((item) => {
					let content = [];
					for (const template of temp) {
						if (template.teamName === item) content.push(template);
					}
					return { name: item, templates: content };
				});
		},
	};
</script>
