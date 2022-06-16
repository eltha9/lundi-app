<template>
  <div class="template-card">
    <div class="top-card">
      <div class="info">
        <div class="status"></div>
        <h4>{{ infos.name }}</h4>
      </div>
      <btn icon ternary><i class="icon-options-vertical"></i></btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.template-card {
}
</style>

<script>
import Btn from "@/components/lundi-uiKit/Button.vue"
import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack.vue"
import {TEMPLATE_STATUS} from "@/lib/config.js"
export default {
	components:{
		Btn,
		AvatarStack
	},
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
	},
	mounted(){
		this.$options.STATUS = TEMPLATE_STATUS
	}
};
</script>
