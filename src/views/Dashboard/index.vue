<template>
  <div class="flex dash-container">
    <div class="left-bar">
      <sidebar />
    </div>
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dash-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .left-bar {
    padding: 8px 0 8px 8px;
  }
}
</style>

<script>
import Sidebar from "./Sidebar";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
};
</script>
