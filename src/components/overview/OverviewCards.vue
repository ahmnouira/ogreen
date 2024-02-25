<template>
    <div class="my-8">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="item in items">
                <InfoCard :text="item" />
            </div>
        </div>
    </div>
</template>
<script>
import InfoCard from './InfoCard.vue';

export default {
    name: "OverviewCards",
    components: { InfoCard },
    data() {
        return {
            items: [
                'Ethereum',
                'Bitcoin',
                'Ethereum',
                'Bitcoin',
                'Ethereum',
                'Bitcoin',
                'Ethereum',
                'Bitcoin',
            ]
        }
    }
};
</script>

