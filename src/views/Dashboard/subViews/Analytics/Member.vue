<template>
  <main
    v-if="member.id"
    class="main-view dashboard"
    :class="isSidebarCollapsed ? 'collapsed ' : ''"
  >
    <div class="top-bar flex flex-col">
      <nav-header
        :title="member.firstName + ' ' + member.lastName"
        :can-fav="false"
        :as-team-option="false"
        :users="[member.id]"
        right-cta-title="Inviter"
        :as-setting="false"
      />
      <div class="sub-bar mt-4 sato-l-l font-bold text-greyscale-600">
        <span>Suivi > {{ teamId }} > </span
        ><span class="text-greyscale-800">{{
          member.firstName + " " + member.lastName
        }}</span>
      </div>
      <div class="sub-view-drawer flex-1 mt-6 flex flex-col">
        <div class="top mb-10">
          <camamber-card class="graph" />
          <div class="table h-full flex flex-col">
            <div class="flex flex-col h-full">
              <div class="mb-4 flex justify-between">
                <h4 class="salva-h4 text-greyscale-800">
                  Progression par bloc
                </h4>
                <div class="text-greyscale-600 sato-l-m">
                  <span class="salva-h3 text-greyscale-700 mr-1">{{ 4 }}</span
                  >templates assignés
                </div>
              </div>
              <div class="flex-1 table-container">
                <l-table
                  :headers="progressionTableHeader"
                  :items="member.templates"
                  :showCheckBox="false"
                  options
                >
                  <template #item-progress="{ item }">
                    <l-progress-bar :progress="item.progress" />
                  </template>
                  <template #item-name="{ item }">
                    <div
                      class="text-greyscale-500 sato-l-s font-bold flex items-center"
                    >
                      <i class="icon-tag mr-1"></i>
                      <span class="upper">{{ item.name }}</span>
                    </div>
                  </template>
                  <template #item-teamName="{ item }">
                    <div
                      class="text-greyscale-500 sato-l-s font-bold flex items-center"
                    >
                      <i class="icon-work mr-1"></i
                      ><span class="upper">{{ item.teamName }}</span>
                    </div>
                  </template>
                  <template #item-docs="{ item }">
                    <div class="text-greyscale-500 sato-l-s font-bold">
                      {{ item.docs.length }} documents
                    </div>
                  </template>
                  <!-- <template #options="{ item }">
                                        
                                    </template> -->
                </l-table>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom flex flex-col flex-1">
          <h3 class="salva-h3 text-greyscale-black mb-6">
            Documents du salarié
          </h3>
          <div class="flex-1 table-container">
            <l-table
              :headers="documentTableHeaders"
              :items="member.documents"
              :showCheckBox="false"
              options
            >
              <template #item-name="{ item }">
                <div class="flex items-center">
                  <div
                    class="mr-4 flex items-center justify-center"
                    style="border-radius: 50%; width: 32px; height: 32px"
                    :class="
                      $options.status[item.status].textColor +
                      ' ' +
                      $options.status[item.status].bgColor
                    "
                  >
                    <i
                      :class="
                        item.status === 'good' ? 'icon-check' : 'icon-document'
                      "
                      style="font-size: 16px"
                    ></i>
                  </div>
                  <div class="sato-l-m font-bold">
                    <div class="upper">{{ item.uploadName }}</div>
                    <div
                      v-if="item.status === 'late' || item.status === 'toLate'"
                      :class="$options.status[item.status].textColor"
                      class="sato-l-s"
                    >
                      Assigné il y a {{ formatLastActivity(item.date) }} jours
                    </div>
                  </div>
                </div>
              </template>
              <template #item-teamName="{ item }">
                <div
                  class="text-greyscale-500 sato-l-s font-bold flex items-center"
                >
                  <i class="icon-work mr-1"></i
                  ><span class="upper">{{ item.teamName }}</span>
                </div>
              </template>
              <template #item-templateName="{ item }">
                <div
                  class="text-greyscale-500 sato-l-s font-bold flex items-center"
                >
                  <i class="icon-tag mr-1"></i
                  ><span class="upper">{{ item.templateName }}</span>
                </div>
              </template>
              <template #item-date="{ item }">
                <div
                  class="text-greyscale-500 sato-l-s font-bold flex items-center"
                >
                  <i class="icon-tag mr-1"></i
                  ><span class="upper">{{ formatDate(item.date) }}</span>
                </div>
              </template>
              <template #item-status="{ item }">
                <div
                  class="sato-l-s font-bold"
                  :class="$options.status[item.status].textColor"
                >
                  <i :class="$options.status[item.status].icon" class="mr-1"></i
                  >{{ $options.status[item.status].str }}
                </div>
              </template>
              <!-- <template #options="{ item }"> </template> -->
            </l-table>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.top-bar {
  grid-column: 1/13;
  .stat-bar {
    border-bottom: 1px solid #e5e5e5;
    & > div {
      padding: 12px 24px;

      border-right: 1px solid #e5e5e5;
      &:first-child {
        padding-left: 12px;
      }
      &:last-child {
        padding-right: 12px;
        border-right: none;
      }
    }
  }
  .sub-bar {
    width: 100%;
  }
  .sub-view-drawer {
    .top {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 16px;
      .graph {
        grid-column: 1/5;
        height: 320px;
      }
      .table {
        grid-column: 5/13;
      }
    }
    .bottom {
    }
  }
}
.upper {
  &::first-letter {
    text-transform: uppercase;
  }
}
.table-container {
  position: relative;
  overflow-y: auto;
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>

<script>
import { mapState, mapActions } from "vuex";
import NavHeader from "@/views/Dashboard/Header";
import NavBar from "@/components/lundi-uiKit/NavBar";
import Btn from "@/components/lundi-uiKit/Button";
import StatCard from "@/views/Dashboard/components/Stat-card.vue";
import TemplateCard from "@/views/Dashboard/components/Template-card.vue";
import LTable from "@/components/lundi-uiKit/L-Table.vue";
import { getUserInformation } from "@/lib/utilis.js";
import Avatar from "@/components/lundi-uiKit/avatar/Avatar.vue";
import RoleSelection from "@/views/Dashboard/components/Role-selection.vue";
import GraphCard from "../../components/Stats/Graph-card.vue";
import SimpleStatCard from "../../components/Stats/Simple-stat-card.vue";
import LProgressBar from "@/components/lundi-uiKit/L-porgressBar.vue";
import CamamberCard from "@/views/Dashboard/components/Stats/Camamber-card.vue";

const STATUS = {
  good: {
    icon: "icon-check",
    str: "Validé",
    textColor: "text-semantic-positive-500",
    bgColor: "bg-semantic-positive-100",
  },
  onDoing: {
    icon: "icon-clock",
    str: "En cours",
    textColor: "text-greyscale-500",
    bgColor: "bg-greyscale-200",
  },
  late: {
    icon: "icon-circle-warning",
    str: "En retard",
    textColor: "text-semantic-warning-500",
    bgColor: "bg-semantic-warning-100",
  },
  toLate: {
    icon: "icon-warning",
    str: "Urgent",
    textColor: "text-semantic-negative-500",
    bgColor: "bg-semantic-negative-100",
  },
};

export default {
  name: "DashboardHome",
  components: {
    NavHeader,
    NavBar,
    Btn,
    StatCard,
    TemplateCard,
    LTable,
    Avatar,
    RoleSelection,
    GraphCard,
    SimpleStatCard,
    LProgressBar,
    CamamberCard,
  },
  computed: {
    ...mapState(["isSidebarCollapsed", "compagnie"]),
  },
  data() {
    return {
      subView: "",
      teamId: "",
      member: {},
      onboardingSwitch: "enCours",
      startDate: "2022-01-01",
      endDate: "2022-12-31",
      progressionTableHeader: [
        {
          name: "Progression",
          key: "progress",
          sorted: "true",
        },
        {
          name: "Template",
          key: "name",
          sorted: "false",
        },
        {
          name: "Equipe",
          key: "teamName",
          sorted: "false",
        },
        {
          name: "Documents",
          key: "docs",
          sorted: "false",
        },
      ],
      documentTableHeaders: [
        {
          name: "Document",
          key: "name",
          sorted: "true",
        },
        {
          name: "équipe",
          key: "teamName",
          sorted: "true",
        },
        {
          name: "template",
          key: "templateName",
          sorted: "false",
        },
        {
          name: "Date d'émission",
          key: "date",
          sorted: "true",
        },
        {
          name: "statut",
          key: "status",
          sorted: "true",
        },
      ],
    };
  },
  beforeMount() {
    this.teamId = this.$route.params.teamId;
    this.member = getUserInformation(this.$route.params.id);
    this.$options.status = STATUS;
  },
  methods: {
    ...mapActions(["openDialog"]),
    formatArrivalDate(date) {
      const toDate = new Date(date);
      let day = toDate.getDate();
      let month = toDate.getMonth();
      let year = toDate.getFullYear().toString().slice(2, 4);

      if (day < 10) day = `0${day}`;
      if (month < 10) month = `0${month}`;

      return `${day}/${month}/${year}`;
    },
    formatLastActivity(date) {
      const todayStamp = parseInt(Date.now() / 1000);
      const templateStamp = parseInt(new Date(date).getTime() / 1000);
      return (
        Math.max(parseInt((todayStamp - templateStamp) / 60 / 60 / 24), 1) ||
        "X"
      );
    },
    copyEmail(email) {
      navigator.permissions
        .query({ name: "clipboard-write" })
        .then((result) => {
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(email);
          }
        });
    },
    onboardingSwitchClick(value) {
      this.onboardingSwitch = value;
    },
    formatDate(date) {
      const dateSplit = date.split("-");
      return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
    },
  },
};
</script>
