<template>
  <div
    class="graph-card text-greyscale-300 bg-greyscale-white p-6 flex flex-col"
  >
    <h4 class="salva-h4 text-greyscale-800 mb-1">
      Arrivées en cours et à venir
    </h4>
    <div class="flex justify-between text-greyscale-600 sato-l-m">
      <span>sur la période</span>
      <span>Aucun onboarding en cours</span>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <img src="@/assets/Graph.png" class="h-100" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.graph-card {
  border: 1px solid;
  border-radius: 12px;
}
</style>

<script>
export default {};
</script>
