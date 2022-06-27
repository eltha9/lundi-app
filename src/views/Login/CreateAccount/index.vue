<template>
  <div class="main-view create-compagnie">
    <div class="timeliner">
      <img
        src="@/../public/assets/lundi.svg"
        class="mt-8 mb-12 h-10"
        alt="Lundi logo"
      />
      <div class="flex justify-center mb-16" v-show="timeLineStep !== 5">
        <time-line :to-show="timeLineStep" :steps="steps" />
      </div>
      <div class="step-container">
        <step-1 v-if="timeLineStep === 1" v-model="createData.customisation" />
        <step-2 v-if="timeLineStep === 2" />
        <step-3 v-if="timeLineStep === 3" />
        <step-4 v-if="timeLineStep === 4" />
      </div>
    </div>
    <complete v-if="timeLineStep === 5" />
  </div>
</template>

<style lang="scss" scoped>
.create-compagnie {
  position: relative;
  .timeliner {
    height: fit-content;
    grid-column: 1/13;
  }
  .step-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
  }
}
</style>
<script>
import TimeLine from "@/components/lundi-uiKit/TimeLine.vue";
import Step1 from "./Step-1.vue";
import Step2 from "./Step-2.vue";
import Step3 from "./Step-3.vue";
import Step4 from "./Step-4.vue";
import Complete from "./Complete.vue";
import { mapState } from "vuex";
export default {
  components: {
    TimeLine,
    Step1,
    Step2,
    Step3,
    Step4,
    Complete,
  },
  data() {
    return {
      steps: [true, true, true, true],
      createData: {
        customisation: {
          compagnieName: "",
          logo: null,
        },
        compagnie: {
          sector: "",
          size: "",
        },
        teams: {
          name: "",
          tags: [],
        },
        invitation: {
          mails: [],
        },
      },
    };
  },
  computed: {
    ...mapState(["timeLineStep"]),
  },
};
</script>
