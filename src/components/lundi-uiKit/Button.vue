<template>
  <button class="btn" :style="variables">
    <slot name="left"> </slot>
    <slot> Btn text </slot>
    <slot name="right"> </slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  &.icon {
    border-radius: 100%;
  }
  box-sizing: border-box;
  @apply var(--bg-500);
  @apply text-greyscale-white;
  //   events
  &:hover {
    @apply var(--bg-700);
  }
  &:focus {
    border: 1px solid;
    @apply var(--text-300);
  }
  &:active {
  }
  &:disabled {
    @apply bg-greyscale-200 text-greyscale-400;
    @apply var(--bg-700);
  }
}
</style>

<script>
// import Icon from "./Icon";
export default {
  name: "Btn",
  //   components:{Icon},
  props: {
    icon: {
      type: Boolean,
      require: false,
      default: false,
    },
    primary: {
      type: Boolean,
      require: false,
      default: true,
    },
    color: {
      type: String,
      require: false,
      default: "primary",
    },
  },
  computed: {
    variables() {
      return {
        "--bg-500": `bg-${this.color}-500`,
        "--text-300": `text-${this.color}-300`,
        "--bg-700": `bg-${this.color}-700`,
      };
    },
  },
};
</script>
