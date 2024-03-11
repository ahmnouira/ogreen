<script setup>
import MarketPerformancePanel from "./MarketPerformancePanel.vue";
import OverviewCards from "./OverviewCards.vue";
import OverviewHeader from "./OverviewHeader.vue";
import OverviewInfo from "./OverviewInfo.vue";
import Log from "./terminal/Log.vue";
</script>

<template>
  <OverviewHeader />
  <!-- <OverviewInfo /> -->
  <div class="my-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <OverviewCards />
      <MarketPerformancePanel />
    </div>
  </div>
  <Log />
</template>
