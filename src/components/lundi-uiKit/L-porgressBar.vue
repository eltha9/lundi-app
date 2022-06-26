<template>
  <div class="l-progress-bar">
    <div v-if="progress !== 100" class="flex items-center">
      <div class="progress sato-l-s text-greyscale-800">{{ progress }}%</div>
      <div class="bar flex-1 flex justify-between">
        <div
          v-if="progress !== 0"
          :style="{ width: `${progress}%` }"
          :class="barColor"
        ></div>
        <div
          v-if="progress !== 100"
          :style="{ width: `${100 - progress}%` }"
          class="bg-greyscale-300"
        ></div>
      </div>
    </div>
    <div v-else class="sato-l-s text-semantic-positive-700 flex items-center">
      Terminé
      <span class="see-check">
        <i class="icon-check"></i>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.l-progress-bar {
  .bar {
    height: 8px;
    gap: 2px;
    margin-left: 16px;
    div {
      height: 100%;
      border-radius: 2px;
    }
  }
  .progress {
    font-weight: bold;
  }
  span.see-check {
    background-color: #c6ebc2;
    margin-left: 14px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 12px;
    }
  }
}
</style>

<script>
export default {
  props: {
    progress: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  computed: {
    barColor() {
      if (this.progress < 33) return "bg-greyscale-600";
      if (this.progress < 88) return "bg-semantic-warning-500";
      return "bg-semantic-positive-500";
    },
  },
};
</script>
