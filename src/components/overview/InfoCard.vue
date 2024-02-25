<template>
    <div class="h-36 flex justify-center items-center dark:bg-zinc-900">
        <h1 class="text-2xl font-semibold">{{ text }}</h1>
    </div>
</template>

<script>
export default {
    name: "InfoCard",
    props: {
        text: {
            type: String
        }
    }
};
</script>
