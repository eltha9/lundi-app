<template>
  <div class="template-card">
    <div class="top-card">
      <div class="info">
        <div class="status"></div>
        <h4></h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.template-card {
}
</style>

<script>
export default {
	props:{
		infos:{
			require: true,
			type: Object,
			default: ()=>{
				name:"",
				status:""
				lastUpdate:"",
				tags:[],
				users:[]
			}
		}
	}
};
</script>
