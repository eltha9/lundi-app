<template>
	<div v-if="type === 'text'" class="l-input">
		<input type="text" />
	</div>
	<div v-else-if="type === 'phone'" class="l-input">
		<input type="text" />
	</div>
	<div v-else-if="type === 'password'" class="l-input">
		<input type="text" />
	</div>
	<div v-else-if="type === 'select'" class="l-input">
		<input type="text" />
	</div>
	<div v-else class="l-input">an error occuried</div>
</template>
<style lang="scss" scoped>
	.l-input {
	}
</style>

<script>
	export default {
		name: 'l-nnput',
		props: {
			type: {
				require: true,
				type: String,
				default: 'text',
			},
		},
		data() {
			re;
		},
	};
</script>
