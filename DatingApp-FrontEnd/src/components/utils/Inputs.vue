<script setup>
  import { ref, watchEffect } from 'vue';
  const props = defineProps(['titleInput', 'modelValue', 'idInput', 'nativeType', 'type']);
  const emit = defineEmits(['update:modelValue']);

  const inputValue = ref(props.modelValue);
  watchEffect(() => {
    inputValue.value = props.modelValue;
  });

  watchEffect(() => {
    emit('update:modelValue', inputValue.value);
  });
</script>

<template>
  <div class="input">
    <label :for="idInput">{{ titleInput }}</label>
    <el-input
      :placeholder="titleInput"
      v-model="inputValue"
      :id="idInput"
      :native-type="nativeType"
      :type="type"
      class="input"
      clearable>
    </el-input>
  </div>
</template>

<style scoped>
.input{
  text-align: start;
  display: flex;
  flex-direction: column;
}

.input {
  width: 290px;
}
</style>
