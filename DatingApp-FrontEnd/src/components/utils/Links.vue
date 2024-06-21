<script setup>
    const props = defineProps(["title"]);

</script>


<template>
    <a class="link" href="#">{{ title }}</a>
</template>

<style scoped>
    .link {
        text-decoration: none;
        margin: 20px;
        color: var(--primary-color);
    }
</style>