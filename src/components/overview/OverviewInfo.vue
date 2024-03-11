<script setup>
import InfoCard from "./InfoCard.vue";
import InfoCardRight from "./InfoCardRight.vue";
import MarketPerformancePanel from "./MarketPerformancePanel.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-4 grid-template">
    <div>
      <div class="grid grid-cols-2 gap-4">
        <InfoCard :text="'Bitcoin'" />
        <InfoCard :text="'Ethereum'" />
      </div>
      <div class="mt-4">
        <MarketPerformancePanel />
      </div>
    </div>
    <MarketPerformancePanel />
  </div>
</template>

<style scoped>
.grid-template {
  grid-template-columns: 1fr 33%;
}
</style>
