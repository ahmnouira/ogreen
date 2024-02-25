<template>
    <div class="grid grid-cols-2 gap-4 grid-template">
        <div>
            <div class="grid grid-cols-2 gap-4">
                <InfoCard :text="'Bitcoin'" />
                <InfoCard :text="'Ethereum'" />
            </div>
            <div class="mt-4">
                <InfoCard />
            </div>
        </div>
        <InfoCardRight />
    </div>
</template>
<script>
import InfoCard from './InfoCard.vue';
import InfoCardRight from './InfoCardRight.vue';

export default {
    name: "OverviewInfo",
    components: { InfoCardRight, InfoCard }
};
</script>

<style scoped>
.grid-template {
    grid-template-columns: 1fr 33%;
}
</style>
