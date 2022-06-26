<template>
  <div
    class="employee-template-card text-greyscale-200 bg-greyscale-white p-5"
    :style="{ gridColumn: `${enhancedPosition.start}/${enhancedPosition.end}` }"
  >
    <div class="top-card flex justify-between mb-12">
      <div class="info">
        <h4 class="salva-h4 text-greyscale-800 mb-2 capitalize">
          {{ template.name }}
        </h4>
        <div class="date text-greyscale-500 sato-l-m">
          <i class="icon-update mr-1"></i>
          <span>{{ lastUpdate }} jours</span>
        </div>
      </div>
    </div>
    <div class="bottom-card flex justify-between items-center">
      <l-progress-bar :progress="template.progress" class="flex-1" />
      <div
        class="flex items-center font-bold text-greyscale-500 sato-l-s ml-24"
      >
        <i class="icon-work mr-1"></i>
        <span class="capitalize">{{ template.teamName }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.employee-template-card {
  border: 1px solid;
  border-radius: 8px;
  grid-column: 1/5;
  .top-card {
    .info {
      .team-name {
        i {
          // font-size: 16px;
        }
      }
    }
    i.icon-work {
      font-size: 16px;
    }
  }
}
</style>

<script>
import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack.vue";
import LProgressBar from "@/components/lundi-uiKit/L-porgressBar.vue";
export default {
  components: {
    AvatarStack,
    LProgressBar,
  },
  props: {
    template: {
      required: true,
      type: Object,
      default: () => ({
        id: "",
        name: "",
        lastUpdate: "",
        progress: 0,
        teamName: "",
      }),
    },
    position: {
      required: false,
      type: Number,
      default: 1,
    },
  },
  computed: {
    lastUpdate() {
      const todayStamp = parseInt(Date.now() / 1000);
      const templateStamp = parseInt(
        new Date(this.template.lastUpdate).getTime() / 1000
      );
      return (
        Math.max(parseInt((todayStamp - templateStamp) / 60 / 60 / 24), 1) ||
        "X"
      );
    },
    enhancedPosition() {
      switch (this.position % 3) {
        case 1:
          return { start: 1, end: 5 };
        case 2:
          return { start: 5, end: 9 };
        case 0:
          return { start: 9, end: 13 };
        default:
          return { start: 1, end: 5 };
      }
    },
  },
};
</script>
