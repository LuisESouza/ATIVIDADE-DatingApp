<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const radio1 = ref(props.modelValue);

watch(radio1, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <div class="container">
    <div class="title-container">
      <h1 class="title">I am a</h1>
    </div>

    <form class="form-container">
      <div class="radio-group">
        <el-radio-group v-model="radio1" class="radio-group">
          <el-radio-button class="btn-radio" label="Man" />
          <el-radio-button class="btn-radio" label="Woman" />
          <el-radio-button class="btn-radio" label="Other" />
        </el-radio-group>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  padding: 20px;
  width: 80%;
}
.title-container {
  margin-top: 50px;
}
.title {
  font-size: 50px;
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 80px;
  height: 58vh;
  justify-content: space-between;
}
.radio-group {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.el-radio-button > * {
  width: 20rem;
  padding: 25px;
  border: 1px solid gray;
}
</style>