<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const checkboxGroup1 = ref(props.modelValue);

watch(checkboxGroup1, (newValue) => {
  emit('update:modelValue', newValue);
});

const checkData = ref([
  { titleBox: 'Photography' }, { titleBox: 'Karaoke' },
  { titleBox: 'Cooking' }, { titleBox: 'Run' },
  { titleBox: 'Art' }, { titleBox: 'Extreme' },
  { titleBox: 'Drink' }, { titleBox: 'Shopping' },
  { titleBox: 'Yoga' }, { titleBox: 'Tennis' },
  { titleBox: 'Swimming' }, { titleBox: 'Traveling' },
  { titleBox: 'Music' }, { titleBox: 'Video games' }
]);
</script>

<template>
  <div class="container">
    <div class="text-container">
      <div class="title-container">
        <h1 class="title">Your interests</h1>
      </div>

      <p>
        Select a few of your interests and let everyone know what you're passionate about.
      </p>
    </div>

    <div class="interests-container">
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="checks in checkData" :key="checks.titleBox" :label="checks.titleBox">
          {{ checks.titleBox }}
        </el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<style scoped>
.interests-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 71vh;
}

.container {
  margin: auto;
  padding: 20px;
  width: 80%;
}

.el-checkbox-button > *, .el-checkbox-button {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 150px;
}

.el-checkbox-button {
  height: 20px;
}
</style>