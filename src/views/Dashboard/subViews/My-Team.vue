<template>
  <main
    v-if="myTeam.id"
    class="main-view dashboard"
    :class="isSidebarCollapsed ? 'collapsed ' : ''"
  >
    <div class="l-container">
      <div class="top flex justify-between mb-10">
        <h1 class="salva-h1 font-bold text-greyscale-black">
          {{ myTeam.name }}
        </h1>
        <div class="sato-l-m text-greyscale-600">
          <span class="salva-h3 text-greyscale-700 mr-1">{{
            myTeam.members.length
          }}</span>
          Membres
        </div>
      </div>
      <div class="team-container">
        <employee-card
          v-for="(member, i) in myTeam.members"
          :user-id="member.id"
          :key="member.id + i"
          :position="i + 1"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.l-container {
  grid-column: 1/13;
  .team-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    row-gap: 16px;
  }
}
</style>

<script>
import { mapState } from "vuex";
import { getMyTeam } from "@/lib/utilis.js";
import EmployeeCard from "../components/Employee-card.vue";
export default {
  components: {
    EmployeeCard,
  },
  data() {
    return {
      myTeam: {},
    };
  },
  computed: {
    ...mapState(["isSidebarCollapsed", "JWT"]),
  },
  async beforeMount() {
    this.myTeam = await getMyTeam(this.JWT);
    console.log(JSON.parse(JSON.stringify(this.myTeam)));
  },
};
</script>
