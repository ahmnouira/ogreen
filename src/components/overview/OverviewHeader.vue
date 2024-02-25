<template>
    <div class="mb-4">
        <div class="flex justify-between">
            <h1 class="text-2xl font-semibold">Overview</h1>
            <IButton />
        </div>
        <Divider />
    </div>
</template>
<script>
import IButton from '../IButton.vue';
import Divider from '../shared/Divider.vue';

export default {
    name: "OverviewHeader",
    components: { IButton, Divider }
};
</script>

