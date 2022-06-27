<template>
	<p class="t-h text-greyscale-700 mb-4" :contenteditable="edit" :class="fontClass">
		{{ str }}
	</p>
</template>

<style lang="scss" scoped></style>
<script>
	export default {
		name: 't-h',
		props: {
			type: {
				required: true,
				type: String,
				default: 'h2',
			},
			value: {
				required: true,
				type: String,
				default: 'écrivez ici',
			},
			edit: {
				required: true,
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				str: '',
			};
		},
		computed: {
			fontClass() {
				switch (this.type) {
					case 'h1':
						return 'salva-d-l text-greyscale-black mb-10';
					case 'h2':
						return 'salva-h1 text-greyscale-black mb-6 font-bold';
					case 'h3':
						return 'salva-h2 text-greyscale-black mb-6 font-bold';
					case 'h4':
						return 'salva-h3 text-greyscale-black mb-6';
				}
				return '';
			},
		},
		watch: {
			str(newValue) {
				this.$emit('input', newValue);
			},
		},
		mounted() {
			this.str = this.value;
		},
	};
</script>
