<script setup>
    const props = defineProps(["titleButton", "iconButton","typeButton"]);
</script>

<template>
  <el-button class="button" :icon="iconButton" :native-type="typeButton">
    {{ titleButton }} 
  </el-button>
</template>

<style scoped>
  .button {
    background-color: var(--primary-color);
    color: var(--secundary-color);
    padding: 8px;
    border: none;
    border-radius: 8px;
    width: 295px;
    height: 56px;
    cursor: pointer;
  }
</style>
