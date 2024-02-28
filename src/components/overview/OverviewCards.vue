<script setup>
import InfoCard from './InfoCard.vue';
const items = [
    'Ethereum',
    'Bitcoin',
    'Ethereum',
    'Bitcoin',
    'Ethereum',
    'Bitcoin',
    'Ethereum',
    'Bitcoin',
]
</script>

<template>
    <div class="my-8">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="item in items">
                <InfoCard :text="item" />
            </div>
        </div>
    </div>
</template>


