<template>
	<input v-if="edit" v-model="str" type="text" class="t-p mb-4 w-100" :class="fontTransform" placeholder="Votre text" />
	<p v-else class="t-p text-greyscale-700 mb-4" :class="fontTransform">
		{{ str }}
	</p>
</template>

<style lang="scss" scoped>
	input.t-p:focus {
		border: none;
		outline: none;
	}
</style>
<script>
	export default {
		name: "t-p",
		props: {
			type: {
				required: false,
				type: String,
				default: "",
			},
			value: {
				required: true,
				type: String,
				default: "écrivez ici",
			},
			edit: {
				required: true,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				str: "",
			};
		},
		computed: {
			fontTransform() {
				if (this.type === "bold") return "font-bold";
				else if (this.type === "italic") return "italic";
				return "";
			},
		},
		watch: {
			str(newValue) {
				this.$emit("input", newValue);
			},
		},
		mounted() {
			this.str = this.value;
		},
	};
</script>
