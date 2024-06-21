<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref, watch } from 'vue';

// Definindo as propriedades recebidas pelo componente
const props = defineProps(['titleBox', 'modelValue', 'idBox']);
const emit = defineEmits(['update:modelValue']);

// Inicializando o grupo de checkboxes com o valor recebido em modelValue
const checkboxGroup1 = ref(props.modelValue || []);

// Assistindo mudanças no grupo de checkboxes e emitindo o evento de atualização
watch(checkboxGroup1, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  
</template>

<style scoped>
 
</style>
