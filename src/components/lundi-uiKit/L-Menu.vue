<template>
  <div class="l-menu">
    <div @click="toggleMenu()" ref="activator">
      <slot>activator</slot>
    </div>
    <div
      class="l-menu-container bg-greyscale-white p-6"
      ref="menu"
      style="box-shadow: 0px 4px 24px rgba(25, 25, 25, 0.1)"
      :style="style"
      v-click-outside="closeMenu"
    >
      <slot v-if="showMenu" name="menu">menu</slot>
    </div>
  </div>
</template>

<style lang="scss">
.l-menu-container {
  border-radius: 12px;
}
</style>
<script>
export default {
  name: "LMenu",
  props: {
    bottom: {
      required: false,
      type: Boolean,
      default: false,
    },
    top: {
      required: false,
      type: Boolean,
      default: false,
    },
    left: {
      required: false,
      type: Boolean,
      default: false,
    },
    right: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
      activatorPosition: {},
      APP: null,
      tempNode: null,
      menuNode: null,
      W: { x: 0, y: 0 },
      temp: false,
    };
  },
  computed: {
    offsetY() {
      return "50%";
    },
    offsetX() {
      return "50%";
    },
    position() {
      return {
        top: `${this.activatorPosition.y + this.activatorPosition.height}px`,
        left: `${this.activatorPosition.x}px`,
      };
    },
    style() {
      return {
        position: "absolute",
        ...this.position,
      };
    },
  },
  watch: {
    showMenu(newValue) {
      if (newValue) {
        this.tempNode = this.APP.appendChild(this.menuNode);
      } else {
        this.tempNode.remove();
      }
    },
  },
  mounted() {
    this.activatorPosition = this.$refs.activator.getBoundingClientRect();
    this.APP = document.querySelector("#app");
    this.menuNode = this.$refs.menu;
    this.$refs.menu.remove();
    document.addEventListener("resize", () => {
      this.activatorPosition = this.$refs.activator?.getBoundingClientRect();
      this.W.y = window.innerHeight;
      this.W.x = window.innerWidth;
    });
    document.addEventListener("wheel", () => {
      this.temp = false;
      this.showMenu = false;
    });
  },
  beforeDestroy() {
    this.tempNode?.remove();
    this.temp = false;
    this.showMenu = false;
  },
  methods: {
    toggleMenu() {
      this.activatorPosition = this.$refs.activator?.getBoundingClientRect();
      this.showMenu = !this.showMenu;

      setTimeout(() => {
        this.temp = true;
      }, 200);
    },
    closeMenu() {
      if (this.temp) {
        this.temp = false;
        this.showMenu = false;
      }
    },
  },
};
</script>
