<template>
  <main
    class="main-view dashboard"
    :class="isSidebarCollapsed ? 'collapsed ' : ''"
  >
    <div class="top-bar">
      <nav-header
        title="Home"
        :can-fav="false"
        :as-team-option="false"
        right-cta-title="Inviter"
      />
      <div class="stat-bar mt-6">some stats</div>
      <div class="sub-bar flex justify-between mt-10">
        <nav-bar v-model="subView" :items="['Templates', 'Membres']" />
        <btn ternary>
          Créer un template
          <template #right>
            <i class="icon-arrow-right"></i>
          </template>
        </btn>
      </div>
    </div>
    <div>plop</div>
  </main>
</template>

<style lang="scss" scoped>
.top-bar {
  grid-column: 1/13;
  .sub-bar {
  }
}
</style>

<script>
import { mapState } from "vuex";
import NavHeader from "@/views/Dashboard/Header";
import NavBar from "@/components/lundi-uiKit/NavBar";
import Btn from "@/components/lundi-uiKit/Button";
export default {
  name: "DashboardHome",
  components: {
    NavHeader,
    NavBar,
    Btn,
  },
  computed: {
    ...mapState(["isSidebarCollapsed"]),
  },
  data() {
    return {
      subView: "",
    };
  },
};
</script>
